import { Controller, Get } from '@nestjs/common';
import { MovimentacoesService } from './movimentacoes.service';

@Controller('movimentacoes')
export class MovimentacoesController {
    constructor(private movimentacoesService: MovimentacoesService) { }

    @Get()
    async getMovimentacoes() {
        return this.getMovimentacoes();
    }
}
