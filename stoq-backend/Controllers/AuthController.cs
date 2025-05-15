using Microsoft.AspNetCore.Mvc;
using Stoq.IServices;
using Stoq.DTOs;

namespace stoq.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AuthController(IAuthService authService, IUserService userService) : ControllerBase
    {
        private readonly IAuthService _authService = authService;
        private readonly IUserService _userService = userService;

        [HttpPost("login")]
        public IActionResult Login([FromBody] LoginRequest loginRequest)
        {
            if (!ModelState.IsValid) {
                return BadRequest(ModelState);
            }

            AuthResult result = _authService.Authenticate(loginRequest);

            if (result.Sucesso == false) {
                return Unauthorized(result);
            }

            return Ok(result);
        }

        [HttpPost("register")]
        public async Task<IActionResult> Register([FromBody] RegisterRequest registerRequest)
        {
            if (!ModelState.IsValid) {
                return BadRequest(ModelState);
            }

            AuthResult result = await _userService.RegisterAsync(registerRequest);

            if (result.Sucesso == false) {
                return BadRequest(result);
            }

            return Ok(result);
        }
    }
}