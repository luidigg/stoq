using Microsoft.EntityFrameworkCore;
using Stoq.Data;
using Stoq.DTOs;
using Stoq.IServices;

namespace Stoq.Services
{
    public class ProdutoService(DataContext context, ILogService logService) : IProdutoService
    {
        private readonly DataContext _context = context;
        private readonly ILogService _logService = logService;

        public async Task<List<ProdutoDTO>> ListarTodosAsync()
        {
            return await _context.Produto
                .Include(p => p.Categoria)
                .OrderBy(p => p.Nome)
                .Select(p => new ProdutoDTO
                {
                    Id = p.Id,
                    Nome = p.Nome,
                    Categoria = new CategoriaDTO
                    {
                        Id = p.Categoria.Id,
                        Nome = p.Categoria.Nome
                    }
                })
                .ToListAsync();
        }

        public async Task<ProdutoDTO?> BuscarPorIdAsync(int id)
        {
            return await _context.Produto
                .Include(p => p.Categoria)
                .Where(p => p.Id == id)
                .Select(p => new ProdutoDTO
                {
                    Id = p.Id,
                    Nome = p.Nome,
                    Categoria = new CategoriaDTO
                    {
                        Id = p.Categoria.Id,
                        Nome = p.Categoria.Nome
                    }
                })
                .FirstOrDefaultAsync();
        }

        public async Task<List<ProdutoNomeDTO>> BuscarPorNomeAsync(string nomeParcial)
        {
            if (string.IsNullOrWhiteSpace(nomeParcial))
                return [];

            return await _context.Produto
                .Where(p => EF.Functions.ILike(p.Nome, $"{nomeParcial}%"))
                .OrderBy(p => p.Nome)
                .Select(p => new ProdutoNomeDTO
                {
                    Id = p.Id,
                    Nome = p.Nome
                })
                .Take(5)
                .ToListAsync();
        }
    }
}