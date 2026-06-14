import Hero from '@/components/sections/Hero'
import RevenueLeakCalculator from '@/components/sections/RevenueLeakCalculator'
import RecoverySystems from '@/components/sections/RecoverySystems'
import CRMServices from '@/components/sections/CRMServices'
import HowItWorks from '@/components/sections/HowItWorks'
import RecoveryWorkflow from '@/components/sections/RecoveryWorkflow'
import FAQ from '@/components/sections/FAQ'
import CalendlyBookingSection from '@/components/sections/CalendlyBookingSection'
import ContactSection from '@/components/sections/ContactSection'

export default function HomePage() {
  return (
    <>
      <Hero />
      <RevenueLeakCalculator />
      <RecoverySystems />
      <CRMServices />
      <HowItWorks />
      <RecoveryWorkflow />
      <FAQ />
      <CalendlyBookingSection />
      <ContactSection />
    </>
  )
}
