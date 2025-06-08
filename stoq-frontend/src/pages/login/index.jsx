import { Container, Form, DivTexts, H2, P, DivInput, Input, ButtonEntrar, ButtonRegister, IconEmail, IconPass, DivII, ImgTop, ImgBottom, ImgVetor } from './style'
import circle from '../../assets/circulo.png'
import elipse from '../../assets/elipse.png'
import vetor from '../../assets/vetor.png'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { login } from '../../services/auth-service';

function Login() {
    useEffect(() => {
        document.title = 'Login'
    }, [])

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [error, setError] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        setError('');

        try {
            const response = await login(email, senha);
            console.log('Login realizado com sucesso!');
            navigate('/inicio');
        } catch (err) {
            setError(err);
        }
    };



    const navigate = useNavigate()
   
    return (
        <>
            <Container>
                <ImgTop> <img src={circle} alt="circle" /> </ImgTop>
                <ImgBottom> <img src={elipse} alt="elipse" /> </ImgBottom>
                <ImgVetor> <img src={vetor} alt="vetor" /> </ImgVetor>

                <Form onSubmit={handleLogin}>

                    <DivTexts>
                        <H2>Entrar</H2>
                        <P>Por favor, insira seu email e senha para entrar</P>
                    </DivTexts>

                    <DivInput>
                        <DivII>
                            <IconEmail size="28" />
                            <Input
                                type="email"
                                placeholder="Digite seu email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </DivII>
                        <DivII>
                            <IconPass size="28" />
                            <Input
                                type="password"
                                placeholder="Senha"
                                value={senha}
                                onChange={(e) => setSenha(e.target.value)}
                                required
                            />
                        </DivII>
                    </DivInput>

                    {error && <P style={{ color: 'red' }}>{error}</P>}

                    <ButtonEntrar type="submit">Entrar</ButtonEntrar>
                    <P>Ainda não possui cadastro? <ButtonRegister onClick={() => navigate('/')}>Registre-se</ButtonRegister></P>
                </Form>
            </Container>
        </>
    )
}

export default Login