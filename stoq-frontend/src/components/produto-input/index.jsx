import { useState, useEffect, useRef } from 'react';
import { InputAdd, SugestoesList, SugestaoItem } from './produto-input.styles';

function removerAcentos(texto) {
    return texto.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

function capitalizarPrimeiraLetra(texto) {
    if (!texto) return '';
    return texto.charAt(0).toUpperCase() + texto.slice(1).toLowerCase();
}

export default function ProdutoInput({ produto, setProduto }) {
    const [sugestoes, setSugestoes] = useState([]);
    const [mostrarSugestoes, setMostrarSugestoes] = useState(false);
    const timeoutRef = useRef(null);

    const todosProdutosMock = [
        'Arroz', 'Feijao', 'Macarrao', 'Leite', 'Açucar',
        'Oleo de soja', 'Farinha de trigo', 'Cafe', 'Sal', 'Milho', 'Tempero'
    ];

    useEffect(() => {
        if (produto.nomeProduto.trim().length === 0) {
            setSugestoes([]);
            return;
        }

        clearTimeout(timeoutRef.current);
        timeoutRef.current = setTimeout(() => {
            buscarSugestoes(produto.nomeProduto);
        }, 300);
    }, [produto.nomeProduto]);

    const buscarProdutosDaAPI = async (busca) => {
        try {
            const response = await fetch(`/api/produtos?nome=${encodeURIComponent(busca)}`);
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Erro ao buscar produtos:', error);
            return [];
        }
    };

    const buscarSugestoes = async (busca) => {
        const buscaNormalizada = removerAcentos(busca.toLowerCase());

        // remover quando usar a API
        const resultados = todosProdutosMock
            .filter((p) => {
                const pNormalizado = removerAcentos(p.toLowerCase());
                return pNormalizado.startsWith(buscaNormalizada) && pNormalizado !== buscaNormalizada;
            })
            .slice(0, 3);

        // Para API futura:
        // const resultados = await buscarProdutosDaAPI(busca);

        setSugestoes(resultados);
        setMostrarSugestoes(resultados.length > 0);
    };

    const selecionarSugestao = (nome) => {
        setProduto({ ...produto, nomeProduto: nome });
        setMostrarSugestoes(false);
    };

    // Normaliza texto ao sair do campo
    const normalizarTexto = (texto) => {
        const textoTrim = texto.trim();
        const textoSemAcento = removerAcentos(textoTrim);
        const textoCapitalizado = capitalizarPrimeiraLetra(textoSemAcento);
        return textoCapitalizado;
    };

    return (
        <div style={{ position: 'relative' }}>
            <InputAdd
                type="text"
                value={produto.nomeProduto}
                placeholder="Obrigatório*"
                onChange={(e) => setProduto({ ...produto, nomeProduto: e.target.value })}
                onFocus={() => setMostrarSugestoes(true)}
                onBlur={() => {
                    setTimeout(() => setMostrarSugestoes(false), 150);
                    setProduto(prev => ({ ...prev, nomeProduto: normalizarTexto(prev.nomeProduto) }));
                }}
                autoComplete="off"
            />

            {mostrarSugestoes && sugestoes.length > 0 && (
                <SugestoesList>
                    {sugestoes.map((item, idx) => (
                        <SugestaoItem
                            key={idx}
                            onClick={() => selecionarSugestao(item)}
                            onMouseDown={(e) => e.preventDefault()}
                            tabIndex={0}
                        >
                            {item}
                        </SugestaoItem>
                    ))}
                </SugestoesList>
            )}
        </div>
    );
}