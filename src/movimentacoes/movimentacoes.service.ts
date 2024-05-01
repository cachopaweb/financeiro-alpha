import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { MovimentacoesDto } from 'src/dtos/movimentacoes.dto';

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

    async getMovimentacoes() {
        try {
            const movimentacoes = this.prisma.movimentacoes.findMany();
            return movimentacoes;
        } catch (error) {
            throw new Error(String(error));
        }
    }
}
