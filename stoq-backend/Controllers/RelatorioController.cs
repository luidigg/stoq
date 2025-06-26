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
            var pdf = await _relatorioService.GerarRelatorioEntradas(dto);
            return File(pdf, "application/pdf", "entradas.pdf");
        }

        [HttpPost("saidas")]
        public async Task<IActionResult> GerarRelatorioSaidas([FromBody] RelatorioPeriodoDTO dto)
        {
            var pdf = await _relatorioService.GerarRelatorioSaidas(dto);
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
    }
}