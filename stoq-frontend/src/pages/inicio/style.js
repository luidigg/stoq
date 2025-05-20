import styled from 'styled-components'
import {
  UilBox,           // Caixa
  UilExclamationTriangle,  // Atenção
  UilArrowDown,     // Seta para baixo
  UilArrowUp        // Seta para cima
} from '@iconscout/react-unicons';

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
    /* display: flex;
    justify-content:center;
    align-items:center; */
  `
  export const Box = styled.div`
  /* background-color: #E8FFF6;
  border-radius: 20px; */
  display: flex;
  flex-direction: column;
   justify-content: space-around; 
  height: 100%;
  `
  export const H2 = styled.h2`
    font-size: 40px;
    margin-left: 3vw;
  `
  export const TopCards = styled.div`
    display:flex;
    justify-content: space-around;
    margin-bottom: 20vh;
  `
  export const Card = styled.div`
    background-color: #fff;
    border-radius: 10px;
    display:flex;
    flex-direction:column;
    align-items:center;
    gap: 10px;
    width: 17vw;
    height: 20vh;
    display:flex;
    justify-content:center;
    box-shadow: #1E8673  5px 5px 10px; 
  `
  export const Card2 = styled.div`
    background-color: #fff;
    box-shadow: #1E8673  5px 5px 30px; 
    width: 79vw; 
    border-radius: 10px;
    padding: 15px;
    display:flex;
    flex-direction:column;
    gap: 10px;
  `
  export const BottomCards = styled.div`
    display:flex;
    justify-content:center;
  `
  export const P = styled.p`
    font-size: 18px;
  `
  export const Ul = styled.ul`
    list-style: none;
    display: flex;
    justify-content: space-around;
  `
  export const Li = styled.li`
    font-size: 18px;
    display:flex;
    align-items:center;
  `
  export const IconBox = styled(UilBox)`
    color: #1E8673; 
  `
  export const IconEx = styled(UilExclamationTriangle)`
    color:#EB6613;
  `
  export const IconUp = styled(UilArrowUp)`
    color: #1E8673;
  `
  export const IconDown = styled(UilArrowDown)`
    color: #EB6613;
  `
  export const Circle =styled.div`
    background-color: green;
    width: 15px;
    height: 15px;
    border-radius: 100%;
  `