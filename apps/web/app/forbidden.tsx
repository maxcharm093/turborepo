'use client';
import { Button } from '@repo/ui/button';
import { RotateCw } from '@repo/ui/icon';
import { cn } from '@repo/ui/lib/utils';
import { useRouter } from 'next/navigation';
import { useTransition } from 'react';

const Forbidden = () => {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  return (
    <div className="w-full flex flex-col min-h-dvh gap-9 items-center justify-center">
      <h1 className="font-semibold text-base">403 | Forbidden</h1>
      <p className="font-semibold">
        You are not authorized to access this resource.
      </p>
      <Button
        onClick={() => {
          startTransition(() => {
            router.push('/');
          });
        }}
      >
        Return Home
        <RotateCw className={cn('size-5', isPending && 'animate-spin')} />
      </Button>
    </div>
  );
};

export default Forbidden;
