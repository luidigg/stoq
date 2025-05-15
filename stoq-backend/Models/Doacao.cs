namespace Stoq.Models
{
    public class Doacao
    {
        public int Id { get; set; }
        public string Origem { get; set; }
        public string Tipo { get; set; } // "Doacao Recorrente", "Doacao Ocasional", "Compra"
        public DateTime DataRecebimento { get; set; }
        public int UsuarioRecebedorId { get; set; }
        public Usuario UsuarioRecebedor { get; set; }

        public ICollection<Estoque> ProdutosRecebidos { get; set; }
    }

}