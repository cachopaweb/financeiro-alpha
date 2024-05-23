import { Body, Controller, Delete, Get, Param, Post, UseGuards } from '@nestjs/common';
import { ReceitasService } from './receitas.service';
import { ReceitaDto } from 'src/dtos/receita.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('receitas')
@ApiTags('Receitas')
export class ReceitasController {
    constructor(private receitasService: ReceitasService) { }

    @Get()
    @UseGuards(JwtAuthGuard)
    @ApiBearerAuth()
    async getReceitas() {
        return this.receitasService.getReceitas();
    }

    @Post()
    @UseGuards(JwtAuthGuard)
    @ApiBearerAuth()
    async createReceita(@Body() receita: ReceitaDto) {
        return this.receitasService.createReceita(receita);
    }

    @Delete()
    @UseGuards(JwtAuthGuard)
    @ApiBearerAuth()
    delete(@Param('id') id: number) {
        return this.receitasService.delete(id);
    }
}
