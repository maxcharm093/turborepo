import { z } from 'zod';

export const EnvSchema = z.object({
  NODE_ENV: z
    .enum(['development', 'production', 'test', 'provision'])
    .default('development'),
  PORT: z
    .string()
    .default('8000')
    .transform((data) => +data),
  ACCESS_TOKEN_SECRET: z.string().min(10).max(128),
  ACCESS_TOKEN_EXPIRATION: z.string().min(1).max(60),
  REFRESH_TOKEN_SECRET: z.string().min(10).max(128),
  REFRESH_TOKEN_EXPIRATION: z.string().min(1).max(365),
  DB_HOST: z.string(),
  DB_PORT: z.string(),
  DB_USERNAME: z.string(),
  DB_PASSWORD: z.string(),
  DB_NAME: z.string(),
  MAIL_HOST: z.string(),
  MAIL_USERNAME: z.string(),
  MAIL_PASSWORD: z.string(),
});

export type Env = z.infer<typeof EnvSchema>;
