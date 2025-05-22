import { Container, Main, Content, H1, Texts, Button, DivTable, Table, Coluna, LinhaColuna, LinhaDados, Nome, Dados, Item } from './style'
import Sidebar from '../../components/sidebar'
import Header from '../../components/header'
import { UilEdit, UilTrashAlt } from '@iconscout/react-unicons'
import { useState } from 'react'
import { Form } from 'react-router-dom'

function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0,0,0,0.5)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1000,
      }}
    >
      <div
        style={{
          background: '#fff',
          borderRadius: '12px',
          padding: '24px',
          minWidth: '300px',
          position: 'relative',
        }}
      >
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '8px',
            right: '12px',
            background: 'transparent',
            border: 'none',
            fontSize: '20px',
            cursor: 'pointer',
          }}
        >
          &times;
        </button>
        {children}
      </div>
    </div>
  )
}

function Estoque() {
    const [isModalOpen, setIsModalOpen] = useState(false)
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
                            <Button onClick={() => setIsModalOpen(true)}>Adicionar Produto</Button>
                        </Texts>
                        <div style={{display:"flex",justifyContent:"center", height:"100%"}}>
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
                        </div>
                        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                        <h2 style={{ fontSize: '20px', marginBottom: '16px' }}>Adicionar Produto</h2>
                        <Form>
                            <label>Produto:
                                <select value="produto">
                                    <option value="farinha_de_milho">Farinha de milho</option>
                                    <option value="maca_fuji">Maçã Fuji</option>
                                    <option value="rucula">Rúcula</option>
                                    <option value="feijao">Feijão</option>
                                </select>
                            </label>
                            <input name="quantidade" placeholder="Quantidade" required="true"></input>
                            <input name="data_recebimento" type="date" defaultValue={new Date().toISOString().split('T')[0]} required="true"></input>
                            <input name="data_validade" placeholder="Data de validade (opcional)" type="date"></input>
                            <input name="nome_doador" placeholder="Nome do doador (opcional)" type="text"></input>
                            <input name="valor_compra" placeholder="Valor da compra (opcional)" type="number"></input>
                        </Form>
                        <Button onClick={() => setIsModalOpen(false)} style={{ marginTop: '16px' }}>Fechar</Button>
                        </Modal>

                    </Main>

                </Content>

            </Container>
        </>
    )
}

export default Estoque