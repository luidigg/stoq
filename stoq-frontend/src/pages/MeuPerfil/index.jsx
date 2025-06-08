import Header from "../../components/header"
import Sidebar from "../../components/sidebar"
import { Container, Main, Content, H2, DivTop, ImgPerfil, Pnome, Pemail, DivInfos, Campo, Span, Valores,Informacoes,TextTop,Button,DivButton } from './style'
import perfil from '../../assets/perfil.png'
import { useEffect } from "react"

function Perfil() {
    useEffect(() => {
        document.title = 'Meu Perfil'
    }, [])
    
    return (
        <>
            <Container>
                <Header />
                <Content>
                    <Sidebar />

                    <Main>
                        <Informacoes>
                            <H2>Meu Perfil</H2>
                            <DivTop>
                                <ImgPerfil><img src={perfil} alt="" /></ImgPerfil>
                                <TextTop>
                                    <Pnome>Seu Nome</Pnome>
                                    <Pemail>email@gmail.com</Pemail>
                                </TextTop>  
                            </DivTop>
                            <DivInfos>
                                <Campo>
                                    <Span>Nome</Span>
                                    <Valores>Nome e Sobrenome</Valores>
                                </Campo>
                                <Campo>
                                    <Span>Email</Span>
                                    <Valores>email@gmail.com</Valores>
                                </Campo>
                                <Campo>
                                    <Span>Número de Celular</Span>
                                    <Valores>(55)99999-9999</Valores>
                                </Campo>
                                <Campo>
                                    <Span>Senha</Span>
                                    <Valores>*********</Valores>
                                </Campo>
                            </DivInfos>
                            <DivButton>
                                <Button>Editar Informações</Button>
                            </DivButton>
                            
                        </Informacoes>
                        
                    </Main>
                </Content>

            </Container>
        </>
    )
}

export default Perfil