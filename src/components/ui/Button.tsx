import { cn } from '@/lib/utils'
import React, { ButtonHTMLAttributes, cloneElement, forwardRef, isValidElement } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  asChild?: boolean
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', asChild, children, ...props }, ref) => {
    const classes = cn(
      'inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:ring-offset-2 focus-visible:ring-offset-navy-950 disabled:opacity-50 disabled:pointer-events-none',
      {
        'bg-cyan-500 text-white hover:bg-cyan-600 shadow-lg hover:shadow-cyan-500/25 hover:scale-105 active:scale-95':
          variant === 'primary',
        'bg-navy-800 text-white border border-navy-700 hover:border-cyan-500/50 hover:bg-navy-700':
          variant === 'secondary',
        'text-slate-300 hover:text-white border border-navy-700 hover:border-cyan-500/30 bg-transparent':
          variant === 'ghost',
      },
      {
        'px-4 py-2 text-sm gap-1.5': size === 'sm',
        'px-6 py-3 text-base gap-2': size === 'md',
        'px-8 py-4 text-lg gap-2.5': size === 'lg',
      },
      className
    )

    if (asChild && isValidElement(children)) {
      const child = children as React.ReactElement<React.HTMLAttributes<HTMLElement>>
      return cloneElement(child, {
        className: cn(classes, child.props.className),
      })
    }

    return (
      <button
        ref={ref}
        className={classes}
        {...props}
      >
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'

export default Button
