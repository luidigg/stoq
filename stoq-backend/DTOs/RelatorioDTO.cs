// DTOs/RelatorioPeriodoDTO.cs
namespace Stoq.DTOs
{
    public class RelatorioPeriodoDTO
    {
        public DateTime? DataInicio { get; set; }
        public DateTime? DataFim { get; set; }
    }
}

// DTOs/RelatorioCategoriaDTO.cs
namespace Stoq.DTOs
{
    public class RelatorioCategoriaDTO
    {
        public string? Categoria { get; set; }
    }
}

// DTOs/RelatorioValidadeDTO.cs
namespace Stoq.DTOs
{
    public class RelatorioValidadeDTO
    {
        public int DiasAteValidade { get; set; }
    }
}

// DTOs/RelatorioEstoqueDTO.cs
namespace Stoq.DTOs
{
    public class RelatorioEstoqueDTO
    {
        public int QuantidadeMinima { get; set; }
    }
}
