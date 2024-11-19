'use server';

import _safeFetch from '@/lib/_safeFetch';
import { GetUsersSchema, User } from '@/types/user.type';

export const getUsers = async (): Promise<User[]> => {
  const { error, data } = await _safeFetch(GetUsersSchema, '/users', {
    next: {
      tags: ['users'],
      revalidate: 5000,
    },
  });
  if (error) return [];
  return data.data;
};
