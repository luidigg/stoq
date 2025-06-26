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
  MainContent,
  TableContainer
} from './style';

function Administracao() {
  // Estados do formulário
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmSenha, setConfirmSenha] = useState('');

  // Estados de feedback
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  // Estado de logs
  const [logs, setLogs] = useState([]);

  // Carregar logs ao montar
  useEffect(() => {
    document.title = 'Administração';
    fetchLogs();
  }, []);

  // Buscar logs do sistema
  const fetchLogs = async () => {
    try {
      const res = await axios.get('/api/log', { withCredentials: true });
      setLogs(res.data);
    } catch (err) {
      console.error('Erro ao buscar logs:', err);
    }
  };

  // Registrar novo usuário
  const handleRegister = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (!nome || !email || !senha || !confirmSenha) {
      setError('Preencha todos os campos obrigatórios.');
      return;
    }

    if (senha !== confirmSenha) {
      setError('As senhas não coincidem.');
      return;
    }

    try {
      await axios.post(
        '/api/auth/register',
        { nome, email, senha },
        { withCredentials: true }
      );

      setSuccess('Usuário registrado com sucesso!');
      setNome('');
      setEmail('');
      setSenha('');
      setConfirmSenha('');
      fetchLogs(); // Atualiza os logs
    } catch (err) {
      setError(err.response?.data?.mensagem || 'Erro ao registrar usuário.');
    }
  };

  return (
    <Layout>
      <Main>
        <H2>Administração</H2>

        <MainContent>
          {/* Logs do sistema */}
          <SectionLogs>
            <h2>Logs do Sistema</h2>
            <TableContainer>
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
                      <Td colSpan={4} style={{ textAlign: 'center' }}>
                        Nenhum log encontrado.
                      </Td>
                    </Tr>
                  ) : (
                    logs.map((log) => (
                      <Tr key={log.id}>
                        <Td>{new Date(log.dataHora).toLocaleString('pt-BR')}</Td>
                        <Td>{log.acao}</Td>
                        <Td>{log.usuarioNome}</Td>
                        <Td>{log.detalhes}</Td>
                      </Tr>
                    ))
                  )}
                </Tbody>
              </Table>
            </TableContainer>
          </SectionLogs>

          {/* Formulário de cadastro */}
          <SectionForm>
            <Form onSubmit={handleRegister}>
              <DivTexts>
                <h2>Registrar Novo Usuário</h2>
                <p>Preencha todos os dados para criação de um novo usuário</p>
              </DivTexts>

              <DivInputs>
                <DivII>
                  <IconUser size="28" />
                  <Input
                    type="text"
                    placeholder="Nome completo*"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    required
                  />
                </DivII>

                <DivII>
                  <IconEmail size="28" />
                  <Input
                    type="text"
                    placeholder="Email/Usuário*"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </DivII>

                <DivII>
                  <IconPass size="28" />
                  <Input
                    type="password"
                    placeholder="Senha*"
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
                    required
                  />
                </DivII>

                <DivII>
                  <IconPass size="28" />
                  <Input
                    type="password"
                    placeholder="Confirmar senha*"
                    value={confirmSenha}
                    onChange={(e) => setConfirmSenha(e.target.value)}
                    required
                  />
                </DivII>
              </DivInputs>

              {error && <ErrorMessage>{error}</ErrorMessage>}
              {success && <p style={{ color: 'green' }}>{success}</p>}

              <ButtonRegister type="submit">Registrar</ButtonRegister>
            </Form>
          </SectionForm>
        </MainContent>
      </Main>
    </Layout>
  );
}

export default Administracao;