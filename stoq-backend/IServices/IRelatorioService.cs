using Stoq.DTOs;

public interface IRelatorioService
{
    Task<byte[]> GerarRelatorioEntradas(RelatorioPeriodoDTO dto);
    Task<byte[]> GerarRelatorioSaidas(RelatorioPeriodoDTO dto);
    Task<byte[]> GerarRelatorioPorCategoria(RelatorioCategoriaDTO dto);
    Task<byte[]> GerarRelatorioValidade(RelatorioValidadeDTO dto);
    Task<byte[]> GerarRelatorioMaisMovimentados(RelatorioPeriodoDTO dto);
    Task<byte[]> GerarRelatorioEstoqueBaixo(RelatorioEstoqueDTO dto);
}