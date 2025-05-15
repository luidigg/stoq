import { Button, SideBar } from './style'
import { 
    UilEstate,      // Casa para Início
    UilBox,         // Estoque
    UilChartBar,    // Relatórios
    UilUsersAlt,    // Colaboradores
    UilUser,        // Meu Perfil
    UilSetting      // Configurações
  } from '@iconscout/react-unicons'
import { useNavigate } from 'react-router-dom'

function Sidebar() {
    
    const navigate = useNavigate()

    return (
        <>
            <SideBar>
                <Button onClick={() => navigate('/inicio')}><UilEstate size="30px"/>Início</Button>
                <Button onClick={() => navigate('/estoque')}><UilBox size="30px"/>Estoque</Button>
                <Button onClick={()=> navigate('/relatorio')}><UilChartBar size="30px"/>Relatórios</Button>
                <Button onClick={()=> navigate('/colaboradores')}><UilUsersAlt size="30px"/>Colaboradores</Button>
                <Button onClick={()=> navigate('/meu-perfil')}><UilUser size="30px"/>Meu Perfil</Button>
                <Button onClick={()=> navigate('/configuracoes')}><UilSetting size="30px"/>Configurações</Button>
            </SideBar>
        </>
    )
}

export default Sidebar