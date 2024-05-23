import { IsNotEmpty, IsNumber, IsOptional, isNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';

export class DespesaDto {
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

export class DespesaQuery {
    @ApiProperty()
    @IsOptional()
    nome?: string;

    @ApiProperty()
    @IsOptional()
    @IsNumber()
    @Transform(emp => parseInt(emp.value))
    empresaId: number;
}