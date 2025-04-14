using Microsoft.EntityFrameworkCore;
using Stoq.Models;

namespace Stoq.Context
{
    public class DataContext(DbContextOptions<DataContext> options) : DbContext(options)
    {
        public DbSet<Usuario> Usuarios { get; set; }
        public DbSet<Doacao> Doacoes { get; set; }
        public DbSet<SaidaDoacao> SaidaDoacoes { get; set; }
        public DbSet<Alimento> Alimentos { get; set; }
        public DbSet<Estoque> Estoques { get; set; }
        public DbSet<Log> Logs { get; set; }
        public DbSet<Categoria> Categorias { get; set; }

        // < Rodar esses comandos caso modificar alguma tabela ou adicionar uma nova > //

        //dotnet ef migrations remove (para remover a migration anterior)
        //dotnet ef migrations add NomeDescritivo (para criar uma nova migration)
        //dotnet ef database update (para aplicar as alterações no banco de dados)

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
        }
    }
}