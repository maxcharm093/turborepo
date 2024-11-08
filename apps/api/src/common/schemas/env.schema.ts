import { z } from 'zod';

export const EnvSchema = z.object({
  NODE_ENV: z
    .enum(['development', 'production', 'test', 'provision'])
    .default('development'),
  PORT: z
    .string()
    .default('8000')
    .transform((data) => +data),
  JWT_SECRET: z.string().min(10).max(128),
  JWT_AGE: z.string().min(1).max(60),
  DB_HOST: z.string(),
  DB_PORT: z.string(),
  DB_USERNAME: z.string(),
  DB_PASSWORD: z.string(),
  DB_NAME: z.string(),
});

export type Env = z.infer<typeof EnvSchema>;
