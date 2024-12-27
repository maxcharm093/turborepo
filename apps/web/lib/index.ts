export const sleep = (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

export * from './env';
export * from './metadata';
export * from './safeAction';
export * from './safeFetch';
