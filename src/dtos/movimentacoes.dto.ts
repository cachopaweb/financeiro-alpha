import { ApiProperty } from "@nestjs/swagger";
import { Transform } from "class-transformer";
import { IsDate, IsNotEmpty, IsNumber, IsOptional, isDate } from "class-validator";

export class MovimentacoesDto {
    @ApiProperty()
    @IsNotEmpty()
    descricao: string;

    @ApiProperty()
    @IsNotEmpty()
    credito: number;

    @ApiProperty()
    @IsNotEmpty()
    debito: number;

    @ApiProperty()
    @IsNotEmpty()
    dataHora: Date;

    @ApiProperty()
    @IsNotEmpty()
    empresaId: number;
}

export class MovimentacoesQuery {
    @ApiProperty()
    @IsOptional()
    @Transform(date => new Date(date.value))
    dataInicial?: Date;

    @ApiProperty()
    @IsOptional()
    @IsDate()
    @Transform(date => new Date(date.value))
    dataFinal?: Date;

    @ApiProperty()
    @IsOptional()
    @IsNumber()
    @Transform(emp => parseInt(emp.value))
    empresaId: number;
}