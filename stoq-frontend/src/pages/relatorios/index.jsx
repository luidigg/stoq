import Header from "../../components/header"
import Sidebar from "../../components/sidebar"
import {Container,Main,Content } from './style'

function Relatorio() {
    const title = document.querySelector('title')
         title.innerHTML = 'Relatórios'

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

export default Relatorio