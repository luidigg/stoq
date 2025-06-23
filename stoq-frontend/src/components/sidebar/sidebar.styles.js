import styled from 'styled-components';

export const SideBar = styled.aside`
  background: #C7DAD4;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-top: 30px;
  position: fixed;
  left: 0;
  top: 10vh; 
  height: 90vh; 
  z-index: 1002;
  box-shadow: 2px 0 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;
  transform: translateX(-100%);
  ${(props) => props.isOpen && `
    transform: translateX(0);
  `}

  @media (min-width: 1025px) {
    width: 18vw;
  }

  @media (max-width: 1024px) {
    width: 280px; 
  }
`;


export const Button = styled.button`
  display: flex;
  align-items: center;
  width: 100%;
  height: 60px;
  color: #000;
  font-size: 18px;
  font-weight: 500;
  padding-left: 25px;
  gap: 12px;
  border: none;
  cursor: pointer;
  background: transparent;
  transition: all 0.3s ease;
  position: relative;
  white-space: nowrap;

  &:hover {
    background-color: #b0ccc3;
    font-weight: 600;
  }

  svg {
    min-width: 30px;
  }
`;