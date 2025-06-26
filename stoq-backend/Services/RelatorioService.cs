using Microsoft.EntityFrameworkCore;
using QuestPDF.Fluent;
using Stoq.Data;
using Stoq.DTOs;
using Stoq.IServices;
using Stoq.Services.Relatorios;

namespace Stoq.Services
{
    public class RelatorioService(DataContext context, ILogService logService) : IRelatorioService
    {
        private readonly DataContext _context = context;
        private readonly ILogService _logService = logService;

        public async Task<byte[]> GerarRelatorioEntradas(RelatorioPeriodoDTO dto)
        {
            var entradas = await _context.EntradaDoacao
                .Include(e => e.Produto)
                .ThenInclude(p => p.Categoria)
                .Where(e => e.DataRecebimento >= dto.DataInicio && e.DataRecebimento <= dto.DataFim)
                .Select(e => new MovimentoEstoqueDTO
                {
                    Data = e.DataRecebimento,
                    Produto = e.Produto.Nome,
                    Categoria = e.Produto.Categoria.Nome,
                    Quantidade = e.Quantidade,
                    Unidade = "Un" // Ajustar conforme necessário
                })
                .ToListAsync();

            var document = new EntradasRelatorioDocument(entradas, dto);

            await _logService.RegistrarAsync(
                entidade: "Relatório",
                acao: "Gerar Relatório de Entradas",
                usuarioId: 1,
                detalhes: $"Relatório de entradas gerado de {dto.DataInicio:dd/MM/yyyy} a {dto.DataFim:dd/MM/yyyy}."
            );

            return document.GeneratePdf();
        }

        public async Task<byte[]> GerarRelatorioSaidas(RelatorioPeriodoDTO dto)
        {
            var saidas = await _context.SaidaDoacao
                .Include(s => s.EntradaDoacao)
                .ThenInclude(e => e.Produto)
                .ThenInclude(p => p.Categoria)
                .Where(s => s.DataSaida >= dto.DataInicio && s.DataSaida <= dto.DataFim)
                .Select(s => new MovimentoEstoqueDTO
                {
                    Data = s.DataSaida,
                    Produto = s.EntradaDoacao.Produto.Nome,
                    Categoria = s.EntradaDoacao.Produto.Categoria.Nome,
                    Quantidade = s.Quantidade,
                    TipoMovimento = s.Motivo,
                    Unidade = "Un" // ou sua lógica de unidade
                })
                .ToListAsync();

            var document = new SaidasRelatorioDocument(saidas, dto);

            await _logService.RegistrarAsync(
                entidade: "Relatório",
                acao: "Gerar Relatório de Saídas",
                usuarioId: 1,
                detalhes: $"Relatório de saídas gerado de {dto.DataInicio:dd/MM/yyyy} a {dto.DataFim:dd/MM/yyyy}."
            );


            return document.GeneratePdf();
        }

        public async Task<byte[]> GerarRelatorioPorCategoria(RelatorioCategoriaDTO dto)
        {
            // Valida filtro (pode ser opcional, retorna tudo se for null/empty)
            var categoriaFiltro = dto.Categoria?.Trim();

            var query = _context.EntradaDoacao
                .Include(e => e.Produto)
                .ThenInclude(p => p.Categoria)
                .AsQueryable();

            if (!string.IsNullOrEmpty(categoriaFiltro))
            {
                query = query.Where(e => e.Produto.Categoria.Nome.ToLower() == categoriaFiltro.ToLower());
            }

            var dados = await query
                .Select(e => new MovimentoEstoqueDTO
                {
                    Data = e.DataRecebimento,
                    Produto = e.Produto.Nome,
                    Categoria = e.Produto.Categoria.Nome,
                    Quantidade = e.Quantidade,
                    Validade = e.DataValidade
                })
                .ToListAsync();

            var document = new RelatorioCategoriaDocument(dados, dto);

            await _logService.RegistrarAsync(
                entidade: "Relatório",
                acao: "Gerar Relatório por Categoria",
                usuarioId: 1,
                detalhes: $"Relatório por categoria {(string.IsNullOrEmpty(dto.Categoria) ? "(todas)" : $"'{dto.Categoria}'")} gerado."
            );

            return document.GeneratePdf();
        }

        public async Task<byte[]> GerarRelatorioValidade(RelatorioValidadeDTO dto)
        {
            var hoje = DateTime.UtcNow.Date;
            var dataLimite = hoje.AddDays(dto.DiasAteValidade);

            var dados = await _context.EntradaDoacao
                .Include(e => e.Produto)
                .ThenInclude(p => p.Categoria)
                .Where(e => e.DataValidade != null && e.DataValidade >= hoje && e.DataValidade <= dataLimite)
                .Select(e => new MovimentoEstoqueDTO
                {
                    Data = e.DataRecebimento,
                    Produto = e.Produto.Nome,
                    Categoria = e.Produto.Categoria.Nome,
                    Quantidade = e.Quantidade,
                    Validade = e.DataValidade
                })
                .ToListAsync();

            var filtro = new RelatorioValidadeDTO { DiasAteValidade = dto.DiasAteValidade };
            var document = new RelatorioValidadeDocument(dados, filtro);

            await _logService.RegistrarAsync(
                entidade: "Relatório",
                acao: "Gerar Relatório de Validade",
                usuarioId: 1,
                detalhes: $"Relatório de validade gerado para próximos {dto.DiasAteValidade} dias."
            );

            return document.GeneratePdf();
        }

        public async Task<byte[]> GerarRelatorioMaisMovimentados(RelatorioPeriodoDTO dto)
        {
            var dataInicioUtc = DateTime.SpecifyKind(dto.DataInicio?.Date ?? DateTime.MinValue, DateTimeKind.Utc);
            var dataFimUtc = DateTime.SpecifyKind(dto.DataFim?.Date.AddDays(1).AddTicks(-1) ?? DateTime.MaxValue, DateTimeKind.Utc);

            // Busca movimentos de entradas
            var entradas = _context.EntradaDoacao
                .Include(e => e.Produto)
                .ThenInclude(p => p.Categoria)
                .Where(e => e.DataRecebimento >= dataInicioUtc && e.DataRecebimento <= dataFimUtc)
                .Select(e => new MovimentoEstoqueDTO
                {
                    Data = e.DataRecebimento,
                    Produto = e.Produto.Nome,
                    Categoria = e.Produto.Categoria.Nome,
                    Quantidade = e.Quantidade,
                    Unidade = "Un", // Ajuste se tiver info de unidade
                    TipoMovimento = "Entrada",
                    Validade = e.DataValidade
                });

            // Busca movimentos de saídas
            var saidas = _context.SaidaDoacao
                .Include(s => s.EntradaDoacao)
                .ThenInclude(e => e.Produto)
                .ThenInclude(p => p.Categoria)
                .Where(s => s.DataSaida >= dataInicioUtc && s.DataSaida <= dataFimUtc)
                .Select(s => new MovimentoEstoqueDTO
                {
                    Data = s.DataSaida,
                    Produto = s.EntradaDoacao.Produto.Nome,
                    Categoria = s.EntradaDoacao.Produto.Categoria.Nome,
                    Quantidade = s.Quantidade,
                    Unidade = "Un",
                    TipoMovimento = "Saída",
                    Validade = s.EntradaDoacao.DataValidade
                });

            // Junta todos os movimentos
            var movimentos = entradas.Concat(saidas);

            // Agrupa por produto e soma total movimentado (entrada + saída)
            var dados = await movimentos
                .GroupBy(m => new { m.Produto, m.Categoria })
                .Select(g => new MovimentoEstoqueDTO
                {
                    Produto = g.Key.Produto,
                    Categoria = g.Key.Categoria,
                    Quantidade = g.Sum(x => x.Quantidade),
                    Unidade = "Un",
                    TipoMovimento = "Total Movimentado"
                })
                .OrderByDescending(d => d.Quantidade)
                .ToListAsync();

            var document = new RelatorioMaisMovimentadosDocument(dados, dto);

            await _logService.RegistrarAsync(
                entidade: "Relatório",
                acao: "Gerar Relatório de Produtos Mais Movimentados",
                usuarioId: 1,
                detalhes: $"Relatório de produtos mais movimentados de {dto.DataInicio:dd/MM/yyyy} a {dto.DataFim:dd/MM/yyyy}."
            );

            return document.GeneratePdf();
        }

        public async Task<byte[]> GerarRelatorioEstoqueBaixo(RelatorioEstoqueDTO dto)
        {
            var limiteMinimo = dto.QuantidadeMinima;

            var dados = await _context.Estoque
                .Include(e => e.Produto)
                .Where(e => e.Quantidade < limiteMinimo)
                .Select(e => new MovimentoEstoqueDTO
                {
                    Produto = e.Produto.Nome,
                    Quantidade = e.Quantidade,
                    // Pode adicionar outras propriedades caso queira
                })
                .ToListAsync();

            var document = new RelatorioEstoqueBaixoDocument(dados, dto);

            await _logService.RegistrarAsync(
                entidade: "Relatório",
                acao: "Gerar Relatório de Estoque Baixo",
                usuarioId: 1,
                detalhes: $"Relatório de estoque baixo gerado para limite de {dto.QuantidadeMinima} unidades."
            );

            return document.GeneratePdf();
        }
    }
}