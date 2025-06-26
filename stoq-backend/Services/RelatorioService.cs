using System;
using System.Threading.Tasks;
using Stoq.DTOs;
using Stoq.IServices;

namespace Stoq.Services
{
    public class RelatorioService : IRelatorioService
    {
        public Task<byte[]> GerarRelatorioEntradas(RelatorioPeriodoDTO dto)
        {
            throw new NotImplementedException("Relatório de entradas ainda não implementado.");
        }

        public Task<byte[]> GerarRelatorioSaidas(RelatorioPeriodoDTO dto)
        {
            throw new NotImplementedException("Relatório de saídas ainda não implementado.");
        }

        public Task<byte[]> GerarRelatorioPorCategoria(RelatorioCategoriaDTO dto)
        {
            throw new NotImplementedException("Relatório por categoria ainda não implementado.");
        }

        public Task<byte[]> GerarRelatorioValidade(RelatorioValidadeDTO dto)
        {
            throw new NotImplementedException("Relatório de validade ainda não implementado.");
        }

        public Task<byte[]> GerarRelatorioMaisMovimentados(RelatorioPeriodoDTO dto)
        {
            throw new NotImplementedException("Relatório de mais movimentados ainda não implementado.");
        }

        public Task<byte[]> GerarRelatorioEstoqueBaixo(RelatorioEstoqueDTO dto)
        {
            throw new NotImplementedException("Relatório de estoque baixo ainda não implementado.");
        }
    }
}
