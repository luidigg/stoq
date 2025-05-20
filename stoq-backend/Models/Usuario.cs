namespace Stoq.Models
{
    public class Usuario
    {
        public int Id { get; set; }
        public string Nome { get; set; }
        public string Email { get; set; }
        public string SenhaHash { get; set; }

        public int CargoId { get; set; }
        public Cargo Cargo { get; set; }

        public DateTime CriadoEm { get; set; }
        public DateTime? AtualizadoEm { get; set; }

        public ICollection<Log> Logs { get; set; }
    }
}