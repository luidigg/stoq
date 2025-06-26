using QuestPDF.Fluent;
using QuestPDF.Infrastructure;
using Stoq.DTOs;

namespace Stoq.Services.Relatorios;

public class EntradasRelatorioDocument(List<MovimentoEstoqueDTO> dados, RelatorioPeriodoDTO filtro) : IDocument
{
    private readonly List<MovimentoEstoqueDTO> _dados = dados;
    private readonly RelatorioPeriodoDTO _filtro = filtro;

    public DocumentMetadata GetMetadata() => DocumentMetadata.Default;

    public void Compose(IDocumentContainer container)
    {
        container.Page(page =>
        {
            page.Margin(30);

            page.Header()
                .Text($"Relatório de Entradas por Período")
                .FontSize(20).Bold().AlignCenter();

            page.Content().Element(ComposeTable);

            page.Footer().AlignCenter()
                .Text($"Emitido em {DateTime.Now:dd/MM/yyyy HH:mm}");
        });
    }

    void ComposeTable(IContainer container)
    {
        container.PaddingTop(20).Table(table =>
        {
            table.ColumnsDefinition(columns =>
            {
                columns.RelativeColumn(2); // Data
                columns.RelativeColumn(3); // Produto
                columns.RelativeColumn(2); // Quantidade
                columns.RelativeColumn(2); // Categoria
                columns.RelativeColumn(2); // Validade
            });

            table.Header(header =>
            {
                header.Cell().Text("Data").Bold();
                header.Cell().Text("Produto").Bold();
                header.Cell().Text("Quantidade").Bold();
                header.Cell().Text("Categoria").Bold();
                header.Cell().Text("Validade").Bold();
            });

            foreach (var item in _dados)
            {
                table.Cell().Text(item.Data.ToString("dd/MM/yyyy"));
                table.Cell().Text(item.Produto);
                table.Cell().Text(item.Quantidade);
                table.Cell().Text(item.Categoria);
                table.Cell().Text(item.Validade?.ToString("dd/MM/yyyy") ?? "-");
            }
        });
    }
}
