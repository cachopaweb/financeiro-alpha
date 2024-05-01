import { Body, Controller, Delete, Get, Param, Post, UseGuards } from '@nestjs/common';
import { DespesaDto } from '../dtos/despesa.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { DespesasService } from './despesas.service';

@Controller('despesas')
@ApiTags('Despesas')
export class DespesasController {
    constructor(private despesaService: DespesasService) { }

    @Get()
    @UseGuards(JwtAuthGuard)
    @ApiBearerAuth()
    getDespesas() {
        return this.despesaService.getDespesas();
    }

    @Post()
    @UseGuards(JwtAuthGuard)
    @ApiBearerAuth()
    create(@Body() body: DespesaDto) {
        return this.despesaService.create(body);
    }

    @Delete()
    @UseGuards(JwtAuthGuard)
    @ApiBearerAuth()
    delete(@Param('id') id: number) {
        return this.despesaService.delete(id);
    }
}
