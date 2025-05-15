import Header from "../../components/header"
import Sidebar from "../../components/sidebar"
import {Container,Main,Content } from './style'

function Colaboradores() {
    const title = document.querySelector('title')
    title.innerHTML = 'Colaboradores'

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

export default Colaboradores