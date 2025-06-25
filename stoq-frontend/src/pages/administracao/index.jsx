import { useState, useEffect } from 'react';
import axios from 'axios';
import Layout from '../../components/layout/indexL';


import {
  SectionLogs,
  SectionForm,
  H2,
  P,
  Form,
  DivTexts,
  DivInputs,
  DivII,
  Input,
  ButtonRegister,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  ErrorMessage,
  IconUser,
  IconEmail,
  IconPass,
  Main,
  MainContent
} from './style';

function Administracao() {
  const [logs, setLogs] = useState([]);
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmSenha, setConfirmSenha] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const texts = {
    title: 'Registrar Novo Usuário',
    subtitle: 'Preencha todos os dados para criação de um novo usuário',
    placeholderName: 'Nome completo*',
    placeholderEmail: 'Email*',
    placeholderPassword: 'Senha*',
    placeholderConfirmPassword: 'Confirmar senha*',
    buttonSubmit: 'Registrar',
  };

  useEffect(() => {
    document.title = 'Administração';
    fetchLogs();
  }, []);

  const fetchLogs = async () => {
    try {
      const res = await axios.get('/api/logs', { withCredentials: true });
      setLogs(res.data);
    } catch (err) {
      console.error('Erro ao buscar logs:', err);
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (senha !== confirmSenha) {
      setError('As senhas não coincidem.');
      return;
    }

    if (!nome || !email || !senha) {
      setError('Preencha todos os campos obrigatórios.');
      return;
    }

    try {
      await axios.post('/api/user-register', { nome, email, senha }, { withCredentials: true });
      setSuccess('Usuário registrado com sucesso!');
      setNome('');
      setEmail('');
      setSenha('');
      setConfirmSenha('');
      fetchLogs(); // Atualiza os logs após registro
    } catch (err) {
      setError(err.response?.data?.mensagem || 'Erro ao registrar usuário.');
    }
  };

  return (
    <Layout>
      <Main>
        <H2>Administração</H2>

        <MainContent>
          <SectionLogs>
            <H2>Logs do Sistema</H2>
            <Table>
              <Thead>
                <Tr>
                  <Th>Data</Th>
                  <Th>Ação</Th>
                  <Th>Usuário</Th>
                  <Th>Descrição</Th>
                </Tr>
              </Thead>
              <Tbody>
                {logs.length === 0 ? (
                  <Tr>
                    <Td colSpan={4} style={{ textAlign: 'center' }}>Nenhum log encontrado.</Td>
                  </Tr>
                ) : (
                  logs.map(log => (
                    <Tr key={log.id}>
                      <Td>{new Date(log.data).toLocaleString('pt-BR')}</Td>
                      <Td>{log.acao}</Td>
                      <Td>{log.usuarioNome || log.usuarioId}</Td>
                      <Td>{log.descricao}</Td>
                    </Tr>
                  ))
                )}
              </Tbody>
            </Table>
          </SectionLogs>

          <SectionForm>
            <Form onSubmit={handleRegister}>
              <DivTexts>
                <H2>{texts.title}</H2>
                <P>{texts.subtitle}</P>
              </DivTexts>

              <DivInputs>
                <DivII>
                  <IconUser size="28" />
                  <Input
                    type="text"
                    placeholder={texts.placeholderName}
                    value={nome}
                    onChange={e => setNome(e.target.value)}
                    required
                  />
                </DivII>

                <DivII>
                  <IconEmail size="28" />
                  <Input
                    type="email"
                    placeholder={texts.placeholderEmail}
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    required
                  />
                </DivII>

                <DivII>
                  <IconPass size="28" />
                  <Input
                    type="password"
                    placeholder={texts.placeholderPassword}
                    value={senha}
                    onChange={e => setSenha(e.target.value)}
                    required
                  />
                </DivII>

                <DivII>
                  <IconPass size="28" />
                  <Input
                    type="password"
                    placeholder={texts.placeholderConfirmPassword}
                    value={confirmSenha}
                    onChange={e => setConfirmSenha(e.target.value)}
                    required
                  />
                </DivII>
              </DivInputs>

              {error && <ErrorMessage>{error}</ErrorMessage>}
              {success && <p style={{ color: 'green' }}>{success}</p>}

              <ButtonRegister type="submit">{texts.buttonSubmit}</ButtonRegister>
            </Form>
          </SectionForm>
        </MainContent>
      </Main>
    </Layout>
  );
}

export default Administracao;