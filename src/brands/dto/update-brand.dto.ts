//import { PartialType } from '@nestjs/mapped-types';
//import { CreateBrandDto } from './create-brand.dto';

import { IsEmail, IsString, MinLength } from "class-validator";

//export class UpdateBrandDto extends PartialType(CreateBrandDto) {}

export class UpdateBrandDto {

    @IsString()
    @MinLength(1)
    name: string;
}