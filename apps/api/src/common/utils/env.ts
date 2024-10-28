import { EnvSchema } from '@/common/schemas/env.schema';

export const _validateEnv = (config: Record<string, unknown>) => {
  const validate = EnvSchema.safeParse(config);
  if (!validate.success) {
    throw new Error(validate.error.message);
  }
  return validate.data;
};
