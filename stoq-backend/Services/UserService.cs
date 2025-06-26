using System.ComponentModel.DataAnnotations;
using Stoq.Data;
using Stoq.DTOs;
using Stoq.IServices;
using Stoq.Models;

namespace Stoq.Services
{
    public class UserService(DataContext context, ILogService logService) : IUserService
    {
        private readonly DataContext _context = context;
        private readonly ILogService _logService = logService;

        public async Task<AuthDTO> RegisterAsync(RegistroDTO dto)
        {
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

            await _logService.RegistrarAsync(
                entidade: "Usuário",
                acao: "Registro de novo usuário",
                usuarioId: 1, // Padrão
                detalhes: $"Usuário '{dto.Nome}' registrado com o email '{dto.Email}'."
            );


            return new AuthDTO
            {
                Sucesso = true,
                Mensagem = "Usuário registrado com sucesso."
            };
        }

        public async Task<bool> AtualizarAsync(EditarUsuarioDTO dto)
        {
            var usuario = await _context.Usuario.FindAsync(dto.Id);
            if (usuario == null)
                return false;

            var emailExistente = _context.Usuario.Any(u => u.Email == dto.Email && u.Id != dto.Id);
            if (emailExistente)
                return false;

            usuario.Nome = dto.Nome;
            usuario.Email = dto.Email;
            usuario.AtualizadoEm = DateTime.UtcNow;

            await _context.SaveChangesAsync();

            await _logService.RegistrarAsync(
                entidade: "Usuário",
                acao: "Atualização de usuário",
                usuarioId: 1, // Padrão
                detalhes: $"Usuário com ID {dto.Id} atualizado para nome '{dto.Nome}' e email '{dto.Email}'."
            );

            return true;
        }

        public async Task<Usuario?> ObterPorIdAsync(int id)
        {
            return await _context.Usuario.FindAsync(id);
        }
    }
}
