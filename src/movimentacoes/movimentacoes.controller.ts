import { Controller, Get } from '@nestjs/common';
import { MovimentacoesService } from './movimentacoes.service';
import { ApiTags } from '@nestjs/swagger';

@Controller('movimentacoes')
@ApiTags('Movimentacoes')
export class MovimentacoesController {
    constructor(private movimentacoesService: MovimentacoesService) { }

    @Get()
    async getMovimentacoes() {
        return this.movimentacoesService.getMovimentacoes();
    }
}
