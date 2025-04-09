namespace Stoq.Models
{
    public class Doacao
    {
        public int Id { get; set; }
        public string Origem { get; set; } // Doação ou Compra
        public DateTime DataRecebimento { get; set; }
        public int UsuarioRecebedorId { get; set; }
        public Usuario UsuarioRecebedor { get; set; }

        public ICollection<Estoque> ProdutosRecebidos { get; set; }
    }
}