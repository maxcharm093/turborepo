import { EnvSchema } from '@/common/schemas/env.schema';

export const _ValidateEnv = (config: Record<string, unknown>) => {
  const validate = EnvSchema.safeParse(config);
  if (!validate.success) {
    throw new Error(validate.error.message);
  }
  return validate.data;
};
