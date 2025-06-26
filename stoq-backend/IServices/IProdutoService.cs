using Stoq.DTOs;

namespace Stoq.IServices
{
    public interface IProdutoService
    {
        Task<List<ProdutoDTO>> ListarTodosAsync();
        Task<ProdutoDTO?> BuscarPorIdAsync(int id);
        Task<List<ProdutoNomeDTO>> BuscarPorNomeAsync(string nomeParcial);
    }
}