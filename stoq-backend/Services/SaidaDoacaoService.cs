using Microsoft.EntityFrameworkCore;
using Stoq.Data;
using Stoq.Models;
using Stoq.DTOs;
using Stoq.IServices;

namespace Stoq.Services
{
    public class SaidaDoacaoService(DataContext context, ILogService logService) : ISaidaDoacaoService
    {
        private readonly DataContext _context = context;
        private readonly ILogService _logService = logService;

        public async Task<List<SaidaDoacaoDTO>> ListarAsync()
        {
            return await _context.SaidaDoacao
                .OrderByDescending(s => s.DataSaida)
                .Select(s => new SaidaDoacaoDTO
                {
                    Id = s.Id,
                    EntradaId = s.EntradaId,
                    Quantidade = s.Quantidade,
                    DataSaida = s.DataSaida,
                    Motivo = s.Motivo,
                    Observacoes = s.Observacoes
                })
                .ToListAsync();
        }

        public async Task<bool> CriarAsync(CriarSaidaDoacaoDTO dto)
        {
            if (dto.Quantidade <= 0)
                return false;

            // Buscar estoque do produto
            var estoque = await _context.Estoque
                .FirstOrDefaultAsync(e => e.ProdutoId == dto.ProdutoId);

            if (estoque == null || estoque.Quantidade < dto.Quantidade)
                return false;

            // Buscar a entrada mais antiga com estoque suficiente (FIFO)
            var entrada = await _context.EntradaDoacao
                .Where(e => e.ProdutoId == dto.ProdutoId && e.Quantidade > 0)
                .OrderBy(e => e.DataRecebimento)
                .FirstOrDefaultAsync();

            if (entrada == null || entrada.Quantidade < dto.Quantidade)
                return false;

            // Criar saída
            var saida = new SaidaDoacao
            {
                EntradaId = entrada.Id,
                Quantidade = dto.Quantidade,
                DataSaida = DateTime.UtcNow,
                Motivo = dto.Motivo,
                Observacoes = dto.Observacoes
            };

            // Atualizar quantidade na entrada usada (caso precise controlar o saldo da entrada)
            entrada.Quantidade -= dto.Quantidade;

            // Atualizar estoque geral
            estoque.Quantidade -= dto.Quantidade;

            // Persistir
            _context.SaidaDoacao.Add(saida);
            await _context.SaveChangesAsync();

            // Log
            await _logService.RegistrarAsync(
                "SaidaDoacao",
                "Criar",
                dto.UsuarioId,
                $"Saída registrada do produto_id={dto.ProdutoId}, quantidade={dto.Quantidade}, entrada_id={entrada.Id}"
            );

            return true;
        }
    }
}