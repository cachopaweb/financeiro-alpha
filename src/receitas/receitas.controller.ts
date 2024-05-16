import { Body, Controller, Get, Post } from '@nestjs/common';
import { ReceitasService } from './receitas.service';
import { ReceitaDto } from 'src/dtos/receita.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('receitas')
@ApiTags('Receitas')
export class ReceitasController {
    constructor(private receitasService: ReceitasService) { }

    @Get()
    async getReceitas() {
        return this.receitasService.getReceitas();
    }

    @Post()
    async createReceita(@Body() receita: ReceitaDto) {
        return this.receitasService.createReceita(receita);
    }
}
