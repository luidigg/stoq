import styled from 'styled-components'

  export const Container = styled.div`
    height: 100vh;
    width: 100vw;
  `

  export const Content = styled.div`
    display: flex;
  `

  export const Main = styled.main`
    background: #DFFFF5;
    width: 82vw;
    height: 90vh;
    display:flex;
    justify-content:center;
    align-items:center;
  `
export const Informacoes = styled.div`
  background-color: #E8FFF6;
  height: 80%;
  width: 90%;
  border-radius: 20px;
`
  export const H2 = styled.h2`
    color: #122E40;
    font-size: 32px;
    margin: 30px 0 50px 70px;
  `
  export const DivTop = styled.div`
    display:flex;
    gap: 40px; 
    width: 100%;
    border-bottom: 1px solid #eee;
    padding-bottom: 20px;
  `
  export const TextTop = styled.div`
    
  `
  export const ImgPerfil = styled.div`
    width: 130px;
    height:130px;
    margin-left: 70px;
  `
  export const Pnome = styled.p`
    color: #122E40;
    font-size: 28px;
    font-weight: 700;
  `
  export const Pemail = styled.p`
    color: #122E40;
    font-size: 18px;
    
  `
  export const DivInfos = styled.div`
  
  `
  export const Campo = styled.div`
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #eee;
    padding: 10px 0 10px 20px;
  `
  export const Span = styled.span`
    font-size: 18px;
    color: #122E40;
    font-weight: 600;
  `
  export const Valores = styled.span`
    padding-right: 50%;
    display:flex;
  `
  export const DivButton = styled.div`
  display: flex;
  justify-content:center;
  margin-top: 13px;
  `
  export const Button = styled.button`
     width: 30%;
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