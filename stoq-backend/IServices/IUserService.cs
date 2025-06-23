using Stoq.DTOs;
using Stoq.Models;

namespace Stoq.IServices
{
    public interface IUserService
    {
        Task<AuthDTO> RegisterAsync(RegistroDTO dto);
        Task<Usuario?> ObterPorIdAsync(int id);
        Task<bool> AtualizarAsync(EditarUsuarioDTO dto);

    }
}
