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
        public IActionResult Login([FromBody] LoginDTO loginRequest)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            AuthDTO result = _authService.Authenticate(loginRequest);

            if (result.Sucesso == false)
            {
                return Unauthorized(result);
            }

            Response.Cookies.Append("authtoken", result.Token, new CookieOptions
            {
                HttpOnly = true,
                Secure = true,
                SameSite = SameSiteMode.Strict,
                Expires = DateTimeOffset.UtcNow.AddDays(1)
            });

            return Ok(new
            {
                result.Sucesso,
                result.Mensagem
            });
        }

        [HttpPost("register")]
        public async Task<IActionResult> Register([FromBody] RegistroDTO registerRequest)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            AuthDTO result = await _userService.RegisterAsync(registerRequest);

            if (result.Sucesso == false)
            {
                return BadRequest(result);
            }

            return Ok(result);
        }
    }
}