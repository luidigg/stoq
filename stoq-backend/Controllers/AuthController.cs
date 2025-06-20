using Microsoft.AspNetCore.Mvc;
using Stoq.IServices;
using Stoq.DTOs;
using System.Security.Claims;

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
                Expires = DateTimeOffset.UtcNow.AddDays(7)
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

        [HttpPost("logout")]
        public IActionResult Logout()
        {
            Response.Cookies.Delete("authtoken");

            return Ok(new
            {
                Sucesso = true,
                Mensagem = "Logout realizado com sucesso."
            });
        }

        [HttpGet("get-user")]
        public IActionResult GetUser()
        {
            if (HttpContext.User.Identity is not ClaimsIdentity identity || !identity.IsAuthenticated)
                return Unauthorized();

            var userId = identity.FindFirst(ClaimTypes.NameIdentifier)?.Value;
            var name = identity.FindFirst(ClaimTypes.Name)?.Value;

            return Ok(new { id = userId, name });
        }
    }
}