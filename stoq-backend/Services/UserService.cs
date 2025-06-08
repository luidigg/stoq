using System.ComponentModel.DataAnnotations;
using Stoq.Data;
using Stoq.DTOs;
using Stoq.IServices;
using Stoq.Models;

namespace Stoq.Services
{
    public class UserService(DataContext context) : IUserService
    {
        private readonly DataContext _context = context;

        public async Task<AuthDTO> RegisterAsync(RegistroDTO dto)
        {
            // Validar o formulario com DataAnnotations
            List<ValidationResult> validationResults = [];
            bool isValid = Validator.TryValidateObject(dto, new ValidationContext(dto), validationResults, true);
            if (!isValid)
            {
                return new AuthDTO
                {
                    Sucesso = false,
                    Mensagem = string.Join(", ", validationResults.Select(vr => vr.ErrorMessage))
                };
            }

            if (_context.Usuario.Any(u => u.Email == dto.Email))
            {
                return new AuthDTO
                {
                    Sucesso = false,
                    Mensagem = "Já existe um usuário com esse email."
                };
            }

            string senhaHash = BCrypt.Net.BCrypt.HashPassword(dto.Senha);

            Usuario novoUsuario = new()
            {
                Nome = dto.Nome,
                Email = dto.Email,
                SenhaHash = senhaHash,
                CargoId = dto.CargoId,
                CriadoEm = DateTime.Now.ToUniversalTime(),
            };

            _context.Usuario.Add(novoUsuario);
            await _context.SaveChangesAsync();

            return new AuthDTO
            {
                Sucesso = true,
                Mensagem = "Usuário registrado com sucesso."
            };
        }
    }
}
