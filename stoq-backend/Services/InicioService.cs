using Microsoft.EntityFrameworkCore;
using Stoq.Data;
using Stoq.DTOs;
using Stoq.IServices;

namespace Stoq.Services
{
    public class InicioService(DataContext context) : IInicioService
    {
        private readonly DataContext _context = context;

        public async Task<TotaisInicioDTO> ObterTotaisAsync()
        {
            var hoje = DateTime.UtcNow.Date;

            return new TotaisInicioDTO
            {
                TotalProdutos = await _context.Estoque.CountAsync(),
                ItensComEstoqueBaixo = await _context.Estoque.CountAsync(e => e.Quantidade <= 5), //verificar depois
                EntradasDoDia = await _context.EntradaDoacao.CountAsync(e => e.DataRecebimento.Date == hoje),
                SaidasDoDia = await _context.SaidaDoacao.CountAsync(s => s.DataSaida.Date == hoje)
            };
        }

        public async Task<List<MovimentacaoDTO>> ObterUltimasMovimentacoesAsync()
        {
            // Entradas com produto
            var entradas = await _context.EntradaDoacao
                .Include(e => e.Produto)
                .OrderByDescending(e => e.DataRecebimento)
                .Take(5)
                .Select(e => new MovimentacaoDTO
                {
                    Tipo = "entrada",
                    Descricao = e.Produto.Nome,
                    Quantidade = $"{e.Quantidade} un",
                    DataEntrada = e.DataRecebimento,
                    Validade = e.DataValidade
                })
                .ToListAsync();

            // Saídas com entrada -> produto
            var saidas = await _context.SaidaDoacao
                .Include(s => s.EntradaDoacao)
                    .ThenInclude(e => e.Produto)
                .OrderByDescending(s => s.DataSaida)
                .Take(5)
                .Select(s => new MovimentacaoDTO
                {
                    Tipo = "saida",
                    Descricao = s.EntradaDoacao.Produto.Nome,
                    Quantidade = $"{s.Quantidade} un",
                    DataEntrada = s.DataSaida,
                    Validade = null
                })
                .ToListAsync();

            return entradas.Concat(saidas)
                .OrderByDescending(m => m.DataEntrada)
                .Take(7)
                .ToList();
        }
    }
}
