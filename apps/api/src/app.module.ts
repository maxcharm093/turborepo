import { _guardConfig, _moduleConfig } from '@/common/configs';
import { UsersModule } from '@/features/users/users.module';
import { Module } from '@nestjs/common';

@Module({
  providers: [..._guardConfig],
  imports: [..._moduleConfig, UsersModule],
})
export class AppModule {}
