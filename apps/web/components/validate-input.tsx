'use client';
import { Input, InputProps } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';
import { Eye, EyeOff } from 'lucide-react';
import { ReactNode, useState } from 'react';

interface ValidationInputProps extends InputProps {
  startItem?: ReactNode;
  errorMessage?: string;
  classNames?: {
    wrapper?: string;
    label?: string;
    inputWrapper?: string;
    startIcon?: string;
    input?: string;
    errorMessage?: string;
  };
}
const ValidationInput = ({
  id,
  title,
  startItem,
  errorMessage,
  classNames,
  ...props
}: ValidationInputProps) => {
  const [togglePassword, setTogglePassword] = useState(false);

  return (
    <div
      className={cn(
        'flex h-auto w-full flex-col items-center justify-start space-y-3',
        classNames?.inputWrapper
      )}
    >
      <Label htmlFor={id} className={cn('w-full', classNames?.label)}>
        {title}
      </Label>
      <div className='relative w-full'>
        <div
          className={cn(
            'absolute inset-y-0 flex flex-col items-center justify-center px-4',
            classNames?.startIcon
          )}
        >
          {startItem}
        </div>
        <Input
          id={id}
          {...props}
          className={cn(
            classNames?.input,
            startItem && 'pl-[45px]',
            props.type === 'password' && 'pr-[45px]',
            errorMessage && 'border-red-500 ring-red-500 focus-visible:ring-0'
          )}
          type={togglePassword ? 'text' : props.type}
        />
        {props.type === 'password' && (
          <button
            type={'button'}
            onClick={() => setTogglePassword((p) => !p)}
            className='absolute inset-y-0 right-0 flex flex-col items-center justify-center px-3'
          >
            {togglePassword ? (
              <EyeOff className='size-4' />
            ) : (
              <Eye className='size-4' />
            )}
          </button>
        )}
      </div>
      <p
        className={cn('w-full text-sm text-red-500', classNames?.errorMessage)}
      >
        {errorMessage}
      </p>
    </div>
  );
};

export default ValidationInput;
