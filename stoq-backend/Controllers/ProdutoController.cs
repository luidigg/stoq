using Microsoft.AspNetCore.Mvc;
using Stoq.Models;
using Stoq.IServices;

namespace Stoq.Controllers
{
    [ApiController]
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

        [HttpPost]
        public async Task<ActionResult<Produto>> Criar(Produto produto)
        {
            var novoProduto = await _service.CriarAsync(produto, usuarioId: null);
            return CreatedAtAction(nameof(BuscarPorId), new { id = novoProduto.Id }, novoProduto);
        }

        [HttpPut("{id}")]
        public async Task<ActionResult<Produto>> Atualizar(int id, Produto produto)
        {
            var atualizado = await _service.AtualizarAsync(id, produto, usuarioId: null);
            if (atualizado == null)
                return NotFound();

            return Ok(atualizado);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Deletar(int id)
        {
            var deletado = await _service.DeletarAsync(id, usuarioId: null);
            if (!deletado)
                return NotFound();

            return NoContent();
        }
    }
}
