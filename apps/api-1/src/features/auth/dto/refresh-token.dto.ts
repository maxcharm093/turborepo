import { IsString } from 'class-validator';

export class RefreshTokenDto {
  @IsString({
    message: 'Refresh token must be a string',
  })
  refresh_token: string;

  @IsString({
    message: 'User Id must be a string',
  })
  user_id: string;
}
