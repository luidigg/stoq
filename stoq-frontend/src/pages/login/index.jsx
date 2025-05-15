import {Container,Form,DivTexts,H2,P,DivInput,Input,ButtonEntrar,ButtonRegister, IconEmail,IconPass, DivII,ImgTop,ImgBottom,ImgVetor} from './style'
import circle from '../../assets/circulo.png'
import elipse from '../../assets/elipse.png'
import vetor from '../../assets/vetor.png'
import {useNavigate} from 'react-router-dom'

function Login() {

    const navigate = useNavigate()
         const title = document.querySelector('title')
         title.innerHTML = 'Tela de Login'
    return (
        <>
          <Container>
            <ImgTop> <img src={circle} alt="circle"/> </ImgTop>
            <ImgBottom> <img src={elipse} alt="elipse"/> </ImgBottom>
            <ImgVetor> <img src={vetor} alt="vetor" /> </ImgVetor>

            <Form>

                <DivTexts>
                    <H2>Entrar</H2>
                    <P>Por favor, insira seu email e senha para entrar</P>
                </DivTexts>

                <DivInput>
                    <DivII>
                        <IconEmail size="28"/>
                        <Input type="email" placeholder="Digite seu email"/>
                    </DivII>
                    <DivII>
                    <IconPass size="28"/>
                    <Input type="password" placeholder="Senha"/>
                    </DivII>
                </DivInput>

                <ButtonEntrar>Entrar</ButtonEntrar>
                <P>Ainda não possui cadastro? <ButtonRegister onClick={() => navigate('/')}>Registre-se</ButtonRegister></P>    
            </Form>
          </Container>
        </>
    )
}

export default Login