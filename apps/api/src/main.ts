import { _swaggerConfig } from '@/common/core/configs/swagger.config';
import { ReqLogInterceptor } from '@/common/interceptors';
import { _concatStr } from '@/common/utils';
import { Logger, ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    bufferLogs: true,
  });
  const logger = new Logger('BOOTSTRAP');
  const configService = app.get(ConfigService);
  app.enableCors({ credentials: true, origin: '*' });
  app.setGlobalPrefix('api');
  app.useStaticAssets('uploads');
  app.useGlobalInterceptors(new ReqLogInterceptor());
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
      transformOptions: {
        enableImplicitConversion: true,
      },
    }),
  );
  const document = SwaggerModule.createDocument(app, _swaggerConfig);
  SwaggerModule.setup('api-docs', app, document);
  await app.listen(configService.get('PORT')!); // Listen on port defined in.env file
  logger.log(_concatStr(['Server is running on port', await app.getUrl()]));
}

bootstrap().catch((err) => console.error(err));
