import styled from 'styled-components';

export const SideBar = styled.div`
  /* width: 18vw; */
  height: 90vh;
  background: #C7DAD4;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-top: 30px;
  position: fixed;
  top: 10vh; /* considerando que o header tem 10vh */
  left: 0;
  box-shadow: 2px 0 10px rgba(0, 0, 0, 0.1);
  z-index: 10;

  width: ${(props) => (props.isOpen ? '18vw' : '0')};
  overflow: hidden;
  transition: width 0.3s ease;
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

  &:hover {
    background-color: #b0ccc3;
    font-weight: 600;
  }

  svg {
    min-width: 30px;
  }
`;
