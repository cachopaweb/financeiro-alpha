import { Body, Controller, Delete, Get, Param, Post, UseGuards } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { DespesaDto } from '../dtos/despesa.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('despesas')
@ApiTags('Despesas')
export class DespesasController {
    constructor(private prisma: PrismaService) { }

    @Get()
    @UseGuards(JwtAuthGuard)
    @ApiBearerAuth()
    async getDespesas() {
        try {
            const despesas = await this.prisma.despesas.findMany();
            return despesas;
        } catch (error) {
            throw new Error(error);
        }
    }

    @Post()
    @UseGuards(JwtAuthGuard)
    @ApiBearerAuth()
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
    @UseGuards(JwtAuthGuard)
    @ApiBearerAuth()
    async delete(@Param('id') id: number) {
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
