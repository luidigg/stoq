import { Container, Main, Content, H1, Texts, Button, DivTable, Table, Coluna, LinhaColuna, LinhaDados, Nome, Dados, Item } from './style'
import Sidebar from '../../components/sidebar'
import Header from '../../components/header'
import { UilEdit, UilTrashAlt } from '@iconscout/react-unicons'

function Estoque() {
    const title = document.querySelector('title')
    title.innerHTML = 'Estoque'

    return (
        <>
            <Container>
                <Header />
                <Content>
                    <Sidebar />
                    <Main>
                        <H1>Estoque</H1>
                        <Texts>
                            <Button>Todos os Produtos</Button>
                            <Button>Próximos do Vencimento</Button>
                            <Button>Gráficos</Button>
                        </Texts>

                        <DivTable>
                            <Table>
                                <Coluna>
                                    <LinhaColuna>
                                        <Nome></Nome>
                                        <Nome>Produto</Nome>
                                        <Nome>Quantidade</Nome>
                                        <Nome>Dias restantes(validade)</Nome>
                                    </LinhaColuna>
                                </Coluna>
                                <Dados>
                                    <LinhaDados>
                                        <Item>
                                            <div style={{display:"flex",gap:"8px",alignItems:"center",justifyContent:"center"}}>
                                                <Button><UilEdit size="30px" /></Button>
                                                <Button><UilTrashAlt size="30px" /></Button>
                                                
                                            </div>
                                        </Item>
                                        <Item>Arroz</Item>      {/*td */}
                                        <Item>50 pacotes(5 kg)</Item>
                                        <Item>2 semana</Item>
                                    </LinhaDados>
                                </Dados>
                            </Table>
                        </DivTable>

                    </Main>

                </Content>

            </Container>
        </>
    )
}

export default Estoque