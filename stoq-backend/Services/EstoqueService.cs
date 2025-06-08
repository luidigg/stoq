using Microsoft.EntityFrameworkCore;
using Stoq.Data;
using Stoq.DTOs;
using Stoq.IServices;

namespace Stoq.Services
{
    public class EstoqueService(DataContext context) : IEstoqueService
    {
        private readonly DataContext _context = context;

        public async Task<List<EstoqueDTO>> ListarAsync()
        {
            return await _context.Estoque
                .Include(e => e.Produto)
                .Select(e => new EstoqueDTO
                {
                    Id = e.Id,
                    ProdutoId = e.ProdutoId,
                    NomeProduto = e.Produto.Nome,
                    Quantidade = e.Quantidade
                })
                .OrderBy(e => e.NomeProduto)
                .ToListAsync();
        }

        public async Task<EstoqueDTO?> BuscarPorProdutoIdAsync(int produtoId)
        {
            var estoque = await _context.Estoque
                .Include(e => e.Produto)
                .FirstOrDefaultAsync(e => e.ProdutoId == produtoId);

            if (estoque == null) return null;

            return new EstoqueDTO
            {
                Id = estoque.Id,
                ProdutoId = estoque.ProdutoId,
                NomeProduto = estoque.Produto.Nome,
                Quantidade = estoque.Quantidade
            };
        }

        // (Opcional) Método para ajuste manual de estoque
        public async Task<bool> AjustarQuantidadeAsync(int produtoId, int novaQuantidade)
        {
            var estoque = await _context.Estoque.FirstOrDefaultAsync(e => e.ProdutoId == produtoId);
            if (estoque == null) return false;

            estoque.Quantidade = novaQuantidade;
            await _context.SaveChangesAsync();
            return true;
        }
    }
}
