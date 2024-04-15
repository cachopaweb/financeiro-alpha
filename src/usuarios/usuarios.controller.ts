import { Controller, Get, Post , Body} from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { UsuarioDto } from 'src/dtos/usuario.dto';

@Controller('usuarios')
export class UsuariosController {
    constructor(private prisma: PrismaService){}

    @Post()
    async create(@Body() data: UsuarioDto){
        const { email, nome, senha, funId } = data;
        try {
            const usuario = this.prisma.usuarios.create({
                data: {
                    nome, 
                    email,                   
                    senha,
                    usu_fun: funId                   
                }
            });

            return usuario;
        } catch (error) {
            throw new Error(error);
        }
    }

    @Get()
    async getUsuarios(){
        try {
            const usuarios = this.prisma.usuarios.findMany();
            return usuarios;
        } catch (error) {
            throw new Error(error);
        }
    }
}
