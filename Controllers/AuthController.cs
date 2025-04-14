using Microsoft.AspNetCore.Mvc;
using Stoq.IServices;
using Stoq.DTO;
using Stoq.DTOs;

namespace stoq.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AuthController : ControllerBase
    {
        private readonly IAuthService _authService;
        private readonly IUserService _userService;

        public AuthController(IAuthService authService, IUserService userService)
        {
            _authService = authService;
            _userService = userService;
        }

        [HttpPost("login")]
        public IActionResult Login([FromBody] LoginRequest loginRequest)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            var result = _authService.Authenticate(loginRequest.Email, loginRequest.Senha);

            if (result == null)
                return Unauthorized(new { message = "Invalid username or password" });

            return Ok(result);
        }

        [HttpPost("register")]
        public async Task<IActionResult> Register([FromBody] RegisterRequest registerRequest)
        {
            if (!ModelState.IsValid) {
                return BadRequest(ModelState);
            }

            AuthResult? result = await _userService.RegisterAsync(registerRequest);

            if (!result.Sucesso)
            {
                return BadRequest(new { message = result.Mensagem });
            }

            return Ok(new { message = "Usuário registrado com sucesso" });
        }
    }
}