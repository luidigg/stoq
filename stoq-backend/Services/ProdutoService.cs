using Microsoft.EntityFrameworkCore;
using Stoq.Data;
using Stoq.DTOs;
using Stoq.Models;
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

        public async Task<Produto> CriarAsync(Produto produto, int? usuarioId = null)
        {
            produto.CriadoEm = DateTime.UtcNow;

            _context.Produto.Add(produto);
            await _context.SaveChangesAsync();

            await _logService.RegistrarAsync(
                entidade: "Produto",
                acao: $"Cadastro de produto: {produto.Nome}",
                usuarioId: usuarioId,
                detalhes: $"ID: {produto.Id} | CategoriaID: {produto.CategoriaId}"
            );

            return produto;
        }

        public async Task<Produto?> AtualizarAsync(int id, Produto produtoAtualizado, int? usuarioId = null)
        {
            var produto = await _context.Produto.FindAsync(id);
            if (produto == null) return null;

            produto.Nome = produtoAtualizado.Nome;
            produto.CategoriaId = produtoAtualizado.CategoriaId;

            await _context.SaveChangesAsync();

            await _logService.RegistrarAsync(
                entidade: "Produto",
                acao: $"Atualização de produto: {produto.Nome}",
                usuarioId: usuarioId,
                detalhes: $"ID: {produto.Id} | CategoriaID: {produto.CategoriaId}"
            );

            return produto;
        }

        public async Task<bool> DeletarAsync(int id, int? usuarioId = null)
        {
            var produto = await _context.Produto.FindAsync(id);
            if (produto == null) return false;

            _context.Produto.Remove(produto);
            await _context.SaveChangesAsync();

            await _logService.RegistrarAsync(
                entidade: "Produto",
                acao: $"Exclusão de produto: {produto.Nome}",
                usuarioId: usuarioId,
                detalhes: $"ID: {produto.Id}"
            );

            return true;
        }
    }
}