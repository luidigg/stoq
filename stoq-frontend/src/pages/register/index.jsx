import {
  Form, Input, DivTexts, DivInputs, H2, P,
  ButtonRegister, IconUser, IconPass, IconEmail, Container,
  DivII, ImgTop, ImgBottom, ImgVetor, ButtonLogin
} from './style'
import circle from '../../assets/circulo.png'
import elipse from '../../assets/elipse.png'
import vetor from '../../assets/vetor.png'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { register } from '../../services/authService';

function Register() {
  const navigate = useNavigate();

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [cargoId, setCargoId] = useState(2);
  const [error, setError] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const result = await register({ nome, email, senha, cargoId });

      if (result.sucesso) {
        alert(result.mensagem);
        navigate('/login');
      } else {
        setError(result.mensagem);
      }
    } catch (err) {
      setError(err);
    }
  };

  return (
    <Container>

      <ImgTop> <img src={circle} alt="circle" /> </ImgTop>
      <ImgBottom> <img src={elipse} alt="elipse" /> </ImgBottom>
      <ImgVetor> <img src={vetor} alt="vetor" /> </ImgVetor>

      <Form onSubmit={handleRegister}>

        <DivTexts>
          <H2>Registro</H2>
          <P>Preencha seu nome, e-mail e crie uma senha</P>
          <P style={{ fontWeight: '400' }}>
            Sua solicitação de cadastro será enviada ao administrador do sistema para aprovação
          </P>
        </DivTexts>

        <DivInputs>

          <DivII>
            <IconUser size="28" />
            <Input
              type="text"
              placeholder="Nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
          </DivII>

          <DivII>
            <IconEmail size="28" />
            <Input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </DivII>

          <DivII>
            <IconPass size="28" />
            <Input
              type="password"
              placeholder="Senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
            />
          </DivII>

          <DivII>
            <IconPass size="28" />
            <Input
              type="password"
              placeholder="Confirme sua senha"
            />
          </DivII>

        </DivInputs>

        {error && <p style={{ color: 'red' }}>{error}</p>}

        <ButtonRegister type="submit">Enviar Solicitação</ButtonRegister>

        <P>
          Já possui cadastro? <ButtonLogin onClick={() => navigate('/login')}>Entre!</ButtonLogin>
        </P>

      </Form>
    </Container>
  )
}

export default Register
