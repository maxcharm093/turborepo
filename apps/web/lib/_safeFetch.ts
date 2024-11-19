import { _env } from '@/lib/_env';
import z, { ZodSchema } from 'zod';

const _safeFetch = async <T extends ZodSchema<any>>(
  schema: T,
  url: URL | RequestInfo,
  init?: RequestInit,
): Promise<{ error: string | null; data: z.TypeOf<T> }> => {
  const response: Response = await fetch(`${_env.API_URL}${url}`, init);
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

export default _safeFetch;
