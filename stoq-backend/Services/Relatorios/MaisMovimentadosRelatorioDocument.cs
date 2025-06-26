using QuestPDF.Fluent;
using QuestPDF.Infrastructure;
using Stoq.DTOs;

namespace Stoq.Services.Relatorios
{
    public class RelatorioMaisMovimentadosDocument(List<MovimentoEstoqueDTO> dados, RelatorioPeriodoDTO filtro) : IDocument
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
                    .Text("Relatório de Produtos Mais Movimentados")
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
                    columns.RelativeColumn(4); // Produto
                    columns.RelativeColumn(3); // Categoria
                    columns.RelativeColumn(2); // Quantidade
                    columns.RelativeColumn(1); // Unidade
                });

                table.Header(header =>
                {
                    header.Cell().Text("Produto").Bold();
                    header.Cell().Text("Categoria").Bold();
                    header.Cell().Text("Quantidade").Bold();
                    header.Cell().Text("Unidade").Bold();
                });

                foreach (var item in _dados)
                {
                    table.Cell().Text(item.Produto);
                    table.Cell().Text(item.Categoria);
                    table.Cell().Text(item.Quantidade.ToString("N2"));
                    table.Cell().Text(item.Unidade);
                }
            });
        }
    }
}
