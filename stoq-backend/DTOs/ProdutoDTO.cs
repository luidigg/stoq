namespace Stoq.DTOs
{
    public class ProdutoDTO
    {
        public int Id { get; set; }
        public string Nome { get; set; }
        public CategoriaDTO Categoria { get; set; }
    }

    public class ProdutoNomeDTO
    {
        public int Id { get; set; }
        public string Nome { get; set; } = string.Empty;
    }
}