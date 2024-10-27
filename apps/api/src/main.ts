import { ReqLogInterceptor } from '@/common/interceptors';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    bufferLogs: true,
  });
  const configService = app.get(ConfigService);

  app.enableCors({ credentials: true, origin: '*' });
  app.setGlobalPrefix('api/v1');
  app.useStaticAssets('uploads');
  app.useGlobalInterceptors(new ReqLogInterceptor());

  const swaggerConfig = new DocumentBuilder()
    .setTitle('Turbo repo')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('api-docs', app, document);

  await app.listen(+configService.get('PORT')); // Listen on port defined in.env file
}

bootstrap().catch((err) => console.error(err));
