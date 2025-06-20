import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import {
  Head,
  Container,
  Logo,
  UserBlock,
  Username,
  LogoutButton,
  CenterText,
} from './header.styles';
import logoImg from '../../assets/stoq-icon-2.png';

function Header() {
  const [userName, setUserName] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get('/api/auth/get-user', { withCredentials: true });
        setUserName(response.data.name);
      } catch (error) {
        console.error('Erro ao buscar dados do usuário:', error);
      }
    };

    fetchUser();
  }, []);

  const handleLogout = async () => {
    try {
      await axios.post('/api/auth/logout', {}, { withCredentials: true });
      navigate('/login');
    } catch (error) {
      console.error('Erro ao fazer logout:', error);
    }
  };

  return (
    <Head>
      <Container>
        <Logo src={logoImg} alt="Logo" />
        <CenterText>Controle de Estoque</CenterText>
        <UserBlock>
          <Username>{userName}</Username>
          <LogoutButton onClick={handleLogout}>Sair</LogoutButton>
        </UserBlock>
      </Container>
    </Head>
  );
}

export default Header;