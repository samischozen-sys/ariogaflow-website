import { cn } from '@/lib/utils'
import { HTMLAttributes } from 'react'

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: 'cyan' | 'navy' | 'outline'
}

export default function Badge({ className, variant = 'cyan', children, ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase',
        {
          'bg-cyan-500/10 text-cyan-400 border border-cyan-500/20': variant === 'cyan',
          'bg-navy-800 text-slate-300 border border-navy-700': variant === 'navy',
          'border border-navy-700 text-slate-400 bg-transparent': variant === 'outline',
        },
        className
      )}
      {...props}
    >
      {children}
    </span>
  )
}
