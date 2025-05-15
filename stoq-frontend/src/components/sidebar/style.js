import styled from 'styled-components'

export const SideBar = styled.div`
    width: 18vw;
    height: 90vh;
    background:rgba(162, 162, 162, 0.40);
`

export const Button = styled.button`
display: flex;
align-items: center;
width: 100%;
height: 10%;
color: #000;
font-size: 24px;
line-height: 29px;
font-weight:400;
padding-left: 30px;
gap: 10px;
border: none;
cursor: pointer;
background: transparent;
transition: all 0.5s ease;

&:hover {
    transform: scale(1.05);
}
`