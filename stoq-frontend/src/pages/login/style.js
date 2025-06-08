import styled from 'styled-components';
import { UilAt, UilLock } from '@iconscout/react-unicons';

// Container principal da página
export const Container = styled.div`
  background-color: #DFFFF5;  
  height: 100vh;
  display: flex;
  position: relative; /* necessário para posicionar os filhos absolutos */
  overflow: hidden; /* impede que vetores "vazem" */
  justify-content: center;
  align-items: center;
`;

// Formulário de login
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 352px;
  gap: 10px;
`;

// Container para textos do topo do form
export const DivTexts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

// Título principal
export const H2 = styled.h2`
  font-size: 40px;
  font-weight: 700;
  line-height: 52px;
  color: #000;
  text-align: center;
`;

// Parágrafos gerais
export const P = styled.p`
  color: #000;
  font-size: 18px;
  font-weight: 700;
  line-height: 23px;
  width: 330px;
`;

// Container para os inputs
export const DivInput = styled.div``;

// Input estilizado
export const Input = styled.input`
  width: 100%;
  border-radius: 15px;
  border: 1px solid #1E8673;
  background: transparent;
  padding-left: 60px;
  font-size: 15px;
  line-height: 19px;
  color: #000;
  height: 45px;
  outline: none;
  font-weight: 700;

  &:hover {
    box-shadow: 1px 1px 5px #1E8673;
  }
`;

// Botão para entrar
export const ButtonEntrar = styled.button`
  width: 100%;
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

  &:hover {
    background-color: #1E8673;
    color: #fff;
    transform: scale(1.05);
  }
`;

// Botão para registro (link)
export const ButtonRegister = styled.button`
  display: inline;
  border: none;
  background: transparent;
  color: #1E8673;
  font-size: 18px;
  cursor: pointer;
  font-weight: 700;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

// Ícone email
export const IconEmail = styled(UilAt)`
  position: absolute;
  left: 15px;
  top: 50%;
  transform: translateY(-50%);
  width: 37px;
  height: 37px;
  color: #000;
`;

// Ícone senha
export const IconPass = styled(UilLock)`
  position: absolute;
  left: 15px;
  top: 50%;
  transform: translateY(-50%);
  width: 37px;
  height: 37px;
  color: #000;
`;

// Container para input + ícone (posição relativa)
export const DivII = styled.div`
  position: relative;
  width: 100%;
  height: 45px;
  margin-bottom: 16px;
`;

export const ImgBottom = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 15%;
  pointer-events: none;
  line-height: 0;

  img {
    display: block;
    width: 100%;
    height: auto;
    margin: 0;
    padding: 0;
  }
`;

export const ImgVetor = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 30%;
  pointer-events: none;
  line-height: 0;

  img {
    display: block;
    width: 100%;
    height: auto;
    margin: 0;
    padding: 0;
  }
`;


// Imagem círculo no canto superior esquerdo
export const ImgTop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 18%;
  pointer-events: none;

  img {
    display: block;
    width: 100%;
    height: auto;
  }
`;
