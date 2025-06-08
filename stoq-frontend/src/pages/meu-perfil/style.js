import styled from 'styled-components';
import { 
  Container,     
  Content,       
  MainWithBackground, 
  ButtonPrimary
} from '../common-styles';

export { 
  Container, 
  Content, 
  ButtonPrimary
};

export const Main = styled(MainWithBackground)`
  display: flex;
  justify-content: start;
  align-items: center;
  padding: 10px 20px;
  overflow-y: auto;
`;

export const Informacoes = styled.div`
  background-color: #E8FFF6;
  width: 100%;
  max-width: 600px;
  max-height: 100%;
  border-radius: 20px;
  padding: 30px 40px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  box-sizing: border-box;
  overflow-y: auto;

  @media (max-width: 600px) {
    padding: 20px 25px;
    border-radius: 15px;
  }
`;

export const Titulo = styled.h1`
  font-size: 28px;
  font-weight: 700;
  color: #122E40;
  margin-bottom: 18px;

  @media (max-width: 600px) {
    font-size: 24px;
    text-align: center;
  }
`;

export const TopSection = styled.div`
  display: flex;
  align-items: center;
  gap: 25px;
  border-bottom: 1px solid #ccc;
  padding-bottom: 18px;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: center;
    gap: 12px;
    padding-bottom: 12px;
  }
`;

export const ImgPerfil = styled.div`
  width: 110px;
  height: 110px;
  flex-shrink: 0;
  box-shadow: 0 3px 8px rgba(0,0,0,0.1);
  border-radius: 50%;

  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
  }
`;

export const TextTop = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  text-align: left;

  @media (max-width: 600px) {
    text-align: center;
  }
`;

export const Pnome = styled.p`
  color: #122E40;
  font-size: 22px;
  font-weight: 700;
`;

export const Pemail = styled.p`
  color: #122E40;
  font-size: 15px;
`;

export const InfoList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  max-width: 100%;

  @media (max-width: 600px) {
    gap: 10px;
  }
`;

export const InfoItem = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 8px 0;
  border-bottom: 1px solid #ccc;
  
  &:last-child {
    border-bottom: none;
  }

  @media (max-width: 400px) {
    flex-direction: column;
    gap: 5px;
  }
`;

export const Label = styled.span`
  font-weight: 600;
  color: #122E40;
  font-size: 15px;
`;

export const Valor = styled.span`
  color: #333;
  font-size: 14px;
  max-width: 60%;
  text-align: right;
  word-break: break-word;

  @media (max-width: 400px) {
    max-width: 100%;
    text-align: left;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

export const EditButton = styled(ButtonPrimary)`
  width: 140px;
  padding: 10px 0;
  background-color: #1E8673;
  color: white;
  border: none;
  font-size: 15px;
  font-weight: 700;
  border-radius: 25px;

  &:hover {
    background-color: #166a5a;
    box-shadow: 0px 4px 12px #166a5a;
    color: #e0f7f3;
  }

  &:active {
    box-shadow: 4px 4px 18px #166a5a;
  }
`;
