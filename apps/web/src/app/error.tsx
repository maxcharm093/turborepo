'use client';

import { Button } from '@repo/ui/button';
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
    <div className="flex flex-1 flex-col justify-center pt-9">
      <p>Oh no, something went wrong... maybe refresh?</p>
      <Button onClick={reset}>Try Again</Button>
    </div>
  );
}
