using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Stoq.DTOs;
using Stoq.IServices;

namespace Stoq.Controllers
{
    [ApiController]
    [Authorize]
    [Route("api/[controller]")]
    public class EstoqueController(IEstoqueService estoqueService) : ControllerBase
    {
        private readonly IEstoqueService _estoqueService = estoqueService;

        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var estoques = await _estoqueService.GetAllAsync();
            return Ok(estoques);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetById(int id)
        {
            var estoque = await _estoqueService.GetByIdAsync(id);
            if (estoque == null) return NotFound();
            return Ok(estoque);
        }

        [HttpPost("criar")]
        public async Task<IActionResult> Create([FromBody] EstoqueDTO dto)
        {
            await _estoqueService.CreateAsync(dto);
            return Ok("Estoque atualizado com sucesso!");
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Update(int id, [FromBody] EstoqueDTO dto)
        {
            var sucesso = await _estoqueService.UpdateAsync(id, dto);
            if (!sucesso) return NotFound();
            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var resultado = await _estoqueService.DeleteAsync(id);
            if (!resultado) return NotFound();
            return NoContent();
        }

        [HttpGet("estoque-baixo")]
        public async Task<IActionResult> GetEstoqueBaixo()
        {
            var itensBaixos = await _estoqueService.GetEstoqueBaixoAsync();
            return Ok(itensBaixos);
        }

    }
}
