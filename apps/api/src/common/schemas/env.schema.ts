import { z } from 'zod';

export const EnvSchema = z.object({
  NODE_ENV: z
    .enum(['development', 'production', 'test', 'provision'])
    .default('development'),
  PORT: z
    .string()
    .default('8000')
    .transform((data) => parseInt(data, 10)),
  JWT_SECRET: z.string().min(10).max(128),
  JWT_AGE: z.string().min(1).max(60),
});
