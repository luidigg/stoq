import { Button, SideBar } from './sidebar.styles';
import { UilEstate, UilBox, UilChartBar, UilUser, UilSetting } from '@iconscout/react-unicons';
import { useNavigate } from 'react-router-dom';

function Sidebar({ isOpen }) {
  const navigate = useNavigate();

  return (
    <SideBar isOpen={ isOpen }>
      <Button onClick={() => navigate('/inicio')}>
        <UilEstate size="30px" /> Início
      </Button>
      <Button onClick={() => navigate('/estoque')}>
        <UilBox size="30px" /> Estoque
      </Button>
      <Button onClick={() => navigate('/relatorio')}>
        <UilChartBar size="30px" /> Relatórios
      </Button>
      <Button onClick={() => navigate('/meu-perfil')}>
        <UilUser size="30px" /> Meu Perfil
      </Button>
      <Button onClick={() => navigate('/administracao')}>
        <UilSetting size="30px" /> Administração
      </Button>
    </SideBar>
  );
}

export default Sidebar;
