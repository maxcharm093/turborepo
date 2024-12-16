import { _guardConfig, _moduleConfig } from '@/common/configs';
import { UsersModule } from '@/features/users/users.module';
import { Module } from '@nestjs/common';
import { AuthModule } from './features/auth/auth.module';

@Module({
  providers: [..._guardConfig],
  imports: [..._moduleConfig, UsersModule, AuthModule],
})
export class AppModule {}
