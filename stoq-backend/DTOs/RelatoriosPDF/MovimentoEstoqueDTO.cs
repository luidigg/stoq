namespace Stoq.DTOs
{
    public class MovimentoEstoqueDTO
    {
        public DateTime Data { get; set; }

        public string Produto { get; set; } = string.Empty;

        public string Categoria { get; set; } = string.Empty;

        public double Quantidade { get; set; }

        public string Unidade { get; set; } = "Un"; // Kg, L, etc

        public string TipoMovimento { get; set; } = string.Empty; // "Entrada" ou "Saída"

        public DateTime? Validade { get; set; } // Caso precise exibir validade dos produtos
    }
}