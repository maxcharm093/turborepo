'use server';

import safeFetch from '@/lib/safe-fetch';
import { GetUsersSchema, User } from '@/types/user.type';

export const getUsers = async (): Promise<User[]> => {
  const { error, data } = await safeFetch(GetUsersSchema, '/users', {
    next: {
      tags: ['users'],
      revalidate: 1000,
    },
  });
  if (error) return [];
  return data.data;
};
