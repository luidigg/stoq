namespace Stoq.DTOs
{
    public class TotaisInicioDTO
    {
        public int TotalProdutos { get; set; }
        public int ItensComEstoqueBaixo { get; set; }
        public int EntradasDoDia { get; set; }
        public int SaidasDoDia { get; set; }
    }
}