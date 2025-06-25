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

export const DivEstoqueBaixo = styled.div`
@media (max-width: 768px){
   width: 100%;
  display: flex;
  justify-content: center;
}
 
`

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

export const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1003;
  opacity: ${props => (props.isOpen ? '1' : '0')};
  visibility: ${props => (props.isOpen ? 'visible' : 'hidden')};
  transition: opacity 0.3s ease, visibility 0.3s ease;
`;

export const ModalContent = styled.div`
  background: white;
  padding: 25px 30px;
  border-radius: 8px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.3);
  width: 90%;
  max-width: 500px;
  position: relative;
  transform: ${props => (props.isOpen ? 'translateY(0)' : 'translateY(-30px)')};
  transition: transform 0.3s ease;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
  background: transparent;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: #555;
`;

export const ModalTitle = styled.h2`
  margin-top: 0;
  color: #333;
  font-size: 30px;
`;

export const ItemList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin-top: 20px;
  max-height: 300px;
  overflow-y: auto;
`;

export const ListItem = styled.li`
  padding: 10px;
  border-bottom: 1px solid #eee;
  display: flex;
  justify-content: space-between;

  &:last-child {
    border-bottom: none;
  }
`;

export const ListHeader = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr; 
  gap: 10px;
  padding: 0 10px 10px 10px;
  border-bottom: 2px solid #ccc;
  
  span {
    font-weight: bold;
    color: #333;
    font-size: 18px;
  }
  span:last-child {
    text-align: right;
  }
`;