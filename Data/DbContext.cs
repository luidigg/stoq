using Microsoft.EntityFrameworkCore;
using Stoq.Models;

namespace Stoq.Context
{
    public class DataContext : DbContext
    {
        public DbSet<Usuario> Usuarios { get; set; }
        public DbSet<Doacao> Doacoes { get; set; }
        public DbSet<Alimento> Alimentos { get; set; }
        public DbSet<Estoque> Estoques { get; set; }
        public DbSet<Log> Logs { get; set; }
        public DbSet<Categoria> Categorias { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                optionsBuilder.UseSqlite("Data Source=arquivo_do_banco.db"); // Caminho do arquivo SQLite
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
        }
    }
}