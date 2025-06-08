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
} from '../common-styles'

export {
  H2Medium,
  ButtonPrimary
}

export const Container = styled(CommonContainer)``
export const Content = styled(CommonContent)``

export const Main = styled(MainWithBackground)`
  display: flex;
  flex-direction: column;
  padding: 35px;
  gap: 20px;
`

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100%;
`;

export const TopCards = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 20vh;
`;

export const Card = styled.div`
  background-color: #fff;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  width: 17vw;
  height: 20vh;
  justify-content: center;
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

export const BottomCards = styled.div`
  display: flex;
  justify-content: center;
`;

export const P = styled.p`
  font-size: 18px;
`;

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

export const Circle = styled.div`
  background-color: green;
  width: 15px;
  height: 15px;
  border-radius: 100%;
`;
