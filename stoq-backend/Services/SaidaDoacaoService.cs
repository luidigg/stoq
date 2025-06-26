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

            using var transaction = await _context.Database.BeginTransactionAsync();

            try
            {
                // Buscar estoque atual
                var estoque = await _context.Estoque.FirstOrDefaultAsync(e => e.ProdutoId == dto.ProdutoId);
                if (estoque == null || estoque.Quantidade < dto.Quantidade)
                    return false;

                // Buscar todas entradas com saldo (quantidade > 0), ordenadas por data (FIFO)
                var entradas = await _context.EntradaDoacao
                    .Where(e => e.ProdutoId == dto.ProdutoId && e.Quantidade > 0)
                    .OrderBy(e => e.DataRecebimento)
                    .ToListAsync();

                // Corrigir o Kind das datas nas entradas para UTC (IMPORTANTE)
                foreach (var entrada in entradas)
                {
                    entrada.DataRecebimento = DateTime.SpecifyKind(entrada.DataRecebimento, DateTimeKind.Utc);
                    if (entrada.DataValidade.HasValue)
                        entrada.DataValidade = DateTime.SpecifyKind(entrada.DataValidade.Value, DateTimeKind.Utc);
                    entrada.CriadoEm = DateTime.SpecifyKind(entrada.CriadoEm, DateTimeKind.Utc);
                }

                var quantidadeRestante = dto.Quantidade;

                foreach (var entrada in entradas)
                {
                    if (quantidadeRestante <= 0)
                        break;

                    int quantidadeASubtrair = Math.Min(entrada.Quantidade, quantidadeRestante);

                    // Criar saída para essa entrada parcial, DataSaida já é UTC
                    var saida = new SaidaDoacao
                    {
                        EntradaId = entrada.Id,
                        Quantidade = quantidadeASubtrair,
                        DataSaida = DateTime.UtcNow,
                        Motivo = dto.Motivo,
                        Observacoes = dto.Observacoes
                    };
                    _context.SaidaDoacao.Add(saida);

                    // Atualizar entrada
                    entrada.Quantidade -= quantidadeASubtrair;
                    _context.EntradaDoacao.Update(entrada);

                    quantidadeRestante -= quantidadeASubtrair;
                }

                if (quantidadeRestante > 0)
                {
                    // Não há quantidade suficiente nas entradas para a saída total
                    return false;
                }

                // Atualizar estoque
                estoque.Quantidade -= dto.Quantidade;
                _context.Estoque.Update(estoque);

                // ATENÇÃO: Corrigir todas as propriedades DateTime de estoque também, se houver.
                // (Se estoque não tem DateTime, pode ignorar.)

                // Salvar mudanças
                await _context.SaveChangesAsync();

                await transaction.CommitAsync();

                await _logService.RegistrarAsync(
                    entidade: "SaidaDoacao",
                    acao: "Criação de saída",
                    usuarioId: dto.UsuarioId,
                    detalhes: $"Saída registrada do produto ID {dto.ProdutoId}, quantidade {dto.Quantidade}."
                );

                return true;
            }
            catch
            {
                await transaction.RollbackAsync();
                throw;
            }
        }

    }
}