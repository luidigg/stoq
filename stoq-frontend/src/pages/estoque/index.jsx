import {
  Main, DivButtons, ButtonAdd, DivTable,
  Table, Thead, Tr, Th, Tbody, Td, ButtonIcon, ModalContent, ModalOverlay,
  Datas, ButtonClose, ButtonRemove, InputAdd, Label, ButtonSalvar, ButtonCancelar, ModalButtons, Select, BotoesWrapper, SmallModalContent,
  HeaderModal, TituloModal, QuantidadeWrapper, BotaoTudo
} from './style'
import MessageBox from '../../components/message-box'
import Layout from '../../components/layout/indexL'
import { UilEdit, UilTrashAlt, UilPlus, UilTimes, UilMinus } from '@iconscout/react-unicons'
import { useState, useEffect } from 'react'
import ProdutoInput from '../../components/produto-input'
import { H2Medium } from '../common-styles'
import axios from 'axios';
import ThSortable from '../../components/th-sortable';
import React from 'react';

function Estoque() {
  const [produtos, setProdutos] = useState([]);
  const [categorias, setCategorias] = useState([]);

  // Estado único para o produto (novo ou edição)
  const [produto, setProduto] = useState({
    entrada: new Date().toISOString().split('T')[0],
    nomeProduto: '',
    quantidade: '',
    validade: '',
    categoria: '',
    valor: '',
    doador: ''
  });

  const parseValorParaNumero = v => {
    const str = String(v || '');
    return parseFloat(str.replace(/[^\d,.-]/g, '').replace(',', '.')) || 0;
  };

  const [showMessageBox, setShowMessageBox] = React.useState(false);
  const [messageBoxText, setMessageBoxText] = React.useState('');


  const [produtoSelecionado, setProdutoSelecionado] = useState(null);

  const [modalSaida, setModalSaida] = useState(false);
  const [saida, setSaida] = useState({
    dataSaida: new Date().toISOString().split('T')[0],
    quantidadeSaida: '',
    motivoSaida: '',
    observacaoSaida: ''
  });


  const [modal, setModal] = useState(false)
  const [modoEdicao, setModoEdicao] = useState(false)
  const [produtoIdEdicao, setProdutoIdEdicao] = useState(null)

  const [modalConfirmacao, setModalConfirmacao] = useState(false)
  const [produtoIdExclusao, setProdutoIdExclusao] = useState(null)

  const [sortColumn, setSortColumn] = useState(null); // ex: 'nomeProduto', 'entrada', etc.
  const [sortDirection, setSortDirection] = useState('asc'); // 'asc' ou 'desc'

  const sortedProdutos = [...produtos].sort((a, b) => {
    if (!sortColumn) return 0; // sem ordenação, mantem original

    let valA = a[sortColumn];
    let valB = b[sortColumn];

    // Converter datas para Date para comparação correta
    if (sortColumn === 'entrada' || sortColumn === 'validade') {
      valA = valA ? new Date(valA) : new Date(0);
      valB = valB ? new Date(valB) : new Date(0);
    }

    // Comparar strings em lowercase (caso seja string)
    if (typeof valA === 'string') {
      valA = valA.toLowerCase();
      valB = valB.toLowerCase();
    }

    if (valA < valB) return sortDirection === 'asc' ? -1 : 1;
    if (valA > valB) return sortDirection === 'asc' ? 1 : -1;
    return 0;
  });


  useEffect(() => {
    document.title = 'Estoque';
    fetchEstoques();
    fetchCategorias();
  }, []);

  async function fetchEstoques() {
    try {
      const response = await axios.get('/api/estoque', { withCredentials: true });
      setProdutos(response.data);
    } catch (error) {
      console.error('Erro ao buscar estoques:', error);
    }
  }

  async function fetchCategorias() {
    try {
      const response = await axios.get('/api/categoria', { withCredentials: true });
      setCategorias(response.data);
    } catch (error) {
      console.error('Erro ao buscar categorias:', error);
    }
  }

  const limparInputs = () => {
    setProduto({
      entrada: new Date().toISOString().split('T')[0],
      nomeProduto: '',
      quantidade: '',
      validade: '',
      categoria: '',
      valor: '',
      doador: ''
    });
    setModoEdicao(false);
    setProdutoIdEdicao(null);
  };

  const registrarSaida = async () => {
    try {

      const saidaParaEnviar = {
        produtoId: produtoSelecionado.id,
        quantidade: Number(saida.quantidadeSaida),
        motivo: saida.motivoSaida,
        observacoes: saida.observacaoSaida,
        usuarioId: 2 // <- Certifique-se de ter o usuário logado no estado
      };

      // Ajuste a URL e método conforme seu backend
      await axios.post('/api/saidadoacao/criar', saidaParaEnviar, { withCredentials: true });
      console.log('Saída registrada:', saidaParaEnviar);

      // Após registrar, atualize os dados (produtos, estoque, etc)
      await fetchEstoques();

      // Feche a modal e limpe o estado da saída
      setModalSaida(false);
      setProdutoSelecionado(null);
      setSaida({
        dataSaida: new Date().toISOString().split('T')[0],
        quantidadeSaida: '',
        motivoSaida: '',
        observacaoSaida: ''
      });
    } catch (error) {
      console.error('Erro ao registrar saída:', error);
    }
  };


  const cadastrar = async () => {
    try {
      const produtoParaEnviar = {
        ...produto,
        valor: parseValorParaNumero(produto.valor)
      };

      if (modoEdicao) {
        await axios.put(`/api/estoque/${produtoIdEdicao}`, produtoParaEnviar, { withCredentials: true });
      } else {
        await axios.post('/api/estoque/criar', produtoParaEnviar, { withCredentials: true });
      }

      await fetchEstoques();
      limparInputs();
      setModal(false);
    } catch (error) {
      console.error('Erro ao salvar estoque:', error);
    }
  };

  const editarProduto = (index) => {
    const p = produtos[index];
    setProduto({
      entrada: p.entrada,
      nomeProduto: p.nomeProduto,
      quantidade: p.quantidade,
      validade: p.validade,
      categoria: p.categoria,
      valor: p.valor,
      doador: p.doador
    });
    setProdutoIdEdicao(p.id);
    setModoEdicao(true);
    setModal(true);
  };

  const confirmarExclusao = (index) => {
    setProdutoIdExclusao(produtos[index].id);
    setModalConfirmacao(true);
  };

  const deletar = async () => {
    try {
      await axios.delete(`/api/estoque/${produtoIdExclusao}`, { withCredentials: true });
      await fetchEstoques();
      setModalConfirmacao(false);
      setProdutoIdExclusao(null);
    } catch (error) {
      console.error('Erro ao deletar estoque:', error);
    }
  };

  const formatarData = (dataStr) => {
    if (!dataStr) return '';
    const data = new Date(dataStr);
    return data.toLocaleDateString('pt-BR');
  }

  const formatarMoeda = (valor) => {
    const apenasNumeros = valor.replace(/\D/g, '');
    const numero = parseFloat(apenasNumeros) / 100;
    if (isNaN(numero)) return '';
    return numero.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  };

  const handleSort = (column) => {
    if (sortColumn === column) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortColumn(column);
      setSortDirection('asc');
    }
  };

  const formatDateForInput = dateStr => dateStr ? dateStr.split('T')[0] : '';

  // validacao dos campos de adicao de produtos
  const validacaoForm = produto.nomeProduto.trim() !== '' &&
    produto.quantidade > 0 && 
    produto.categoria.trim() != '' &&
    produto.validade != '' &&
    produto.entrada != ''

  return (
    <Layout> 
        <Main>
          <H2Medium>Estoque</H2Medium>

          <DivTable>
            <Table>
              <Thead>
                <Tr>
                  <ThSortable
                    column="entrada"
                    label="Entrada"
                    sortColumn={sortColumn}
                    sortDirection={sortDirection}
                    onSort={handleSort}
                  />
                  <ThSortable
                    column="nomeProduto"
                    label="Produto"
                    sortColumn={sortColumn}
                    sortDirection={sortDirection}
                    onSort={handleSort}
                  />
                  <ThSortable
                    column="quantidade"
                    label="Quantidade"
                    sortColumn={sortColumn}
                    sortDirection={sortDirection}
                    onSort={handleSort}
                  />
                  <ThSortable
                    column="categoria"
                    label="Categoria"
                    sortColumn={sortColumn}
                    sortDirection={sortDirection}
                    onSort={handleSort}
                  />
                  <ThSortable
                    column="validade"
                    label="Validade"
                    sortColumn={sortColumn}
                    sortDirection={sortDirection}
                    onSort={handleSort}
                  />
                  <Th></Th>
                  <Th></Th>
                </Tr>
              </Thead>
              <Tbody>
                {sortedProdutos.map((produtoItem, index) => (
                  <Tr
                    key={produtoItem.id}
                    onClick={() => setProdutoSelecionado(produtoItem)}
                    style={{
                      cursor: 'pointer',
                      backgroundColor: produtoSelecionado?.id === produtoItem.id ? '#ffd9d9' : 'transparent'
                    }}>
                    <Td>{formatarData(produtoItem.entrada)}</Td>
                    <Td>{produtoItem.nomeProduto}</Td>
                    <Td>{produtoItem.quantidade}</Td>
                    <Td>{produtoItem.categoria}</Td>
                    <Td>{formatarData(produtoItem.validade)}</Td>
                    <Td><ButtonIcon onClick={() => editarProduto(index)}><UilEdit size='24' color='#1E8673' /></ButtonIcon></Td>
                    <Td><ButtonIcon onClick={() => confirmarExclusao(index)}><UilTrashAlt size='24' color='#1E8673' /></ButtonIcon></Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </DivTable>

          <DivButtons>
            <ButtonRemove onClick={() => {
              if (!produtoSelecionado) {
                setMessageBoxText('Selecione um produto da tabela primeiro.');
                setShowMessageBox(true);
                return;
              }

              setSaida({
                nomeProduto: produtoSelecionado.nomeProduto,
                quantidadeSaida: 1, // Valor padrão para a quantidade de saída
                dataSaida: new Date().toISOString().split('T')[0],
                motivoSaida: '',
                observacaoSaida: '',
                quantidadeDisponivel: produtoSelecionado.quantidade
              });

              setModalSaida(true);
            }}>
              <UilMinus size='24' color='#fff' /> Registrar Saída
            </ButtonRemove>


            <ButtonAdd onClick={() => { limparInputs(); setModal(true); }}>
              <UilPlus size='24' color='#fff' />Adicionar Produto
            </ButtonAdd>
          </DivButtons>

          {showMessageBox && (
            <MessageBox
              message={messageBoxText}
              onClose={() => setShowMessageBox(false)}
            />
          )}

          {modal && (
            <ModalOverlay>
              <ModalContent>
                <HeaderModal>
                  <TituloModal>{modoEdicao ? 'Editar Produto' : 'Adicionar Produto'}</TituloModal>
                  <ButtonClose onClick={() => { setModal(false); limparInputs(); }}>
                    <UilTimes size='24' />
                  </ButtonClose>
                </HeaderModal>

                <Label>
                  Nome do Produto:
                  <ProdutoInput
                    produto={produto}
                    setProduto={setProduto}
                  />
                </Label>

                <Label>
                  Quantidade:
                  <InputAdd
                    type="number"
                    placeholder='Obrigatório*'
                    value={produto.quantidade}
                    onChange={(e) => setProduto({ ...produto, quantidade: e.target.value })}
                  />
                </Label>

                <Label>
                  Categoria:
                  <Select value={produto.categoria} onChange={(e) => setProduto({ ...produto, categoria: e.target.value })}>
                    <option value="">Selecione</option>
                    {categorias.map(cat => (
                      <option key={cat.id} value={cat.id}>{cat.nome}</option>
                    ))}
                  </Select>
                </Label>

                <Datas>
                  <Label>
                    Data de Cadastro:
                    <InputAdd
                      type="date"
                      value={formatDateForInput(produto.entrada)}
                      onChange={(e) => setProduto({ ...produto, entrada: e.target.value })}
                    />
                  </Label>

                  <Label>
                    Data de Validade:
                    <InputAdd
                      type="date"
                      value={formatDateForInput(produto.validade)}
                      onChange={(e) => setProduto({ ...produto, validade: e.target.value })}
                    />
                  </Label>
                </Datas>

                <Label>
                  Valor da Compra:
                  <InputAdd
                    type="text"
                    placeholder="Opcional"
                    value={produto.valor}
                    onChange={(e) => {
                      const valorFormatado = formatarMoeda(e.target.value);
                      setProduto({ ...produto, valor: valorFormatado });
                    }}
                  />
                </Label>

                <Label>
                  Nome do Doador:
                  <InputAdd
                    type="text"
                    placeholder='Opcional'
                    value={produto.doador}
                    onChange={(e) => setProduto({ ...produto, doador: e.target.value })}
                  />
                </Label>

                <ModalButtons>
                  <ButtonSalvar disabled={!validacaoForm} onClick={cadastrar}>Salvar</ButtonSalvar>
                  <ButtonCancelar onClick={limparInputs}>Limpar</ButtonCancelar>
                </ModalButtons>
              </ModalContent>
            </ModalOverlay>
          )}

          {modalSaida && (
            <ModalOverlay>
              <SmallModalContent>
                <HeaderModal>
                  <TituloModal>Registrar Saída</TituloModal>
                  <ButtonClose onClick={() => setModalSaida(false)}>
                    <UilTimes size='24' />
                  </ButtonClose>
                </HeaderModal>

                <Label>
                  Produto:
                  <InputAdd
                    type="text"
                    value={saida.nomeProduto}
                    readOnly
                    disabled
                    style={{ backgroundColor: "#f0f0f0", cursor: "not-allowed" }}
                  />
                </Label>

                <Label>
                  Quantidade:
                  <QuantidadeWrapper>
                    <InputAdd
                      type="text" // 👈 mudar para texto para evitar spinners
                      inputMode="numeric"
                      pattern="[0-9]*"
                      min={1}
                      max={produtoSelecionado?.quantidade || 1}
                      placeholder="Obrigatório*"
                      value={saida.quantidadeSaida}
                      onChange={(e) => {
                        const raw = e.target.value;
                        const somenteNumeros = raw.replace(/\D/g, '');
                        const valor = Number(somenteNumeros);
                        const max = produtoSelecionado?.quantidade || 1;
                        if (!somenteNumeros) {
                          setSaida({ ...saida, quantidadeSaida: '' });
                          return;
                        }
                        if (valor > max) {
                          setSaida({ ...saida, quantidadeSaida: max });
                          return;
                        }
                        if (valor < 1) {
                          setSaida({ ...saida, quantidadeSaida: 1 });
                          return;
                        }
                        setSaida({ ...saida, quantidadeSaida: valor });
                      }}

                    />
                    <BotaoTudo
                      type="button"
                      onClick={() => {
                        if (produtoSelecionado) {
                          setSaida({ ...saida, quantidadeSaida: produtoSelecionado.quantidade });
                        }
                      }}
                    >
                      Tudo
                    </BotaoTudo>
                  </QuantidadeWrapper>
                </Label>

                <Label>
                  Data da Saída:
                  <InputAdd
                    type="date"
                    value={saida.dataSaida}
                    onChange={(e) => setSaida({ ...saida, dataSaida: e.target.value })}
                  />
                </Label>

                <Label>
                  Motivo:
                  <Select
                    value={saida.motivoSaida}
                    onChange={(e) => setSaida({ ...saida, motivoSaida: e.target.value })}
                  >
                    <option value="">Selecione</option>
                    <option value="Consumo">Consumo</option>
                    <option value="Descarte">Descarte</option>
                    <option value="Repasse">Repasse</option>
                  </Select>
                </Label>

                <Label>
                  Observação:
                  <InputAdd
                    type="text"
                    placeholder="Opcional"
                    value={saida.observacaoSaida}
                    onChange={(e) => setSaida({ ...saida, observacaoSaida: e.target.value })}
                  />
                </Label>

                <ModalButtons>
                  <ButtonSalvar onClick={() => {
                    if (!saida.quantidadeSaida || !saida.motivoSaida) {
                      setMessageBoxText('Preencha todos os campos obrigatórios.');
                      setShowMessageBox(true);
                      return;
                    }
                    registrarSaida();
                    console.log('Saída registrada:', saida);
                    setModalSaida(false);
                    setProdutoSelecionado(null);
                    setSaida({
                      dataSaida: new Date().toISOString().split('T')[0],
                      quantidadeSaida: '',
                      motivoSaida: '',
                      observacaoSaida: ''
                    });
                  }}>Registrar</ButtonSalvar>

                  <ButtonCancelar onClick={() => setModalSaida(false)}>Cancelar</ButtonCancelar>
                </ModalButtons>
              </SmallModalContent>
            </ModalOverlay>
          )}


          {modalConfirmacao && (
            <ModalOverlay>
              <SmallModalContent>
                <h2>Deseja excluir este item?</h2>
                <BotoesWrapper>
                  <ButtonSalvar onClick={deletar}>Sim</ButtonSalvar>
                  <ButtonCancelar onClick={() => setModalConfirmacao(false)}>Não</ButtonCancelar>
                </BotoesWrapper>
              </SmallModalContent>
            </ModalOverlay>
          )}
        </Main>
    </Layout>
  )
}

export default Estoque;