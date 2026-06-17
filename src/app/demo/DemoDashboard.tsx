'use client'

import { motion } from 'framer-motion'
import {
  DollarSign, Phone, FileText, Users, TrendingUp,
  MessageSquare, CheckCircle, Clock, Send, Calendar,
  ChevronRight, PhoneOff, Zap,
} from 'lucide-react'

// ── Demo data ─────────────────────────────────────────────────────────────────

const weeklyData = [
  { label: 'Wk 1', value: 1850 },
  { label: 'Wk 2', value: 2400 },
  { label: 'Wk 3', value: 1600 },
  { label: 'Wk 4', value: 3100 },
  { label: 'Wk 5', value: 2750 },
  { label: 'Wk 6', value: 4200 },
  { label: 'Wk 7', value: 3900 },
  { label: 'Wk 8', value: 4800 },
]

const leads = [
  { name: 'Mike Johnson',      initials: 'MJ', type: 'Missed Call',        tc: 'violet',  status: 'Job Booked',     sd: 'green', value: 850 },
  { name: 'Sarah Williams',    initials: 'SW', type: 'Estimate Follow-Up', tc: 'blue',    status: 'Accepted',       sd: 'green', value: 4500 },
  { name: 'Robert Davis',      initials: 'RD', type: 'Reactivation',       tc: 'emerald', status: 'Booked',         sd: 'green', value: 650 },
  { name: 'Jennifer Martinez', initials: 'JM', type: 'Missed Call',        tc: 'violet',  status: 'Replied',        sd: 'cyan',  value: null },
  { name: 'Tom Anderson',      initials: 'TA', type: 'Estimate Follow-Up', tc: 'blue',    status: 'Day 3 Sent',     sd: 'amber', value: 2800 },
  { name: 'Lisa Thompson',     initials: 'LT', type: 'Reactivation',       tc: 'emerald', status: 'Appt Set',       sd: 'cyan',  value: 450 },
  { name: 'David Brown',       initials: 'DB', type: 'Missed Call',        tc: 'violet',  status: 'Job Complete',   sd: 'green', value: 1200 },
]

const breakdown = [
  { label: 'Estimate Follow-Up',    value: '$6,300', pct: 51, color: 'bg-blue-500' },
  { label: 'Missed Call Recovery',  value: '$4,250', pct: 34, color: 'bg-violet-500' },
  { label: 'Customer Reactivation', value: '$1,900', pct: 15, color: 'bg-emerald-500' },
]

// ── Shared micro-components ───────────────────────────────────────────────────

function KPICard({ icon: Icon, label, value, sub, iconBg }: {
  icon: React.ElementType; label: string; value: string; sub: string; iconBg: string
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-navy-800 border border-navy-700 rounded-2xl p-5 sm:p-6"
    >
      <div className={`w-10 h-10 rounded-xl ${iconBg} flex items-center justify-center mb-4`}>
        <Icon className="w-5 h-5 text-white" />
      </div>
      <div className="text-2xl sm:text-3xl font-bold text-white mb-1">{value}</div>
      <div className="text-sm font-medium text-slate-200 mb-1">{label}</div>
      <div className="text-xs text-slate-500">{sub}</div>
    </motion.div>
  )
}

function Step({ icon: Icon, label, sub, active, isLast }: {
  icon: React.ElementType; label: string; sub?: string; active?: boolean; isLast?: boolean
}) {
  return (
    <div className="flex gap-3">
      <div className="flex flex-col items-center shrink-0">
        <div className={`w-8 h-8 rounded-full flex items-center justify-center border-2 ${
          active ? 'border-cyan-500 bg-cyan-500/15 text-cyan-400' : 'border-navy-600 bg-navy-700 text-slate-500'
        }`}>
          <Icon className="w-3.5 h-3.5" />
        </div>
        {!isLast && <div className="w-px bg-navy-600 flex-1 min-h-[18px] mt-1" />}
      </div>
      <div className="pb-3.5 min-h-[32px]">
        <div className={`text-xs font-semibold leading-tight ${active ? 'text-white' : 'text-slate-500'}`}>{label}</div>
        {sub && <div className="text-[11px] text-slate-600 mt-0.5">{sub}</div>}
      </div>
    </div>
  )
}

function Bubble({ text, from, time }: { text: string; from: 'bot' | 'user'; time: string }) {
  return (
    <div className={`flex ${from === 'user' ? 'justify-end' : ''}`}>
      <div className={`max-w-[85%] px-3 py-2 rounded-xl text-[11px] leading-relaxed ${
        from === 'bot'
          ? 'bg-navy-700 border border-navy-600 text-slate-300 rounded-tl-sm'
          : 'bg-cyan-500/20 border border-cyan-500/30 text-cyan-100 rounded-tr-sm'
      }`}>
        {text}
        <div className="text-[10px] text-slate-600 mt-1 text-right">{time}</div>
      </div>
    </div>
  )
}

const typeClass: Record<string, string> = {
  violet:  'bg-violet-500/10 border-violet-500/20 text-violet-400',
  blue:    'bg-blue-500/10 border-blue-500/20 text-blue-400',
  emerald: 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400',
}
const dotClass: Record<string, string> = {
  green: 'bg-emerald-400',
  cyan:  'bg-cyan-400 animate-pulse',
  amber: 'bg-amber-400 animate-pulse',
}

// ── Main export ───────────────────────────────────────────────────────────────

export default function DemoDashboard() {
  const maxVal = Math.max(...weeklyData.map(d => d.value))

  return (
    <div className="min-h-screen bg-navy-950 pt-16">

      {/* Demo banner */}
      <div className="bg-amber-500/10 border-b border-amber-500/20 py-2 px-4 text-center">
        <span className="text-xs font-semibold text-amber-400 tracking-widest uppercase">
          Demo Mode · Smith Heating &amp; Cooling · All data is illustrative
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">

        {/* ── Page header ──────────────────────────────────────────────── */}
        <div className="flex flex-col sm:flex-row sm:items-end gap-4 justify-between">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wider">System Active</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold text-white">Revenue Recovery Dashboard</h1>
            <p className="text-slate-400 text-sm mt-1">Smith Heating &amp; Cooling · June 2025 · 30-day window</p>
          </div>
          <div className="bg-navy-800 border border-navy-700 rounded-xl px-5 py-3 text-right">
            <p className="text-xs text-slate-500 mb-1">Total Recovered This Month</p>
            <p className="text-3xl font-bold text-gradient">$12,450</p>
            <div className="flex items-center justify-end gap-1 mt-1">
              <TrendingUp className="w-3 h-3 text-emerald-400" />
              <span className="text-xs text-emerald-400 font-semibold">+23% vs last month</span>
            </div>
          </div>
        </div>

        {/* ── KPI cards ────────────────────────────────────────────────── */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <KPICard icon={DollarSign} label="Revenue Recovered This Month" value="$12,450" sub="↑ $2,350 vs last month"  iconBg="bg-cyan-500"    />
          <KPICard icon={Phone}      label="Missed Calls Recovered"        value="14"      sub="Avg response: 90 sec"    iconBg="bg-violet-500" />
          <KPICard icon={FileText}   label="Estimates Recovered"           value="7"       sub="$28,400 in pipeline"     iconBg="bg-blue-500"   />
          <KPICard icon={Users}      label="Customers Reactivated"         value="11"      sub="From 500-person list"    iconBg="bg-emerald-600"/>
        </div>

        {/* ── Revenue chart + breakdown ─────────────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* Bar chart */}
          <div className="lg:col-span-2 bg-navy-800 border border-navy-700 rounded-2xl p-6">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-sm font-semibold text-white">Revenue Recovered by Week</h2>
                <p className="text-xs text-slate-500 mt-0.5">Missed calls + estimates + reactivations</p>
              </div>
              <span className="text-xs text-cyan-400 font-semibold bg-cyan-500/10 border border-cyan-500/20 px-2.5 py-1 rounded-full">
                ↑ Trending Up
              </span>
            </div>
            <div className="flex items-end gap-2" style={{ height: '148px' }}>
              {weeklyData.map((d, i) => {
                const hPct = (d.value / maxVal) * 100
                const cur  = i === weeklyData.length - 1
                return (
                  <div key={d.label} className="flex-1 flex flex-col items-center gap-1.5">
                    <span className="text-[10px] text-slate-500">${(d.value / 1000).toFixed(1)}k</span>
                    <div className="w-full flex items-end" style={{ height: '104px' }}>
                      <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: `${hPct}%` }}
                        transition={{ duration: 0.6, delay: i * 0.06, ease: 'easeOut' }}
                        className={`w-full rounded-t-md ${cur ? 'bg-cyan-500 shadow-lg shadow-cyan-500/30' : 'bg-navy-600'}`}
                      />
                    </div>
                    <span className={`text-[10px] font-semibold ${cur ? 'text-cyan-400' : 'text-slate-600'}`}>{d.label}</span>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Breakdown */}
          <div className="bg-navy-800 border border-navy-700 rounded-2xl p-6">
            <h2 className="text-sm font-semibold text-white mb-5">Revenue Breakdown</h2>
            <div className="space-y-4">
              {breakdown.map(b => (
                <div key={b.label}>
                  <div className="flex justify-between text-xs mb-1.5">
                    <span className="text-slate-400">{b.label}</span>
                    <span className="text-white font-semibold">{b.value}</span>
                  </div>
                  <div className="h-1.5 bg-navy-700 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${b.pct}%` }}
                      transition={{ duration: 0.7, ease: 'easeOut' }}
                      className={`h-full ${b.color} rounded-full`}
                    />
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 pt-5 border-t border-navy-700">
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">At a Glance</p>
              <div className="space-y-2">
                {[
                  ['Avg job value',    '$889'],
                  ['Auto-texts sent',  '47'],
                  ['Reply rate',       '68%'],
                  ['Conversion rate',  '42%'],
                ].map(([k, v]) => (
                  <div key={k} className="flex justify-between text-xs">
                    <span className="text-slate-500">{k}</span>
                    <span className="text-slate-200 font-medium">{v}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ── Section header ────────────────────────────────────────────── */}
        <div>
          <h2 className="text-xl font-bold text-white mb-1">Recovery Systems</h2>
          <p className="text-sm text-slate-500">Three automated pipelines running 24/7 for Smith Heating &amp; Cooling</p>
        </div>

        {/* ── Three workflow cards ──────────────────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* 1. Missed Call Recovery */}
          <div className="bg-navy-800 border border-navy-700 rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-9 h-9 rounded-xl bg-violet-500/20 border border-violet-500/30 flex items-center justify-center">
                <PhoneOff className="w-4 h-4 text-violet-400" />
              </div>
              <div>
                <p className="text-sm font-semibold text-white">Missed Call Recovery</p>
                <p className="text-xs text-violet-400">14 recovered · $4,250</p>
              </div>
            </div>
            <div className="mb-5">
              <Step icon={PhoneOff}       label="Missed Call"             sub="Trigger fires instantly"    />
              <Step icon={Zap}            label="Automatic Text Sent"     sub="Within 90 seconds"  active />
              <Step icon={MessageSquare}  label="Customer Replied"        sub="68% reply rate"     active />
              <Step icon={Calendar}       label="Appointment Scheduled"   sub="Via SMS link"       active />
              <Step icon={DollarSign}     label="$850 Job Booked"         sub="Avg value per recovery" active isLast />
            </div>
            <div className="bg-navy-900 border border-navy-700 rounded-xl p-3 space-y-2">
              <p className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider mb-3">Live SMS Thread</p>
              <Bubble from="bot"  text="Hi Mike! This is Smith Heating & Cooling — we missed your call. What can we help with?" time="2:14 PM" />
              <Bubble from="user" text="My AC stopped working, need someone ASAP" time="2:16 PM" />
              <Bubble from="bot"  text="Got it! We have openings today at 4pm or tomorrow at 10am. Which works?" time="2:16 PM" />
              <Bubble from="user" text="Today at 4 works great" time="2:17 PM" />
              <Bubble from="bot"  text="You're booked! Tech arrives 4–6pm today. Reply CANCEL to reschedule. 🔧" time="2:17 PM" />
            </div>
          </div>

          {/* 2. Estimate Follow-Up */}
          <div className="bg-navy-800 border border-navy-700 rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-9 h-9 rounded-xl bg-blue-500/20 border border-blue-500/30 flex items-center justify-center">
                <FileText className="w-4 h-4 text-blue-400" />
              </div>
              <div>
                <p className="text-sm font-semibold text-white">Estimate Follow-Up</p>
                <p className="text-xs text-blue-400">7 recovered · $6,300</p>
              </div>
            </div>
            <div className="mb-5">
              <Step icon={FileText}     label="Estimate Sent"       sub="$4,500 HVAC system"    />
              <Step icon={Clock}        label="No Response"         sub="3 days pass"            />
              <Step icon={Send}         label="Day 3 Follow-Up"     sub="Friendly check-in" active />
              <Step icon={Send}         label="Day 7 Follow-Up"     sub="Final reminder"    active />
              <Step icon={CheckCircle}  label="Customer Accepted"   sub="Estimate signed"   active />
              <Step icon={DollarSign}   label="$4,500 Revenue"      sub="Job scheduled"     active isLast />
            </div>
            <div className="bg-navy-900 border border-navy-700 rounded-xl p-3 space-y-2.5">
              <p className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider mb-3">Follow-Up Sequence</p>
              <div className="border border-navy-600 rounded-lg p-2.5">
                <p className="text-[10px] font-semibold text-blue-400 mb-1">Day 3 Message</p>
                <p className="text-[11px] text-slate-300 leading-relaxed">Hi Sarah! Just checking in on the HVAC estimate we sent. Any questions we can answer?</p>
              </div>
              <div className="border border-navy-600 rounded-lg p-2.5">
                <p className="text-[10px] font-semibold text-blue-400 mb-1">Day 7 Message</p>
                <p className="text-[11px] text-slate-300 leading-relaxed">Hi Sarah, last follow-up on your HVAC estimate. We have an install slot next week — want to lock in your price?</p>
              </div>
              <div className="border border-cyan-500/30 bg-cyan-500/5 rounded-lg p-2.5 flex items-start gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                <p className="text-[11px] text-slate-300 leading-relaxed">
                  &ldquo;Yes! Let&apos;s do it. Next Tuesday works.&rdquo; &rarr;{' '}
                  <span className="text-emerald-400 font-semibold">$4,500 booked</span>
                </p>
              </div>
            </div>
          </div>

          {/* 3. Customer Reactivation */}
          <div className="bg-navy-800 border border-navy-700 rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-9 h-9 rounded-xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center">
                <Users className="w-4 h-4 text-emerald-400" />
              </div>
              <div>
                <p className="text-sm font-semibold text-white">Customer Reactivation</p>
                <p className="text-xs text-emerald-400">11 reactivated · $1,900</p>
              </div>
            </div>
            <div className="mb-5">
              <Step icon={Users}         label="500 Previous Customers"    sub="Database imported"      />
              <Step icon={Send}          label="Campaign Sent"             sub="Personalized texts" active />
              <Step icon={MessageSquare} label="34 Responses"              sub="6.8% response rate" active />
              <Step icon={Calendar}      label="12 Booked Appointments"    sub="Via SMS"            active />
              <Step icon={DollarSign}    label="$2,500 Revenue"            sub="11 completed jobs"  active isLast />
            </div>
            <div className="bg-navy-900 border border-navy-700 rounded-xl p-3">
              <p className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider mb-3">Campaign Results</p>
              <div className="border border-navy-600 rounded-lg p-2.5 mb-3">
                <p className="text-[10px] font-semibold text-emerald-400 mb-1">Reactivation Message</p>
                <p className="text-[11px] text-slate-300 leading-relaxed">
                  Hi Robert! It&apos;s been a while since your last service at Smith H&amp;C. Summer is coming — want to get your AC tuned up before the heat hits? Reply YES for a quick quote!
                </p>
              </div>
              <div className="grid grid-cols-3 gap-2 text-center">
                <div className="bg-navy-800 rounded-lg p-2.5">
                  <p className="text-sm font-bold text-white">500</p>
                  <p className="text-[10px] text-slate-500">Sent</p>
                </div>
                <div className="bg-navy-800 rounded-lg p-2.5">
                  <p className="text-sm font-bold text-cyan-400">34</p>
                  <p className="text-[10px] text-slate-500">Replied</p>
                </div>
                <div className="bg-navy-800 rounded-lg p-2.5">
                  <p className="text-sm font-bold text-emerald-400">12</p>
                  <p className="text-[10px] text-slate-500">Booked</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Lead pipeline table ───────────────────────────────────────── */}
        <div className="bg-navy-800 border border-navy-700 rounded-2xl overflow-hidden">
          <div className="px-6 py-4 border-b border-navy-700 flex items-center justify-between">
            <div>
              <h2 className="text-sm font-semibold text-white">Live Lead Pipeline</h2>
              <p className="text-xs text-slate-500 mt-0.5">All active and recently recovered leads</p>
            </div>
            <span className="flex items-center gap-1.5 text-xs font-semibold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              7 Active
            </span>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-navy-700">
                  {(['Customer', 'Type', 'Status', 'Value'] as const).map((h, i) => (
                    <th key={h} className={`py-3 px-4 text-xs font-semibold text-slate-500 uppercase tracking-wider ${i === 3 ? 'text-right' : 'text-left'}`}>
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-navy-700">
                {leads.map((lead, i) => (
                  <tr key={i} className="hover:bg-navy-900/40 transition-colors">
                    <td className="px-4 py-3.5">
                      <div className="flex items-center gap-2.5">
                        <div className="w-7 h-7 rounded-full bg-navy-700 border border-navy-600 flex items-center justify-center text-[10px] font-bold text-slate-300 shrink-0">
                          {lead.initials}
                        </div>
                        <span className="text-sm text-white font-medium">{lead.name}</span>
                      </div>
                    </td>
                    <td className="px-4 py-3.5">
                      <span className={`text-xs px-2.5 py-1 rounded-full font-semibold border ${typeClass[lead.tc]}`}>
                        {lead.type}
                      </span>
                    </td>
                    <td className="px-4 py-3.5">
                      <div className="flex items-center gap-2">
                        <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${dotClass[lead.sd]}`} />
                        <span className="text-xs text-slate-300">{lead.status}</span>
                      </div>
                    </td>
                    <td className="px-4 py-3.5 text-right">
                      <span className={`text-sm font-semibold ${lead.value ? 'text-white' : 'text-slate-600'}`}>
                        {lead.value ? `$${lead.value.toLocaleString()}` : '—'}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* ── Bottom CTA ────────────────────────────────────────────────── */}
        <div className="text-center bg-navy-800 border border-cyan-500/20 rounded-2xl p-8 glow-cyan-sm">
          <p className="text-xs font-semibold text-cyan-400 uppercase tracking-widest mb-3">Want This For Your Business?</p>
          <h2 className="text-2xl font-bold text-white mb-2">
            See Your <span className="text-gradient">Real Revenue Leaks</span>
          </h2>
          <p className="text-slate-400 text-sm mb-6 max-w-md mx-auto">
            Book a free 30-minute audit. We&apos;ll run the numbers on your actual call data, open estimates, and customer list.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold px-8 py-3.5 rounded-lg transition-all hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
          >
            Book My Free Audit <ChevronRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </div>
  )
}
