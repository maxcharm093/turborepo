import { IsString } from 'class-validator';

export class SignOutUserDto {
  @IsString({
    message: 'User Id must be a string',
  })
  user_id: string;
}
