using Microsoft.AspNetCore.Mvc;
using Stoq.DTOs;

namespace Stoq.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class RelatorioController(IRelatorioService relatorioService) : ControllerBase
    {
        private readonly IRelatorioService _relatorioService = relatorioService;

        [HttpPost("entradas")]
        public async Task<IActionResult> GerarRelatorioEntradas([FromBody] RelatorioPeriodoDTO dto)
        {
            var periodo = AjustarPeriodo(dto);
            var pdf = await _relatorioService.GerarRelatorioEntradas(periodo);
            return File(pdf, "application/pdf", "entradas.pdf");
        }

        [HttpPost("saidas")]
        public async Task<IActionResult> GerarRelatorioSaidas([FromBody] RelatorioPeriodoDTO dto)
        {
            var periodo = AjustarPeriodo(dto);
            var pdf = await _relatorioService.GerarRelatorioSaidas(periodo);
            return File(pdf, "application/pdf", "saidas.pdf");
        }

        [HttpPost("por-categoria")]
        public async Task<IActionResult> GerarRelatorioPorCategoria([FromBody] RelatorioCategoriaDTO dto)
        {
            var pdf = await _relatorioService.GerarRelatorioPorCategoria(dto);
            return File(pdf, "application/pdf", "categoria.pdf");
        }

        [HttpPost("validade-proxima")]
        public async Task<IActionResult> GerarRelatorioValidade([FromBody] RelatorioValidadeDTO dto)
        {
            var pdf = await _relatorioService.GerarRelatorioValidade(dto);
            return File(pdf, "application/pdf", "validade.pdf");
        }

        [HttpPost("mais-movimentados")]
        public async Task<IActionResult> GerarRelatorioMaisMovimentados([FromBody] RelatorioPeriodoDTO dto)
        {
            var pdf = await _relatorioService.GerarRelatorioMaisMovimentados(dto);
            return File(pdf, "application/pdf", "movimentados.pdf");
        }

        [HttpPost("estoque-baixo")]
        public async Task<IActionResult> GerarRelatorioEstoqueBaixo([FromBody] RelatorioEstoqueDTO dto)
        {
            var pdf = await _relatorioService.GerarRelatorioEstoqueBaixo(dto);
            return File(pdf, "application/pdf", "estoque-baixo.pdf");
        }

        private static RelatorioPeriodoDTO AjustarPeriodo(RelatorioPeriodoDTO dto)
        {
            // Se DataInicio for nula, define início de época (ou outro default)
            var dataInicio = dto.DataInicio?.Date ?? DateTime.MinValue;
            // Se DataFim for nula, define hoje
            var dataFim = dto.DataFim?.Date ?? DateTime.UtcNow.Date;

            // Garante que dataFim é o fim do dia (23:59:59.999)
            dataFim = dataFim.AddDays(1).AddTicks(-1);

            return new RelatorioPeriodoDTO
            {
                DataInicio = DateTime.SpecifyKind(dataInicio, DateTimeKind.Utc),
                DataFim = DateTime.SpecifyKind(dataFim, DateTimeKind.Utc)
            };
        }
    }
}