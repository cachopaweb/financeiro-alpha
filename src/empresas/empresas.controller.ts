import { PrismaService } from 'src/database/prisma.service';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { EmpresaDto } from 'src/dtos/empresa.dto';

@Controller('empresas')
export class EmpresasController {
    constructor(private prisma: PrismaService) { }

    @Post()
    async create(@Body() body: EmpresaDto) {
        try {
            const empresa = this.prisma.empresas.create({
                data: {
                    nome: body.nome
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
