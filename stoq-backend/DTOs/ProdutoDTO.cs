namespace Stoq.DTOs
{
    public class ProdutoDTO
    {
        public int Id { get; set; }
        public string Nome { get; set; }
        public CategoriaDTO Categoria { get; set; }
    }
}