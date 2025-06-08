using Stoq.DTOs;

namespace Stoq.IServices
{
    public interface IEstoqueService
    {
        Task<List<EstoqueDTO>> ListarAsync();
        Task<EstoqueDTO?> BuscarPorProdutoIdAsync(int produtoId);
        Task<bool> AjustarQuantidadeAsync(int produtoId, int novaQuantidade);
    }
}
