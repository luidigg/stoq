using Stoq.Context;
using Stoq.DTOs;
using Stoq.IServices;
using Stoq.Models;

namespace Stoq.Services
{
    public class UserService : IUserService
    {
        private readonly DataContext _context;

        public UserService(DataContext context)
        {
            _context = context;
        }

        public async Task<AuthResult> RegisterAsync(RegisterRequest dto)
        {
            if (_context.Usuarios.Any(u => u.Email == dto.Email))
            {
                return new AuthResult
                {
                    Sucesso = false,
                    Mensagem = "Já existe um usuário com esse email."
                };
            }

            var senhaHash = BCrypt.Net.BCrypt.HashPassword(dto.Senha);

            var novoUsuario = new Usuario
            {
                Nome = dto.Nome,
                Email = dto.Email,
                Senha = senhaHash
            };

            _context.Usuarios.Add(novoUsuario);
            await _context.SaveChangesAsync();

            return new AuthResult
            {
                Sucesso = true,
                Mensagem = "Usuário registrado com sucesso."
            };
        }
    }
}
