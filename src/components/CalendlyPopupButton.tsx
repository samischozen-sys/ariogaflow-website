'use client'

import Button from '@/components/ui/Button'
import type { ButtonHTMLAttributes } from 'react'

const CALENDLY_URL = 'https://calendly.com/samischozen/freeaudit'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

export default function CalendlyPopupButton({ children, ...props }: Props) {
  const open = () => {
    ;(
      window as {
        Calendly?: { initPopupWidget: (o: { url: string }) => void }
      }
    ).Calendly?.initPopupWidget({ url: CALENDLY_URL })
  }

  return (
    <Button onClick={open} {...props}>
      {children}
    </Button>
  )
}
