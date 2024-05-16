import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { MovimentacoesDto, MovimentacoesQuery } from 'src/dtos/movimentacoes.dto';

@Injectable()
export class MovimentacoesService {
    constructor(private readonly prisma: PrismaService) { }

    async insert(mov: MovimentacoesDto) {
        const { descricao, credito, debito, dataHora } = mov;
        try {
            const movimento = this.prisma.movimentacoes.create({
                data: {
                    descricao,
                    credito,
                    debito,
                    dataHora
                }
            })
            return movimento;
        } catch (error) {
            throw new Error(String(error));
        }
    }

    async getMovimentacoes(movimentacoesQuery: MovimentacoesQuery) {
        const { empresaId, dataInicial, dataFinal } = movimentacoesQuery;

        try {
            if (empresaId && !dataInicial && !dataFinal) {
                const movimentacoes = this.prisma.movimentacoes.findMany({
                    where: {
                        empresaId: parseInt(empresaId.toString()),
                    }
                });
                return movimentacoes;
            }
            if (!empresaId && dataInicial && dataFinal) {
                const movimentacoes = this.prisma.movimentacoes.findMany({
                    where: {
                        dataHora: {
                            gte: new Date(dataInicial),
                            lt: new Date(dataFinal),
                        }
                    }
                });
                return movimentacoes;
            }
            if (empresaId && dataInicial && dataFinal) {
                const movimentacoes = this.prisma.movimentacoes.findMany({
                    where: {
                        empresaId: parseInt(empresaId.toString()),
                        dataHora: {
                            gte: new Date(dataInicial),
                            lt: new Date(dataFinal),
                        }
                    }
                });
                return movimentacoes;
            }
        } catch (error) {
            throw new Error(String(error));
        }
    }
}
