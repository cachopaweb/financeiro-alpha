import { ApiProperty } from '@nestjs/swagger';
import { Usuarios } from '@prisma/client';

export class AuthEntity {
    @ApiProperty()
    accessToken: string;

    @ApiProperty()
    usuario: Usuarios
}