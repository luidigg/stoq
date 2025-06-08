using Microsoft.AspNetCore.Mvc;
using Stoq.DTOs;
using Stoq.IServices;

namespace Stoq.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class SaidaDoacaoController(ISaidaDoacaoService saidaService) : ControllerBase
    {
        private readonly ISaidaDoacaoService _saidaService = saidaService;

        // GET: api/saida-doacao
        [HttpGet]
        public async Task<ActionResult<List<SaidaDoacaoDTO>>> Listar()
        {
            var saidas = await _saidaService.ListarAsync();
            return Ok(saidas);
        }

        // POST: api/saida-doacao
        [HttpPost]
        public async Task<ActionResult> Criar([FromBody] CriarSaidaDoacaoDTO dto)
        {
            var sucesso = await _saidaService.CriarAsync(dto);
            if (!sucesso)
                return BadRequest("Não foi possível registrar a saída. Verifique os dados.");

            return Ok(new { mensagem = "Saída registrada com sucesso." });
        }
    }
}
