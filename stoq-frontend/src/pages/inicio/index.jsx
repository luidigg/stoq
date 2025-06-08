import {Container,Main,Content,IconBox,IconEx,IconUp,IconDown,Box,TopCards,Card,BottomCards,P,Ul,Li,Card2,H2,Circle} from './style'
import Sidebar from '../../components/sidebar'
import Header from '../../components/header'
import { useEffect } from 'react'

function Inicio() {
    useEffect(() => {
        document.title = 'Inicio'
    }, [])

    return (
       <>
        <Container>
            <Header></Header>
            <Content>
                <Sidebar/>   
                <Main>
                    <Box>
                        <H2>Início</H2>
                        <TopCards>

                            <Card>
                                <IconBox size="40"/>
                                <P>Total de Produtos</P>
                                <P>32</P>
                            </Card>
                            <Card>
                                <IconEx size="40"/>
                                <P>Produtos Com Estoque Baixo</P>
                                <P>4</P>
                            </Card>
                            <Card>
                                <IconUp size="40"/>
                                <P>Entradas Do Dia</P>
                                <P>7</P>
                            </Card>
                            <Card>
                                <IconDown size="40"/>
                                <P>Saídas Do Dia</P>
                                <P>12</P>
                            </Card>

                        </TopCards>
                        <BottomCards>
                            <Card2>
                                <P>Últimas Movimentações no Estoque</P>
                                <Ul>
                                    <Li><Circle></Circle></Li>
                                    <Li>Produto A - Entrada</Li>
                                    <Li>5 KG</Li>
                                    <Li>18/05/2025</Li>
                                </Ul>
                                <Ul>
                                    <Li><Circle></Circle></Li>
                                    <Li>Produto B - Entrada</Li>
                                    <Li>9 KG</Li>
                                    <Li>18/05/2025</Li>
                                </Ul>
                                <Ul>
                                    <Li><Circle></Circle></Li>
                                    <Li>Produto C - Entrada</Li>
                                    <Li>1 KG</Li>
                                    <Li>18/05/2025</Li>
                                </Ul>
                            </Card2>
                        </BottomCards>
                        
                    </Box>
                </Main>
            </Content>
            
        </Container>
       </>
    )
}

export default Inicio