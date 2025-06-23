import { Card2, P, IconUp, IconDown } from './minitable.styles';
import styled from 'styled-components';

// Estilizando a tabela
const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 16px;

  @media (max-width: 768px) {
    border: none;
  }
`;

const Thead = styled.thead`
  font-weight: bold;
  color: #444;
  border-bottom: 2px solid #ccc;

  @media (max-width: 768px) {
    display: none;
  }
`;

const Tbody = styled.tbody`
  tr:not(:last-child) {
    border-bottom: 1px solid #eee;
  }

  tr:hover {
    background-color: #f5f5f5;
  }

  @media (max-width: 768px) {
   
    tr:not(:last-child) {
      border-bottom: none;
    }

    tr {
      display: block;
      border: 1px solid #ccc;
      border-radius: 8px;
      margin-bottom: 15px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.05);
    }
  }
`;

const Td = styled.td`
  padding: 10px 5px;
  text-align: center;
  vertical-align: middle;

  @media (max-width: 768px) {
    display: block;
    text-align: right; /* Alinha o valor à direita */
    padding: 20px;
    padding-left: 50%; /* Deixa espaço para o rótulo */
    position: relative;
    border-bottom: 1px solid #eee; /* Linha separadora entre os dados do card */

    &:last-child {
      border-bottom: none; /* Remove a borda do último item */
    }

    /* O truque mágico: Adiciona o cabeçalho como um rótulo antes do dado */
    &::before {
      content: attr(data-label); /* Pega o texto do atributo 'data-label' */
      position: absolute;
      left: 10px;
      width: 45%;
      padding-right: 10px;
      text-align: left;
      font-weight: bold;
      color: #333;
    }
  }
`;

const MovementType = styled.div`
  display: flex;
  justify-content: center;
  align-items:center;
  gap: 8px;
  margin-left: 30%;
  font-weight: 500;
  color: #333;

  /* Ajustes para o layout de card no mobile */
  @media (max-width: 768px) {
    justify-content: flex-end; /* Alinha o conteúdo à direita, como as outras células */
    width: 100%;
    margin-left: 0;
  }
`;

const formatarData = (dataStr) => {
  if (!dataStr) return '';
  const data = new Date(dataStr);
  return data.toLocaleDateString('pt-BR');
}

const MiniTable = ({ title, data }) => {
  return (
    <Card2>
      <P>{title}</P>
      <Table>
        <Thead>
          <tr>
            <Td>Tipo</Td>
            <Td>Descrição</Td>
            <Td>Quantidade</Td>
            <Td>Data da Entrada</Td>
            <Td>Validade</Td>
          </tr>
        </Thead>
        <Tbody>
          {data.slice(0, 5).map((item, index) => (
            <tr key={index}>
              <Td data-label='Tipo'>
                <MovementType>
                  {item.tipo === 'entrada' ? <IconUp size="18" /> : <IconDown size="18" />}
                  {item.tipo === 'entrada' ? 'Entrada' : 'Saída'}
                </MovementType>
              </Td>
              <Td data-label='Descrição'>{item.descricao}</Td>
              <Td data-label='Quantidade'>{item.quantidade}</Td>
              <Td data-label='Data de Entrada'>{formatarData(item.dataEntrada)}</Td>
              {item.validade && (
                <Td data-label='Validade'>{formatarData(item.validade)}</Td>
              )}
            </tr>
          ))}
        </Tbody>
      </Table>
    </Card2>
  );
};

export default MiniTable;