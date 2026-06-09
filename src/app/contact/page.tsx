import type { Metadata } from 'next'
import { Clock, Phone, CheckCircle } from 'lucide-react'
import SectionWrapper from '@/components/ui/SectionWrapper'
import Badge from '@/components/ui/Badge'
import ContactForm from '@/components/sections/ContactForm'

export const metadata: Metadata = {
  title: 'Book Free Audit | AriogaFlow',
  description:
    'Book your free Revenue Recovery Audit. We\'ll find exactly where your HVAC or plumbing business is losing money and show you how to get it back.',
}

const expectations = [
  {
    icon: Clock,
    title: 'What to expect',
    points: [
      'A 30-minute strategy call (no sales pitch)',
      'We analyze your call volume, open estimates, and customer list',
      'You leave with a clear picture of your revenue leaks',
      'We share exactly what we\'d build and what recovery to expect',
    ],
  },
]

export default function ContactPage() {
  return (
    <div className="pt-20">
      <SectionWrapper className="bg-navy-950 min-h-screen">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left — context */}
          <div>
            <Badge className="mb-4">Free Revenue Recovery Audit</Badge>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-5">
              Let&apos;s Find Your{' '}
              <span className="text-gradient">Revenue Leaks</span>
            </h1>
            <p className="text-slate-400 text-lg leading-relaxed mb-8">
              Book a free 30-minute audit call. We&apos;ll dig into your numbers, identify exactly
              where you&apos;re losing money, and show you a clear plan to recover it — with no
              obligation to move forward.
            </p>

            {/* Expectation list */}
            <div className="space-y-4 mb-8">
              {[
                'A focused 30-minute call (no fluff, no pitch)',
                'Analysis of your missed calls, open estimates, and past customers',
                'Clear breakdown of your estimated monthly revenue leak',
                'Custom system recommendation for your business',
                'No obligation to move forward after the call',
              ].map((point) => (
                <div key={point} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                  <span className="text-slate-300 text-sm">{point}</span>
                </div>
              ))}
            </div>

            {/* Response time */}
            <div className="flex items-center gap-3 bg-navy-800 border border-navy-700 rounded-xl px-5 py-4">
              <Phone className="w-5 h-5 text-cyan-400 shrink-0" />
              <div>
                <div className="text-white text-sm font-medium">We respond within 24 hours</div>
                <div className="text-slate-500 text-xs">
                  Usually same business day. Check your inbox after submitting.
                </div>
              </div>
            </div>
          </div>

          {/* Right — form */}
          <div className="bg-navy-800 border border-navy-700 rounded-2xl p-6 sm:p-8">
            <h2 className="text-xl font-bold text-white mb-6">Book Your Free Audit</h2>
            <ContactForm />
          </div>
        </div>
      </SectionWrapper>
    </div>
  )
}
