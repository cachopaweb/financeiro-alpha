import { Body, Controller, Post } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { LoginDto } from 'src/dtos/login.dto';

@Controller('login')
export class LoginController {
    constructor(private prisma: PrismaService) { }

    @Post()
    async login(@Body() body: LoginDto) {
        const { email, senha } = body;
        try {
            const usuario = this.prisma.usuarios.findFirst({
                where: {
                    email,
                    senha
                }
            })
            if (!usuario) {
                throw new Error('Usuario ou senha incorretos')
            }
            return usuario;
        } catch (error) {
            throw new Error(error);
        }
    }
}
