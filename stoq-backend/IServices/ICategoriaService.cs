using Stoq.DTOs;

namespace Stoq.IServices
{
    public interface ICategoriaService
    {
        Task<List<CategoriaDTO>> GetAllAsync();
        Task<CategoriaDTO?> GetByIdAsync(int id);
    }
}