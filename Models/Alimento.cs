namespace Stoq.Models
{
    public class Alimento
    {
        public int Id { get; set; }
        public string Nome { get; set; }
        public int CategoriaId { get; set; }
        public Categoria Categoria { get; set; }
        public string Unidade { get; set; } // ex: unidade, kg, litro
        public ICollection<Estoque> Estoques { get; set; }
    }
}