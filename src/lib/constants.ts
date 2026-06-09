import type { FAQItem, RecoverySystem, Service, WorkflowStep } from '@/types'

export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

export const RECOVERY_SYSTEMS: RecoverySystem[] = [
  {
    id: 1,
    name: 'Missed Call Recovery',
    description:
      'Every missed call is a missed job. Our automated text-back system reaches out within 2 minutes — before they call your competitor.',
    stat: '67%',
    statLabel: 'of callers never call back',
    icon: 'PhoneOff',
  },
  {
    id: 2,
    name: 'Estimate Closing Automation',
    description:
      'Stop sending estimates and hoping. Automated follow-up sequences keep you top of mind and triple your close rate.',
    stat: '3×',
    statLabel: 'higher close rate with follow-up',
    icon: 'FileText',
  },
  {
    id: 3,
    name: 'Customer Reactivation',
    description:
      'Your past customers already trust you. Automated win-back campaigns turn cold leads into repeat jobs without any cold calling.',
    stat: '5×',
    statLabel: 'cheaper than acquiring new customers',
    icon: 'RefreshCw',
  },
  {
    id: 4,
    name: 'Review & Referral Automation',
    description:
      'Happy customers become your best salespeople. Automated review requests and referral prompts run after every completed job.',
    stat: '92%',
    statLabel: 'of people trust online reviews',
    icon: 'Star',
  },
]

export const SERVICES: Service[] = [
  {
    name: 'GoHighLevel CRM Setup',
    description: 'Full pipeline build, custom to your HVAC or plumbing workflow.',
    icon: 'Database',
  },
  {
    name: 'Missed Call Text-Back',
    description: 'Automated SMS response within 2 minutes of every missed call.',
    icon: 'MessageSquare',
  },
  {
    name: 'Estimate Follow-Up Sequences',
    description: 'Multi-touch email and SMS campaigns to close open estimates.',
    icon: 'Send',
  },
  {
    name: 'Win-Back Campaigns',
    description: 'Re-engage past customers with seasonal and service-based offers.',
    icon: 'Users',
  },
  {
    name: 'Review Request Automation',
    description: 'Auto-triggered Google review requests after every closed job.',
    icon: 'Star',
  },
  {
    name: 'Referral Program Setup',
    description: 'Systematized referral prompts that turn customers into advocates.',
    icon: 'Share2',
  },
]

export const HOW_IT_WORKS_STEPS = [
  {
    step: 1,
    title: 'Revenue Recovery Audit',
    description:
      'We analyze your current call data, open estimates, and customer database to find exactly where you\'re leaking money.',
    icon: 'Search',
  },
  {
    step: 2,
    title: 'Custom System Build',
    description:
      'We build and integrate your complete automation stack inside GoHighLevel — configured specifically for your business.',
    icon: 'Settings',
  },
  {
    step: 3,
    title: 'Revenue Flows In',
    description:
      'Your automated recovery systems run 24/7 without you lifting a finger. We monitor and optimize month over month.',
    icon: 'TrendingUp',
  },
]

export const WORKFLOW_STEPS: WorkflowStep[] = [
  { step: 1, label: 'Missed Call', detail: 'Customer calls, no answer', icon: 'PhoneOff' },
  { step: 2, label: 'SMS Sent', detail: 'Auto-text within 2 minutes', icon: 'MessageSquare' },
  { step: 3, label: 'Link Clicked', detail: 'Customer clicks booking link', icon: 'ExternalLink' },
  { step: 4, label: 'Booking Created', detail: 'Appointment scheduled automatically', icon: 'Calendar' },
  { step: 5, label: 'Job Closed', detail: 'Revenue recovered', icon: 'CheckCircle' },
]

export const FAQ_ITEMS: FAQItem[] = [
  {
    question: 'What industries do you serve?',
    answer:
      'We specialize exclusively in HVAC and plumbing companies. Our systems are built around the specific workflows, seasonality, and customer behavior of home service businesses — not generic CRM setups.',
  },
  {
    question: 'How long does setup take?',
    answer:
      'Most clients are fully operational within 48–72 hours of onboarding. We handle the entire setup — you just answer a few questions about your business and approve the final build.',
  },
  {
    question: 'Do I need to change my current software?',
    answer:
      'Not necessarily. Our systems run inside GoHighLevel, which can integrate with most scheduling and dispatch tools. We\'ll assess your current stack in the audit and tell you exactly what\'s needed.',
  },
  {
    question: 'What CRM do you use?',
    answer:
      'We build everything inside GoHighLevel — the most powerful CRM and automation platform available for home service businesses. We manage it for you, so you don\'t need to learn any new software.',
  },
  {
    question: 'How much revenue can I expect to recover?',
    answer:
      'It depends on your current volume, but the average HVAC or plumbing company recovers $3,000–$8,000 per month in previously lost revenue. Some clients see significantly more. The Revenue Leak Calculator on this page gives you a personalized estimate.',
  },
  {
    question: 'Is there a contract?',
    answer:
      'We offer month-to-month agreements. We\'re confident in our results, so we don\'t need to lock you in. Most clients stay because the systems pay for themselves many times over.',
  },
  {
    question: 'What if I\'m not tech-savvy?',
    answer:
      'That\'s exactly why we exist. You don\'t touch anything technical. We build it, manage it, and optimize it. You just receive the bookings and close the jobs.',
  },
  {
    question: 'How do I get started?',
    answer:
      'Book a free Revenue Recovery Audit using the form on this page. It\'s a 30-minute call where we identify the specific revenue leaks in your business and show you exactly what we\'d build.',
  },
]

export const HERO_STATS = [
  { label: 'Avg Annual Recovery', value: '$47K+' },
  { label: 'Setup Time', value: '48 hrs' },
  { label: 'Close Rate Increase', value: '3×' },
]

export const REVENUE_RANGES = [
  { label: 'Under $20K/month', value: '<20k' },
  { label: '$20K – $50K/month', value: '20k-50k' },
  { label: '$50K – $100K/month', value: '50k-100k' },
  { label: '$100K+/month', value: '100k+' },
]
