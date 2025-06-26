using Microsoft.AspNetCore.Mvc;
using Stoq.Models;
using Stoq.IServices;
using Stoq.DTOs;
using Microsoft.AspNetCore.Authorization;

namespace Stoq.Controllers
{
    [ApiController]
    [Authorize]
    [Route("api/[controller]")]
    public class ProdutoController(IProdutoService service) : ControllerBase
    {
        private readonly IProdutoService _service = service;

        [HttpGet]
        public async Task<ActionResult<List<Produto>>> ListarTodos()
        {
            var produtos = await _service.ListarTodosAsync();
            return Ok(produtos);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Produto>> BuscarPorId(int id)
        {
            var produto = await _service.BuscarPorIdAsync(id);
            if (produto == null)
                return NotFound();

            return Ok(produto);
        }

        [HttpGet("buscar")]
        public async Task<ActionResult<List<ProdutoNomeDTO>>> BuscarPorNome([FromQuery] string nome)
        {
            var sugestoes = await _service.BuscarPorNomeAsync(nome);
            return Ok(sugestoes);
        }

    }
}
