import styled from 'styled-components';

const breakpoints = {
  mobile: '768px'
}

export const Card = styled.div`
  background-color: #fff;
  border-radius: 10px;
  width: 18vw;
  min-height: 150px;
  padding: 15px 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: ${breakpoints.mobile}) {
    width: 50%; 
    min-height: auto;
    padding: 25px 20px; 
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
`;

export const Title = styled.p`
  font-size: 15px;
  color: #333;
  margin: 0;
  padding-top: 5px;
  font-weight: 500;
  
`;

export const Value = styled.p`
  font-size: 36px;
  font-weight: 700;
  color: #222;
  text-align: center;
  margin: 15px 0 0 0;

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 30px;
  }
`;

export const SubText = styled.span`
  display: block;
  font-size: 12px;
  color: rgba(0, 0, 0, 0.7); /* cinza opaco */
  margin-top: 4px;
  text-align: left;
`;
