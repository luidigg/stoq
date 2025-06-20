using Microsoft.AspNetCore.Mvc;
using Stoq.IServices;

[ApiController]
[Route("api/[controller]")]
public class InicioController(IInicioService inicioService) : ControllerBase
{
    private readonly IInicioService _inicioService = inicioService;

    [HttpGet("totais")]
    public async Task<IActionResult> GetTotais()
    {
        var totais = await _inicioService.ObterTotaisAsync();
        return Ok(totais);
    }

    [HttpGet("movimentacoes")]
    public async Task<IActionResult> GetMovimentacoes()
    {
        var lista = await _inicioService.ObterUltimasMovimentacoesAsync();
        return Ok(lista);
    }
}
