import styled from 'styled-components';
import {
  UilArrowDown,
  UilArrowUp
} from '@iconscout/react-unicons';

export const Card2 = styled.div`
  background-color: #fff;
  width: 79vw;
  border-radius: 10px;
  padding: 15px;
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media (max-width: 768px) {
    width: 90vw; 
    padding: 10px;
  }
`;

// Tipografia
export const P = styled.p`
  font-size: 15px;
  padding-left: 10px;
  font-weight: bold;
`;

// Ícones
export const IconUp = styled(UilArrowUp)`
  color: #1E8673;
`;

export const IconDown = styled(UilArrowDown)`
  color: #EB6613;
`;


