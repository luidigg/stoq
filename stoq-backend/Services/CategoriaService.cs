using Microsoft.EntityFrameworkCore;
using Stoq.Data;
using Stoq.DTOs;
using Stoq.IServices;

namespace Stoq.Services
{
    public class CategoriaService(DataContext context) : ICategoriaService
    {
        private readonly DataContext _context = context;

        public async Task<List<CategoriaDTO>> GetAllAsync()
        {
            return await _context.Categoria
                .Select(c => new CategoriaDTO
                {
                    Id = c.Id,
                    Nome = c.Nome
                })
                .ToListAsync();
        }

        public async Task<CategoriaDTO?> GetByIdAsync(int id)
        {
            var categoria = await _context.Categoria.FindAsync(id);
            if (categoria == null) return null;

            return new CategoriaDTO
            {
                Id = categoria.Id,
                Nome = categoria.Nome
            };
        }
    }
}