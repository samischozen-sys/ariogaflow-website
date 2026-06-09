'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Calculator } from 'lucide-react'
import SectionWrapper from '@/components/ui/SectionWrapper'
import Button from '@/components/ui/Button'
import Badge from '@/components/ui/Badge'
import AnimatedCounter from '@/components/ui/AnimatedCounter'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

export default function RevenueLeakCalculator() {
  const [missedCalls, setMissedCalls] = useState(20)
  const [avgJobValue, setAvgJobValue] = useState(800)
  const [closeRate, setCloseRate] = useState(40)

  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const monthlyLeak = Math.round((missedCalls * avgJobValue * closeRate) / 100)
  const annualLeak = monthlyLeak * 12

  return (
    <SectionWrapper id="calculator" className="bg-navy-900">
      <motion.div
        ref={ref}
        variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        {/* Header */}
        <div className="text-center mb-12">
          <motion.div variants={fadeUp}>
            <Badge className="mb-4">
              <Calculator className="w-3 h-3" />
              Revenue Leak Calculator
            </Badge>
          </motion.div>
          <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            How Much Are You{' '}
            <span className="text-gradient">Leaving on the Table?</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-slate-400 text-lg max-w-2xl mx-auto">
            Adjust the sliders below to see your estimated monthly revenue leak based on your
            current call volume and close rate.
          </motion.p>
        </div>

        <motion.div
          variants={fadeUp}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto"
        >
          {/* Inputs */}
          <div className="bg-navy-800 border border-navy-700 rounded-2xl p-8 space-y-8">
            {/* Missed calls */}
            <div>
              <div className="flex justify-between mb-3">
                <label className="text-sm font-medium text-slate-300">
                  Missed calls per month
                </label>
                <span className="text-cyan-400 font-bold">{missedCalls}</span>
              </div>
              <input
                type="range"
                min={1}
                max={100}
                value={missedCalls}
                onChange={(e) => setMissedCalls(Number(e.target.value))}
                className="w-full h-2 bg-navy-700 rounded-full appearance-none cursor-pointer accent-cyan-500"
              />
              <div className="flex justify-between text-xs text-slate-600 mt-1">
                <span>1</span>
                <span>100</span>
              </div>
            </div>

            {/* Avg job value */}
            <div>
              <div className="flex justify-between mb-3">
                <label className="text-sm font-medium text-slate-300">
                  Average job value
                </label>
                <span className="text-cyan-400 font-bold">${avgJobValue.toLocaleString()}</span>
              </div>
              <input
                type="range"
                min={200}
                max={5000}
                step={50}
                value={avgJobValue}
                onChange={(e) => setAvgJobValue(Number(e.target.value))}
                className="w-full h-2 bg-navy-700 rounded-full appearance-none cursor-pointer accent-cyan-500"
              />
              <div className="flex justify-between text-xs text-slate-600 mt-1">
                <span>$200</span>
                <span>$5,000</span>
              </div>
            </div>

            {/* Close rate */}
            <div>
              <div className="flex justify-between mb-3">
                <label className="text-sm font-medium text-slate-300">
                  Your close rate
                </label>
                <span className="text-cyan-400 font-bold">{closeRate}%</span>
              </div>
              <input
                type="range"
                min={5}
                max={90}
                step={5}
                value={closeRate}
                onChange={(e) => setCloseRate(Number(e.target.value))}
                className="w-full h-2 bg-navy-700 rounded-full appearance-none cursor-pointer accent-cyan-500"
              />
              <div className="flex justify-between text-xs text-slate-600 mt-1">
                <span>5%</span>
                <span>90%</span>
              </div>
            </div>
          </div>

          {/* Output */}
          <div className="flex flex-col gap-4">
            <div className="bg-navy-800 border border-cyan-500/30 rounded-2xl p-8 glow-cyan flex-1 flex flex-col justify-center">
              <p className="text-slate-400 text-sm mb-2">Estimated monthly revenue leak</p>
              <div className="text-5xl sm:text-6xl font-bold text-white mb-1">
                $<AnimatedCounter value={monthlyLeak} className="tabular-nums" />
              </div>
              <p className="text-cyan-400 text-sm font-medium">per month</p>

              <div className="mt-6 pt-6 border-t border-navy-700">
                <p className="text-slate-400 text-sm mb-1">That&apos;s</p>
                <div className="text-3xl font-bold text-slate-200">
                  $<AnimatedCounter value={annualLeak} className="tabular-nums" />
                </div>
                <p className="text-slate-500 text-sm">per year walking out your door</p>
              </div>
            </div>

            <div className="bg-navy-800 border border-navy-700 rounded-2xl p-6">
              <p className="text-slate-300 text-sm mb-4">
                Our systems typically recover <span className="text-cyan-400 font-semibold">40–70%</span> of
                this leaked revenue within the first 90 days.
              </p>
              <Button className="w-full" asChild>
                <a href="#contact">
                  Recover This Revenue
                  <ArrowRight className="w-4 h-4" />
                </a>
              </Button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </SectionWrapper>
  )
}
