using Microsoft.EntityFrameworkCore;
using Stoq.Data;
using Stoq.DTOs;
using Stoq.IServices;
using Stoq.Models;

namespace Stoq.Services
{
    public class CategoriaService : ICategoriaService
    {
        private readonly DataContext _context;

        public CategoriaService(DataContext context)
        {
            _context = context;
        }

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

        public async Task<CategoriaDTO> CreateAsync(CategoriaDTO dto)
        {
            var categoria = new Categoria
            {
                Nome = dto.Nome
            };

            _context.Categoria.Add(categoria);
            await _context.SaveChangesAsync();

            dto.Id = categoria.Id;
            return dto;
        }

        public async Task<bool> UpdateAsync(int id, CategoriaDTO dto)
        {
            var categoria = await _context.Categoria.FindAsync(id);
            if (categoria == null) return false;

            categoria.Nome = dto.Nome;
            await _context.SaveChangesAsync();
            return true;
        }

        public async Task<bool> DeleteAsync(int id)
        {
            var categoria = await _context.Categoria.FindAsync(id);
            if (categoria == null) return false;

            _context.Categoria.Remove(categoria);
            await _context.SaveChangesAsync();
            return true;
        }
    }
}