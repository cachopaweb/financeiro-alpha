import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { DespesaDto } from 'src/dtos/despesa.dto';

@Injectable()
export class DespesasService {
    constructor(private prisma: PrismaService) { }

    async getDespesas() {
        try {
            const despesas = await this.prisma.despesas.findMany();
            return despesas;
        } catch (error) {
            throw new Error(error);
        }
    }

    async create(despesa: DespesaDto) {
        const { nome, valorEstimado, usuarioCriou } = despesa;
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

    async delete(id: number) {
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
