import { IsString } from 'class-validator';

export class ValidateUserDto {
  @IsString({
    message: 'First name must be a string',
  })
  identifier: string;

  @IsString({
    message: 'Password must be a string',
  })
  password: string;
}
