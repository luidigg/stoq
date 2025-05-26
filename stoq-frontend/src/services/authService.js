import axios from 'axios';

const API_URL = 'http://localhost:5144/api/auth';

export const login = async (email, senha) => {
    try {
        const response = await axios.post(`${API_URL}/login`, { email, senha });
        return response.data;
    } catch (error) {
        throw error.response?.data?.message || 'Erro ao fazer login';
    }
};

export const register = async ({ nome, email, senha, cargoId }) => {
    try {
        const response = await axios.post(`${API_URL}/register`, {
            nome,
            email,
            senha,
            cargoId
        });
        return response.data;
    } catch (error) {
        throw error.response?.data?.mensagem || 'Erro ao registrar';
    }
};