import { useEffect, useState } from 'react';
import Layout from '../../components/layout/indexL';
import {
  TopCards,
  BottomCards,
  IconBox,
  IconEx,
  IconUp,
  IconDown,
  Main,
  H2Medium
} from './style';
import InfoCards from '../../components/info-cards/infocards';
import MiniTable from '../../components/mini-table/minitable';
import axios from 'axios';

function Inicio() {
  
  // Estados para armazenar os dados da API
  const [movimentacoes, setMovimentacoes] = useState([]);
  const [totalProdutos, setTotalProdutos] = useState(0);
  const [itensComEstoqueBaixo, setItensComEstoqueBaixo] = useState(0);
  const [entradasDoDia, setEntradasDoDia] = useState(0);
  const [saidasDoDia, setSaidasDoDia] = useState(0);

  // Função para buscar movimentações
  const fetchMovimentacoes = async () => {
    try {
      const response = await axios.get('/api/inicio/movimentacoes', { withCredentials: true });
      setMovimentacoes(response.data);
    } catch (error) {
      console.error('Erro ao buscar movimentações:', error);
    }
  };

  // Função para buscar totais
  const fetchTotais = async () => {
    try {
      const response = await axios.get('/api/inicio/totais', { withCredentials: true });
      setTotalProdutos(response.data.totalProdutos);
      setItensComEstoqueBaixo(response.data.itensComEstoqueBaixo);
      setEntradasDoDia(response.data.entradasDoDia);
      setSaidasDoDia(response.data.saidasDoDia);
    } catch (error) {
      console.error('Erro ao buscar totais:', error);
    }
  };

  // useEffect para fazer os fetchs assim que o componente carregar
  useEffect(() => {
    document.title = 'Início';
    fetchMovimentacoes(); // Buscar as movimentações
    fetchTotais(); // Buscar os totais
  }, []);

  return (
    <Layout>
 
        <Main>
          <H2Medium>Início</H2Medium>

          <TopCards>
            <InfoCards Icon={IconBox} title="Total de Produtos" value={totalProdutos} />
            <InfoCards Icon={IconEx} title="Itens Com Estoque Baixo" value={itensComEstoqueBaixo} />
            <InfoCards Icon={IconUp} title="Entradas Do Dia" value={entradasDoDia} />
            <InfoCards Icon={IconDown} title="Saídas Do Dia" value={saidasDoDia} />
          </TopCards>

          <BottomCards>
            <MiniTable title="Últimas Movimentações no Estoque" data={movimentacoes} />
          </BottomCards>
        </Main>
    </Layout>
  );
}

export default Inicio;