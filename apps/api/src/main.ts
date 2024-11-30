import { ReqLogInterceptor } from '@/common/interceptors';
import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { NestFastifyApplication } from '@nestjs/platform-fastify';
import { SwaggerModule } from '@nestjs/swagger';
import { Logger } from 'nestjs-pino';
import { _swaggerConfig } from 'src/common/configs';
import { AppModule } from './app.module';
async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(AppModule, {
    bufferLogs: true,
  });
  const configService = app.get(ConfigService);
  app.enableCors({ credentials: true, origin: '*' });
  app.setGlobalPrefix('api');
  app.useGlobalInterceptors(new ReqLogInterceptor());
  app.useLogger(app.get(Logger));
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: false,
      transformOptions: {
        enableImplicitConversion: true,
      },
    }),
  );
  const document = SwaggerModule.createDocument(app, _swaggerConfig);
  SwaggerModule.setup('api-docs', app, document);
  await app.listen(configService.get('PORT')!); // Listen on port defined in.env file
}

bootstrap().catch((err) => console.error(err));
