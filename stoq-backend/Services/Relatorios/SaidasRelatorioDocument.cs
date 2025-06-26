using QuestPDF.Fluent;
using QuestPDF.Helpers;
using QuestPDF.Infrastructure;
using Stoq.DTOs;
using System;
using System.Collections.Generic;

namespace Stoq.Services.Relatorios
{
    public class SaidasRelatorioDocument : IDocument
    {
        private readonly List<MovimentoEstoqueDTO> _dados;
        private readonly RelatorioPeriodoDTO _filtro;

        public SaidasRelatorioDocument(List<MovimentoEstoqueDTO> dados, RelatorioPeriodoDTO filtro)
        {
            _dados = dados;
            _filtro = filtro;
        }

        public DocumentMetadata GetMetadata() => DocumentMetadata.Default;

        public void Compose(IDocumentContainer container)
        {
            container.Page(page =>
            {
                page.Margin(30);

                page.Header()
                    .PaddingBottom(10)
                    .Text("Relatório de Saídas por Período")
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
                    columns.RelativeColumn(2); // Data
                    columns.RelativeColumn(3); // Produto
                    columns.RelativeColumn(2); // Quantidade
                    columns.RelativeColumn(2); // Categoria
                    columns.RelativeColumn(2); // Tipo
                });

                table.Header(header =>
                {
                    header.Cell().Padding(5).BorderBottom(1).Text("Data").Bold();
                    header.Cell().Padding(5).BorderBottom(1).Text("Produto").Bold();
                    header.Cell().Padding(5).BorderBottom(1).Text("Quantidade").Bold().AlignCenter();
                    header.Cell().Padding(5).BorderBottom(1).Text("Categoria").Bold().AlignCenter();
                    header.Cell().Padding(5).BorderBottom(1).Text("Tipo").Bold().AlignCenter();
                });

                foreach (var item in _dados)
                {
                    table.Cell().Padding(5).Text(item.Data.ToString("dd/MM/yyyy")).AlignLeft();
                    table.Cell().Padding(5).Text(item.Produto).AlignLeft();
                    table.Cell().Padding(5).Text(item.Quantidade.ToString()).AlignCenter();
                    table.Cell().Padding(5).Text(item.Categoria).AlignCenter();
                    table.Cell().Padding(5).Text(item.TipoMovimento ?? "-").AlignCenter();
                }
            });
        }
    }
}
