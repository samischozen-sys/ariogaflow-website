'use client'

import { useEffect } from 'react'

export default function ContactForm() {
  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://js-na2.hsforms.net/forms/embed/246446597.js'
    script.defer = true
    document.head.appendChild(script)

    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script)
      }
    }
  }, [])

  return (
    <div className="hs-embed-wrapper">
      <div
        className="hs-form-frame"
        data-region="na2"
        data-form-id="edb278f1-dd87-40d2-9b7d-282d92e92fa0"
        data-portal-id="246446597"
      />
    </div>
  )
}
