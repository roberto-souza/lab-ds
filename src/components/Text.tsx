import { clsx } from 'clsx'
import { Slot } from '@radix-ui/react-slot'
import { ReactNode } from 'react';

export interface ITextProps {
  children: ReactNode;
  asChild?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export function Text({ children, size = 'md', asChild }: ITextProps) {
  const Component = asChild ? Slot : 'span';

  return (
    <Component
      className={clsx(
        'text-gray-100 font-sans',
        {
          'text-xs': size === 'sm',
          'text-sm': size === 'md',
          'text-md': size === 'lg',
        }
      )}
    >
      {children}
    </Component>
  )
}