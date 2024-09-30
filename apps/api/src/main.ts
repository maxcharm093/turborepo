import { ReqLogInterceptor } from '@/common/interceptors';
import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.enableCors({ credentials: true, origin: '*' });
  app.setGlobalPrefix('api/v1');
  app.useStaticAssets('uploads');
  app.useGlobalInterceptors(new ReqLogInterceptor());

  const config = new DocumentBuilder()
    .setTitle('Turborepo')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);

  await app.listen(8000);
}
bootstrap().then(() => {
  const logger = new Logger('BOOTSTRAP');
  logger.log('Server started on http://192.168.0.254:8000');
});
