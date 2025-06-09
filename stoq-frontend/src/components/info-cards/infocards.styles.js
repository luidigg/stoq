import styled from 'styled-components';

export const Card = styled.div`
  background-color: #fff;
  border-radius: 10px;
  width: 18vw;
  height: 20vh;
  padding: 15px 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
`;

export const Title = styled.p`
  font-size: 15px;
  color: #000;
  margin: 0;
  padding-top: 5px;
`;

export const Value = styled.p`
  font-size: 36px;
  font-weight: 700;
  color: #222;
  text-align: center;
  margin-top: 20px;
`;
