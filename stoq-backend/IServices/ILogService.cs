using Stoq.DTOs;
using Stoq.Models;

namespace Stoq.IServices
{
    public interface ILogService
    {
        Task RegistrarAsync(string entidade, string acao, int? usuarioId, string? detalhes = null);
        Task<List<LogDTO>> ListarTodosAsync();
        Task<List<Log>> ListarPorUsuarioAsync(int usuarioId);
    }
}
