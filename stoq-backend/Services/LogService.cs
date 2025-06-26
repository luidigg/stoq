using Stoq.Data;
using Stoq.Models;
using Microsoft.EntityFrameworkCore;
using Stoq.IServices;
using Stoq.DTOs;

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

        public async Task<List<LogDTO>> ListarTodosAsync()
        {
            var logs = await _context.Log
                .Include(l => l.Usuario)
                .OrderByDescending(l => l.DataHora)
                .Take(50)
                .Select(l => new LogDTO
                {
                    Id = l.Id,
                    Entidade = l.Entidade,
                    Acao = l.Acao,
                    UsuarioNome = l.Usuario.Nome,
                    DataHora = l.DataHora,
                    Detalhes = l.Detalhes
                })
                .ToListAsync();

            return logs;
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