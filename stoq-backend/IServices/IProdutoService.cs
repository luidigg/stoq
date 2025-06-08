using Stoq.DTOs;
using Stoq.Models;

namespace Stoq.IServices
{
    public interface IProdutoService
    {
        Task<List<ProdutoDTO>> ListarTodosAsync();
        Task<ProdutoDTO?> BuscarPorIdAsync(int id);
        Task<Produto> CriarAsync(Produto produto, int? usuarioId = null);
        Task<Produto?> AtualizarAsync(int id, Produto produtoAtualizado, int? usuarioId = null);
        Task<bool> DeletarAsync(int id, int? usuarioId = null);
    }
}