'use client';

import { Button } from '@repo/ui/button';
import { RotateCw } from '@repo/ui/icon';
import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="w-full flex flex-col min-h-dvh gap-9 items-center justify-center">
      <p className="font-semibold">
        Oh no, something went wrong... maybe refresh?
      </p>
      <Button onClick={reset}>
        Try Again
        <RotateCw className="size-5" />
      </Button>
    </div>
  );
}
