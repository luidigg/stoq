import styled from 'styled-components';

export const Head = styled.header`
  height: 10vh;
  background-color: #1E8673;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1425px;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;

export const CenterText = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  color: #fff;
  font-size: 18px;
  font-weight: 500;
  pointer-events: none; /* impede cliques acidentais */
`;


export const Logo = styled.img`
  height: 70%; 
  max-height: 120px;
`;

export const UserBlock = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  color: #fff;
`;

export const Username = styled.span`
  font-size: 16px;
  font-weight: bold;
`;

export const LogoutButton = styled.button`
  background: transparent;
  border: 1px solid #fff;
  color: #fff;
  font-size: 14px;
  padding: 6px 12px;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: rgb(202, 35, 35);
    color: #fff;
  }
`;
