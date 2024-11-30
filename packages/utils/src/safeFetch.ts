import z, { ZodSchema } from 'zod';

export const safeFetchBuilder = (baseUrl: string) => {
  return async <T extends ZodSchema<unknown>>(
    schema: T,
    // eslint-disable-next-line no-undef
    url: URL | RequestInfo,
    // eslint-disable-next-line no-undef
    init?: RequestInit,
  ): Promise<{ error: string | null; data: z.TypeOf<T> }> => {
    const response: Response = await fetch(`${baseUrl}${url}`, init);
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
};
