using Stoq.DTOs;

namespace Stoq.IServices
{
    public interface IUserService
    {
        Task<AuthResult> RegisterAsync(RegisterRequest dto);
    }
}
