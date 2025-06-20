import styled from 'styled-components';

export const InputAdd = styled.input`
  width: 100%;
  padding: 10px 14px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 10px;
  outline: none;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: #1e8673;
    box-shadow: 0 0 8px rgba(30, 134, 115, 0.5);
  }
`;

export const SugestoesList = styled.ul`
  position: absolute;
  background: #fff;
  border: 1px solid #1e8673;
  margin-top: 4px;
  width: 100%;
  z-index: 10;
  list-style: none;
  padding: 0;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(30, 134, 115, 0.3);
  max-height: 160px;
  overflow-y: auto;
`;

export const SugestaoItem = styled.li`
  padding: 10px 16px;
  cursor: pointer;
  border-bottom: 1px solid #e0e0e0;
  font-weight: 500;
  color: #333;
  transition: background-color 0.2s ease;

  &:last-child {
    border-bottom: none;
  }

  &:hover,
  &:focus {
    background-color: #1e8673;
    color: white;
    outline: none;
  }
`;
