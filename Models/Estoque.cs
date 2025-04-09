namespace Stoq.Models
{
    public class Estoque
    {
        public int Id { get; set; }
        public int AlimentoId { get; set; }
        public Alimento Alimento { get; set; }

        public int Quantidade { get; set; }
        public DateTime Validade { get; set; }
        public string Lote { get; set; }

        public int? DoacaoId { get; set; }
        public Doacao Doacao { get; set; }
    }
}