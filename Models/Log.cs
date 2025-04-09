namespace Stoq.Models
{
    public class Log
    {
        public int Id { get; set; }
        public string Entidade { get; set; }
        public string Acao { get; set; } // Criado, Atualizado, Deletado
        public int UsuarioId { get; set; }
        public Usuario Usuario { get; set; }
        public DateTime DataHora { get; set; } = DateTime.Now;
        public string Detalhes { get; set; }
    }
}