import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
`;

export const Content = styled.div`
  display: flex;
  margin-left: ${(props) => (props.isOpen ? "18vw" : "0")};
  transition: margin-left 0.3s ease;
`;

export const Main = styled.main`
  flex: 1;
  height: 90vh;
  overflow-y: auto;
  transition: all 0.3s ease;
`;