import styled from 'styled-components';
import {
  Container as CommonContainer,
  H2Medium as H2,
  ButtonPrimary,
  MainWithBackground
} from '../common-styles';
import { UilUser, UilAt, UilLock } from '@iconscout/react-unicons';

export { H2 };

// Container geral (sem padding à esquerda)
export const Container = styled(CommonContainer)`
  position: relative;
  padding: 0;
  overflow: hidden;
`;

// Content é flex container para responsividade, mas sem sidebar aqui
export const Content = styled.div`
  display: flex;
  min-height: 100vh;
  /* Não precisa gap */

  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

// Main recebe margin-left igual a sidebar para não ficar por baixo dela
export const Main = styled(MainWithBackground)`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 35px;
  margin-left: 18vw; /* evita sobreposição da sidebar fixa */
  overflow-y: auto;
  box-sizing: border-box;

  @media (max-width: 900px) {
    margin-left: 0; /* mobile, sem sidebar fixa */
    padding: 20px;
  }
`;

// Dentro do main, o conteúdo principal flexível
export const MainContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  margin-top: 25px;
  justify-content: space-between;
  width: 100%;

  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

// Sessão Logs - flexível e com scroll
export const SectionLogs = styled.section`
  flex: 1.2;
  min-width: 240px;
  background-color: #E8FFF6;
  padding: 25px 30px;
  border-radius: 20px;
  max-height: 80vh;
  overflow-y: auto;
  box-sizing: border-box;
`;

// Formulário - flexível, respeitando o espaço do main
export const SectionForm = styled.section`
  flex: 0.8;
  min-width: 200px;
  background-color: #fefefe;
  padding: 25px 30px;
  border-radius: 20px;
  box-shadow: 0 0 10px rgb(0 0 0 / 0.05);
  box-sizing: border-box;
`;

// Table e outros estilos sem alteração
export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 14px;
  color: #333;

  th, td {
    padding: 10px 8px;
    border-bottom: 1px solid #ccc;
    text-align: left;
  }

  th {
    background-color: #d1f0e7;
    font-weight: 600;
  }

  tbody tr:hover {
    background-color: #c8f2e1;
  }
`;

export const Tbody = styled.tbody``;
export const Thead = styled.thead``;
export const Tr = styled.tr``;
export const Th = styled.th``;
export const Td = styled.td``;

export const Form = styled.form``;

export const DivTexts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const DivInputs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const DivII = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 12px;

  svg {
    color: #1E8673;
  }
`;

export const Input = styled.input`
  flex: 1;
  padding: 8px 12px 8px 45px;
  font-size: 15px;
  border: 1.5px solid #b1b1b1;
  border-radius: 6px;
  background-color: #f9f9f9;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: #1E8673;
    background-color: #fff;
    box-shadow: 0 0 0 2px rgba(30, 134, 115, 0.2);
    outline: none;
  }
`;

export const ButtonRegister = styled(ButtonPrimary)`
  background-color: #1E8673;
  border-radius: 25px;
  padding: 12px 0;
  font-weight: 700;
  font-size: 16px;
  text-align: center;

  &:hover {
    background-color: #166a5a;
    box-shadow: 0px 4px 12px #166a5a;
    color: #e0f7f3;
  }

  &:active {
    box-shadow: 4px 4px 18px #166a5a;
  }
`;

export const ErrorMessage = styled.p`
  color: red;
  font-weight: 600;
  font-size: 14px;
`;

export const IconUser = styled(UilUser)`
  position: absolute;
  left: 15px;
  top: 50%;
  transform: translateY(-50%);
  width: 28px;
  height: 28px;
  color: #000;
`;

export const IconEmail = styled(UilAt)`
  position: absolute;
  left: 15px;
  top: 50%;
  transform: translateY(-50%);
  width: 28px;
  height: 28px;
  color: #000;
`;

export const IconPass = styled(UilLock)`
  position: absolute;
  left: 15px;
  top: 50%;
  transform: translateY(-50%);
  width: 28px;
  height: 28px;
  color: #000;
`;

export const P = styled.p`
  color: #000;
  font-size: 18px;
  font-weight: 700;
  line-height: 23px;
  text-align: center;
`;
