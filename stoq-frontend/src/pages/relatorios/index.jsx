import Layout from "../../components/layout/indexL";
import { useEffect, useState } from "react";
import {
    Main,
    H2,
    Label,
    InputData,
    Select,
    Button,
    Card
} from './style';
import axios from 'axios';

function Relatorio() {
    useEffect(() => {
        document.title = 'Relatórios';
    }, []);

    // Configuração: controle de quais cards devem ser desabilitados
    const cardsDesabilitados = {
        entradas: false,
        saidas: false,
        categoria: true,
        validade: false,
        movimentados: false,
        estoqueBaixo: false
    };

    // Estados para os filtros
    const [dataInicialEntradas, setDataInicialEntradas] = useState('');
    const [dataFinalEntradas, setDataFinalEntradas] = useState('');

    const [dataInicialSaidas, setDataInicialSaidas] = useState('');
    const [dataFinalSaidas, setDataFinalSaidas] = useState('');

    const [categoriaProd, setCategoriaProd] = useState('');
    const [diasValidade, setDiasValidade] = useState(15);

    const [dataInicialMovimentados, setDataInicialMovimentados] = useState('');
    const [dataFinalMovimentados, setDataFinalMovimentados] = useState('');

    const [quantidadeMinima, setQuantidadeMinima] = useState(1);

    const categorias = ['Categoria 1', 'Categoria 2', 'Categoria 3'];

    // Entradas por período
    const gerarPDFEntradas = async () => {
        try {
            const response = await axios.post(
                '/api/relatorio/entradas',
                {
                    dataInicio: dataInicialEntradas || null,
                    dataFim: dataFinalEntradas || null
                },
                { responseType: 'blob', withCredentials: true }
            );

            const url = window.URL.createObjectURL(new Blob([response.data], { type: 'application/pdf' }));
            window.open(url, '_blank');
        } catch (error) {
            alert('Erro ao gerar relatório de entradas.');
            console.error(error);
        }
    };

    // Saídas por período
    const gerarPDFSaidas = async () => {
        try {
            const response = await axios.post(
                '/api/relatorio/saidas',
                {
                    dataInicio: dataInicialSaidas || null,
                    dataFim: dataFinalSaidas || null
                },
                { responseType: 'blob', withCredentials: true }
            );

            const url = window.URL.createObjectURL(new Blob([response.data], { type: 'application/pdf' }));
            window.open(url, '_blank');
        } catch (error) {
            alert('Erro ao gerar relatório de saídas.');
            console.error(error);
        }
    };

    // Produtos por categoria
    const gerarPDFPorCategoria = async () => {
        try {
            const response = await axios.post(
                '/api/relatorio/por-categoria',
                {
                    categoria: categoriaProd || null
                },
                { responseType: 'blob', withCredentials: true }
            );

            const url = window.URL.createObjectURL(new Blob([response.data], { type: 'application/pdf' }));
            window.open(url, '_blank');
        } catch (error) {
            alert('Erro ao gerar relatório por categoria.');
            console.error(error);
        }
    };

    // Produtos com validade próxima
    const gerarPDFValidades = async () => {
        try {
            const response = await axios.post(
                '/api/relatorio/validade-proxima',
                {
                    diasAteValidade: parseInt(diasValidade, 10)
                },
                { responseType: 'blob', withCredentials: true }
            );

            const url = window.URL.createObjectURL(new Blob([response.data], { type: 'application/pdf' }));
            window.open(url, '_blank');
        } catch (error) {
            alert('Erro ao gerar relatório de validade.');
            console.error(error);
        }
    };

    // Produtos mais movimentados
    const gerarPDFProdutosMovimentados = async () => {
        try {
            const response = await axios.post(
                '/api/relatorio/mais-movimentados',
                {
                    dataInicio: dataInicialMovimentados || null,
                    dataFim: dataFinalMovimentados || null
                },
                { responseType: 'blob', withCredentials: true }
            );

            const url = window.URL.createObjectURL(new Blob([response.data], { type: 'application/pdf' }));
            window.open(url, '_blank');
        } catch (error) {
            alert('Erro ao gerar relatório de movimentação.');
            console.error(error);
        }
    };

    // Estoque baixo
    const gerarPDFEstoqueBaixo = async () => {
        try {
            const response = await axios.post(
                '/api/relatorio/estoque-baixo',
                {
                    quantidadeMinima: parseInt(quantidadeMinima, 10)
                },
                { responseType: 'blob', withCredentials: true }
            );

            const url = window.URL.createObjectURL(new Blob([response.data], { type: 'application/pdf' }));
            window.open(url, '_blank');
        } catch (error) {
            alert('Erro ao gerar relatório de estoque.');
            console.error(error);
        }
    };


    return (
        <Layout>
            <Main style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px' }}>
                <H2 style={{ gridColumn: '1 / -1' }}>Relatórios</H2>

                {/* Card 1: Entradas por Período */}
                <Card disabled={cardsDesabilitados.entradas}>
                    <h3>Entradas por Período</h3>
                    <p>Visualize os produtos que entraram no estoque em um intervalo de datas.</p>
                    <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                        <div>
                            <Label>Data Inicial</Label>
                            <InputData type="date" value={dataInicialEntradas} onChange={e => setDataInicialEntradas(e.target.value)} />
                        </div>
                        <div>
                            <Label>Data Final</Label>
                            <InputData type="date" value={dataFinalEntradas} onChange={e => setDataFinalEntradas(e.target.value)} />
                        </div>
                    </div>
                    <Button disabled={cardsDesabilitados.entradas} onClick={gerarPDFEntradas}>Gerar PDF</Button>
                </Card>

                {/* Card 2: Saídas por Período */}
                <Card disabled={cardsDesabilitados.saidas}>
                    <h3>Saídas por Período</h3>
                    <p>Confira as saídas do estoque, incluindo consumo e descarte.</p>
                    <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                        <div>
                            <Label>Data Inicial</Label>
                            <InputData type="date" value={dataInicialSaidas} onChange={e => setDataInicialSaidas(e.target.value)} />
                        </div>
                        <div>
                            <Label>Data Final</Label>
                            <InputData type="date" value={dataFinalSaidas} onChange={e => setDataFinalSaidas(e.target.value)} />
                        </div>
                    </div>
                    <Button disabled={cardsDesabilitados.saidas} onClick={gerarPDFSaidas}>Gerar PDF</Button>
                </Card>

                {/* Card 3: Produtos por Categoria */}
                <Card disabled={cardsDesabilitados.categoria}>
                    <h3>Produtos por Categoria</h3>
                    <p>Veja produtos agrupados por categoria.</p>
                    <div>
                        <Label>Categoria</Label>
                        <Select value={categoriaProd} onChange={e => setCategoriaProd(e.target.value)}>
                            <option value="">Todas</option>
                            {categorias.map((cat, idx) => (
                                <option key={idx} value={cat.toLowerCase()}>{cat}</option>
                            ))}
                        </Select>
                    </div>
                    <Button disabled={cardsDesabilitados.categoria} onClick={gerarPDFPorCategoria}>Gerar PDF</Button>
                </Card>

                {/* Card 4: Produtos com Validade Próxima */}
                <Card disabled={cardsDesabilitados.validade}>
                    <h3>Produtos com Validade Próxima</h3>
                    <p>Produtos com validade vencendo nos próximos dias selecionados.</p>
                    <div>
                        <Label>Dias até validade</Label>
                        <InputData
                            type="number"
                            min={1}
                            value={diasValidade}
                            onChange={e => setDiasValidade(e.target.value)}
                            style={{ width: '80px' }}
                        />
                    </div>
                    <Button disabled={cardsDesabilitados.validade} onClick={gerarPDFValidades}>Gerar PDF</Button>
                </Card>

                {/* Card 5: Produtos Mais Movimentados */}
                <Card disabled={cardsDesabilitados.movimentados}>
                    <h3>Produtos Mais Movimentados</h3>
                    <p>Identifique os produtos com maior volume de entradas e saídas.</p>
                    <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                        <div>
                            <Label>Data Inicial</Label>
                            <InputData type="date" value={dataInicialMovimentados} onChange={e => setDataInicialMovimentados(e.target.value)} />
                        </div>
                        <div>
                            <Label>Data Final</Label>
                            <InputData type="date" value={dataFinalMovimentados} onChange={e => setDataFinalMovimentados(e.target.value)} />
                        </div>
                    </div>
                    <Button disabled={cardsDesabilitados.movimentados} onClick={gerarPDFProdutosMovimentados}>Gerar PDF</Button>
                </Card>

                {/* Card 6: Produtos com Estoque Baixo */}
                <Card disabled={cardsDesabilitados.estoqueBaixo}>
                    <h3>Produtos com Estoque Baixo</h3>
                    <p>Identifique produtos com estoque abaixo do mínimo definido.</p>
                    <div>
                        <Label>Quantidade Mínima</Label>
                        <InputData
                            type="number"
                            min={1}
                            value={quantidadeMinima}
                            onChange={e => setQuantidadeMinima(e.target.value)}
                            style={{ width: '80px' }}
                        />
                    </div>
                    <Button disabled={cardsDesabilitados.estoqueBaixo} onClick={gerarPDFEstoqueBaixo}>Gerar PDF</Button>
                </Card>

            </Main>
        </Layout>
    );
}

export default Relatorio;
