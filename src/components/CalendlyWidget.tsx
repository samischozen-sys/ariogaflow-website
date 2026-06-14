'use client'

import Script from 'next/script'

export default function CalendlyWidget() {
  return (
    <Script
      src="https://assets.calendly.com/assets/external/widget.js"
      strategy="afterInteractive"
      onLoad={() => {
        ;(window as { Calendly?: { initBadgeWidget: (opts: object) => void } }).Calendly?.initBadgeWidget({
          url: 'https://calendly.com/samischozen/freeaudit',
          text: 'Free Revenue Audit',
          color: '#0EA5E9',
          textColor: '#ffffff',
          branding: true,
        })
      }}
    />
  )
}
