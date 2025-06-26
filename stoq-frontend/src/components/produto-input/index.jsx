import { useState, useEffect, useRef } from 'react';
import { InputAdd, SugestoesList, SugestaoItem } from './produto-input.styles';
import axios from 'axios';

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
  const evitarBuscaRef = useRef(false); // ← Flag para evitar busca após blur

  useEffect(() => {
    if (evitarBuscaRef.current) {
      evitarBuscaRef.current = false;
      return;
    }

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
      const response = await axios.get('/api/produto/buscar', {
        params: { nome: busca },
        withCredentials: true
      });

      return response.data.map(p => p.nome);
    } catch (error) {
      console.error('Erro ao buscar produtos:', error);
      return [];
    }
  };

  const buscarSugestoes = async (busca) => {
    const resultados = await buscarProdutosDaAPI(busca);
    setSugestoes(resultados);
    setMostrarSugestoes(resultados.length > 0);
  };

  const selecionarSugestao = (nome) => {
    evitarBuscaRef.current = true;
    setProduto({ ...produto, nomeProduto: nome });
    setMostrarSugestoes(false);
  };

  const normalizarTexto = (texto) => {
    const textoTrim = texto.trim();
    const textoSemAcento = removerAcentos(textoTrim);
    const textoCapitalizado = capitalizarPrimeiraLetra(textoSemAcento);
    return textoCapitalizado;
  };

  const handleBlur = () => {
    const nomeAtual = produto.nomeProduto;
    const nomeNormalizado = normalizarTexto(nomeAtual);

    if (nomeAtual !== nomeNormalizado) {
      evitarBuscaRef.current = true; // ← evita nova busca no próximo useEffect
      setProduto(prev => ({ ...prev, nomeProduto: nomeNormalizado }));
    }

    setTimeout(() => setMostrarSugestoes(false), 150);
  };

  return (
    <div style={{ position: 'relative' }}>
      <InputAdd
        type="text"
        value={produto.nomeProduto}
        placeholder="Obrigatório*"
        onChange={(e) => setProduto({ ...produto, nomeProduto: e.target.value })}
        onFocus={() => setMostrarSugestoes(true)}
        onBlur={handleBlur}
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
