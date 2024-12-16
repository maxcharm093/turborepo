import { env } from '@/lib/env';
import { safeFetchBuilder } from '@repo/utils';

const safeFetch = safeFetchBuilder(env.API_URL);

export default safeFetch;
