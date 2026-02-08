'use client';

import { forwardRef, type ComponentPropsWithRef } from 'react';

interface ButtonProps extends ComponentPropsWithRef<'button'> {
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, className, disabled, type, ...restProps }, ref) => {
    return (
      <button
        type={type || 'button'}
        ref={ref}
        disabled={disabled}
        className={className}
        {...restProps}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';