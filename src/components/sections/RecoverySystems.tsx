'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { PhoneOff, FileText, RefreshCw, Star } from 'lucide-react'
import SectionWrapper from '@/components/ui/SectionWrapper'
import Card from '@/components/ui/Card'
import Badge from '@/components/ui/Badge'
import { RECOVERY_SYSTEMS } from '@/lib/constants'

const iconMap: Record<string, React.ElementType> = {
  PhoneOff,
  FileText,
  RefreshCw,
  Star,
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function RecoverySystems() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <SectionWrapper id="systems" className="bg-navy-950">
      <motion.div
        ref={ref}
        variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        {/* Header */}
        <div className="text-center mb-14">
          <motion.div variants={fadeUp}>
            <Badge className="mb-4">The Four Systems</Badge>
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4"
          >
            Four Ways We{' '}
            <span className="text-gradient">Recover Your Revenue</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-slate-400 text-lg max-w-2xl mx-auto">
            Each system targets a specific revenue leak that&apos;s costing HVAC and plumbing
            companies thousands every month.
          </motion.p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {RECOVERY_SYSTEMS.map((system, i) => {
            const Icon = iconMap[system.icon]
            return (
              <motion.div key={system.id} variants={fadeUp}>
                <Card
                  glow
                  className="h-full flex flex-col gap-5 group cursor-default p-8"
                >
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center group-hover:bg-cyan-500/20 transition-colors">
                    {Icon && <Icon className="w-6 h-6 text-cyan-400" />}
                  </div>

                  {/* Number + Name */}
                  <div>
                    <div className="text-xs text-slate-600 font-semibold tracking-widest uppercase mb-1">
                      System {system.id}
                    </div>
                    <h3 className="text-xl font-bold text-white">{system.name}</h3>
                  </div>

                  {/* Description */}
                  <p className="text-slate-400 text-sm leading-relaxed flex-1">
                    {system.description}
                  </p>

                  {/* Stat */}
                  <div className="flex items-center gap-3 pt-4 border-t border-navy-700">
                    <div className="text-2xl font-bold text-cyan-400">{system.stat}</div>
                    <div className="text-xs text-slate-500 leading-tight">{system.statLabel}</div>
                  </div>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </motion.div>
    </SectionWrapper>
  )
}
