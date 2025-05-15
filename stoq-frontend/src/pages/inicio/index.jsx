import {Container,Main,Content} from './style'
import Sidebar from '../../components/sidebar'
import Header from '../../components/header'

function Inicio() {
    const title = document.querySelector('title')
    title.innerHTML = 'Início'

    return (
       <>
        <Container>
            <Header>
            {/* fazer nos components tbm */}
            </Header>
            <Content>

                <Sidebar/> {/*components*/ }    

                <Main>

                </Main>
            </Content>
            
        </Container>
       </>
    )
}

export default Inicio