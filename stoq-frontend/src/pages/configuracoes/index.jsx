import Header from "../../components/header"
import Sidebar from "../../components/sidebar"
import {Container,Main,Content } from './style'

function Config() {
    const title = document.querySelector('title')
    title.innerHTML = 'Configurações'

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

export default Config