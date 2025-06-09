import { useEffect } from 'react';
import Sidebar from '../../components/sidebar';
import Header from '../../components/header';
import {
  TopCards,
  Card,
  BottomCards,
  Card2,
  P,
  Ul,
  Li,
  Circle,
  IconBox,
  IconEx,
  IconUp,
  IconDown,
  Container,
  Content,
  Main,
  H2Medium
} from './style';
import InfoCards from '../../components/info-cards/infocards';
import MiniTable from '../../components/mini-table/minitable';

function Inicio() {
  useEffect(() => {
    document.title = 'Inicio';
  }, []);

  const movimentacoes = [
    {
      tipo: 'entrada',
      descricao: 'Produto A',
      quantidade: '5 KG',
      dataEntrada: '01/06/2025',
      validade: '15/06/2025'
    },
    {
      tipo: 'saida',
      descricao: 'Produto B',
      quantidade: '2 KG',
      dataEntrada: '02/06/2025',
      validade: '20/06/2025'
    },
    {
      tipo: 'entrada',
      descricao: 'Produto C',
      quantidade: '3 KG',
      dataEntrada: '03/06/2025',
      validade: '25/06/2025'
    },
        {
      tipo: 'entrada',
      descricao: 'Produto E',
      quantidade: '5 KG',
      dataEntrada: '01/06/2025',
      validade: '15/06/2025'
    },
    {
      tipo: 'saida',
      descricao: 'Produto Y',
      quantidade: '2 KG',
      dataEntrada: '02/06/2025',
      validade: '20/06/2025'
    }
  ];

  return (
    <Container>
      <Header />
      <Content>
        <Sidebar />
        <Main>
          <H2Medium>Início</H2Medium>

          <TopCards>
            <InfoCards Icon={IconBox} title="Total de Produtos" value={32} />
            <InfoCards Icon={IconEx} title="Itens Com Estoque Baixo" value={4} />
            <InfoCards Icon={IconUp} title="Entradas Do Dia" value={7} />
            <InfoCards Icon={IconDown} title="Saídas Do Dia" value={12} />
          </TopCards>

          <BottomCards>
            <MiniTable title="Últimas Movimentações no Estoque" data={movimentacoes} />
          </BottomCards>
        </Main>
      </Content>
    </Container>
  );
}

export default Inicio;
