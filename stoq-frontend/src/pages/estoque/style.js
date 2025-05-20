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
    display: flex;
    flex-direction: column;
    /* align-items: center;  */
  `

  export const H1 = styled.h1`
    margin: 56px 0 40px 45px;
    font-size: 32px;
    font-weight: 700;
    line-height: 38px;
  `

  export const Texts = styled.div`
    display: flex;
    justify-content: flex-start;
    width: 78vw;
    padding-bottom: 1.5vh;
    display: flex;
    justify-content: space-around;
  `
  export const Button = styled.button`
    background-color: transparent;
    border: none;
    cursor: pointer;
    font-size: 24px;
    font-weight: 700;
    line-height: 29px;
    padding-right: 35px;
    color: #122E40;
    transition: transform .5s ease;
    &:hover{
      transform: scale(1.05)
    }
  `
  export const DivTable = styled.div`
    background-color: #fff;
    width: 78vw;
    height: 100%;
    border-radius:10px;
    overflow:hidden;
  `

  export const Table = styled.table`
   width: 100%;
   border-collapse: collapse;
  `

  export const Coluna = styled.thead`

  `

  export const LinhaColuna = styled.tr`
    background: #E7EFF3;
  `
  export const LinhaDados = styled.tr`
   
  `
  export const Nome = styled.th`
    color: #495D69;
    font-size: 20px;
    font-weight: 700;
    line-height: 24px;
    text-align:left;
    padding: 12px 16px;
  `
  export const Dados = styled.tbody`
  
  `
  export const Item = styled.td`
    color: #333;
    font-size: 24px;
    font-weight: 400;  
    vertical-align: middle;
    border-bottom: 1px solid #eee;
    padding: 12px 16px;
  `