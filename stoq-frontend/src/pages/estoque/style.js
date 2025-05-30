import styled from 'styled-components'

  export const Container = styled.div`
    height: 100vh;
    width: 100vw;
     background: #DFFFF5;
  `
  export const Content = styled.div`
    display: flex;
  `
  export const Main = styled.main`
    width: 82vw;
    height: 90vh;
    display: flex;
    flex-direction: column;
    padding: 35px;
    gap: 20px;
  `
  export const H2 = styled.h2`
    color: #122E40;
    font-size: 32px;
  `
  export const DivButtons = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
  `
  export const ButtonAdd = styled.button`
    display:flex;
    align-items:center;
    gap: 7px;
    color: #fff;
    background-color: #1E8673;
    border:none;
    border-radius: 5px;
    padding: 6px 17px;
    font-size: 18px;
    cursor: pointer;

    &:hover {
      opacity: 0.8;
    }

    &:active {
      opacity: 0.6;
    }
  `
  export const DivTable = styled.div`
    width: 100%;
    height: 55vh;
    background-color: #fff;
    overflow-y: auto;
    border-radius: 10px;
  `
  export const Table =styled.table`
    border-collapse: separate;
    border-spacing: 0;
    overflow: hidden;
    border-radius: 10px;
    width: 100%;
    text-align: center;
  `
  export const Thead =styled.thead`
    background-color: #E7EFF3;
    color: #495D69;
    font-size: 20px;
    line-height: 24px;
  `
  export const Tr = styled.tr`
    border-radius: 15px;
    
  `
  export const Th = styled.th`
    padding: 8px 0;
  `
  export const Tbody = styled.tbody`
    color: #333;
    font-size: 19px;
    font-weight: 400;
    line-height: 24px;
    
  `
  export const Td = styled.td`
    padding: 5px;
    border-bottom: 1px solid #eee;
  `
  export const ButtonIcon = styled.button`
    background-color: transparent;
    border: none;
    cursor: pointer;
    transition: all 0.5s ease;

    &:hover {
      transform:scale(1.1);
    }
  `
  export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
`
export const ModalContent = styled.div`
  background: white;
  padding: 30px;
  border-radius: 12px;
  width: 400px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  box-shadow: 0 0 10px rgba(0,0,0,0.2);
  `
export const Datas = styled.div`
  display:flex;
  flex-direction:column;
  gap: 20px;
`
export const Label = styled.label`
  display:flex;
  align-items:center;
  gap: 10px;
  font-size: 17px;
`
export const DivClose = styled.div`
  display:flex;
  justify-content: flex-end;
`
export const ButtonClose = styled.button`
  background-color:transparent;
  border:none;
  cursor:pointer;

  &:hover {
    opacity: 0.6;
  }
`
export const InputAdd = styled.input`
  padding: 5px 0;
  padding-left: 10px;
  font-size: 14px;
  font-weight: 400;
`
export const ButtonSalvar = styled.button`
  background-color: #1E8673;
  color: #fff;
  border: none;
  padding: 5px 25px;
  cursor:pointer;

   &:hover {
    opacity: 0.8;
  }  

  &:active {
    opacity:0.5;
  }
`
export const ButtonCancelar = styled.button`
  background-color: #ff4d4f;
  color: #fff;
  border: none;
  padding: 5px 25px;
  cursor:pointer;

   &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity:0.5;
  }
`
export const ModalButtons = styled.div`
  display:flex;
  justify-content:flex-end;
  gap: 15px;
`
export const Select = styled.select`
  width: 100%;
  padding: 5px 10px;
`

export const ButtonExcluir = styled.button``