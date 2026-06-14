import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import CalendlyWidget from '@/components/CalendlyWidget'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'AriogaFlow | CRM & Automation for HVAC & Plumbing',
  description:
    'Stop losing revenue. AriogaFlow builds done-for-you automation systems that recover missed calls, close more estimates, and reactivate past customers — exclusively for HVAC and plumbing companies.',
  keywords: [
    'HVAC CRM',
    'plumbing automation',
    'revenue recovery',
    'missed call automation',
    'GoHighLevel HVAC',
    'home service CRM',
  ],
  openGraph: {
    title: 'AriogaFlow | Revenue Recovery for HVAC & Plumbing',
    description:
      'Done-for-you CRM and automation systems that recover $3K–$8K/month in lost revenue for HVAC and plumbing companies.',
    type: 'website',
    images: [{ url: '/images/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AriogaFlow | Revenue Recovery for HVAC & Plumbing',
    description: 'Done-for-you CRM & automation that recovers missed revenue 24/7.',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet" />
      </head>
      <body className="bg-navy-950 text-white antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <CalendlyWidget />
      </body>
    </html>
  )
}
