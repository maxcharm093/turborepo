import { APP_GUARD } from '@nestjs/core';
import { ThrottlerGuard } from '@nestjs/throttler';
import { JwtAuthGuard, RolesGuard } from 'src/common/guards';

export const guardConfig = [
  {
    provide: APP_GUARD,
    useClass: JwtAuthGuard,
  },
  {
    provide: APP_GUARD,
    useClass: RolesGuard,
  },
  {
    provide: APP_GUARD,
    useClass: ThrottlerGuard,
  },
];
