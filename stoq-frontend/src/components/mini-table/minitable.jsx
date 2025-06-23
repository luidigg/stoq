import { Card2, P, Circle, IconUp, IconDown } from './minitable.styles';
import styled from 'styled-components';

// Estilizando a tabela
const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 16px;
`;

const Thead = styled.thead`
  font-weight: bold;
  color: #444;
  border-bottom: 2px solid #ccc;
`;

const Tbody = styled.tbody`
  tr:not(:last-child) {
    border-bottom: 1px solid #eee;
  }

  tr:hover {
    background-color: #f5f5f5;
  }
`;

const Td = styled.td`
  padding: 10px 5px;
  text-align: center;
`;

const MovementType = styled.div`
  display: flex;
  justify-content: left;
  gap: 5px;
  margin-left: 30%;
  font-weight: 500;
  color: #333;
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
              <Td>
                <MovementType>
                  {item.tipo === 'entrada' ? <IconUp size="18" /> : <IconDown size="18" />}
                  {item.tipo === 'entrada' ? 'Entrada' : 'Saída'}
                </MovementType>
              </Td>
              <Td>{item.descricao}</Td>
              <Td>{item.quantidade}</Td>
              <Td>{formatarData(item.dataEntrada)}</Td>
              <Td>{item.validade ? formatarData(item.validade) : '-'}</Td>
            </tr>
          ))}
        </Tbody>
      </Table>
    </Card2>
  );
};

export default MiniTable;