import { IsString } from 'class-validator';

export class SignInUserDto {
  @IsString({
    message: 'Identifier must be a string',
  })
  identifier: string;

  @IsString({
    message: 'Password must be a string',
  })
  password: string;
}
