import { Injectable } from '@nestjs/common';
import { Despesas } from '@prisma/client';
import { PrismaService } from 'src/database/prisma.service';
import { DespesaDto, DespesaQuery } from 'src/dtos/despesa.dto';

@Injectable()
export class DespesasService {
    constructor(private prisma: PrismaService) { }

    async getDespesas(despesaQuery: DespesaQuery) {
        const { nome, empresaId } = despesaQuery;
        try {
            if (nome && !empresaId) {
                // const despesas = await this.prisma.$queryRaw<Despesas[]>`SELECT * FROM DESPESAS WHERE nome like '%${nome}%'`;
                const despesas = await this.prisma.despesas.findMany({
                    where: {
                        nome: {
                            contains: nome.toUpperCase()
                        }
                    }
                })
                return despesas;
            }
            if (empresaId && !nome) {
                const despesas = await this.prisma.despesas.findMany({
                    where: {
                        empresaId: parseInt(empresaId.toString())
                    }
                })
                return despesas;
            }

            if (empresaId && nome) {
                const despesas = await this.prisma.despesas.findMany({
                    where: {
                        empresaId: parseInt(empresaId.toString()),
                        nome: {
                            contains: nome.toUpperCase()
                        }
                    }
                })
                return despesas;
            }
            const despesas = await this.prisma.despesas.findMany()
            return despesas;
        } catch (error) {
            throw new Error(error);
        }
    }

    async create(despesa: DespesaDto) {
        const { nome, valorEstimado, usuarioCriou, dataPrevisao, empresaId } = despesa;
        try {
            const despesa = await this.prisma.despesas.create({
                data: {
                    nome: nome.toUpperCase(),
                    valorEstimado,
                    usuarioCriou,
                    dataPrevisao,
                    empresaId
                }
            });

            return despesa;
        } catch (error) {
            throw new Error(error);
        }
    }

    async delete(id: string) {
        try {
            const despesa = await this.prisma.despesas.delete({
                where: {
                    id: parseInt(id)
                }
            });
            return 204
        } catch (error) {
            throw new Error(error);
        }
    }
}
