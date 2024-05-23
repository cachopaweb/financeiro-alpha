import { Body, Controller, Delete, Get, HttpCode, Param, Post, Query, UseGuards } from '@nestjs/common';
import { DespesaDto, DespesaQuery } from '../dtos/despesa.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { DespesasService } from './despesas.service';
import { Transform } from 'class-transformer';

@Controller('despesas')
@ApiTags('Despesas')
export class DespesasController {
    constructor(private despesaService: DespesasService) { }

    @Get()
    @UseGuards(JwtAuthGuard)
    @ApiBearerAuth()
    getDespesas(@Query() despesaQuery: DespesaQuery) {
        return this.despesaService.getDespesas(despesaQuery);
    }

    @Post()
    @UseGuards(JwtAuthGuard)
    @ApiBearerAuth()
    create(@Body() body: DespesaDto) {
        return this.despesaService.create(body);
    }

    @Delete(':id')
    @UseGuards(JwtAuthGuard)
    @ApiBearerAuth()
    @HttpCode(204)
    delete(@Param('id') id: string) {
        return this.despesaService.delete(id);
    }
}
