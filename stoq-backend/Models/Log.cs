namespace Stoq.Models
{
    public class Log
    {
        public int Id { get; set; }

        public string Entidade { get; set; }
        public string Acao { get; set; }

        public int UsuarioId { get; set; }
        public Usuario Usuario { get; set; }

        public DateTime DataHora { get; set; }
        public string Detalhes { get; set; }
    }
}