import { PrismaService } from 'src/database/prisma.service';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { EmpresaDto } from 'src/dtos/empresa.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('empresas')
@ApiTags('Empresas')
export class EmpresasController {
    constructor(private prisma: PrismaService) { }

    @Post()
    async create(@Body() body: EmpresaDto) {
        try {
            const empresa = this.prisma.empresas.create({
                data: {
                    nome: body.nome.toUpperCase()
                }
            });
            return empresa;
        } catch (error) {
            throw new Error(error)
        }
    }

    @Get()
    async getEmpresas() {
        try {
            const empresas = this.prisma.empresas.findMany();
            return empresas;
        } catch (error) {
            throw new Error(error)
        }
    }
}
