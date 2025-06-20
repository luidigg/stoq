using Stoq.DTOs;

namespace Stoq.IServices
{
    public interface IInicioService
    {
        Task<TotaisInicioDTO> ObterTotaisAsync();
        Task<List<MovimentacaoDTO>> ObterUltimasMovimentacoesAsync();
    }
}