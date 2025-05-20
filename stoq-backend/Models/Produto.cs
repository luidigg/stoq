namespace Stoq.Models
{
    public class Produto
    {
        public int Id { get; set; }
        public string Nome { get; set; }

        public int CategoriaId { get; set; }
        public Categoria Categoria { get; set; }

        public DateTime CriadoEm { get; set; }

        public ICollection<EntradaDoacao> EntradasDoacao { get; set; }
        public ICollection<Estoque> Estoques { get; set; }
    }
}