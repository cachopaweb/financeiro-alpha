import { Body, Controller, Get, Post } from '@nestjs/common';
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
        try {
            const despesa = await this.prisma.despesas.create({
                data: {
                    nome: body.nome,
                    estimado: body.valorEstimado,
                    funCriou: 1
                }
            });

            return despesa;
        } catch (error) {
            throw new Error(error);
        }
    }
}
