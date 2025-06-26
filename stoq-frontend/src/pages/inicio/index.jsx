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
  H2Medium,
  ModalBackdrop,
  ModalContent,
  CloseButton,
  ModalTitle,
  ItemList,
  ListItem,
  ListHeader,
  DivEstoqueBaixo
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
  const [estoqueBaixo, setEstoqueBaixo] = useState([]);


  // estados do modal
  const [isModalOpen, setIsModalOpen] = useState(false);

  // função para fechar o modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
  }

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

  const fetchEstoqueBaixo = async () => {
    try {
      const response = await axios.get('/api/estoque/estoque-baixo', { withCredentials: true });
      setEstoqueBaixo(response.data);
    } catch (error) {
      console.error('Erro ao buscar itens com estoque baixo:', error);
    }
  };

  const handleOpenLowStockModal = () => {
    fetchEstoqueBaixo(); // carrega os dados
    setIsModalOpen(true); // depois abre o modal
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
          <DivEstoqueBaixo
            onClick={handleOpenLowStockModal}
            style={{ cursor: itensComEstoqueBaixo > 0 ? 'pointer' : 'default' }}
          >
            <InfoCards Icon={IconEx} title="Itens Com Estoque Baixo" value={itensComEstoqueBaixo} />
          </DivEstoqueBaixo>

          <InfoCards Icon={IconUp} title="Entradas Do Dia" value={entradasDoDia} />
          <InfoCards Icon={IconDown} title="Saídas Do Dia" value={saidasDoDia} />
        </TopCards>

        <BottomCards>
          <MiniTable title="Últimas Movimentações no Estoque" data={movimentacoes} />
        </BottomCards>
      </Main>

      <ModalBackdrop isOpen={isModalOpen} onClick={handleCloseModal}>
        <ModalContent isOpen={isModalOpen} onClick={(e) => e.stopPropagation()}>
          <CloseButton onClick={handleCloseModal}>&times;</CloseButton>
          <ModalTitle>Itens Com Estoque Baixo</ModalTitle>

          <ItemList>
            <ListHeader>
              <span>Produto</span>
              <span>Quantidade</span>
            </ListHeader>

            {estoqueBaixo.length > 0 ? (
              estoqueBaixo.map((item, index) => (
                <ListItem key={index}>
                  <span>{item.nome}</span>
                  <strong>Restam: {item.quantidade}</strong>
                </ListItem>
              ))
            ) : (
              <ListItem>
                <span>Nenhum item com estoque crítico</span>
              </ListItem>
            )}
          </ItemList>
        </ModalContent>
      </ModalBackdrop>
    </Layout>
  );
}

export default Inicio;