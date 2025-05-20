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
  `
  export const Box = styled.div`
    padding: 25px;
  `
  export const H2 = styled.h2`
    font-size: 32px;
    
  `
  export const DivFiltros = styled.div`
    display: flex;
    gap: 50px;
    /* justify-content: space-around; */
    margin-top: 20px;
    flex-wrap: wrap;
  `
  export const Select = styled.select`
    font-size: 16px;
    outline: none;
    width: 15vw;
    background: transparent;
  `
  export const Label = styled.label`
    font-size: 17px;;
  `
  export const SelectMovimento = styled.div`
    display:flex;
    align-items: center;
    gap: 10px;
    height: 4vh;
  `
  export const SelectProduto = styled.div`
    display:flex;
    align-items: center;
    gap: 10px;
    height: 4vh;
  `
  export const SelectCategoria = styled.div`
    display:flex;
    align-items: center;
    gap: 10px;
    height: 4vh;
  `
  export const SelectData = styled.div`
    display:flex;
    width: 100%;
    gap: 10px;
    
  `
  export const InputData = styled.input`
    width: 10vw;
    height: 4vh;
    background: transparent;
    border: 1px solid black;
  `
  export const Button = styled.button`
    width: 20vw;
    height: 6vh;
    border-radius:15px;
    border: 2px solid #1E8673;
    background: transparent;
    color: #000;
    font-size: 15px;
    font-weight: 700;
    line-height: 19px;
    cursor: pointer;
    transition: all 0.25s ease; /* deixa suave a transição */
    margin: 20px;
    &:hover {
       box-shadow: 0px 4px 15px #1E8673;
    }

    &:active {
        box-shadow: 4px 4px 20px #1E8673;
    }
  ` 
  export const DivResultado = styled.div`
    width: 100%;
    height: 100%;
    display:flex;
    flex-direction: column;
    gap: 10px;
  `
  export const Span = styled.span`
    color: gray;
  `
  export const Table = styled.table`
    background-color: #fff;
    border-radius: 10px;
    border-collapse: collapse;
    overflow:hidden;
    width: 100%;
  `
  export const Thead = styled.thead``
  export const Tr = styled.tr`
    text-align:center;
    border-bottom: 1px solid #eee;
  `
  export const Th = styled.th`
    padding: 7px 0;
  `
  export const Tbody = styled.tbody`
  `
  export const Td = styled.td`
    padding: 7px 0;
  `
  export const DivTable = styled.div`
    max-height: 35vh;
    overflow-y: auto;
    width: 100%;
  `