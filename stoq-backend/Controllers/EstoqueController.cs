using Microsoft.AspNetCore.Mvc;
using Stoq.IServices;
using Stoq.DTOs;

namespace Stoq.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class EstoqueController(IEstoqueService estoqueService) : ControllerBase
    {
        private readonly IEstoqueService _estoqueService = estoqueService;

        // GET: api/estoque
        [HttpGet]
        public async Task<ActionResult<List<EstoqueDTO>>> Listar()
        {
            var lista = await _estoqueService.ListarAsync();
            return Ok(lista);
        }

        // GET: api/estoque/produto/5
        [HttpGet("produto/{produtoId}")]
        public async Task<ActionResult<EstoqueDTO>> BuscarPorProdutoId(int produtoId)
        {
            var estoque = await _estoqueService.BuscarPorProdutoIdAsync(produtoId);
            if (estoque == null) return NotFound();
            return Ok(estoque);
        }

        // PUT: api/estoque/ajustar
        [HttpPut("ajustar")]
        public async Task<ActionResult> AjustarEstoque(int produtoId, int novaQuantidade)
        {
            var sucesso = await _estoqueService.AjustarQuantidadeAsync(produtoId, novaQuantidade);
            if (!sucesso) return NotFound("Produto não encontrado no estoque.");
            return Ok("Estoque ajustado com sucesso.");
        }
    }
}
