import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { ReceitaDto } from 'src/dtos/receita.dto';

@Injectable()
export class ReceitasService {
    constructor(private readonly prisma: PrismaService) { }

    async getReceitas() {
        try {
            const receitas = this.prisma.receitas.findMany();
            return receitas;
        } catch (error) {
            throw new Error(String(error))
        }
    }

    async createReceita(receita: ReceitaDto) {
        const { nome, usuarioCriou, valorEstimado, dataPrevisao } = receita;
        try {
            const receita = this.prisma.receitas.create({
                data: {
                    nome,
                    usuarioCriou,
                    valorEstimado,
                }
            });
            return receita;
        } catch (error) {
            throw new Error(String(error))
        }
    }
}
