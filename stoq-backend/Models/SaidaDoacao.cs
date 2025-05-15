namespace Stoq.Models
{
    public class SaidaDoacao
    {
        public int Id { get; set; }

        public int EstoqueId { get; set; }
        public Estoque Estoque { get; set; }

        public int Quantidade { get; set; }
        public DateTime DataSaida { get; set; } = DateTime.Now;

        public string TipoSaida { get; set; } // "Consumo" ou "Descarte"
        public string Motivo { get; set; }

        public int UsuarioId { get; set; }
        public Usuario Usuario { get; set; }
    }
}