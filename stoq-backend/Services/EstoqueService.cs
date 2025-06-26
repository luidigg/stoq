using Microsoft.EntityFrameworkCore;
using Stoq.Data;
using Stoq.DTOs;
using Stoq.IServices;
using Stoq.Models;

namespace Stoq.Services
{
    public class EstoqueService(DataContext context, ILogService logService) : IEstoqueService
    {
        private readonly DataContext _context = context;
        private readonly ILogService _logService = logService;

        public async Task<List<EstoqueDTO>> GetAllAsync()
        {
            var estoqueComProdutoECategoria = await (
                from estoque in _context.Estoque
                join produto in _context.Produto on estoque.ProdutoId equals produto.Id
                join categoria in _context.Categoria on produto.CategoriaId equals categoria.Id
                select new
                {
                    Estoque = estoque,
                    Produto = produto,
                    Categoria = categoria
                }
            ).ToListAsync();

            var entradas = await _context.EntradaDoacao.ToListAsync();

            var resultado = estoqueComProdutoECategoria
                .Select(e =>
                {
                    // Pega a entrada_doacao mais recente para o produto
                    var entradaMaisRecente = entradas
                        .Where(en => en.ProdutoId == e.Produto.Id)
                        .OrderByDescending(en => en.DataRecebimento)
                        .FirstOrDefault();

                    return new EstoqueDTO
                    {
                        Id = e.Estoque.Id,
                        ProdutoId = e.Produto.Id,
                        NomeProduto = e.Produto.Nome,
                        Quantidade = e.Estoque.Quantidade,
                        Categoria = e.Categoria.Nome,
                        Entrada = entradaMaisRecente?.DataRecebimento,
                        Validade = entradaMaisRecente?.DataValidade,
                        Valor = entradaMaisRecente?.ValorCompra,
                        Doador = entradaMaisRecente?.NomeDoador ?? string.Empty
                    };
                })
                .ToList();

            return resultado;
        }

        public async Task<EstoqueDTO?> GetByIdAsync(int id)
        {
            var e = await _context.Estoque
                .Include(e => e.Produto)
                .FirstOrDefaultAsync(e => e.Id == id);

            if (e == null) return null;

            return new EstoqueDTO
            {
                Id = e.Id,
                ProdutoId = e.ProdutoId,
                NomeProduto = e.Produto.Nome,
                Quantidade = e.Quantidade
            };
        }

        public async Task CreateAsync(EstoqueDTO dto)
        {
            // Buscar categoria pelo nome ou id
            Categoria? categoria = (int.TryParse(dto.Categoria, out var idCategoria)
                ? await _context.Categoria.FindAsync(idCategoria)
                : await _context.Categoria.FirstOrDefaultAsync(c => c.Nome.ToLower() == dto.Categoria.ToLower()))
                ?? throw new Exception($"Categoria '{dto.Categoria}' não encontrada.");

            // Buscar produtos com o nome igual (ignorando case)
            var produtosComMesmoNome = await _context.Produto
                .Where(p => p.Nome.ToLower().StartsWith(dto.NomeProduto.ToLower()))
                .ToListAsync();

            Produto? produtoParaUsar = null;

            // Para cada produto com mesmo nome, buscar a entrada de doação para ver validade
            foreach (var p in produtosComMesmoNome)
            {
                var entradaExistente = await _context.EntradaDoacao
                    .Where(e => e.ProdutoId == p.Id)
                    .OrderByDescending(e => e.CriadoEm)
                    .FirstOrDefaultAsync();

                // Se existir entrada com mesma validade (null ou igual)
                if (entradaExistente != null &&
                    ((entradaExistente.DataValidade == null && dto.Validade == null) ||
                    (entradaExistente.DataValidade?.Date == dto.Validade?.Date)))
                {
                    produtoParaUsar = p;
                    break;
                }
            }

            if (produtoParaUsar == null)
            {
                // Criar novo produto com sufixo de lote se for necessário
                int maiorLote = 1;
                string nomeBase = dto.NomeProduto;

                // Procurar produtos com o prefixo igual para descobrir maior lote
                var produtosComPrefixo = await _context.Produto
                    .Where(p => p.Nome.StartsWith(nomeBase))
                    .ToListAsync();

                foreach (var p in produtosComPrefixo)
                {
                    string sufixo = p.Nome.Substring(nomeBase.Length).Trim();
                    if (sufixo.StartsWith("L"))
                    {
                        if (int.TryParse(sufixo.Substring(1), out int loteNum))
                        {
                            if (loteNum > maiorLote)
                                maiorLote = loteNum;
                        }
                    }
                }

                int novoLote = maiorLote + 1;
                string nomeComLote = novoLote == 1 ? nomeBase : $"{nomeBase} L{novoLote}";

                produtoParaUsar = new Produto
                {
                    Nome = nomeComLote,
                    CategoriaId = categoria.Id,
                    CriadoEm = DateTime.UtcNow
                };

                _context.Produto.Add(produtoParaUsar);
                await _context.SaveChangesAsync(); // Para gerar ID
            }

            // Criar entrada de doação vinculada ao produto selecionado/criado
            EntradaDoacao entrada = new()
            {
                ProdutoId = produtoParaUsar.Id,
                Quantidade = dto.Quantidade,
                DataRecebimento = (dto.Entrada ?? DateTime.UtcNow).ToUniversalTime(),
                DataValidade = dto.Validade?.ToUniversalTime(),
                ValorCompra = dto.Valor,
                NomeDoador = dto.Doador,
                CriadoEm = DateTime.UtcNow
            };
            _context.EntradaDoacao.Add(entrada);

            // Atualizar ou criar estoque
            Estoque? estoque = await _context.Estoque.FirstOrDefaultAsync(e => e.ProdutoId == produtoParaUsar.Id);
            if (estoque != null)
            {
                estoque.Quantidade += dto.Quantidade;
                _context.Estoque.Update(estoque);
            }
            else
            {
                estoque = new Estoque
                {
                    ProdutoId = produtoParaUsar.Id,
                    Quantidade = dto.Quantidade
                };
                _context.Estoque.Add(estoque);
            }

            await _context.SaveChangesAsync();

            await _logService.RegistrarAsync(
                entidade: "Estoque",
                acao: "Criação de entrada",
                usuarioId: 1, // Padrão
                detalhes: $"Produto '{produtoParaUsar.Nome}' adicionado com {dto.Quantidade} unidades."
            );
        }



        public async Task<bool> UpdateAsync(int id, EstoqueDTO dto)
        {
            var estoque = await _context.Estoque
                .Include(e => e.Produto)
                .FirstOrDefaultAsync(e => e.Id == id);

            if (estoque == null) return false;

            // Atualizar a quantidade no estoque
            estoque.Quantidade = dto.Quantidade;

            // Buscar categoria
            var categoria = int.TryParse(dto.Categoria, out var idCategoria)
                ? await _context.Categoria.FindAsync(idCategoria)
                : await _context.Categoria.FirstOrDefaultAsync(c => c.Nome.ToLower() == dto.Categoria.ToLower());

            if (categoria == null)
                throw new Exception($"Categoria '{dto.Categoria}' não encontrada.");


            // Atualizar dados do produto
            var produto = await _context.Produto.FindAsync(estoque.ProdutoId);
            if (produto == null) return false;

            produto.Nome = dto.NomeProduto;
            produto.CategoriaId = categoria.Id;

            // Atualizar última entrada de doação (caso exista)
            var entrada = await _context.EntradaDoacao
                .Where(e => e.ProdutoId == produto.Id)
                .OrderByDescending(e => e.CriadoEm)
                .FirstOrDefaultAsync();

            if (entrada != null)
            {
                entrada.DataRecebimento = (dto.Entrada ?? entrada.DataRecebimento).ToUniversalTime();
                entrada.DataValidade = dto.Validade?.ToUniversalTime();
                entrada.ValorCompra = dto.Valor;
                entrada.NomeDoador = dto.Doador;
            }

            await _context.SaveChangesAsync();

            await _logService.RegistrarAsync(
                entidade: "Estoque",
                acao: "Atualização de entrada",
                usuarioId: 1, // Padrão
                detalhes: $"Estoque do produto '{dto.NomeProduto}' atualizado para {dto.Quantidade} unidades."
            );

            return true;
        }

        public async Task<bool> DeleteAsync(int id)
        {
            var estoque = await _context.Estoque.FindAsync(id);
            if (estoque == null) return false;

            var produto = await _context.Produto.FindAsync(estoque.ProdutoId);
            if (produto == null) return false;

            var entradas = await _context.EntradaDoacao
                .Where(e => e.ProdutoId == produto.Id)
                .ToListAsync();

            _context.EntradaDoacao.RemoveRange(entradas);

            _context.Produto.Remove(produto);

            _context.Estoque.Remove(estoque);

            await _context.SaveChangesAsync();

            await _logService.RegistrarAsync(
                entidade: "Estoque",
                acao: "Remoção completa",
                usuarioId: 1, // Padrão
                detalhes: $"Remoção completa do estoque ID {id}, produto '{produto.Nome}' e {entradas.Count} entradas."
            );

            return true;
        }

        public async Task<IEnumerable<EstoqueBaixoDTO>> GetEstoqueBaixoAsync()
        {
            // Busca estoque junto com nome do produto
            var itensComEstoqueBaixo = await (
                from estoque in _context.Estoque
                join produto in _context.Produto on estoque.ProdutoId equals produto.Id
                where estoque.Quantidade <= 5 // Defina aqui o critério de "baixo"
                select new EstoqueBaixoDTO
                {
                    Nome = produto.Nome,
                    Quantidade = estoque.Quantidade
                }
            ).ToListAsync();

            return itensComEstoqueBaixo;
        }

    }
}