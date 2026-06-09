'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Phone, Clock, Star } from 'lucide-react'
import SectionWrapper from '@/components/ui/SectionWrapper'
import Badge from '@/components/ui/Badge'
import ContactForm from './ContactForm'

const perks = [
  { icon: Clock, text: 'Response within 24 hours' },
  { icon: Phone, text: '30-minute strategy call' },
  { icon: Star, text: 'No obligation, no pressure' },
]

export default function ContactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <SectionWrapper id="contact" className="bg-navy-900">
      <motion.div
        ref={ref}
        variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start"
      >
        {/* Left — copy */}
        <motion.div
          variants={{ hidden: { opacity: 0, x: -30 }, visible: { opacity: 1, x: 0, transition: { duration: 0.6 } } }}
        >
          <Badge className="mb-4">Free Revenue Recovery Audit</Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-5">
            Find Out Exactly{' '}
            <span className="text-gradient">What You&apos;re Losing</span>
          </h2>
          <p className="text-slate-400 text-lg leading-relaxed mb-8">
            Book a free 30-minute Revenue Recovery Audit. We&apos;ll analyze your call data,
            open estimates, and customer database — then show you exactly how much you can
            recover and how we&apos;d build your system.
          </p>

          <div className="space-y-4">
            {perks.map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center shrink-0">
                  <Icon className="w-4 h-4 text-cyan-400" />
                </div>
                <span className="text-slate-300 text-sm">{text}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right — form */}
        <motion.div
          variants={{ hidden: { opacity: 0, x: 30 }, visible: { opacity: 1, x: 0, transition: { duration: 0.6 } } }}
          className="bg-navy-800 border border-navy-700 rounded-2xl p-6 sm:p-8"
        >
          <ContactForm />
        </motion.div>
      </motion.div>
    </SectionWrapper>
  )
}
