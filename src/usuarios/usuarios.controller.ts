import { Controller, Get, Post, Body, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { PrismaService } from 'src/database/prisma.service';
import { UsuarioDto } from 'src/dtos/usuario.dto';

@Controller('usuarios')
@ApiTags('usuarios')
export class UsuariosController {
    constructor(private prisma: PrismaService) { }

    @Post()
    @UseGuards(JwtAuthGuard)
    @ApiBearerAuth()
    async create(@Body() data: UsuarioDto) {
        const { email, nome, senha, admin } = data;
        try {
            const usuario = this.prisma.usuarios.create({
                data: {
                    nome,
                    email,
                    senha,
                    admin
                }
            });

            return usuario;
        } catch (error) {
            throw new Error(error);
        }
    }

    @Get()
    @UseGuards(JwtAuthGuard)
    @ApiBearerAuth()
    async getUsuarios() {
        try {
            const usuarios = this.prisma.usuarios.findMany();
            return usuarios;
        } catch (error) {
            throw new Error(error);
        }
    }
}
