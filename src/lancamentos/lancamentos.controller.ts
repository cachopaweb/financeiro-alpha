import { Body, Controller, Get, HttpException, HttpStatus, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { PrismaService } from 'src/database/prisma.service';
import { LancamentoDto } from 'src/dtos/lancamentos.dto';
import { MovimentacoesService } from 'src/movimentacoes/movimentacoes.service';

@Controller('lancamentos')
@ApiTags('Lancamentos')
export class LancamentosController {
    constructor(
        private prisma: PrismaService,
        private movimentacoesService: MovimentacoesService
    ) { }

    @Get()
    async getLancamentos() {
        try {
            const lancamentos = await this.prisma.lancamentos_receita_despesa.findMany();
            return lancamentos;
        } catch (error) {
            throw new Error(error)
        }
    }

    @Post()
    async create(@Body() body: LancamentoDto) {
        const { valor, obs, despesaId, userId, empresaId, tipo, dataHora } = body;
        try {
            const despesa = await this.prisma.despesas.findUnique({
                where: {
                    id: despesaId
                }
            })

            if (!despesa) {
                throw new Error('Despesa não encontrada')
            }

            const empresa = await this.prisma.empresas.findUnique({
                where: {
                    id: empresaId
                }
            })

            if (!empresa) {
                throw new Error('Empresa não encontrada')
            }

            const movimentacao = await this.movimentacoesService.insert({
                dataHora,
                credito: 0,
                debito: valor,
                descricao: `DES - ${despesa.nome}`
            })

            const diferenca = (parseFloat(despesa.valorEstimado.toString()) - valor);
            const lancamentos = await this.prisma.lancamentos_receita_despesa.create({
                data: {
                    nome: despesa.nome,
                    real: valor,
                    obs,
                    despesaId: despesa.id,
                    estimado: despesa.valorEstimado,
                    usuId: userId,
                    diferenca,
                    empresaId: empresa.id,
                    tipo,
                    movId: movimentacao.id
                }
            });
            return lancamentos;
        } catch (error) {
            throw new HttpException(String(error), HttpStatus.BAD_REQUEST);
        }
    }
}
