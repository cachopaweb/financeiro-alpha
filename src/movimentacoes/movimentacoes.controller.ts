import { Controller, Get, Query } from '@nestjs/common';
import { MovimentacoesService } from './movimentacoes.service';
import { ApiTags } from '@nestjs/swagger';
import { MovimentacoesQuery } from 'src/dtos/movimentacoes.dto';

@Controller('movimentacoes')
@ApiTags('Movimentacoes')
export class MovimentacoesController {
    constructor(private movimentacoesService: MovimentacoesService) { }

    @Get()
    async getMovimentacoes(@Query() movimentacoesQuery: MovimentacoesQuery) {
        return this.movimentacoesService.getMovimentacoes(movimentacoesQuery);
    }
}
