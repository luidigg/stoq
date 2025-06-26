using Microsoft.AspNetCore.Mvc;
using Stoq.Models;
using Stoq.IServices;

namespace Stoq.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class LogController(ILogService logService) : ControllerBase
    {
        private readonly ILogService _logService = logService;

        [HttpGet]
        public async Task<IActionResult> GetTodos()
        {
            var logs = await _logService.ListarTodosAsync();
            return Ok(logs);
        }

        [HttpGet("usuario/{usuarioId}")]
        public async Task<ActionResult<List<Log>>> GetPorUsuario(int usuarioId)
        {
            var logs = await _logService.ListarPorUsuarioAsync(usuarioId);
            return Ok(logs);
        }
    }
}
