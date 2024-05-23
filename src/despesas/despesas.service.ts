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
        const { nome, valorEstimado, usuarioCriou, dataPrevisao } = despesa;
        try {
            const despesa = await this.prisma.despesas.create({
                data: {
                    nome,
                    valorEstimado,
                    usuarioCriou,
                    dataPrevisao
                }
            });

            return despesa;
        } catch (error) {
            throw new Error(error);
        }
    }

    async delete(id: string) {
        try {
            const idInt = parseInt(id);
            const despesa = await this.prisma.despesas.delete({
                where: {
                    id: idInt
                }
            });

            return despesa;
        } catch (error) {
            throw new Error(error);
        }
    }
}
