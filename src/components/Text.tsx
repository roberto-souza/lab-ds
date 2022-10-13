import { clsx } from 'clsx'
import { Slot } from '@radix-ui/react-slot'
import { ReactNode } from 'react';

export interface ITextProps {
  children: ReactNode;
  asChild?: boolean;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export function Text({ children, size = 'md', asChild, className }: ITextProps) {
  const Component = asChild ? Slot : 'span';

  return (
    <Component
      className={clsx(
        'text-gray-100 font-sans',
        {
          'text-xs': size === 'sm',
          'text-sm': size === 'md',
          'text-md': size === 'lg',
        },
        className
      )}
    >
      {children}
    </Component>
  )
}