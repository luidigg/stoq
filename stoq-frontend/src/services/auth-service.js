import axios from 'axios';

const API_URL = 'http://localhost:5144/api/auth';

export const login = async (email, senha) => {
    try {
        const response = await axios.post(
            `${API_URL}/login`,
            { email, senha },
            { withCredentials: true }
        );
        return response.data;
    } catch (error) {
        throw error.response?.data?.mensagem || 'Erro ao fazer login';
    }
};