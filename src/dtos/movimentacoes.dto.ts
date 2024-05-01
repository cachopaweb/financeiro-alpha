import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, isDate } from "class-validator";

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
}