'use client'

import { motion } from 'framer-motion'
import { Calendar, PhoneOff, FileText, Users } from 'lucide-react'
import CalendlyPopupButton from '@/components/CalendlyPopupButton'

const opportunities = [
  { icon: PhoneOff, label: 'Missed-call revenue' },
  { icon: FileText, label: 'Estimate follow-up gaps' },
  { icon: Users,    label: 'Customer reactivation wins' },
]

export default function CalendlyBookingSection() {
  return (
    <section className="relative py-24 overflow-hidden bg-navy-950">
      {/* Subtle cyan glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[700px] h-[300px] rounded-full bg-cyan-500/10 blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Label chip */}
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-semibold mb-6">
            <Calendar className="w-3.5 h-3.5" />
            Free 30-Minute Audit
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight mb-4">
            See How Much Revenue{' '}
            <span className="text-gradient">You&apos;re Losing</span>
          </h2>

          <p className="text-lg text-slate-400 leading-relaxed mb-8 max-w-2xl mx-auto">
            Book a free revenue audit and we&apos;ll identify your missed-call revenue, estimate
            follow-up opportunities, and customer reactivation opportunities — at no cost.
          </p>

          {/* Opportunity pills */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {opportunities.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-navy-800 border border-navy-700 text-slate-300 text-sm"
              >
                <Icon className="w-4 h-4 text-cyan-400 shrink-0" />
                {label}
              </div>
            ))}
          </div>

          <CalendlyPopupButton size="lg" className="text-base px-10 py-4">
            Schedule My Audit
          </CalendlyPopupButton>

          <p className="mt-4 text-xs text-slate-600">
            No pressure. No pitch. Just 30 minutes to find your leaks.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
