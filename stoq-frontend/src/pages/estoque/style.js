import styled from 'styled-components'
import {
  Container as CommonContainer,
  Content as CommonContent,
  MainWithBackground,
  H2Medium,
  ButtonPrimary,
} from '../common-styles'

const breakpoints = {
  mobile: '768px',
};

export const Container = styled(CommonContainer)``
export const Content = styled(CommonContent)``
export const Main = styled(MainWithBackground)`
  display: flex;
  flex-direction: column;
  padding: 35px;
  gap: 20px;

  @media (max-width: ${breakpoints.mobile}) {
    padding: 20px 15px;
  }
`
export const H2 = styled(H2Medium)``

export const DivButtons = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  gap: 8px;

  @media (max-width: ${breakpoints.mobile}) {
    flex-direction: column-reverse;
    align-items: stretch;
    gap: 12px;
  }
`

export const ButtonAdd = styled(ButtonPrimary)`
  display: flex;
  align-items: center;
  gap: 7px;
  background-color: #1E8673;
  color: #fff;
  border: none;
  width: auto;
  padding: 6px 17px;
  font-size: 18px;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.6;
  }
`

export const ButtonRemove = styled(ButtonPrimary)`
  display: flex;
  align-items: center;
  gap: 7px;
  background-color:rgb(134, 30, 30);
  color: #fff;
  border: none;
  width: auto;
  padding: 6px 17px;
  font-size: 18px;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.6;
  }
`

export const DivTable = styled.div`
  width: 100%;
  height: 55vh;
  background-color: #fff;
  overflow-y: auto;
  border-radius: 10px;
  overflow-x: auto;
`

export const Table = styled.table`
  border-collapse: separate;
  border-spacing: 0;
  border-radius: 10px;
  width: 100%;
  text-align: center;
  min-width: 800px;
`

export const Thead = styled.thead`
  background-color: #E7EFF3;
  color: #495D69;
  font-size: 20px;
  line-height: 24px;
`

export const Tr = styled.tr``

export const Th = styled.th`
  padding: 8px 0;
`
export const Tbody = styled.tbody`
  color: #333;
  font-size: 19px;
  font-weight: 400;
  line-height: 24px;
`
export const Td = styled.td`
  padding: 5px;
  border-bottom: 1px solid #eee;
`
export const ButtonIcon = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  transition: all 0.5s ease;

  &:hover {
    transform: scale(1.1);
  }
`
export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1403;
  padding: 15px;
`
export const ModalContent = styled.div`
  background: #ffffff;
  padding: 25px 30px;
  border-radius: 16px;
  width: 500px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
  position: relative; 
  max-height: 95vh;
  overflow-y: auto;

  @media (max-width: ${breakpoints.mobile}) {
    width: 100%; 
  }
`;
export const BotoesWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 4rem;
  margin-top: 1rem;

  @media (max-width: ${breakpoints.mobile}) {
    gap: 1rem;
    flex-direction: column-reverse;
    align-items: stretch;
  }
`;
export const Datas = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  justify-content: space-between;

  @media (max-width: ${breakpoints.mobile}) {
    flex-direction: column;
  }
`
export const Label = styled.label`
  display: flex;
  flex-direction: column;
  font-size: 14px;
  font-weight: 500;
  color: #333;
  gap: 4px;
  width: 100%;
`
export const DivClose = styled.div`
  display: flex;
  justify-content: flex-end;
`
export const InputAdd = styled.input`
  width: 100%;
  padding: 10px 14px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 10px;
  outline: none;
  transition: border 0.3s ease;

  &:focus {
    border-color: #1e8673;
  }
`;
export const ButtonSalvar = styled(ButtonPrimary)`
  background-color: #1E8673;
  color: #fff;
  padding: 5px 45px;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    box-shadow: 0 0 10px rgb(0, 108, 88);
  }

  &:active {
    opacity: 0.5;
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
    box-shadow: none;
  }
`
export const ButtonCancelar = styled(ButtonPrimary)`
  color: #ff4d4f;
  padding: 5px 45px;
  border: 2px solid #ff4d4f;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: #ff4d4f;
    color: #fff;
  }
`
export const Select = styled.select`
  width: 100%;
  padding: 10px 14px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 10px;
  outline: none;
  transition: border 0.3s ease;

  &:focus {
    border-color: #1e8673;
  }
`;

export const SmallModalContent = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 15px;
  width: 100%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  position: relative;

  @media (max-width: ${breakpoints.mobile}) {
      width: 100%;
  }
`;

export const HeaderModal = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
`;

export const TituloModal = styled.h3`
  font-size: 24px;
  margin: 0;
`;

export const ButtonClose = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  position: absolute;
  top: 1rem;
  right: 1rem;
`;

export const ModalButtons = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 15px;
  margin-top: 10px;
`;

export const QuantidadeWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

export const BotaoTudo = styled.button`
  position: absolute;
  right: 10px;
  padding: 4px 8px;
  font-size: 12px;
  background-color:rgba(0, 0, 0, 0.38);
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background-color:rgb(141, 141, 141);
  }
`;

