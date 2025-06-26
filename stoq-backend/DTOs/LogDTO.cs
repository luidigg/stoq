namespace Stoq.DTOs
{
    public class LogDTO
    {
        public int Id { get; set; }
        public string Entidade { get; set; } = string.Empty;
        public string Acao { get; set; } = string.Empty;
        public string UsuarioNome { get; set; } = string.Empty;
        public DateTime DataHora { get; set; }
        public string Detalhes { get; set; } = string.Empty;
    }
}
