import React from 'react';
import styled from 'styled-components';
import { UilTimes } from '@iconscout/react-unicons';

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0,0,0,0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
`;

const Box = styled.div`
  background: white;
  padding: 1.5rem 2rem;
  border-radius: 12px;
  max-width: 360px;
  width: 100%;
  box-shadow: 0 8px 20px rgba(0,0,0,0.15);
  position: relative;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: transparent;
  border: none;
  cursor: pointer;
  color: #555;
`;

const MessageText = styled.p`
  font-size: 16px;
  color: #333;
  margin: 0;
  padding-right: 30px; /* espaço para o botão fechar */
`;

export default function MessageBox({ message, onClose }) {
  return (
    <Overlay>
      <Box>
        <CloseButton onClick={onClose}>
          <UilTimes size="20" />
        </CloseButton>
        <MessageText>{message}</MessageText>
      </Box>
    </Overlay>
  );
}