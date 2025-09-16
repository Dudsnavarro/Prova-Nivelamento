import { IsDateString, IsNotEmpty, IsString } from "class-validator";


export class CreateComputadorDto {

    @IsNotEmpty()
    @IsString()
    nome!: string;

    @IsNotEmpty()
    @IsString()
    cor!: string;

    @IsNotEmpty()
    @IsDateString()
    dataFabricacao!: string;
}
