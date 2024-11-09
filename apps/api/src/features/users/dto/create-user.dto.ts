import { IsBoolean, IsString } from 'class-validator';

export class CreateUserDto {
  @IsString({
    message: 'First name must be a string',
  })
  firstName: string;

  @IsString({
    message: 'Last name must be a string',
  })
  lastName: string;

  @IsBoolean({
    message: 'Active status must be a boolean',
  })
  isActive: boolean;

  @IsString({
    message: 'Password must be a string',
  })
  password: string;
}
