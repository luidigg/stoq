import styled from 'styled-components'
import { UilUser, UilAt, UilLock  } from '@iconscout/react-unicons'; 


export const IconUser = styled(UilUser)`
    position: absolute;
    left:15px;
    top: 50%;
    transform: translateY(-50%);
    width: 37px;
    height: 37px;
    color: #000;
`
export const IconEmail = styled(UilAt)`
    position: absolute;
    left:15px;
    top: 50%;
    transform: translateY(-50%);
    width: 37px;
    height: 37px;
    color: #000;
`
export const IconPass = styled(UilLock)`
    position: absolute;
    left:15px;
    top: 50%;
    transform: translateY(-50%);
    width: 37px;
    height: 37px;
    color: #000;
`
export const Container = styled.div`
    background-color:#DFFFF5;
    height: 100vh;
    display:flex;
    justify-content:center;
    align-items:center;
    position: relative;
`

export const Input = styled.input`
    width: 100%;
    height: 100%;
    border-radius: 15px;
    border: 1px solid  #1E8673;
    background: transparent;
    padding-left: 60px;
    font-size: 15px;
    line-height: 19px;
    color: #000;
    font-weight: 700;
    outline: none;

    &:hover {
       box-shadow: 1px 1px 5px #1E8673;
    }
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 10px;
`

export const DivTexts = styled.div`
    text-align: center;
    width: 352px;
    display: flex;
    flex-direction: column;
    gap: 10px;
`

export const DivInputs = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 10px;
`

export const H2 = styled.h2 `
    color: #000;
    font-size: 40px;
    font-weight: 700;
    line-height: 52px;
    
`

export const P = styled.p `
    color: #000;
    font-size: 18px;
    font-weight: 700;
    line-height: 23px;
    text-align: center;
`

export const ButtonRegister = styled.button`
    width: 100%;
    height: 45px;
    border-radius:15px;
    border: 2px solid #1E8673;
    background: transparent;
    color: #000;
    font-size: 15px;
    font-weight: 700;
    line-height: 19px;
    cursor: pointer;
    transition: all 0.25s ease; /* deixa suave a transição */

    &:hover {
       box-shadow: 0px 4px 15px #1E8673;
    }

    &:active {
        box-shadow: 4px 4px 20px #1E8673;
    }
`

export const DivII = styled.div`
    position: relative;
    width: 100%; /* mesmo tamanho do input */
    height: 45px;
    margin-bottom: 16px;
`

export const ButtonLogin = styled.button`
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
`

export const ImgTop = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 18%;
    
    img {
        width: 100%;
        height: auto;
    }
`

export const ImgBottom = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 15%;

    img {
        width: 100%;
        height: auto;
    }
`

export const ImgVetor = styled.div`
    position: absolute;
    bottom: 0;
    right: 0;
    width: 30%;

    img {
        width: 100%;
        height: auto;
    }
`