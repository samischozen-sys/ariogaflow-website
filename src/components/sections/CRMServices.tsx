'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Database, MessageSquare, Send, Users, Star, Share2 } from 'lucide-react'
import SectionWrapper from '@/components/ui/SectionWrapper'
import Card from '@/components/ui/Card'
import Badge from '@/components/ui/Badge'
import { SERVICES } from '@/lib/constants'

const iconMap: Record<string, React.ElementType> = {
  Database,
  MessageSquare,
  Send,
  Users,
  Star,
  Share2,
}

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
}

export default function CRMServices() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <SectionWrapper id="services" className="bg-navy-900">
      <motion.div
        ref={ref}
        variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        {/* Header */}
        <div className="text-center mb-14">
          <motion.div variants={fadeUp}>
            <Badge className="mb-4">What We Build</Badge>
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4"
          >
            CRM &amp; Automation{' '}
            <span className="text-gradient">Services</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-slate-400 text-lg max-w-2xl mx-auto">
            Every system we build is custom-configured for your business — not a template dropped
            into an account and forgotten.
          </motion.p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map((service) => {
            const Icon = iconMap[service.icon]
            return (
              <motion.div key={service.name} variants={fadeUp}>
                <Card
                  glow
                  className="flex flex-col gap-4 group cursor-default"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center shrink-0 group-hover:bg-cyan-500/20 transition-colors">
                      {Icon && <Icon className="w-5 h-5 text-cyan-400" />}
                    </div>
                    <h3 className="font-semibold text-white text-sm">{service.name}</h3>
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed">{service.description}</p>
                </Card>
              </motion.div>
            )
          })}
        </div>

        {/* GoHighLevel note */}
        <motion.div
          variants={fadeUp}
          className="mt-12 text-center"
        >
          <p className="text-slate-500 text-sm">
            Everything is built and managed inside{' '}
            <span className="text-slate-300 font-medium">GoHighLevel</span> — the most powerful CRM
            for home service businesses.
          </p>
        </motion.div>
      </motion.div>
    </SectionWrapper>
  )
}
