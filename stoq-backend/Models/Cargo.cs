namespace Stoq.Models
{
    public class Cargo
    {
        public int Id { get; set; }
        public string Nome { get; set; }

        public ICollection<Usuario> Usuarios { get; set; }
    }
}