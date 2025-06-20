using Stoq.DTOs;

namespace Stoq.IServices
{
    public interface ICategoriaService
    {
        Task<List<CategoriaDTO>> GetAllAsync();
        Task<CategoriaDTO?> GetByIdAsync(int id);
        Task<CategoriaDTO> CreateAsync(CategoriaDTO dto);
        Task<bool> UpdateAsync(int id, CategoriaDTO dto);
        Task<bool> DeleteAsync(int id);
    }
}