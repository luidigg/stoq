using Microsoft.EntityFrameworkCore;
using Stoq.Data;
using Stoq.Models;
using Stoq.IServices;

namespace Stoq.Services
{
    public class EntradaDoacaoService(DataContext context, ILogService logService) : IEntradaDoacaoService
    {
        private readonly DataContext _context = context;
        private readonly ILogService _logService = logService;

        public async Task<EntradaDoacao> CadastrarAsync(EntradaDoacao entrada, int usuarioId)
        {
            entrada.CriadoEm = DateTime.UtcNow;

            _context.EntradaDoacao.Add(entrada);
            await _context.SaveChangesAsync();

            // Atualiza estoque
            var estoque = await _context.Estoque.FirstOrDefaultAsync(e => e.ProdutoId == entrada.ProdutoId);
            if (estoque is null)
            {
                estoque = new Estoque
                {
                    ProdutoId = entrada.ProdutoId,
                    Quantidade = entrada.Quantidade
                };
                _context.Estoque.Add(estoque);
            }
            else
            {
                estoque.Quantidade += entrada.Quantidade;
                _context.Estoque.Update(estoque);
            }

            await _context.SaveChangesAsync();

            // Log
            await _logService.RegistrarAsync(
                entidade: "EntradaDoacao",
                acao: "Cadastro",
                usuarioId: usuarioId,
                detalhes: $"Entrada registrada para produtoId={entrada.ProdutoId}, quantidade={entrada.Quantidade}"
            );

            return entrada;
        }

        public async Task<List<EntradaDoacao>> ListarAsync()
        {
            return await _context.EntradaDoacao
                .Include(e => e.Produto)
                .OrderByDescending(e => e.DataRecebimento)
                .ToListAsync();
        }
    }
}
