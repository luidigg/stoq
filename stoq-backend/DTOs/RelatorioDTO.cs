namespace Stoq.DTOs
{
    public class RelatorioPeriodoDTO
    {
        public DateTime? DataInicio { get; set; }
        public DateTime? DataFim { get; set; }
    }

    public class RelatorioCategoriaDTO
    {
        public string? Categoria { get; set; }
    }

    public class RelatorioValidadeDTO
    {
        public int DiasAteValidade { get; set; }
    }

    public class RelatorioEstoqueDTO
    {
        public int QuantidadeMinima { get; set; }
    }
}
