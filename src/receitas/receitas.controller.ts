import { Body, Controller, Delete, Get, HttpCode, Param, Post, Query, UseGuards } from '@nestjs/common';
import { ReceitasService } from './receitas.service';
import { ReceitaDto, ReceitaQuery } from 'src/dtos/receita.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('receitas')
@ApiTags('Receitas')
export class ReceitasController {
    constructor(private receitasService: ReceitasService) { }

    @Get()
    @UseGuards(JwtAuthGuard)
    @ApiBearerAuth()
    async getReceitas(@Query() receitaQuery: ReceitaQuery) {
        return this.receitasService.getReceitas(receitaQuery);
    }

    @Post()
    @UseGuards(JwtAuthGuard)
    @ApiBearerAuth()
    async createReceita(@Body() receita: ReceitaDto) {
        return this.receitasService.createReceita(receita);
    }

    @Delete(':id')
    @UseGuards(JwtAuthGuard)
    @ApiBearerAuth()
    @HttpCode(204)
    delete(@Param('id') id: string) {
        return this.receitasService.delete(id);
    }
}
