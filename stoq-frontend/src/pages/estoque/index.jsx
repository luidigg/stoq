import {
  Container, Main, Content, H2, DivButtons, ButtonAdd, DivTable,
  Table, Thead, Tr, Th, Tbody, Td, ButtonIcon, ModalContent, ModalOverlay,
  Datas, ButtonClose, DivClose, InputAdd, Label, ButtonSalvar, ButtonCancelar, ModalButtons, Select
} from './style'
import Sidebar from '../../components/sidebar'
import Header from '../../components/header'
import { UilEdit, UilTrashAlt, UilPlus, UilTimes } from '@iconscout/react-unicons'
import { useState, useEffect } from 'react'
import ConvertDate from '../../components/convertDate'

function Estoque() {
  useEffect(() => {
    document.title = 'Estoque'
  }, [])

  const [produtos, setProdutos] = useState([
    { entrada: '2025-05-25', nome: 'Arroz', quantidade: '10 kg', categoria: 'Cereal', validade: '2025-05-30', doador: "unijui", valor: 10 }
  ])

  const [dataEntrada, setDataEntrada] = useState(new Date().toISOString().split('T')[0])
  const [nomeProduto, setNomeProduto] = useState('')
  const [quantidadeProduto, setQuantidadeProduto] = useState('')
  const [validadeProduto, setValidadeProduto] = useState('')
  const [categoriaProduto, setCategoriaProduto] = useState('')
  const [valorProduto, setValorProduto] = useState('')
  const [nomeDoador, setNomeDoador] = useState('')

  const [modal, setModal] = useState(false)

  // função para limpar os inputs do modal
  const limparInputs = () => {
    setNomeProduto('')
    setQuantidadeProduto('')
    setValidadeProduto('')
    setCategoriaProduto('')
    setValorProduto('')
    setNomeDoador('')
  }

  const cadastrar = () => {
    const novoProduto = {
      entrada: dataEntrada,
      nome: nomeProduto,
      quantidade: quantidadeProduto,
      categoria: categoriaProduto,
      validade: validadeProduto,
      valor: valorProduto,
      doador: nomeDoador
    }

    //adiciona o novo produto a lista
    setProdutos([...produtos, novoProduto])

    limparInputs()
  }

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
                    <Th>Entrada</Th>
                    <Th>Produto</Th>
                    <Th>Quantidade</Th>
                    <Th>Validade</Th>
                    <Th></Th>
                    <Th></Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {produtos.map((item, index) => (
                    <Tr key={index}>
                      <Td><ConvertDate data = {item.entrada} /></Td>
                      <Td>{item.nome}</Td>
                      <Td>{item.quantidade}</Td>
                      <Td><ConvertDate data={item.validade}/></Td>
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
                    <ButtonClose onClick={() => setModal(false)}><UilTimes size='24' /></ButtonClose>
                  </DivClose>

                  <h3 style={{ fontSize: '24px' }}>Adicionar Produto</h3>
                  <Label>
                    Produto:
                    <Select value={nomeProduto} onChange={(e) => setNomeProduto(e.target.value)}>
                      <option value="feijao">Feijão</option>
                      <option value="maca">Maçã</option>
                    </Select>
                  </Label>
                  <InputAdd type="text" placeholder='Quantidade' value={quantidadeProduto} onChange={(e) => setQuantidadeProduto(e.target.value)} />

                  <InputAdd type="text" placeholder='Categoria' value={categoriaProduto} onChange={(e) => setCategoriaProduto(e.target.value)} />

                  <Datas>

                    <Label>
                      Data de Cadastro:
                      <InputAdd
                        type="date"
                        value={dataEntrada}
                        onChange={(e) => setDataEntrada(e.target.value)} />
                    </Label>

                    <Label>
                      Data de Validade:
                      <InputAdd
                        type="date"
                        value={validadeProduto}
                        onChange={(e) => setValidadeProduto(e.target.value)}
                      />
                    </Label>

                  </Datas>

                  <InputAdd
                    type="number"
                    placeholder='R$ Valor da Compra (OPCIONAL)'
                    value={valorProduto}
                    onChange={(e) => setValorProduto(e.target.value)}
                  />

                  <InputAdd
                    type="text"
                    placeholder='Nome do Doador (OPCIONAL)'
                    value={nomeDoador}
                    onChange={(e) => setNomeDoador(e.target.value)}
                  />

                  <ModalButtons>

                    <ButtonSalvar onClick={cadastrar}>Salvar</ButtonSalvar>
                    <ButtonCancelar onClick={limparInputs}>Cancelar</ButtonCancelar>

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