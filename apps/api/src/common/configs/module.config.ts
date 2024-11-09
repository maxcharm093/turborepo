import { _throttleConfig } from '@/common/configs/throttle.config';
import { Env } from '@/common/schemas/env.schema';
import { _validateEnv } from '@/common/utils';
import { MailerModule } from '@nestjs-modules/mailer';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { ThrottlerModule } from '@nestjs/throttler';
import { TypeOrmModule } from '@nestjs/typeorm';

const _moduleConfig = [
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
  MailerModule.forRootAsync({
    imports: [ConfigModule],
    inject: [ConfigService],
    useFactory: (config: ConfigService<Env>) => ({
      transport: {
        service: config.get('MAIL_HOST'),
        auth: {
          user: config.get('MAIL_USERNAME'),
          pass: config.get('MAIL_PASSWORD'),
        },
      },
    }),
  }),
];

export { _moduleConfig };
