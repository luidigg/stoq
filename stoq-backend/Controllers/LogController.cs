using Microsoft.AspNetCore.Mvc;
using Stoq.Models;
using Stoq.Services;

namespace Stoq.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class LogController(LogService logService) : ControllerBase
    {
        private readonly LogService _logService = logService;

        [HttpGet]
        public async Task<ActionResult<List<Log>>> GetTodos()
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
