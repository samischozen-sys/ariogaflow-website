import { cn } from '@/lib/utils'
import { HTMLAttributes } from 'react'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  glow?: boolean
}

export default function Card({ className, glow = false, children, ...props }: CardProps) {
  return (
    <div
      className={cn(
        'bg-navy-800 border border-navy-700 rounded-2xl p-6 transition-all duration-300',
        glow && 'hover:border-cyan-500/40 hover:shadow-lg hover:shadow-cyan-500/10',
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}
