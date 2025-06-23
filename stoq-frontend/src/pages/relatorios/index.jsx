import Layout from "../../components/layout/indexL"
import ConvertDate from "../../components/convert-date"
import { useEffect, useState } from "react"
import {
    Main,
    H2,
    Select,
    Label,
    SelectMovimento,
    SelectProduto,
    SelectCategoria,
    FiltrosEBotoesWrapper,
    LinhaSuperior,
    LinhaInferior,
    FiltroDataContainer,
    InputData,
    Button,
    ButtonGroup,
    DivResultado,
    Span,
    Table,
    Tbody,
    Thead,
    Td,
    Th,
    Tr,
    DivTable,
} from './style'

function Relatorio() {
    useEffect(() => {
        document.title = 'Relatórios'
    }, [])

    // Arrays com as opções
    const tiposMovimentos = ['Entrada', 'Saída']
    const produtos = ['Produto A', 'Produto B', 'Produto C', 'Produto D']
    const categorias = ['Categoria 1', 'Categoria 2', 'Categoria 3']

    // dados ficticios para relatorio
    const dadosRelatorio = [
        { data: '2025-05-19', tipo: 'Entrada', produto: 'Produto A', quantidade: ' 5 Kg', categoria: 'Categoria 1', validade: "2025-05-30" },
        { data: '2025-05-19', tipo: 'Entrada', produto: 'Produto B', quantidade: ' 5 Kg', categoria: 'Categoria 2', validade: "2025-05-30" },
        { data: '2025-05-19', tipo: 'Saída', produto: 'Produto C', quantidade: ' 5 Kg', categoria: 'Categoria 3', validade: "2025-05-30" },
        { data: '2025-05-19', tipo: 'Saída', produto: 'Produto D', quantidade: ' 5 Kg', categoria: 'Categoria 1', validade: "2025-05-30" },
        { data: '2025-05-19', tipo: 'Entrada', produto: 'Produto D', quantidade: ' 5 Kg', categoria: 'Categoria 2', validade: "2025-05-30" },
        { data: '2025-05-19', tipo: 'Saída', produto: 'Produto C', quantidade: ' 5 Kg', categoria: 'Categoria 3', validade: "2025-05-30" },
        { data: '2025-05-19', tipo: 'Entrada', produto: 'Produto A', quantidade: ' 5 Kg', categoria: 'Categoria 1', validade: "2025-05-30" },
        { data: '2025-05-19', tipo: 'Entrada', produto: 'Produto B', quantidade: ' 5 Kg', categoria: 'Categoria 2', validade: "2025-05-30" },
        { data: '2025-05-19', tipo: 'Entrada', produto: 'Produto A', quantidade: ' 5 Kg', categoria: 'Categoria 3', validade: "2025-05-30" },
    ]

    // Estados dos filtros
    const [tipoMovimento, setTipoMovimento] = useState('')
    const [produto, setProduto] = useState('')
    const [categoria, setCategoria] = useState('')
    const [dataInicial, setDataInicial] = useState('')
    const [dataFinal, setDataFinal] = useState('')

    // Dados filtrados
    const [filtrosAplicado, setFiltrosAplicados] = useState(dadosRelatorio)

    const aplicarFiltros = () => {
        const dadosFiltrados = dadosRelatorio.filter((item) => {
            const dataValida = (!dataInicial || item.data >= dataInicial) && (!dataFinal || item.data <= dataFinal)
            const tipoValido = !tipoMovimento || item.tipo.toLowerCase() === tipoMovimento
            const produtoValido = !produto || item.produto.toLowerCase() === produto
            const categoriaValida = !categoria || item.categoria.toLowerCase() === categoria
            return dataValida && tipoValido && produtoValido && categoriaValida
        })
        setFiltrosAplicados(dadosFiltrados)
    }

    // Função para gerar PDF - placeholder
    const gerarPDF = () => {
        alert('Função gerar PDF ainda não implementada')
    }

    return (
        <Layout>
            <Main>
                <H2>Relatórios</H2>
                <FiltrosEBotoesWrapper>
                    <LinhaSuperior>
                        <SelectMovimento>
                            <Label>Tipo de Movimento:</Label>
                            <Select value={tipoMovimento} onChange={(e) => setTipoMovimento(e.target.value)}>
                                <option value="">Todos</option>
                                {tiposMovimentos.map((tipo, i) => (
                                    <option key={i} value={tipo.toLowerCase()}>{tipo}</option>
                                ))}
                            </Select>
                        </SelectMovimento>

                        <SelectProduto>
                            <Label>Produto:</Label>
                            <Select value={produto} onChange={(e) => setProduto(e.target.value)}>
                                <option value="">Todos</option>
                                {produtos.map((item, i) => (
                                    <option key={i} value={item.toLowerCase()}>{item}</option>
                                ))}
                            </Select>
                        </SelectProduto>

                        <SelectCategoria>
                            <Label>Categoria:</Label>
                            <Select value={categoria} onChange={(e) => setCategoria(e.target.value)}>
                                <option value="">Todos</option>
                                {categorias.map((cat, i) => (
                                    <option key={i} value={cat.toLowerCase()}>{cat}</option>
                                ))}
                            </Select>
                        </SelectCategoria>
                    </LinhaSuperior>


                    <LinhaInferior>
                        <FiltroDataContainer>
                            <div>
                                <Label>De:</Label>
                                <InputData type="date" value={dataInicial} onChange={(e) => setDataInicial(e.target.value)} />
                            </div>
                            <div>
                                <Label>Até:</Label>
                                <InputData type="date" value={dataFinal} onChange={(e) => setDataFinal(e.target.value)} />
                            </div>
                        </FiltroDataContainer>

                        <ButtonGroup>
                            <Button onClick={aplicarFiltros}>Aplicar Filtros</Button>
                            <Button onClick={gerarPDF}>Gerar PDF</Button>
                        </ButtonGroup>
                    </LinhaInferior>
                </FiltrosEBotoesWrapper>

                <DivResultado>
                    <H2>Resultado</H2>
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
                                    <Th>Validade</Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                {filtrosAplicado.map((item, i) => (
                                    <Tr key={i}>
                                        <Td><ConvertDate data={item.data} /></Td>
                                        <Td>{item.tipo}</Td>
                                        <Td>{item.produto}</Td>
                                        <Td>{item.quantidade}</Td>
                                        <Td>{item.categoria}</Td>
                                        <Td><ConvertDate data={item.validade} /></Td>
                                    </Tr>
                                ))}
                            </Tbody>
                        </Table>
                    </DivTable>
                </DivResultado>
            </Main>
        </Layout>
    )
}

export default Relatorio
