using Microsoft.AspNetCore.Mvc;
using Stoq.DTOs;
using Stoq.IServices;

namespace Stoq.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class CategoriaController : ControllerBase
    {
        private readonly ICategoriaService _categoriaService;

        public CategoriaController(ICategoriaService categoriaService)
        {
            _categoriaService = categoriaService;
        }

        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var categorias = await _categoriaService.GetAllAsync();
            return Ok(categorias);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetById(int id)
        {
            var categoria = await _categoriaService.GetByIdAsync(id);
            if (categoria == null) return NotFound();
            return Ok(categoria);
        }

        [HttpPost]
        public async Task<IActionResult> Create(CategoriaDTO dto)
        {
            var novaCategoria = await _categoriaService.CreateAsync(dto);
            return CreatedAtAction(nameof(GetById), new { id = novaCategoria.Id }, novaCategoria);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Update(int id, CategoriaDTO dto)
        {
            var atualizado = await _categoriaService.UpdateAsync(id, dto);
            if (!atualizado) return NotFound();
            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var deletado = await _categoriaService.DeleteAsync(id);
            if (!deletado) return NotFound();
            return NoContent();
        }
    }
}
