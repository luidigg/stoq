import Header from "../../components/header";
import Sidebar from "../../components/sidebar";
import perfil from '../../assets/perfil.png';
import { useEffect } from "react";
import {
    Container,
    Content,
    Main,
    Informacoes,
    H2,
    TopSection,
    ImgPerfil,
    TextTop,
    Pnome,
    Pemail,
    InfoList,
    InfoItem,
    Label,
    Valor,
    ButtonWrapper,
    EditButton
} from './style';

function Perfil() {
    useEffect(() => {
        document.title = 'Meu Perfil';
    }, []);

    const handleEditClick = () => {
        console.log('Botão Editar Informações clicado!');
    };

    return (
        <Container>
            <Header />
            <Content>
                <Sidebar />
                <Main>
                    <H2>Meu Perfil</H2>
                    <Informacoes>
                        <TopSection>
                            <ImgPerfil>
                                <img src={perfil} alt="Foto de Perfil" />
                            </ImgPerfil>
                            <TextTop>
                                <Pnome>Seu Nome</Pnome>
                                <Pemail>email@gmail.com</Pemail>
                            </TextTop>
                        </TopSection>
                        <InfoList>
                            <InfoItem>
                                <Label>Nome</Label>
                                <Valor>Nome e Sobrenome</Valor>
                            </InfoItem>
                            <InfoItem>
                                <Label>Email</Label>
                                <Valor>email@gmail.com</Valor>
                            </InfoItem>
                            <InfoItem>
                                <Label>Número de Celular</Label>
                                <Valor>(55) 99999-9999</Valor>
                            </InfoItem>
                        </InfoList>
                        <ButtonWrapper>
                            <EditButton onClick={handleEditClick}>Editar Informações</EditButton>
                        </ButtonWrapper>
                    </Informacoes>
                </Main>
            </Content>
        </Container>
    );
}

export default Perfil;
