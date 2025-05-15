import Header from "../../components/header"
import Sidebar from "../../components/sidebar"
import {Container,Main,Content } from './style'

function Perfil() {
    const title = document.querySelector('title')
    title.innerHTML = 'Meu Perfil'

    return (
        <>
        <Container>
            <Header/>
            <Content>
                <Sidebar/> 
                
                <Main>

                </Main>
            </Content>
            
        </Container>
        </>
    )
}

export default Perfil