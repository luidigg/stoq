using System.ComponentModel.DataAnnotations;

namespace Stoq.DTOs
{
    public class RegistroDTO
    {
        [Required(ErrorMessage = "Nome é obrigatório.")]
        public string Nome { get; set; }

        [Required(ErrorMessage = "Email é obrigatório.")]
        [EmailAddress(ErrorMessage = "Email inválido.")]
        public string Email { get; set; }

        [Required(ErrorMessage = "Senha é obrigatória.")]
        public string Senha { get; set; }

        [Required(ErrorMessage = "Cargo é obrigatório.")]
        public int CargoId { get; set; }
    }
}