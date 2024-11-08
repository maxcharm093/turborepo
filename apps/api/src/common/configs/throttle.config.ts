import { ThrottlerModuleOptions } from '@nestjs/throttler';

const _throttleConfig = [
  {
    name: 'short',
    ttl: 1000, // 1 sec
    limit: 1000,
  },
  {
    name: 'medium',
    ttl: 10000, // 10 sec
    limit: 10000,
  },
  {
    name: 'long',
    ttl: 60000, // 1 min
    limit: 600000,
  },
] satisfies ThrottlerModuleOptions;

export { _throttleConfig };
