import {Form, Input, DivTexts, DivInputs, H2, P, 
  ButtonRegister, IconUser, IconPass,IconEmail, Container, 
  DivII,ImgTop,ImgBottom,ImgVetor, ButtonLogin} from './style'
import circle from '../../assets/circulo.png'
import elipse from '../../assets/elipse.png'
import vetor from '../../assets/vetor.png'
import { useNavigate } from 'react-router-dom'

function Register() {
  const navigate = useNavigate()

  return (
    <Container>
       
      <ImgTop> <img src={circle} alt="circle"/> </ImgTop>
      <ImgBottom> <img src={elipse} alt="elipse"/> </ImgBottom>
      <ImgVetor> <img src={vetor} alt="vetor" /> </ImgVetor>

      <Form>
        
        <DivTexts>
          <H2>Registro</H2>
          <P>Preencha seu nome, e-mail e crie uma senha</P>
          <P style={{fontWeight:'400'}}>Sua solicitação de cadastro será enviada ao administrador do sistema para aprovação</P>
        </DivTexts>
       
       <DivInputs>

        <DivII>
          <IconUser size="28"/>
          <Input type="text" placeholder="Nome" style={{}}/>
        </DivII>
        <DivII>
          <IconEmail size="28"/>
          <Input type="email" placeholder="Email" style={{}}/>
        </DivII>
        <DivII>
          <IconPass size="28"/>
          <Input type="password" placeholder="Senha" style={{}}/>
        </DivII>
        <DivII>
          <IconPass size="28"/>
          <Input type="password" placeholder="Confirme Sua Senha" style={{}}/>
        </DivII>  
  
       </DivInputs>
        
        <ButtonRegister>Enviar Solicitação</ButtonRegister>
        <P>Já possui cadastro? <ButtonLogin onClick={() => navigate('/login')}>Entre!</ButtonLogin> </P>
      </Form>
    </Container>
  )
}

export default Register
