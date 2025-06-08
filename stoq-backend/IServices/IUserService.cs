using Stoq.DTOs;

namespace Stoq.IServices
{
    public interface IUserService
    {
        Task<AuthDTO> RegisterAsync(RegistroDTO dto);
    }
}
