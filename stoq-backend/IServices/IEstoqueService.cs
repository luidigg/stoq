using Stoq.DTOs;

namespace Stoq.IServices
{
    public interface IEstoqueService
    {
        Task<List<EstoqueDTO>> GetAllAsync();
        Task<EstoqueDTO?> GetByIdAsync(int id);
        Task CreateAsync(EstoqueDTO dto);
        Task<bool> UpdateAsync(int id, EstoqueDTO dto);
        Task<bool> DeleteAsync(int id);
        Task<IEnumerable<EstoqueBaixoDTO>> GetEstoqueBaixoAsync();
    }
}
