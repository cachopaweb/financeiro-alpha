import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { DespesaDto } from '../dtos/despesa.dto';

@Controller('despesas')
export class DespesasController {
    constructor(private prisma: PrismaService) { }

    @Get()
    async getDespesas() {
        try {
            const despesas = await this.prisma.despesas.findMany();
            return despesas;
        } catch (error) {
            throw new Error(error);
        }
    }

    @Post()
    async create(@Body() body: DespesaDto) {
        const { nome, valorEstimado, usuarioCriou } = body;
        try {
            const despesa = await this.prisma.despesas.create({
                data: {
                    nome,
                    valorEstimado,
                    usuarioCriou
                }
            });

            return despesa;
        } catch (error) {
            throw new Error(error);
        }
    }

    @Delete()
    async delete(@Param() id: number) {
        try {
            const despesa = await this.prisma.despesas.delete({
                where: {
                    id
                }
            });

            return despesa;
        } catch (error) {
            throw new Error(error);
        }
    }
}
