import { getUsers } from '@/app/(home)/home.server';
import Image from 'next/image';
import { Fragment } from 'react';

const Page = async () => {
  const users = await getUsers();
  return (
    <main className="min-h-dvh w-full container flex justify-center items-center flex-wrap gap-5 py-5">
      {users.map((user) => (
        <Fragment key={user.id}>
          <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div className="flex flex-col items-center pb-10">
              <Image
                src={'/vercel.svg'}
                alt={'Vercel'}
                width={100}
                height={100}
              />
              <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                {user.firstName} {user.middleName} {user.lastName}
              </h5>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                {user.id}
              </span>
            </div>
          </div>
        </Fragment>
      ))}
    </main>
  );
};

export default Page;
