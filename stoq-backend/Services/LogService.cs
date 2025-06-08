using Stoq.Data;
using Stoq.Models;
using Microsoft.EntityFrameworkCore;
using Stoq.IServices;

namespace Stoq.Services
{
    public class LogService(DataContext context) : ILogService
    {
        private readonly DataContext _context = context;

        public async Task RegistrarAsync(string entidade, string acao, int? usuarioId, string? detalhes = null)
        {
            var log = new Log
            {
                Entidade = entidade,
                Acao = acao,
                UsuarioId = usuarioId ?? 0,
                DataHora = DateTime.UtcNow,
                Detalhes = detalhes
            };

            _context.Log.Add(log);
            await _context.SaveChangesAsync();
        }

        public async Task<List<Log>> ListarTodosAsync()
        {
            return await _context.Log
                .Include(l => l.Usuario)
                .OrderByDescending(l => l.DataHora)
                .ToListAsync();
        }

        public async Task<List<Log>> ListarPorUsuarioAsync(int usuarioId)
        {
            return await _context.Log
                .Where(l => l.UsuarioId == usuarioId)
                .OrderByDescending(l => l.DataHora)
                .ToListAsync();
        }
    }
}