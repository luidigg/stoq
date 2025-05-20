namespace Stoq.Models
{
    public class EntradaDoacao
    {
        public int Id { get; set; }

        public int ProdutoId { get; set; }
        public Produto Produto { get; set; }

        public int Quantidade { get; set; }
        public DateTime DataRecebimento { get; set; }
        public DateTime? DataValidade { get; set; }
        public decimal? ValorCompra { get; set; }
        public string NomeDoador { get; set; }

        public DateTime CriadoEm { get; set; }

        public ICollection<SaidaDoacao> SaidasDoacao { get; set; }
    }
}