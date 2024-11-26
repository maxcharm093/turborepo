'use server';

import { Revalidate_Tags, Revalidate_Time } from '@/lib/_constants';
import _safeFetch from '@/lib/_safeFetch';
import { GetUsersSchema, User } from '@/types/user.type';

export const getUsers = async (): Promise<User[]> => {
  const { error, data } = await _safeFetch(GetUsersSchema, '/users', {
    next: {
      tags: [Revalidate_Tags],
      revalidate: Revalidate_Time,
    },
  });
  if (error) return [];
  return data.data;
};
