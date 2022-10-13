import { InputHTMLAttributes, ReactNode } from 'react';
import { Slot } from '@radix-ui/react-slot'

export interface ITextInputInputProps extends InputHTMLAttributes<HTMLInputElement> {}

export interface ITextInputRootProps {
  children: ReactNode;
}

export interface ITextInputIconProps {
  children: ReactNode;
}

function TextInputRoot({ children }: ITextInputRootProps) {
  return(
    <div className="flex items-center h-12 gap-3 py-4 px-3 rounded bg-gray-800 w-full focus-within:ring-2 ring-cyan-300">
      {children}
    </div>
  )
}

TextInputRoot.displayName = 'TextInput.Root'

function TextInputIcon({ children }: ITextInputIconProps) {
  return (
    <Slot className="w-6 h-6 text-gray-400">
      {children}
    </Slot>
  )
}

TextInputIcon.displayName = 'TextInput.Icon'

function TextInputInput({ ...props }: ITextInputInputProps) {
  return (
    <input
      className="bg-transparent flex-1 outline-none text-gray-100 text-xs placeholder:text-gray-400"
      {...props}
    />
  )
}

TextInputInput.displayName = 'TextInput.Input'

export const TextInput = {
  Root: TextInputRoot,
  Input: TextInputInput,
  Icon: TextInputIcon,
}