import Header from "../../components/header"
import Sidebar from "../../components/sidebar"
import ConvertDate from "../../components/convertDate"
import { useState } from "react"
import {
    Container, Main, Content, Box, H2, DivFiltros, Select, Label, SelectMovimento
    , SelectProduto, SelectCategoria, SelectData, InputData, Button, DivResultado, Span, Table, Tbody, Thead, Td, Th, Tr,DivTable
} from './style'


function Relatorio() {
    const title = document.querySelector('title')
    title.innerHTML = 'Relatórios'

    // Arrays com as opções
    const tiposMovimentos = ['Entrada', 'Saída']
    const produtos = ['Produto A', 'Produto B']
    const categorias = ['Categoria 1', 'Categoria 2']

    // dados ficticios para relatorio
    const dadosRelatorio = [
        { data: '2025-05-19', tipo: 'Entrada', produto: 'Produto A', quantidade: ' 5 Kg', categoria: 'Categoria 1', validade:"2025-05-30" },
        { data: '2025-05-19', tipo: 'Entrada', produto: 'Produto A', quantidade: ' 5 Kg', categoria: 'Categoria 1', validade:"2025-05-30" },
        { data: '2025-05-19', tipo: 'Entrada', produto: 'Produto A', quantidade: ' 5 Kg', categoria: 'Categoria 1', validade:"2025-05-30" },
        { data: '2025-05-19', tipo: 'Entrada', produto: 'Produto A', quantidade: ' 5 Kg', categoria: 'Categoria 1', validade:"2025-05-30" },
        { data: '2025-05-19', tipo: 'Entrada', produto: 'Produto A', quantidade: ' 5 Kg', categoria: 'Categoria 1', validade:"2025-05-30" },
        { data: '2025-05-19', tipo: 'Entrada', produto: 'Produto A', quantidade: ' 5 Kg', categoria: 'Categoria 1', validade:"2025-05-30" },
        { data: '2025-05-19', tipo: 'Entrada', produto: 'Produto A', quantidade: ' 5 Kg', categoria: 'Categoria 1', validade:"2025-05-30" },
        { data: '2025-05-19', tipo: 'Entrada', produto: 'Produto A', quantidade: ' 5 Kg', categoria: 'Categoria 1', validade:"2025-05-30" },
        { data: '2025-05-19', tipo: 'Entrada', produto: 'Produto A', quantidade: ' 5 Kg', categoria: 'Categoria 1', validade:"2025-05-30" },

    ]

    // Estados dos filtros
    const [tipoMovimento, setTipoMovimento] = useState('')
    const [produto, setProduto] = useState('')
    const [categoria, setCategoria] = useState('')
    const [dataInicial, setDataInicial] = useState('')
    const [dataFinal, setDataFinal] = useState('')

    // implementando a lógica de filtro dos dados
    const [filtrosAplicado, setFiltrosAplicados] = useState(dadosRelatorio)
    const aplicarFiltros = () => {
        const dadosFiltrados = dadosRelatorio.filter((item) => {
            const dataValida =(!dataInicial || item.data >= dataInicial) && 
                              (!dataFinal || item.data <= dataFinal)
            const tipoValido = !tipoMovimento || item.tipo.toLowerCase() === tipoMovimento
            const produtoValido = !produto || item.produto.toLowerCase() === produto
            const categoriaValida = !categoria || item.categoria.toLowerCase() === categoria
            return dataValida && tipoValido && produtoValido && categoriaValida
        })
        
        setFiltrosAplicados(dadosFiltrados)
        
    }

    return (
        <>
            <Container>
                <Header />
                <Content>
                    <Sidebar />
                    <Main>
                        <Box>
                            <H2>Relatórios</H2>
                            <DivFiltros>

                                <SelectMovimento>
                                    <Label>Tipo de Movimento:</Label>
                                    <Select value={tipoMovimento} onChange={(e) => setTipoMovimento(e.target.value)}>
                                        <option value="">Todos</option>
                                        {tiposMovimentos.map((tipo, index) => (
                                            <option key={index} value={tipo.toLowerCase()}>{tipo}</option>
                                        ))}
                                    </Select>
                                </SelectMovimento>

                                <SelectProduto>
                                    <Label>Produto:</Label>
                                    <Select value={produto} onChange={(e) => setProduto(e.target.value)}>
                                        <option value="">Todos</option>
                                        {produtos.map((item, index) => (
                                            <option key={index} value={item.toLowerCase()}>{item}</option>
                                        ))}
                                    </Select>
                                </SelectProduto>

                                <SelectCategoria>
                                    <Label>Categoria: </Label>
                                    <Select value={categoria} onChange={(e) => setCategoria(e.target.value)}>
                                        <option value="">Todos</option>
                                        {categorias.map((cat, index) => (
                                            <option key={index} value={cat.toLowerCase()}>{cat}</option>
                                        ))}
                                    </Select>
                                </SelectCategoria>
                                <div>
                                    <SelectData>
                                        <Label>De: </Label>
                                        <InputData type="date" value={dataInicial} onChange={(e) => setDataInicial(e.target.value)}></InputData>
                                        <Label>Até: </Label>
                                        <InputData type="date" value={dataFinal} onChange={(e) => setDataFinal(e.target.value)}></InputData>
                                    </SelectData>
                                </div>


                            </DivFiltros>

                            <Button onClick={aplicarFiltros}>Aplicar Filtros</Button>

                            <DivResultado>
                                <H2>Resultado do Relatório</H2>
                                <Span>Data do relatório 19/05/2025</Span>
                                <DivTable>
                                    <Table>
                                    <Thead>
                                        <Tr>
                                            <Th>Data</Th>
                                            <Th>Tipo</Th>
                                            <Th>Produto</Th>
                                            <Th>Quantidade</Th>
                                            <Th>Categoria</Th>
                                            <Th>Válidade</Th>
                                        </Tr>
                                    </Thead>
                                    <Tbody>
                                        {filtrosAplicado.map((item, index) => (
                                            <Tr key={index}>
                                                <Td><ConvertDate data={item.data}/></Td>
                                                <Td>{item.tipo}</Td>
                                                <Td>{item.produto}</Td>
                                                <Td>{item.quantidade}</Td>
                                                <Td>{item.categoria}</Td>
                                                <Td><ConvertDate data={item.validade}/></Td>
                                            </Tr>
                                        ))}
                                    </Tbody>
                                </Table>

                                </DivTable>
                                
                            </DivResultado>
                        </Box>
                    </Main>
                </Content>

            </Container>
        </>
    )
}

export default Relatorio