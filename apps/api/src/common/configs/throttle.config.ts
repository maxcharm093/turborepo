import { ThrottlerModuleOptions } from '@nestjs/throttler';

export const throttleConfig = [
  {
    name: 'short',
    ttl: 1000, // 1 sec
    limit: 5,
  },
  {
    name: 'medium',
    ttl: 10000, // 10 sec
    limit: 15,
  },
  {
    name: 'long',
    ttl: 60000, // 1 min
    limit: 20,
  },
] satisfies ThrottlerModuleOptions;
