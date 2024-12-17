import z, { ZodSchema } from 'zod';
import { env } from './env';

export const safeFetch = async <T extends ZodSchema<unknown>>(
  schema: T,
  url: URL | RequestInfo,
  init?: RequestInit,
): Promise<{ error: string | null; data: z.TypeOf<T> }> => {
  const response: Response = await fetch(`${env.API_URL}${url}`, init);
  const res = await response.json();

  if (!response.ok) {
    return {
      error: `HTTP error! Status: ${response.status} - ${response.statusText}`,
      data: null,
    };
  }

  const validateFields = schema.safeParse(res);

  if (!validateFields.success) {
    console.log(res);
    console.log('Validation errors:', validateFields.error);
    return {
      error: `Validation error: ${validateFields.error.message}`,
      data: null,
    };
  }

  return {
    data: validateFields.data,
    error: null,
  };
};
