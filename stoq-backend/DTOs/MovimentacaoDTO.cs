namespace Stoq.DTOs
{
    public class MovimentacaoDTO
    {
        public string Tipo { get; set; } // "entrada" ou "saida"
        public string Descricao { get; set; }
        public string Quantidade { get; set; }
        public DateTime DataEntrada { get; set; }
        public DateTime? Validade { get; set; }
    }
}