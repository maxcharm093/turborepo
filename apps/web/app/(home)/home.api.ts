'use server';

import { GetUsersSchema, User } from '@/types/user.type';
import {
  Revalidate_Tags,
  Revalidate_Time,
} from '../../../../packages/utils/src/_constants';
import _safeFetch from '../../../../packages/utils/src/_safeFetch';

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
