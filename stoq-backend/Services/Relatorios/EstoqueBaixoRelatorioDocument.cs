using QuestPDF.Fluent;
using QuestPDF.Helpers;
using QuestPDF.Infrastructure;
using Stoq.DTOs;
using System;
using System.Collections.Generic;

namespace Stoq.Services.Relatorios
{
    public class RelatorioEstoqueBaixoDocument : IDocument
    {
        private readonly List<MovimentoEstoqueDTO> _dados;
        private readonly RelatorioEstoqueDTO _filtro;

        public RelatorioEstoqueBaixoDocument(List<MovimentoEstoqueDTO> dados, RelatorioEstoqueDTO filtro)
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
                    .Text("Relatório de Produtos com Estoque Baixo")
                    .FontSize(20)
                    .Bold()
                    .AlignCenter();

                page.Content().PaddingVertical(10).Element(ComposeTable);

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
                    columns.RelativeColumn(4);
                    columns.RelativeColumn(2);
                    columns.RelativeColumn(1);
                });

                table.Header(header =>
                {
                    header.Cell().Padding(5).BorderBottom(1).Text("Produto").Bold();
                    header.Cell().Padding(5).BorderBottom(1).Text("Quantidade").Bold().AlignCenter();
                    header.Cell().Padding(5).BorderBottom(1).Text("Unidade").Bold().AlignCenter();
                });

                foreach (var item in _dados)
                {
                    table.Cell().Padding(5).Text(item.Produto).AlignLeft();
                    table.Cell().Padding(5).Text(item.Quantidade.ToString()).AlignCenter();
                    table.Cell().Padding(5).Text(item.Unidade).AlignCenter();
                }
            });
        }
    }
}
