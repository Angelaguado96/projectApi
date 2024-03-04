/*
create-register.dto.ts
esto maneja la estructura de  la base de datos  
*/

import { IsEmail, IsString, MinLength, IsNumber } from 'class-validator';

export class CreateRegisterDto {
 @IsNumber()
  id:number

 @IsString()
 name: string;

 @IsString()
 lastName: string;

 @IsEmail()
 email: string;

 @IsString()
 @MinLength(8)
 password: string;
}