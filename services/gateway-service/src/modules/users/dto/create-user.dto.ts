import { IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator"

export class CreateUserDto {
    @IsString()
    @IsNotEmpty()
    readonly name: string;

    @IsString()
    @IsNotEmpty()
    lastname: string;

    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsString()
    @MinLength(8)
    password: string;
}

