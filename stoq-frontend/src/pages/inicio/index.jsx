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

function Inicio() {
  useEffect(() => {
    document.title = 'Inicio';
  }, []);

  return (
    <Container>
      <Header />
      <Content>
        <Sidebar />
          <Main>
            <H2Medium>Início</H2Medium>

            <TopCards>
              <Card>
                <IconBox size="40" />
                <P>Total de Produtos</P>
                <P>32</P>
              </Card>
              <Card>
                <IconEx size="40" />
                <P>Produtos Com Estoque Baixo</P>
                <P>4</P>
              </Card>
              <Card>
                <IconUp size="40" />
                <P>Entradas Do Dia</P>
                <P>7</P>
              </Card>
              <Card>
                <IconDown size="40" />
                <P>Saídas Do Dia</P>
                <P>12</P>
              </Card>
            </TopCards>

            <BottomCards>
              <Card2>
                <P>Últimas Movimentações no Estoque</P>
                <Ul>
                  <Li><Circle /></Li>
                  <Li>Produto A - Entrada</Li>
                  <Li>5 KG</Li>
                  <Li>18/05/2025</Li>
                </Ul>
                <Ul>
                  <Li><Circle /></Li>
                  <Li>Produto B - Entrada</Li>
                  <Li>9 KG</Li>
                  <Li>18/05/2025</Li>
                </Ul>
                <Ul>
                  <Li><Circle /></Li>
                  <Li>Produto C - Entrada</Li>
                  <Li>1 KG</Li>
                  <Li>18/05/2025</Li>
                </Ul>
              </Card2>
            </BottomCards>
          </Main>
      </Content>
    </Container>
  );
}

export default Inicio;
