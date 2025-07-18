import styled from 'styled-components';

export const Container = styled.div``;

export const Main = styled.main`
  background-color: #f0f5f3;
  height: 90vh; 
  overflow-y: auto; 
  transition: margin-left 0.3s ease-in-out;

  @media (min-width: 1025px) {
    margin-left: ${(props) => (props.isOpen ? '18vw' : '0')};
  }
`;
export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 15; 
  
  
  @media (min-width: 1025px) {
    display: none;
  }
`;

export const SideBar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 18vw;
  height: 100vh;
  background: #fff;
  z-index: 1000; /* abaixo do overlay */
  transition: transform 0.3s ease;
  transform: ${({ isOpen }) => (isOpen ? 'translateX(0)' : 'translateX(-100%)')};
`;
