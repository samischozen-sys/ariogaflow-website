'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Search, Settings, TrendingUp } from 'lucide-react'
import SectionWrapper from '@/components/ui/SectionWrapper'
import Badge from '@/components/ui/Badge'
import { HOW_IT_WORKS_STEPS } from '@/lib/constants'

const iconMap: Record<string, React.ElementType> = {
  Search,
  Settings,
  TrendingUp,
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function HowItWorks() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <SectionWrapper id="how-it-works" className="bg-navy-950">
      <motion.div
        ref={ref}
        variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div variants={fadeUp}>
            <Badge className="mb-4">How It Works</Badge>
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4"
          >
            From Audit to{' '}
            <span className="text-gradient">Automated Revenue</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-slate-400 text-lg max-w-2xl mx-auto">
            A simple three-step process. We do the heavy lifting — you collect the jobs.
          </motion.p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connector line — desktop */}
          <div className="hidden lg:block absolute top-12 left-1/2 -translate-x-1/2 w-2/3 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {HOW_IT_WORKS_STEPS.map((step, i) => {
              const Icon = iconMap[step.icon]
              return (
                <motion.div
                  key={step.step}
                  variants={fadeUp}
                  className="relative flex flex-col items-center text-center"
                >
                  {/* Step number circle */}
                  <div className="relative mb-6">
                    <div className="w-24 h-24 rounded-full bg-navy-800 border-2 border-navy-700 flex items-center justify-center">
                      {Icon && <Icon className="w-10 h-10 text-cyan-400" />}
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-cyan-500 flex items-center justify-center text-white text-sm font-bold shadow-lg shadow-cyan-500/30">
                      {step.step}
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{step.description}</p>

                  {/* Mobile connector */}
                  {i < HOW_IT_WORKS_STEPS.length - 1 && (
                    <div className="lg:hidden mt-8 w-px h-8 bg-gradient-to-b from-cyan-500/30 to-transparent" />
                  )}
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Timeline note */}
        <motion.div
          variants={fadeUp}
          className="mt-16 text-center bg-navy-800 border border-navy-700 rounded-2xl px-8 py-6 max-w-xl mx-auto"
        >
          <p className="text-white font-semibold mb-1">
            Most clients are live within{' '}
            <span className="text-cyan-400">48–72 hours</span>
          </p>
          <p className="text-slate-500 text-sm">
            After your audit call, we handle the complete build. No tech skills required on your end.
          </p>
        </motion.div>
      </motion.div>
    </SectionWrapper>
  )
}
