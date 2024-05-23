import { IsNotEmpty, IsNumber, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';

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

    @ApiProperty()
    @IsNotEmpty()
    empresaId: number;
}


export class ReceitaQuery {
    @ApiProperty()
    @IsOptional()
    nome?: string;

    @ApiProperty()
    @IsOptional()
    @IsNumber()
    @Transform(emp => parseInt(emp.value))
    empresaId: number;
}