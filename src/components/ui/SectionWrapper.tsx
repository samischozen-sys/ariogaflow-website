import { cn } from '@/lib/utils'
import { HTMLAttributes } from 'react'

interface SectionWrapperProps extends HTMLAttributes<HTMLElement> {
  id?: string
  as?: 'section' | 'div'
  contained?: boolean
}

export default function SectionWrapper({
  className,
  id,
  as: Tag = 'section',
  contained = true,
  children,
  ...props
}: SectionWrapperProps) {
  return (
    <Tag id={id} className={cn('py-20 lg:py-28', className)} {...props}>
      {contained ? (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
      ) : (
        children
      )}
    </Tag>
  )
}
