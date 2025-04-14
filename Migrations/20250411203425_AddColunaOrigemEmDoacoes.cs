using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace stoq.Migrations
{
    /// <inheritdoc />
    public partial class AddColunaOrigemEmDoacoes : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Origem",
                table: "Doacoes",
                type: "TEXT",
                nullable: false,
                defaultValue: "");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Origem",
                table: "Doacoes");
        }
    }
}
