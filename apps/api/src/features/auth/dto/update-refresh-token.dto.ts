import { User } from '@/features/users/entities/user.entity';

export class UpdateRefreshTokenDto {
  user: User;
  refresh_token: string;
}
