// using Microsoft.AspNetCore.Mvc;
// using Stoq.Models;
// using Stoq.IServices;

// namespace Stoq.Controllers
// {
//     [ApiController]
//     [Route("api/[controller]")]
//     public class EntradaDoacaoController(IEntradaDoacaoService service) : ControllerBase
//     {
//         private readonly IEntradaDoacaoService _service = service;

//         [HttpPost]
//         public async Task<IActionResult> Cadastrar([FromBody] EntradaDoacao entrada, [FromQuery] int usuarioId)
//         {
//             if (!ModelState.IsValid)
//                 return BadRequest(ModelState);

//             var novaEntrada = await _service.CadastrarAsync(entrada, usuarioId);
//             return CreatedAtAction(nameof(Cadastrar), new { id = novaEntrada.Id }, novaEntrada);
//         }

//         [HttpGet]
//         public async Task<IActionResult> Listar()
//         {
//             var entradas = await _service.ListarAsync();
//             return Ok(entradas);
//         }
//     }
// }
