namespace Stoq.Models
{
    public class SaidaDoacao
    {
        public int Id { get; set; }

        public int EntradaId { get; set; }
        public EntradaDoacao EntradaDoacao { get; set; }

        public int Quantidade { get; set; }
        public DateTime DataSaida { get; set; }

        public string Motivo { get; set; } // "Doado", "Uso", "Vencido"
        public string Observacoes { get; set; }
    }
}