'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, ChevronDown } from 'lucide-react'
import Button from '@/components/ui/Button'
import { HERO_STATS } from '@/lib/constants'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-navy-950">
      {/* Background grid */}
      <div className="absolute inset-0 bg-grid opacity-30" />

      {/* Cyan glow orb */}
      <motion.div
        animate={{ scale: [1, 1.08, 1], opacity: [0.15, 0.25, 0.15] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-cyan-500 blur-[120px] pointer-events-none"
      />

      {/* Secondary orb */}
      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.08, 0.15, 0.08] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-cyan-400 blur-[100px] pointer-events-none"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20">
        <motion.div
          variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto text-center"
        >
          {/* Label */}
          <motion.div variants={fadeUp} className="mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              CRM &amp; Automation for HVAC &amp; Plumbing
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={fadeUp}
            className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-6"
          >
            Stop Losing Revenue{' '}
            <span className="text-gradient">You Already Earned</span>
          </motion.h1>

          {/* Subhead */}
          <motion.p
            variants={fadeUp}
            className="text-lg sm:text-xl text-slate-400 leading-relaxed mb-10 max-w-2xl mx-auto"
          >
            Every missed call, cold estimate, and dormant customer is money walking out your door.
            We build done-for-you automation systems that recover it — 24/7, without adding to your
            plate.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={fadeUp}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button size="lg" asChild>
              <Link href="/contact">
                Get Your Free Revenue Recovery Audit
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button variant="ghost" size="lg" asChild>
              <a href="#how-it-works">
                See How It Works
                <ChevronDown className="w-5 h-5" />
              </a>
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={fadeUp}
            className="mt-16 grid grid-cols-3 gap-4 max-w-lg mx-auto"
          >
            {HERO_STATS.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-cyan-400">{stat.value}</div>
                <div className="text-xs text-slate-500 mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Floating badge cards */}
        <div className="hidden lg:block">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="absolute left-8 top-1/2 -translate-y-1/2 bg-navy-800/80 backdrop-blur border border-navy-700 rounded-xl p-4 max-w-[180px]"
          >
            <div className="text-xs text-slate-400 mb-1">Missed Call Recovered</div>
            <div className="text-lg font-bold text-white">$2,400</div>
            <div className="text-xs text-cyan-400 mt-1">AC install closed ✓</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.0, duration: 0.6 }}
            className="absolute right-8 top-1/2 -translate-y-1/2 bg-navy-800/80 backdrop-blur border border-navy-700 rounded-xl p-4 max-w-[180px]"
          >
            <div className="text-xs text-slate-400 mb-1">Estimate Closed</div>
            <div className="text-lg font-bold text-white">$3,800</div>
            <div className="text-xs text-cyan-400 mt-1">Repiping job won ✓</div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-600"
      >
        <ChevronDown className="w-6 h-6" />
      </motion.div>
    </section>
  )
}
