import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class CreateUserDto {
    @IsNotEmpty()
    @IsString()
    fillName: string;

    @IsNotEmpty()
    @IsEmail()
    email: string;
}
