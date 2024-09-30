import { z } from 'zod';

export const roleSchema = z.enum(['ADMIN', 'USER']);

export type Role = z.infer<typeof roleSchema>;
