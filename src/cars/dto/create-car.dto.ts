import { IsString, MinLength } from "class-validator";

export class CreateCarDto {

    @IsString({ message: 'LA MARCA DEBE SER UN STRING' })
    readonly brand: string;

    @IsString()
    @MinLength(3)
    readonly model: string;
}