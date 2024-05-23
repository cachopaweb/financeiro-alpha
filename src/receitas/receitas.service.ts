import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { ReceitaDto, ReceitaQuery } from 'src/dtos/receita.dto';

@Injectable()
export class ReceitasService {
    constructor(private readonly prisma: PrismaService) { }

    async getReceitas(receitaQuery: ReceitaQuery) {
        const { nome, empresaId } = receitaQuery;
        try {
            if (nome && !empresaId) {
                // const receitas = await this.prisma.$queryRaw<receitas[]>`SELECT * FROM receitaS WHERE nome like '%${nome}%'`;
                const receitas = await this.prisma.receitas.findMany({
                    where: {
                        nome: {
                            contains: nome.toUpperCase()
                        }
                    }
                })
                return receitas;
            }
            if (empresaId && !nome) {
                const receitas = await this.prisma.receitas.findMany({
                    where: {
                        empresaId: parseInt(empresaId.toString())
                    }
                })
                return receitas;
            }

            if (empresaId && nome) {
                const receitas = await this.prisma.receitas.findMany({
                    where: {
                        empresaId: parseInt(empresaId.toString()),
                        nome: {
                            contains: nome.toUpperCase()
                        }
                    }
                })
                return receitas;
            }
            const receitas = await this.prisma.receitas.findMany()
            return receitas;
        } catch (error) {
            throw new Error(String(error))
        }
    }

    async createReceita(receita: ReceitaDto) {
        const { nome, usuarioCriou, valorEstimado, dataPrevisao, empresaId } = receita;
        try {
            const receita = this.prisma.receitas.create({
                data: {
                    nome: nome.toUpperCase(),
                    usuarioCriou,
                    valorEstimado,
                    empresaId
                }
            });
            return receita;
        } catch (error) {
            throw new Error(String(error))
        }
    }

    async delete(id: string) {
        try {
            const receita = await this.prisma.receitas.delete({
                where: {
                    id: parseInt(id)
                }
            });

            return receita;
        } catch (error) {
            throw new Error(error);
        }
    }
}
