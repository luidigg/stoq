import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
`;

export const Content = styled.div`
  display: flex;
  margin-left: 18vw;
`;

export const Main = styled.main`
  width: 82vw;
  height: 90vh;
`;

export const MainWithBackground = styled(Main)`
  background: #DFFFF5;
`;

export const H2Large = styled.h2`
  font-size: 40px;
  margin-left: 3vw;
`;

export const H2Medium = styled.h2`
  font-size: 32px;
  color: #122E40;
`;

export const ButtonPrimary = styled.button`
  width: 30%;
  height: 45px;
  border-radius: 15px;
  border: 2px solid #1E8673;
  background: transparent;
  color: #000;
  font-size: 15px;
  font-weight: 700;
  line-height: 19px;
  cursor: pointer;
  transition: all 0.25s ease;
`;
