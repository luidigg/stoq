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
        public async Task<ActionResult<IEnumerable<SaidaDoacaoDTO>>> GetAll()
        {
            try
            {
                var saidas = await _saidaService.ListarAsync();
                return Ok(saidas);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Erro ao buscar saídas: {ex.Message}");
            }
        }

        // POST: api/saida-doacao
        [HttpPost("criar")]
        public async Task<ActionResult> Criar([FromBody] CriarSaidaDoacaoDTO dto)
        {
            if (!ModelState.IsValid)
                return BadRequest("Dados inválidos.");

            try
            {
                var sucesso = await _saidaService.CriarAsync(dto);
                if (!sucesso)
                    return BadRequest("Não foi possível registrar a saída. Verifique os dados.");

                return Ok(new { mensagem = "Saída registrada com sucesso." });
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Erro ao registrar saída: {ex.Message}");
            }
        }
    }
}