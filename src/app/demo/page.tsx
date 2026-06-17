import type { Metadata } from 'next'
import DemoDashboard from './DemoDashboard'

export const metadata: Metadata = {
  title: 'Live Demo | AriogaFlow Revenue Recovery',
  description:
    'See AriogaFlow\'s Revenue Recovery System in action — missed call automation, estimate follow-up, and customer reactivation for HVAC and plumbing companies.',
  robots: { index: false, follow: false },
}

export default function DemoPage() {
  return <DemoDashboard />
}
