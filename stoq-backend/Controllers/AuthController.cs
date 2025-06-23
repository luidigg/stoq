using Microsoft.AspNetCore.Mvc;
using Stoq.IServices;
using Stoq.DTOs;
using System.Security.Claims;

namespace stoq.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AuthController(IAuthService authService, IUserService userService, IConfiguration configuration) : ControllerBase
    {
        public static readonly HashSet<string> LoggedOutTokens = [];
        private static readonly Queue<string> _tokenQueue = new();
        private const int MaxTokens = 100;

        [HttpPost("login")]
        public IActionResult Login([FromBody] LoginDTO loginRequest)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            AuthDTO result = authService.Authenticate(loginRequest);

            if (result.Sucesso == false)
            {
                return Unauthorized(result);
            }

            int cookieExpirationDays = configuration.GetValue<int>("AuthSettings:CookieDurationInDays");

            Response.Cookies.Append("authtoken", result.Token, new CookieOptions
            {
                HttpOnly = true,
                Secure = true,
                SameSite = SameSiteMode.Strict,
                Expires = DateTimeOffset.UtcNow.AddDays(cookieExpirationDays)
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

            AuthDTO result = await userService.RegisterAsync(registerRequest);

            if (result.Sucesso == false)
            {
                return BadRequest(result);
            }

            return Ok(result);
        }

        [HttpPost("logout")]
        public IActionResult Logout()
        {
            var token = Request.Cookies["authtoken"];
            if (!string.IsNullOrEmpty(token))
            {
                lock (_tokenQueue)
                {
                    if (_tokenQueue.Count >= MaxTokens)
                    {
                        var oldest = _tokenQueue.Dequeue();
                        LoggedOutTokens.Remove(oldest);
                    }

                    _tokenQueue.Enqueue(token);
                    LoggedOutTokens.Add(token);
                }

                Response.Cookies.Delete("authtoken");
            }
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

        [HttpGet("get-user-info")]
        public async Task<IActionResult> GetUserInfo()
        {
            if (HttpContext.User.Identity is not ClaimsIdentity identity || !identity.IsAuthenticated)
                return Unauthorized();

            var userIdClaim = identity.FindFirst(ClaimTypes.NameIdentifier)?.Value;
            if (userIdClaim == null || !int.TryParse(userIdClaim, out int userId))
                return Unauthorized();

            var usuario = await userService.ObterPorIdAsync(userId);
            if (usuario == null)
                return NotFound("Usuário não encontrado.");

            return Ok(new
            {
                id = usuario.Id,
                nome = usuario.Nome,
                email = usuario.Email,
                criadoEm = usuario.CriadoEm
            });
        }

        [HttpPut("user-edit")]
        public async Task<IActionResult> EditarUsuario([FromBody] EditarUsuarioDTO dto)
        {
            if (!ModelState.IsValid) return BadRequest("Dados inválidos.");

            try
            {
                var sucesso = await userService.AtualizarAsync(dto);
                if (!sucesso)
                    return BadRequest("Não foi possível atualizar os dados. Email pode já estar em uso.");

                return Ok(new { mensagem = "Usuário atualizado com sucesso." });
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Erro ao atualizar usuário: {ex.Message}");
            }
        }

    }
}