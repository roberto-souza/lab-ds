import { clsx } from 'clsx'
import { Slot } from '@radix-ui/react-slot'
import { ReactNode } from 'react';

export interface IHeadingProps {
  children: ReactNode;
  asChild?: boolean;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export function Heading({ children, size = 'md', asChild, className }: IHeadingProps) {
  const Component = asChild ? Slot : 'h2';

  return (
    <Component
      className={clsx(
        'text-gray-100 font-sans font-bold',
        {
          'text-lg': size === 'sm',
          'text-xl': size === 'md',
          'text-2xl': size === 'lg',
        },
        className
      )}
    >
      {children}
    </Component>
  )
}