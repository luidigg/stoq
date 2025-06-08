using System.Security.Claims;
using Stoq.DTOs;

namespace Stoq.IServices
{
    public interface IAuthService
    {
        AuthDTO Authenticate(LoginDTO dto);
        ClaimsPrincipal ValidateJwtToken(string token);
        string GenerateJwtToken(string userId, string name);
    }
}