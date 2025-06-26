namespace Stoq.DTOs
{
    public class MovimentoEstoqueDTO
    {
        public DateTime Data { get; set; }
        public string Produto { get; set; } = string.Empty;
        public string Categoria { get; set; } = string.Empty;
        public double Quantidade { get; set; }
        public string Unidade { get; set; } = "Un";
        public string TipoMovimento { get; set; } = string.Empty;
        public DateTime? Validade { get; set; }
    }
}