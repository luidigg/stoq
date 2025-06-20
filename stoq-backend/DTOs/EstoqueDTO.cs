namespace Stoq.DTOs
{
    public class EstoqueDTO
    {
        public int Id { get; set; }
        public int ProdutoId { get; set; }
        public string NomeProduto { get; set; } = string.Empty;
        public int Quantidade { get; set; }

        public DateTime? Entrada { get; set; }
        public DateTime? Validade { get; set; }
        public string Categoria { get; set; } = string.Empty;

        public decimal? Valor { get; set; }
        public string Doador { get; set; } = string.Empty;
    }

}
