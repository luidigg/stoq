using Microsoft.EntityFrameworkCore;
using Stoq.Models;

namespace Stoq.Data
{
    public class DataContext(DbContextOptions<DataContext> options) : DbContext(options)
    {
        public DbSet<Usuario> Usuario { get; set; }
        public DbSet<EntradaDoacao> EntradaDoacao { get; set; }
        public DbSet<SaidaDoacao> SaidaDoacao { get; set; }
        public DbSet<Estoque> Estoque { get; set; }
        public DbSet<Log> Log { get; set; }
        public DbSet<Categoria> Categoria { get; set; }
        public DbSet<Cargo> Cargo { get; set; }
        public DbSet<Produto> Produto { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            // Mapear nomes das tabelas no banco (snake_case)
            modelBuilder.Entity<Usuario>(entity =>
            {
                entity.ToTable("usuario");
                entity.Property(e => e.Id).HasColumnName("id");
                entity.Property(e => e.Nome).HasColumnName("nome");
                entity.Property(e => e.Email).HasColumnName("email");
                entity.Property(e => e.SenhaHash).HasColumnName("senha_hash");
                entity.Property(e => e.CargoId).HasColumnName("cargo_id");
                entity.Property(e => e.CriadoEm).HasColumnName("criado_em");
                entity.Property(e => e.AtualizadoEm).HasColumnName("atualizado_em");
            });

            modelBuilder.Entity<Cargo>(entity =>
            {
                entity.ToTable("cargo");
                entity.Property(e => e.Id).HasColumnName("id");
                entity.Property(e => e.Nome).HasColumnName("nome");
            });

            modelBuilder.Entity<Categoria>(entity =>
            {
                entity.ToTable("categoria");
                entity.Property(e => e.Id).HasColumnName("id");
                entity.Property(e => e.Nome).HasColumnName("nome");
            });

            modelBuilder.Entity<Produto>(entity =>
            {
                entity.ToTable("produto");
                entity.Property(e => e.Id).HasColumnName("id");
                entity.Property(e => e.Nome).HasColumnName("nome");
                entity.Property(e => e.CategoriaId).HasColumnName("categoria_id");
                entity.Property(e => e.CriadoEm).HasColumnName("criado_em");
            });

            modelBuilder.Entity<EntradaDoacao>(entity =>
            {
                entity.ToTable("entrada_doacao");
                entity.Property(e => e.Id).HasColumnName("id");
                entity.Property(e => e.ProdutoId).HasColumnName("produto_id");
                entity.Property(e => e.Quantidade).HasColumnName("quantidade");
                entity.Property(e => e.DataRecebimento).HasColumnName("data_recebimento");
                entity.Property(e => e.DataValidade).HasColumnName("data_validade");
                entity.Property(e => e.ValorCompra).HasColumnName("valor_compra");
                entity.Property(e => e.NomeDoador).HasColumnName("nome_doador");
                entity.Property(e => e.CriadoEm).HasColumnName("criado_em");
            });

            modelBuilder.Entity<Estoque>(entity =>
            {
                entity.ToTable("estoque");
                entity.Property(e => e.Id).HasColumnName("id");
                entity.Property(e => e.ProdutoId).HasColumnName("produto_id");
                entity.Property(e => e.Quantidade).HasColumnName("quantidade");
            });

            modelBuilder.Entity<SaidaDoacao>(entity =>
            {
                entity.ToTable("saida_doacao");
                entity.Property(e => e.Id).HasColumnName("id");
                entity.Property(e => e.EntradaId).HasColumnName("entrada_id");
                entity.Property(e => e.Quantidade).HasColumnName("quantidade");
                entity.Property(e => e.DataSaida).HasColumnName("data_saida");
                entity.Property(e => e.Motivo).HasColumnName("motivo");
                entity.Property(e => e.Observacoes).HasColumnName("observacoes");

                entity.HasOne(e => e.EntradaDoacao)
                    .WithMany(e => e.SaidasDoacao)
                    .HasForeignKey(e => e.EntradaId)
                    .OnDelete(DeleteBehavior.Cascade);
            });

            modelBuilder.Entity<Log>(entity =>
            {
                entity.ToTable("log");
                entity.Property(e => e.Id).HasColumnName("id");
                entity.Property(e => e.Entidade).HasColumnName("entidade");
                entity.Property(e => e.Acao).HasColumnName("acao");
                entity.Property(e => e.UsuarioId).HasColumnName("usuario_id");
                entity.Property(e => e.DataHora).HasColumnName("data_hora");
                entity.Property(e => e.Detalhes).HasColumnName("detalhes");
            });

            base.OnModelCreating(modelBuilder);
        }
    }
}