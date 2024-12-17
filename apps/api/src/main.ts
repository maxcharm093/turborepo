import { AppModule } from '@/app.module';
import { swaggerConfig } from '@/common/configs';
import { ReqLogInterceptor } from '@/common/interceptors';
import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { SwaggerModule } from '@nestjs/swagger';
import { Logger } from 'nestjs-pino';
async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
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
  const document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('api-docs', app, document);
  await app.listen(configService.get('PORT')!); // Listen on port defined in.env file
}

bootstrap().catch((err) => console.error(err));
