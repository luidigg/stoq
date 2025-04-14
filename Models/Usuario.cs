namespace Stoq.Models
{
    public class Usuario
    {
        public int Id { get; set; }
        public required string Nome { get; set; }
        public required string Email { get; set; } // email ou similar
        public required string Senha { get; set; }
        public required string Role { get; set; } // Cozinheira, Limpeza, Diretora
        public DateTime CriadoEm { get; set; } = DateTime.Now;
    }
}