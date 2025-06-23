import {
  Container, Form, DivTexts, H2, P, DivInput, Input, ButtonEntrar, ButtonRegister,
  IconEmail, IconPass, DivII, ImgTop, ImgBottom, ImgVetor
} from './style';

import circle from '../../assets/circulo.png';
import elipse from '../../assets/elipse.png';
import vetor from '../../assets/vetor.png';

import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../../services/auth-service';
import { FaSpinner } from 'react-icons/fa';

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const texts = {
    title: 'Entrar',
    description: 'Insira seu email ou usuário e sua senha para entrar',
    placeholderEmail: 'Email ou Usuário',
    placeholderSenha: 'Senha',
    buttonEntrar: 'Entrar',
    questionRegister: 'Ainda não possui cadastro?',
    buttonRegister: 'Registre-se',
  };

  useEffect(() => {
    document.title = 'Login';
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      await login(email, senha);
      navigate('/inicio');
    } catch (err) {
      setError(err.toString());
    } finally {
      setLoading(false);
    }
  };

  const renderInput = (type, placeholder, value, onChange, Icon) => (
    <DivII>
      <Icon size="28" />
      <Input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required
      />
    </DivII>
  );

  return (
    <Container>
      <ImgTop><img src={circle} alt="circle" /></ImgTop>
      <ImgBottom><img src={elipse} alt="elipse" /></ImgBottom>
      <ImgVetor><img src={vetor} alt="vetor" /></ImgVetor>

      <Form onSubmit={handleLogin}>
        <DivTexts>
          <H2>{texts.title}</H2>
          <P>{texts.description}</P>
        </DivTexts>

        <DivInput>
          {renderInput('text', texts.placeholderEmail, email, e => setEmail(e.target.value), IconEmail)}
          {renderInput('password', texts.placeholderSenha, senha, e => setSenha(e.target.value), IconPass)}
        </DivInput>

        {error && <P style={{ color: 'red' }}>{error}</P>}

        <ButtonEntrar type="submit" disabled={loading}>
          {loading ? <FaSpinner className="spinner" /> : texts.buttonEntrar}
        </ButtonEntrar>

        <P>
          {texts.questionRegister}{' '}
          <ButtonRegister onClick={() => navigate('/')}>{texts.buttonRegister}</ButtonRegister>
        </P>
      </Form>

      <style>
        {`
          .spinner {
            animation: spin 1s linear infinite;
          }
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
      </style>
    </Container>
  );
}

export default Login;