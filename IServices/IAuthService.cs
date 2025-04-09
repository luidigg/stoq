using System.Security.Claims;
using Stoq.DTOs;

namespace Stoq.IServices
{
    public interface IAuthService
    {
        AuthResult Authenticate(string username, string password);
        string GenerateJwtToken(string userId, string name);
        ClaimsPrincipal ValidateJwtToken(string token);
    }
}