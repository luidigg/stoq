import {
  Container, Main, Content, H2, DivButtons, ButtonAdd, DivTable,
  Table, Thead, Tr, Th, Tbody, Td, ButtonIcon, ModalContent, ModalOverlay,
  Datas, ButtonClose, DivClose, InputAdd, Label, ButtonSalvar, ButtonCancelar, ModalButtons, Select
} from './style'
import Sidebar from '../../components/sidebar'
import Header from '../../components/header'
import { UilEdit, UilTrashAlt, UilPlus, UilTimes } from '@iconscout/react-unicons'
import { useState, useEffect } from 'react'
import ConvertDate from '../../components/convert-date'

function Estoque() {
  useEffect(() => {
    document.title = 'Estoque'
  }, [])

  const [produtos, setProdutos] = useState([
    { entrada: '2025-05-25', nome: 'Feijão', quantidade: '10 kg', categoria: 'Leguminosas', validade: '2025-05-30', doador: "unijui", valor: 10 }
  ])

  const arrayCategorias = ['Cereais', 'Leguminosas', 'Carnes e Proteínas', 'Laticínios', 'Frutas', 'Verduras e Legumes', 
    'Pães e Massas', 'Bebidas', 'Condimentos e Temperos', 'Produtos de Limpeza e Higiene', 'Outros'
   ]

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

    setModoEdicao(false)
    setIndiceEdicao(null)
  }

  //adiciona o novo produto a lista
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

    if (modoEdicao) {
      const novaLista = [...produtos] // copia a lista original
      novaLista[indiceEdicao] = novoProduto // substitui o item no indice certo
      setProdutos(novaLista) // atualiza a lista com o item editado
    } else {
      setProdutos([...produtos, novoProduto])
    }

    limparInputs()
  }

  // Função para editar os produtos que ja estao na tabela
  const [modoEdicao, setModoEdicao] = useState(false)
  const [indiceEdicao, setIndiceEdicao] = useState(null)

  const editarProduto = (index) => {
    const produto = produtos[index] // produto recebe o objeto com as infos do alimento de acordo com o index

    // coloca os dados do produto nos inputs
    setNomeProduto(produto.nome)
    setQuantidadeProduto(produto.quantidade)
    setCategoriaProduto(produto.categoria)
    setDataEntrada(produto.entrada)
    setValidadeProduto(produto.validade)
    setValorProduto(produto.valor)
    setNomeDoador(produto.doador)

    setIndiceEdicao(index)
    setModoEdicao(true)
    setModal(true)
  }

  // função para excluir um item da tabela

  const [modalConfirmacao, setModalConfirmacao] = useState(false)
  const [indiceExclusao, setIndiceExclusao] = useState(null)

  const confirmarExclusao = (index) => {
    setIndiceExclusao(index)
    setModalConfirmacao(true)
  }

  const deletar = (index) => {
    const novaLista = produtos.filter((_, i) => i !== indiceExclusao)
    setProdutos(novaLista)
    setModalConfirmacao(false)
    setIndiceExclusao(null)
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
                    <Th>Categoria</Th>
                    <Th>Validade</Th>
                    <Th></Th>
                    <Th></Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {produtos.map((item, index) => (
                    <Tr key={index}>
                      <Td><ConvertDate data={item.entrada} /></Td>
                      <Td>{item.nome}</Td>
                      <Td>{item.quantidade}</Td>
                      <Td>{item.categoria}</Td>
                      <Td><ConvertDate data={item.validade} /></Td>
                      <Td><ButtonIcon onClick={() => editarProduto(index)}><UilEdit size='24' color='#1E8673' /></ButtonIcon></Td>
                      <Td><ButtonIcon onClick={() => confirmarExclusao(index)}><UilTrashAlt size='24' color='#1E8673' /></ButtonIcon></Td>
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
                    <ButtonClose onClick={() => { setModal(false); limparInputs() }}><UilTimes size='24' /></ButtonClose>
                  </DivClose>

                  <h3 style={{ fontSize: '24px' }}>{modoEdicao ? 'Editar Produto' : 'Adicionar Produto'}</h3>

                  <InputAdd type='text' value={nomeProduto} placeholder='Digite o Produto' onChange={(e) => setNomeProduto(e.target.value)} />
                  <InputAdd type="text" placeholder='Quantidade' value={quantidadeProduto} onChange={(e) => setQuantidadeProduto(e.target.value)} />

                  <Label>
                    Categoria:
                    <Select value={categoriaProduto} onChange={(e) => setCategoriaProduto(e.target.value)}>
                      <option value="" disabled hidden>Selecione uma categoria</option>
                      {arrayCategorias.map((cat, index) => (
                        <option key={index} value={cat}>
                          {cat}
                        </option>
                      ))}
                    </Select>
                  </Label>

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

            {modalConfirmacao && (
              <ModalOverlay>
                <ModalContent>
                  <h2>Deseja excuir este item?</h2>
                  <ButtonSalvar onClick={deletar}>Sim</ButtonSalvar>
                  <ButtonCancelar onClick={() => setModalConfirmacao(false)}>Não</ButtonCancelar>
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