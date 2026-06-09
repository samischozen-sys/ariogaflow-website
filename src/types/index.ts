export interface ContactFormData {
  firstName: string
  lastName: string
  email: string
  phone: string
  company: string
  monthlyRevenue: string
  message?: string
}

export interface RecoverySystem {
  id: number
  name: string
  description: string
  stat: string
  statLabel: string
  icon: string
}

export interface Service {
  name: string
  description: string
  icon: string
}

export interface FAQItem {
  question: string
  answer: string
}

export interface WorkflowStep {
  step: number
  label: string
  detail: string
  icon: string
}
