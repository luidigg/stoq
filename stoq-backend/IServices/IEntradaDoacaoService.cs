using Stoq.Models;

namespace Stoq.IServices
{
    public interface IEntradaDoacaoService
    {
        Task<EntradaDoacao> CadastrarAsync(EntradaDoacao entrada, int usuarioId);
        Task<List<EntradaDoacao>> ListarAsync();
    }
}
