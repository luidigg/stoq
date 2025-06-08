using Stoq.DTOs;

namespace Stoq.IServices
{
    public interface ISaidaDoacaoService
    {
        Task<List<SaidaDoacaoDTO>> ListarAsync();
        Task<bool> CriarAsync(CriarSaidaDoacaoDTO dto);
    }
}
