import styled from 'styled-components';
import {
  H2Medium as H2,
  ButtonPrimary,
  MainWithBackground
} from '../common-styles';
import { UilUser, UilAt, UilLock } from '@iconscout/react-unicons';

export { H2 };

export const Main = styled(MainWithBackground)`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 35px;
  overflow-y: auto;
  box-sizing: border-box;

  @media (max-width: 900px) {
    margin-left: 0;
    padding: 20px;
  }
`;

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

export const SectionLogs = styled.section`
  flex: 1.2;
  min-width: 240px;
  background-color: #fefefe;
  padding: 25px 30px;
  border-radius: 20px;
  box-shadow: 0 0 10px rgb(0 0 0 / 0.05);
  max-height: 70vh;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;

  h2 {
    text-align: center;
    margin-bottom: 20px;
    font-weight: 700;
    color: #000;
  }
`;

export const SectionForm = styled.section`
  flex: 0.8;
  min-width: 200px;
  background-color: #fefefe;
  padding: 25px 30px;
  border-radius: 20px;
  box-shadow: 0 0 10px rgb(0 0 0 / 0.05);
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  max-height: 80vh;
`;

export const TableContainer = styled.div`
  flex: 1;
  overflow-y: auto;
  min-height: 200px;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 14px;
  color: #333;
  table-layout: fixed;
`;

export const Thead = styled.thead`
  display: table;
  width: 100%;
  table-layout: fixed;
  background-color: #d1f0e7;
  position: sticky;
  top: 0;
  z-index: 1;
`;

export const Tbody = styled.tbody`
  display: block;
  width: 100%;
`;

export const Tr = styled.tr`
  display: table;
  width: 100%;
  table-layout: fixed;
`;

export const Th = styled.th`
  padding: 10px 8px;
  font-weight: 600;
  text-align: left;
  border-bottom: 1px solid #ccc;
  background-color: #d1f0e7;
`;

export const Td = styled.td`
  padding: 10px 8px;
  border-bottom: 1px solid #ccc;
  word-break: break-word;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const DivTexts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const DivInputs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const DivII = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 12px;

  svg {
    color: #1e8673;
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
    border-color: #1e8673;
    background-color: #fff;
    box-shadow: 0 0 0 2px rgba(30, 134, 115, 0.2);
    outline: none;
  }
`;

export const ButtonRegister = styled(ButtonPrimary)`
  background-color: #1e8673;
  border-radius: 25px;
  padding: 12px 0;
  font-weight: 700;
  font-size: 16px;
  text-align: center;
  color: #fff;

  &:hover {
    background-color: #166a5a;
    box-shadow: 0px 4px 12px #166a5a;
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
  font-size: 16px;
  font-weight: 400;
  line-height: 23px;
  text-align: center;
`;