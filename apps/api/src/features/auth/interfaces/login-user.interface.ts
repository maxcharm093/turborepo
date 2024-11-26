import { User } from '@/features/users/entities/user.entity';

interface LoginUserInterface {
  data: User;
  tokens: {
    access_token: string;
    refresh_token: string;
  };
}

export default LoginUserInterface;
