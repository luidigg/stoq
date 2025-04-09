namespace Stoq.Models
{
    public class Usuario
    {
        public int Id { get; set; }
        public string Nome { get; set; }
        public string Email { get; set; } // email ou similar
        public string Senha { get; set; }
        public string Role { get; set; } // Cozinheira, Limpeza, Diretora
        public DateTime CriadoEm { get; set; } = DateTime.Now;
    }
}