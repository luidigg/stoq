import { Head, Container, Logo, UserBlock, Username, LogoutButton, CenterText } from './header.styles';
import logoImg from '../../assets/stoq-icon-2.png';

function Header() {
  const userName = 'João Carlos';

  return (
    <Head>
      <Container>
        <Logo src={logoImg} alt="Logo" />
        <CenterText>Controle de Estoque</CenterText>
        <UserBlock>
          <Username>{userName}</Username>
          <LogoutButton onClick={() => console.log('Logout')}>Sair</LogoutButton>
        </UserBlock>
      </Container>
    </Head>
  );
}

export default Header;
