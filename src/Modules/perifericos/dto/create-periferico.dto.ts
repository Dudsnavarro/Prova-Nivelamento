import { IsNotEmpty, IsString } from "class-validator";

export class CreatePerifericoDto {

    @IsNotEmpty()
    @IsString()
    nome!: string

    @IsNotEmpty()
    @IsNotEmpty()
    computador_id!: number
}
