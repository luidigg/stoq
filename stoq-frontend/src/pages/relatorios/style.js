import styled from 'styled-components';

import {
  Container,
  Content,
  MainWithBackground,
  H2Medium,
  ButtonPrimary,
} from '../common-styles';

export {
  Container,
  Content,
  H2Medium as H2,
  ButtonPrimary as Button,
};

export const Main = styled(MainWithBackground)`
  display: flex;
  flex-direction: column;
  padding: 35px;
  gap: 20px;
`;

export const FiltrosLinhaSuperior = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  width: 100%;
`;

export const FiltrosEBotoesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
`;

export const LinhaSuperior = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  width: 100%;
  margin-top: 5px;
`;

export const LinhaInferior = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  flex-wrap: wrap;
  gap: 10px;
  width: 100%;
  margin-bottom: 15px;
`;

export const DivFiltros = styled.div`
  flex: 1;
  min-width: 300px;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const FiltroDataContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  flex: 1;
  min-width: 300px;

  label {
    margin-bottom: 4px;
  }

  input {
    width: 160px;
    padding: 8px;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  flex-shrink: 0;

  button {
    padding: 10px 20px;
    min-width: 140px;
    font-size: 14px;
  }
`;

export const Select = styled.select`
  font-size: 16px;
  outline: none;
  width: 15vw;
  background: transparent;
  padding: 6px 10px;
  border-radius: 8px;
  border: 1px solid #ccc;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: #007bff;
  }
`;

export const Label = styled.label`
  font-size: 17px;
  margin-bottom: 6px;
  display: block;
`;

const flexColumnAlignStart = `
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const SelectMovimento = styled.div`
  ${flexColumnAlignStart}
`;

export const SelectProduto = styled.div`
  ${flexColumnAlignStart}
`;

export const SelectCategoria = styled.div`
  ${flexColumnAlignStart}
`;

export const SelectData = styled.div`
  display: flex;
  gap: 10px;
  align-items: flex-end;
  flex-wrap: nowrap;
`;

export const InputData = styled.input`
  width: 10vw;
  height: 4vh;
  background: transparent;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 6px 10px;
  font-size: 16px;
  outline: none;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: #007bff;
  }
`;

export const DivResultado = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Span = styled.span`
  color: gray;
`;

export const Table = styled.table`
  background-color: #fff;
  border-radius: 10px;
  border-collapse: collapse;
  overflow: hidden;
  width: 100%;
`;

export const Thead = styled.thead``;

export const Tr = styled.tr`
  text-align: center;
  border-bottom: 1px solid #eee;
`;

export const Th = styled.th`
  padding: 7px 0;
`;

export const Tbody = styled.tbody``;

export const Td = styled.td`
  padding: 7px 0;
`;

export const DivTable = styled.div`
  max-height: 35vh;
  overflow-y: auto;
  width: 100%;
`;
