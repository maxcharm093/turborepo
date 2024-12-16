import { guardConfig, moduleConfig } from '@/common/configs';
import { UsersModule } from '@/features/users/users.module';
import { Module } from '@nestjs/common';
import { AuthModule } from './features/auth/auth.module';

@Module({
  providers: [...guardConfig],
  imports: [...moduleConfig, UsersModule, AuthModule],
})
export class AppModule {}
