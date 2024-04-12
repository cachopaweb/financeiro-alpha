import { Body, Controller, Get, Post } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { LancamentoDto } from 'src/dtos/lancamentos.dto';

@Controller('lancamentos')
export class LancamentosController {
    constructor(private prisma: PrismaService) { }

    @Get()
    async getLancamentos() {
        try {
            const lancamentos = await this.prisma.lancamentos.findMany();
            return lancamentos;
        } catch (error) {
            throw new Error(error)
        }
    }

    @Post()
    async create(@Body() body: LancamentoDto) {
        const { valor, obs, despesaId } = body;
        try {
            const despesa = await this.prisma.despesas.findUnique({
                where: {
                    id: despesaId
                }
            })

            const funcionario = await this.prisma.funcionarios.findUnique({
                where: {
                    id: 1
                }
            })

            const diferenca = (parseFloat(despesa.estimado.toString()) - valor);
            const lancamentos = await this.prisma.lancamentos.create({
                data: {
                    nome: despesa.nome,
                    real: valor,
                    obs,
                    despesaId: despesa.id,
                    estimado: despesa.estimado,
                    funId: funcionario.id,
                    diferenca
                }
            });
            return lancamentos;
        } catch (error) {
            throw new Error(error)
        }
    }
}
