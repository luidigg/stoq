import Header from "../../components/header";
import Sidebar from "../../components/sidebar";
import perfil from '../../assets/perfil.png';
import { useState, useEffect } from "react";
import axios from "axios";
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
    EditButton,
    InputEdit
} from './style';

function Perfil() {
    const [usuario, setUsuario] = useState(null);
    const [editando, setEditando] = useState(false);
    const [nomeEditado, setNomeEditado] = useState('');
    const [emailEditado, setEmailEditado] = useState('');
    const [salvando, setSalvando] = useState(false);

    useEffect(() => {
        document.title = 'Meu Perfil';
        fetchUsuario();
    }, []);

    const fetchUsuario = async () => {
        try {
            const response = await axios.get('/api/auth/get-user-info', { withCredentials: true });
            setUsuario(response.data);
            setNomeEditado(response.data.nome);
            setEmailEditado(response.data.email);
        } catch (error) {
            console.error('Erro ao buscar usuário:', error);
        }
    };

    const handleEditClick = () => {
        setEditando(true);
    };

    const handleSalvar = async () => {
        try {
            setSalvando(true);
            await axios.put('/api/auth/user-edit', {
                id: usuario.id,
                nome: nomeEditado,
                email: emailEditado
            }, { withCredentials: true });

            setUsuario(prev => ({ ...prev, nome: nomeEditado, email: emailEditado }));
            setEditando(false);
        } catch (err) {
            console.error('Erro ao salvar usuário:', err);
            alert('Erro ao salvar alterações.');
        } finally {
            setSalvando(false);
        }
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
                                <Pnome>{usuario?.nome}</Pnome>
                                <Pemail>{usuario?.email}</Pemail>
                            </TextTop>
                        </TopSection>

                        <InfoList>
                            <InfoItem>
                                <Label>Nome</Label>
                                {editando ? (
                                    <InputEdit
                                        type="text"
                                        value={nomeEditado}
                                        onChange={e => setNomeEditado(e.target.value)}
                                    />
                                ) : (
                                    <Valor>{usuario?.nome}</Valor>
                                )}
                            </InfoItem>

                            <InfoItem>
                                <Label>Email / Usuário</Label>
                                {editando ? (
                                    <InputEdit
                                        type="email"
                                        value={emailEditado}
                                        onChange={e => setEmailEditado(e.target.value)}
                                    />
                                ) : (
                                    <Valor>{usuario?.email}</Valor>
                                )}
                            </InfoItem>

                            <InfoItem>
                                <Label>Criado em</Label>
                                <Valor>{new Date(usuario?.criadoEm).toLocaleDateString('pt-BR')}</Valor>
                            </InfoItem>
                        </InfoList>

                        <ButtonWrapper>
                            {editando ? (
                                <EditButton onClick={handleSalvar} disabled={salvando}>
                                    {salvando ? 'Salvando...' : 'Salvar'}
                                </EditButton>
                            ) : (
                                <EditButton onClick={handleEditClick}>
                                    Editar Informações
                                </EditButton>
                            )}
                        </ButtonWrapper>
                    </Informacoes>
                </Main>
            </Content>
        </Container>
    );
}

export default Perfil;