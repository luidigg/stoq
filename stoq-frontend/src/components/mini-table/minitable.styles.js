import styled from 'styled-components';
import {
  UilBox,
  UilExclamationTriangle,
  UilArrowDown,
  UilArrowUp
} from '@iconscout/react-unicons';

import {
  Container as CommonContainer,
  Content as CommonContent,
  MainWithBackground,
  H2Medium,
  ButtonPrimary,
} from '../../pages/common-styles';

export {
  H2Medium,
  ButtonPrimary
};

// Containers base
export const Container = styled(CommonContainer)``;
export const Content = styled(CommonContent)``;

export const Main = styled(MainWithBackground)`
  display: flex;
  flex-direction: column;
  padding: 35px;
  gap: 20px;
`;

// Layout de cards superiores e inferiores
export const TopCards = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px 0;
`;

export const BottomCards = styled.div`
  display: flex;
  justify-content: center;
`;

// Cards
export const Card = styled.div`
  background-color: #fff;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 17vw;
  height: 20vh;
`;

export const Card2 = styled.div`
  background-color: #fff;
  width: 79vw;
  border-radius: 10px;
  padding: 15px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

// Tipografia
export const P = styled.p`
  font-size: 15px;
  padding-left: 10px;
`;

// Lista antiga (mantida caso use em algum componente legado)
export const Ul = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-around;
  padding-left: 0;
`;

export const Li = styled.li`
  font-size: 18px;
  display: flex;
  align-items: center;
`;

// Ícones
export const IconBox = styled(UilBox)`
  color: #1E8673;
`;

export const IconEx = styled(UilExclamationTriangle)`
  color: #EB6613;
`;

export const IconUp = styled(UilArrowUp)`
  color: #1E8673;
`;

export const IconDown = styled(UilArrowDown)`
  color: #EB6613;
`;

// Indicador visual
export const Circle = styled.div`
  background-color: green;
  width: 15px;
  height: 15px;
  border-radius: 100%;
`;
