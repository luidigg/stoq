import {
  Container, Main, Content, H2, DivButtons, ButtonAdd, DivTable,
  Table, Thead, Tr, Th, Tbody, Td, ButtonIcon, ModalContent, ModalOverlay,
  Datas,ButtonClose,DivClose,InputAdd,Label,ButtonSalvar,ButtonCancelar,ModalButtons,Select
} from './style'
import Sidebar from '../../components/sidebar'
import Header from '../../components/header'
import { UilEdit, UilTrashAlt, UilPlus,UilTimes  } from '@iconscout/react-unicons'
import { useState, useEffect } from 'react'

function Estoque() {
  useEffect(() => {
    document.title = 'Estoque'
  }, [])

  const produtos = [
    { nome: 'Arroz', quantidade: '10 kg', validade: '2025-05-30', entrada: '2025-05-25' },
    { nome: 'Arroz', quantidade: '10 kg', validade: '2025-05-30', entrada: '2025-05-25' },
    { nome: 'Arroz', quantidade: '10 kg', validade: '2025-05-30', entrada: '2025-05-25' },
    { nome: 'Arroz', quantidade: '10 kg', validade: '2025-05-30', entrada: '2025-05-25' },
    { nome: 'Arroz', quantidade: '10 kg', validade: '2025-05-30', entrada: '2025-05-25' },
    { nome: 'Arroz', quantidade: '10 kg', validade: '2025-05-30', entrada: '2025-05-25' },
    { nome: 'Arroz', quantidade: '10 kg', validade: '2025-05-30', entrada: '2025-05-25' },
    { nome: 'Arroz', quantidade: '10 kg', validade: '2025-05-30', entrada: '2025-05-25' },
    { nome: 'Arroz', quantidade: '10 kg', validade: '2025-05-30', entrada: '2025-05-25' },
    { nome: 'Arroz', quantidade: '10 kg', validade: '2025-05-30', entrada: '2025-05-25' },
    { nome: 'Arroz', quantidade: '10 kg', validade: '2025-05-30', entrada: '2025-05-25' },
    { nome: 'Arroz', quantidade: '10 kg', validade: '2025-05-30', entrada: '2025-05-25' },
    { nome: 'Arroz', quantidade: '10 kg', validade: '2025-05-30', entrada: '2025-05-25' }
  ]

  const [modal, setModal] = useState(false)

  return (
    <>
      <Container>
        <Header />
        <Content>
          <Sidebar />
          <Main>
            <H2>Estoque</H2>

            <DivTable>
              <Table>
                <Thead>
                  <Tr>
                    <Th>Produto</Th>
                    <Th>Quantidade</Th>
                    <Th>Validade</Th>
                    <Th>Icon</Th>
                    <Th>Icon</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {produtos.map((item, index) => (
                    <Tr key={index}>
                      <Td>{item.nome}</Td>
                      <Td>{item.quantidade}</Td>
                      <Td>{item.validade}</Td>
                      <Td><ButtonIcon><UilEdit size='24' color='#1E8673' /></ButtonIcon></Td>
                      <Td><ButtonIcon><UilTrashAlt size='24' color='#1E8673' /></ButtonIcon></Td>
                    </Tr>
                  ))}
                </Tbody>

              </Table>
            </DivTable>

            <DivButtons>
              <ButtonAdd onClick={() => setModal(true)}> <UilPlus size='24' color='#fff' />Adicionar Produtos</ButtonAdd>
            </DivButtons>

            {modal && (
              <ModalOverlay>
                <ModalContent>
                  <DivClose>
                    <ButtonClose onClick={() => setModal(false)}><UilTimes size='24'/></ButtonClose>
                  </DivClose>
                  
                  <h3 style={{fontSize:'24px'}}>Adicionar Produto</h3>
                  <Label>
                    Produto:
                    <Select name="produto">
                      <option value="feijao">Feijão</option>
                      <option value="feijao">Maçã</option>
                    </Select>
                  </Label>
                  {/* <InputAdd name ='produto' type="text" placeholder='Nome do Produto' required='true' /> */}
                  <InputAdd name='quantidade' type="text" placeholder='Quantidade'  />
                  <InputAdd name='categoria' type="text" placeholder='Categoria'  />
                  <Datas>
                    <Label>
                      Data de Cadastro:
                      <InputAdd name='data_recebimento' type="date" defaultValue={new Date().toISOString().split('T')[0]}/>
                    </Label>
                    <Label>
                      Data de Validade:
                      <InputAdd name='data_validade' type="date"/>
                    </Label>
                  </Datas>
                  <InputAdd name='valor_compra' type="number" placeholder='R$ Valor da Compra (OPCIONAL)'/>
                  <InputAdd name='nome_doador' type="text" placeholder='Nome do Doador (OPCIONAL)'/>
                  <ModalButtons>
                    
                    <ButtonSalvar type='submit'>Salvar</ButtonSalvar>
                    <ButtonCancelar>Cancelar</ButtonCancelar>
                  </ModalButtons>
                </ModalContent>
              </ModalOverlay>
            )}
          </Main>

        </Content>

      </Container>
    </>
  )
}

export default Estoque