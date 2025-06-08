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
            var entrada = await _context.EntradaDoacao.FindAsync(dto.EntradaId);
            if (entrada == null || dto.Quantidade <= 0)
                return false;

            var estoque = await _context.Estoque
                .FirstOrDefaultAsync(e => e.ProdutoId == entrada.ProdutoId);

            if (estoque == null || estoque.Quantidade < dto.Quantidade)
                return false;

            var saida = new SaidaDoacao
            {
                EntradaId = dto.EntradaId,
                Quantidade = dto.Quantidade,
                DataSaida = DateTime.UtcNow,
                Motivo = dto.Motivo,
                Observacoes = dto.Observacoes
            };

            // Atualizar estoque
            estoque.Quantidade -= dto.Quantidade;

            _context.SaidaDoacao.Add(saida);
            await _context.SaveChangesAsync();

            // Log
            await _logService.RegistrarAsync(
                "SaidaDoacao",
                "Criar",
                dto.UsuarioId,
                $"Nova saída registrada (entrada_id={dto.EntradaId}, quantidade={dto.Quantidade})"
            );

            return true;
        }
    }
}
