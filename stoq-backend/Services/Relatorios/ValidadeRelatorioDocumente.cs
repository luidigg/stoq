using QuestPDF.Fluent;
using QuestPDF.Infrastructure;
using QuestPDF.Helpers;
using Stoq.DTOs;
using System;
using System.Collections.Generic;

namespace Stoq.Services.Relatorios
{
    public class RelatorioValidadeDocument(List<MovimentoEstoqueDTO> dados, RelatorioValidadeDTO filtro) : IDocument
    {
        private readonly List<MovimentoEstoqueDTO> _dados = dados;
        private readonly RelatorioValidadeDTO _filtro = filtro;

        public DocumentMetadata GetMetadata() => DocumentMetadata.Default;

        public void Compose(IDocumentContainer container)
        {
            container.Page(page =>
            {
                page.Margin(30);

                page.Header()
                    .PaddingBottom(10)
                    .Text("Relatório de Produtos Com Validade Próxima")
                    .FontSize(20)
                    .Bold()
                    .AlignCenter();

                page.Content()
                    .PaddingVertical(10)
                    .Element(ComposeTable);

                page.Footer()
                    .AlignCenter()
                    .Text($"Emitido em {DateTime.Now:dd/MM/yyyy HH:mm}")
                    .FontSize(10)
                    .SemiBold()
                    .FontColor(Colors.Grey.Darken1);
            });
        }

        void ComposeTable(IContainer container)
        {
            container.Table(table =>
            {
                table.ColumnsDefinition(columns =>
                {
                    columns.RelativeColumn(2); // Data Recebimento
                    columns.RelativeColumn(4); // Produto
                    columns.RelativeColumn(2); // Quantidade
                    columns.RelativeColumn(2); // Validade
                });

                table.Header(header =>
                {
                    header.Cell().Padding(5).BorderBottom(1).Text("Data Recebimento").Bold();
                    header.Cell().Padding(5).BorderBottom(1).Text("Produto").Bold();
                    header.Cell().Padding(5).BorderBottom(1).Text("Quantidade").Bold().AlignCenter();
                    header.Cell().Padding(5).BorderBottom(1).Text("Validade").Bold().AlignCenter();
                });

                foreach (var item in _dados)
                {
                    table.Cell().Padding(5).Text(item.Data.ToString("dd/MM/yyyy")).AlignLeft();
                    table.Cell().Padding(5).Text(item.Produto).AlignLeft();
                    table.Cell().Padding(5).Text(item.Quantidade.ToString()).AlignCenter();
                    table.Cell().Padding(5).Text(item.Validade?.ToString("dd/MM/yyyy") ?? "-").AlignCenter();
                }
            });
        }
    }
}