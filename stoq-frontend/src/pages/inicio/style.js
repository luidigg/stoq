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
  min-height: calc(100vh-10vh);
  
  @media (max-width: ${breakpoints.mobile}) {
    padding: 20px 15px;
    overflow-y: auto;
  }
`
export const TopCards = styled.div`  
  display: flex;
  justify-content: space-between;
  margin: 10px 0 10px 0;

  @media (max-width: ${breakpoints.mobile}) {
    flex-direction: column;
    gap: 15px;
    align-items:center;
  }
`;
export const BottomCards = styled.div`
  display: flex;
  justify-content: center;
`;
export const IconBox = styled(UilBox)`
  color:rgb(255, 157, 0);
`;
export const IconEx = styled(UilExclamationTriangle)`
  color:rgb(255, 0, 0);
`;
export const IconUp = styled(UilArrowUp)`
  color:rgb(27, 198, 50);
`;
export const IconDown = styled(UilArrowDown)`
  color:rgb(255, 0, 0);
`;
