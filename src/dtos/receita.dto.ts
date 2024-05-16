import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class ReceitaDto {
    @ApiProperty()
    @IsNotEmpty()
    nome: string;

    @ApiProperty()
    @IsNotEmpty()
    valorEstimado: number;

    @ApiProperty()
    @IsNotEmpty()
    usuarioCriou: number;

    @ApiProperty()
    @IsNotEmpty()
    dataPrevisao: number;
}