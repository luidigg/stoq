using System.ComponentModel.DataAnnotations;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using Microsoft.IdentityModel.Tokens;
using Stoq.Data;
using Stoq.DTOs;
using Stoq.IServices;
using Stoq.Models;

namespace Stoq.Services
{
    public class AuthService(IConfiguration configuration, DataContext context) : IAuthService
    {
        private readonly IConfiguration _configuration = configuration;
        private readonly DataContext _context = context;

        public AuthDTO Authenticate(LoginDTO dto)
        {
            List<ValidationResult> validationResults = [];
            bool isValid = Validator.TryValidateObject(dto, new ValidationContext(dto), validationResults, true);

            Usuario? user = _context.Usuario.FirstOrDefault(u => u.Email == dto.Email);
            bool validPassword = IsValidBcryptHash(user?.SenhaHash) && BCrypt.Net.BCrypt.Verify(dto.Senha, user?.SenhaHash);

            if (user == null || validPassword == false)
            {
                string mensagem = user == null ? "Usuário não encontrado." : "Senha incorreta.";
                return new AuthDTO
                {
                    Sucesso = false,
                    Mensagem = mensagem
                };
            }

            return new AuthDTO
            {
                Sucesso = true,
                Mensagem = "Autenticação bem-sucedida.",
                Token = GenerateJwtToken(user.Id.ToString(), user.Nome)
            };
        }

        public string GenerateJwtToken(string userId, string name)
        {
            var tokenHandler = new JwtSecurityTokenHandler();
            var signingKey = GetSigningKey();

            int tokenExpirationDays = _configuration.GetValue<int>("AuthSettings:TokenDurationInDays");

            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(
                [
                    new Claim(ClaimTypes.NameIdentifier, userId),
                    new Claim(ClaimTypes.Name, name)
                ]),
                Expires = DateTime.UtcNow.AddDays(tokenExpirationDays),
                SigningCredentials = new SigningCredentials(signingKey, SecurityAlgorithms.HmacSha256Signature)
            };

            SecurityToken token = tokenHandler.CreateToken(tokenDescriptor);
            return tokenHandler.WriteToken(token);
        }

        private SymmetricSecurityKey GetSigningKey()
        {
            string? secret = _configuration["Jwt:Secret"];
            if (string.IsNullOrEmpty(secret))
            {
                throw new InvalidOperationException("A chave JWT não foi configurada.");
            }

            byte[] key = Encoding.ASCII.GetBytes(secret);
            return new SymmetricSecurityKey(key);
        }

        private static bool IsValidBcryptHash(string? hash)
        {
            return !string.IsNullOrWhiteSpace(hash) && hash.StartsWith("$2") && hash.Length >= 60;
        }

    }
}