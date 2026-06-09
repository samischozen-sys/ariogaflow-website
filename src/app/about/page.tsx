import type { Metadata } from 'next'
import Link from 'next/link'
import { Target, Zap, Shield, ArrowRight } from 'lucide-react'
import SectionWrapper from '@/components/ui/SectionWrapper'
import Badge from '@/components/ui/Badge'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'About | AriogaFlow',
  description:
    'AriogaFlow is a CRM & Automation Agency built exclusively for HVAC and plumbing companies. We recover the revenue you\'re already earning but losing.',
}

const values = [
  {
    icon: Target,
    title: 'Outcome-Obsessed',
    description:
      'We measure our success by your recovered revenue — not by hours billed or dashboards built. If your systems aren\'t producing, we fix them.',
  },
  {
    icon: Zap,
    title: 'Fast Execution',
    description:
      'Every day without your systems running is money lost. We move fast — most clients are fully live within 48–72 hours of saying yes.',
  },
  {
    icon: Shield,
    title: 'Built to Last',
    description:
      'We build systems that run without you. No fragile workarounds, no manual steps — just reliable automation that scales as you grow.',
  },
]

export default function AboutPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <SectionWrapper className="bg-navy-950">
        <div className="max-w-3xl mx-auto text-center">
          <Badge className="mb-6">About AriogaFlow</Badge>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            We Built This Because{' '}
            <span className="text-gradient">Great Trades Companies Deserve Better</span>
          </h1>
          <p className="text-slate-400 text-lg leading-relaxed">
            HVAC and plumbing companies work incredibly hard — long hours, physical work, constant
            demand. But most are running on outdated systems that quietly bleed revenue every single
            day. Missed calls go unanswered. Estimates go cold. Past customers are forgotten.
          </p>
          <p className="text-slate-400 text-lg leading-relaxed mt-4">
            AriogaFlow was built to fix that — with done-for-you automation systems that recover
            revenue you already earned, on autopilot.
          </p>
        </div>
      </SectionWrapper>

      {/* Mission */}
      <SectionWrapper className="bg-navy-900">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <Badge className="mb-4">Our Mission</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold mb-5">
              Recover Every Dollar You&apos;ve{' '}
              <span className="text-gradient">Already Earned</span>
            </h2>
            <p className="text-slate-400 leading-relaxed mb-4">
              The average HVAC or plumbing company loses $3,000–$8,000 per month in revenue that
              was already within reach — missed calls, cold estimates, and dormant customers who
              just needed a follow-up.
            </p>
            <p className="text-slate-400 leading-relaxed">
              Our mission is to make revenue recovery automatic. We build the systems, we manage
              them, and we optimize them month over month — so you can focus on running your
              business.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { value: '$47K+', label: 'Avg annual recovery per client' },
              { value: '48hrs', label: 'Average setup time' },
              { value: '3×', label: 'Average close rate increase' },
              { value: '100%', label: 'HVAC & Plumbing focused' },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-navy-800 border border-navy-700 rounded-xl p-5 text-center"
              >
                <div className="text-3xl font-bold text-cyan-400 mb-1">{stat.value}</div>
                <div className="text-slate-400 text-xs leading-tight">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Values */}
      <SectionWrapper className="bg-navy-950">
        <div className="text-center mb-12">
          <Badge className="mb-4">Our Values</Badge>
          <h2 className="text-3xl sm:text-4xl font-bold">
            How We <span className="text-gradient">Operate</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {values.map(({ icon: Icon, title, description }) => (
            <Card key={title} glow className="flex flex-col gap-4">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center">
                <Icon className="w-6 h-6 text-cyan-400" />
              </div>
              <h3 className="text-lg font-bold text-white">{title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{description}</p>
            </Card>
          ))}
        </div>
      </SectionWrapper>

      {/* CTA */}
      <SectionWrapper className="bg-navy-900">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Ready to Stop the{' '}
            <span className="text-gradient">Revenue Leaks?</span>
          </h2>
          <p className="text-slate-400 text-lg mb-8">
            Book a free 30-minute Revenue Recovery Audit. We&apos;ll show you exactly what we&apos;d
            build and how much you can expect to recover.
          </p>
          <Button size="lg" asChild>
            <Link href="/contact">
              Book Your Free Audit
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </SectionWrapper>
    </div>
  )
}
