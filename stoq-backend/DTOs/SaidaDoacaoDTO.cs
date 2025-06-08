namespace Stoq.DTOs
{
    public class SaidaDoacaoDTO
    {
        public int Id { get; set; }
        public int EntradaId { get; set; }
        public int Quantidade { get; set; }
        public DateTime DataSaida { get; set; }
        public string Motivo { get; set; }
        public string? Observacoes { get; set; }
    }

    public class CriarSaidaDoacaoDTO
    {
        public int EntradaId { get; set; }
        public int Quantidade { get; set; }
        public string Motivo { get; set; }
        public string? Observacoes { get; set; }
        public int UsuarioId { get; set; }
    }

}