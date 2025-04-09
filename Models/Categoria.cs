namespace Stoq.Models
{
    public class Categoria
    {
        public int Id { get; set; }
        public string Nome { get; set; }

        public ICollection<Alimento> Alimentos { get; set; }
    }
}