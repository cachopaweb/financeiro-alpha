import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class LancamentoDto {
    @ApiProperty()
    @IsNotEmpty()
    valor: number;

    @ApiProperty()
    @IsNotEmpty()
    obs?: string;

    @ApiProperty()
    @IsNotEmpty()
    despesaId: number;
}