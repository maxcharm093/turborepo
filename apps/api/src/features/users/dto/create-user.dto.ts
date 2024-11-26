import { IsBoolean, IsEmail, IsString } from 'class-validator';

export class CreateUserDto {
  @IsEmail()
  email: string;

  @IsString({
    message: 'Password must be a string',
  })
  password: string;

  @IsString({
    message: 'Username must be a string',
  })
  username: string;

  @IsString({
    message: 'Name must be a string',
  })
  name: string;

  @IsBoolean({
    message: 'Active status must be a boolean',
  })
  isActive: boolean;
}
