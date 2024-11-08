import { Env } from '@/common/schemas/env.schema';
import { _validateEnv } from '@/common/utils';
import { UsersModule } from '@/features/users/users.module';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { APP_GUARD } from '@nestjs/core';
import { JwtModule } from '@nestjs/jwt';
import { ThrottlerGuard, ThrottlerModule } from '@nestjs/throttler';
import { TypeOrmModule } from '@nestjs/typeorm';
import { _throttleConfig } from 'src/common/configs';
import { AuthGuard, RolesGuard } from './common/guards';

@Module({
  providers: [
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
    {
      provide: APP_GUARD,
      useClass: RolesGuard,
    },
    {
      provide: APP_GUARD,
      useClass: ThrottlerGuard,
    },
  ],
  imports: [
    ThrottlerModule.forRoot(_throttleConfig),
    ConfigModule.forRoot({
      isGlobal: true,
      validate: _validateEnv,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService<Env>) => ({
        type: 'postgres',
        host: config.get('DB_HOST'),
        port: config.get('DB_PORT'),
        username: config.get('DB_USERNAME'),
        password: config.get('DB_PASSWORD'),
        database: config.get('DB_NAME'),
        synchronize: true,
        logging: true,
        autoLoadEntities: true,
      }),
    }),
    JwtModule.registerAsync({
      global: true,
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        secret: config.get('JWT_SECRET'),
        signOptions: { expiresIn: config.get('JWT_AGE') },
      }),
    }),
    UsersModule,
  ],
})
export class AppModule {}
