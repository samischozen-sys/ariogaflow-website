'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { PhoneOff, MessageSquare, ExternalLink, Calendar, CheckCircle, ArrowRight } from 'lucide-react'
import SectionWrapper from '@/components/ui/SectionWrapper'
import Badge from '@/components/ui/Badge'
import { WORKFLOW_STEPS } from '@/lib/constants'

const iconMap: Record<string, React.ElementType> = {
  PhoneOff,
  MessageSquare,
  ExternalLink,
  Calendar,
  CheckCircle,
}

export default function RecoveryWorkflow() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <SectionWrapper id="workflow" className="bg-navy-900">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        {/* Header */}
        <motion.div
          variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
          className="text-center mb-16"
        >
          <Badge className="mb-4">See It In Action</Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            The Missed Call{' '}
            <span className="text-gradient">Recovery Pipeline</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            A customer calls, you miss it — here&apos;s what happens next, automatically.
          </p>
        </motion.div>

        {/* Workflow steps — horizontal desktop, vertical mobile */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-0">
          {WORKFLOW_STEPS.map((step, i) => {
            const Icon = iconMap[step.icon]
            const isLast = i === WORKFLOW_STEPS.length - 1

            return (
              <div key={step.step} className="flex flex-col lg:flex-row items-center">
                {/* Step card */}
                <motion.div
                  variants={{
                    hidden: { opacity: 0, scale: 0.8 },
                    visible: {
                      opacity: 1,
                      scale: 1,
                      transition: { duration: 0.4, delay: i * 0.15 },
                    },
                  }}
                  className="flex flex-col items-center text-center"
                >
                  {/* Icon circle */}
                  <div
                    className={`w-16 h-16 rounded-full flex items-center justify-center border-2 transition-all ${
                      isLast
                        ? 'bg-cyan-500 border-cyan-500 shadow-lg shadow-cyan-500/40'
                        : 'bg-navy-800 border-navy-700'
                    }`}
                  >
                    {Icon && (
                      <Icon
                        className={`w-7 h-7 ${isLast ? 'text-white' : 'text-cyan-400'}`}
                      />
                    )}
                  </div>

                  {/* Label */}
                  <div className="mt-3 mb-1">
                    <div className="text-white font-semibold text-sm">{step.label}</div>
                    <div className="text-slate-500 text-xs mt-0.5 max-w-[110px]">{step.detail}</div>
                  </div>

                  {/* Step number */}
                  <div className="text-xs text-slate-600 font-medium">Step {step.step}</div>
                </motion.div>

                {/* Connector arrow */}
                {!isLast && (
                  <motion.div
                    variants={{
                      hidden: { opacity: 0 },
                      visible: { opacity: 1, transition: { delay: i * 0.15 + 0.3 } },
                    }}
                    className="mx-4 my-4 lg:my-0 text-cyan-500/40"
                  >
                    <ArrowRight className="w-6 h-6 rotate-90 lg:rotate-0" />
                  </motion.div>
                )}
              </div>
            )
          })}
        </div>

        {/* Time callout */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.8 } },
          }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full px-6 py-3">
            <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-cyan-400 font-semibold text-sm">
              Steps 1–3 happen in under 2 minutes — automatically
            </span>
          </div>
        </motion.div>
      </motion.div>
    </SectionWrapper>
  )
}
