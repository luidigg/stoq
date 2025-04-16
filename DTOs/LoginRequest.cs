using System.ComponentModel.DataAnnotations;

namespace Stoq.DTOs
{
    public class LoginRequest
    {
        [Required(ErrorMessage = "Email é obrigatório.")]
        [EmailAddress(ErrorMessage = "Email inválido.")]
        public string Email { get; set; }
        
        [Required(ErrorMessage = "Senha é obrigatória.")]
        public string Senha { get; set; }
    }
}