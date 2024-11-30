'use server';

import safeFetch from '@/lib/safeFetch';
import { GetUsersSchema, User } from '@/types/user.type';

export const getUsers = async (): Promise<User[]> => {
  const { error, data } = await safeFetch(GetUsersSchema, '/users', {
    cache: 'no-store',
    // next: {
    //   tags: [Revalidate_Tags],
    //   revalidate: Revalidate_Time,
    // },
  });
  if (error) return [];
  return data.data;
};
