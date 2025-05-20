import Header from "../../components/header"
import Sidebar from "../../components/sidebar"
import { useState } from "react"
import {
    Container, Main, Content, Box, H2, DivFiltros, Select, Label, SelectMovimento
    , SelectProduto, SelectCategoria, SelectData, InputData, Button, DivResultado, Span, Table, Tbody, Thead, Td, Th, Tr
} from './style'


function Relatorio() {
    const title = document.querySelector('title')
    title.innerHTML = 'Relatórios'

    // Arrays com as opções
    const tiposMovimentos = ['Entrada', 'Saída']
    const produtos = ['Produtos A', 'Produto B']
    const categorias = ['Categoria 1', 'Categoria 2']

    // dados ficticios para relatorio
    const dadosRelatorio = [
        { data: '19-05-2025', tipo: 'Entrada', produto: 'Produto A', quantidade: ' 5 Kg' },
        { data: '19-05-2025', tipo: 'Entrada', produto: 'Produto B', quantidade: ' 15 Kg' }
    ]

    // Estados dos filtros
    const [tipoMovimento, setTipoMovimento] = useState('')
    const [produto, setProduto] = useState('')
    const [categoria, setCategoria] = useState('')
    const [dataInicial, setDataInicial] = useState('')
    const [dataFinal, setDataFinal] = useState('')

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
                                            <option key={index} value={cat}>{cat}</option>
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

                            <Button>Aplicar Filtros</Button>

                            <DivResultado>
                                <H2>Resultado do Relatório</H2>
                                <Span>Data do relatório 19/05/2025</Span>
                                <Table>
                                    <Thead>
                                        <Tr>
                                            <Th>Data</Th>
                                            <Th>Tipo</Th>
                                            <Th>Produto</Th>
                                            <Th>Quantidade</Th>
                                        </Tr>
                                    </Thead>
                                    <Tbody>
                                        {dadosRelatorio.map((item, index) => (
                                            <Tr key={index}>
                                                <Td>{item.data}</Td>
                                                <Td>{item.tipo}</Td>
                                                <Td>{item.produto}</Td>
                                                <Td>{item.quantidade}</Td>
                                            </Tr>
                                        ))}
                                    </Tbody>
                                </Table>

                            </DivResultado>
                        </Box>
                    </Main>
                </Content>

            </Container>
        </>
    )
}

export default Relatorio