import { DocumentBuilder } from '@nestjs/swagger';

const _swaggerConfig = new DocumentBuilder()
  .setTitle('Turbo repo')
  .addBearerAuth()
  .build();

export { _swaggerConfig };
