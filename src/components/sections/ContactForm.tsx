'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { motion } from 'framer-motion'
import { Send, CheckCircle, Loader2 } from 'lucide-react'
import Button from '@/components/ui/Button'
import { REVENUE_RANGES } from '@/lib/constants'
import type { ContactFormData } from '@/types'

const schema = z.object({
  firstName: z.string().min(2, 'First name is required'),
  lastName: z.string().min(2, 'Last name is required'),
  email: z.string().email('Enter a valid email'),
  phone: z.string().min(10, 'Enter a valid phone number'),
  company: z.string().min(2, 'Company name is required'),
  monthlyRevenue: z.string().min(1, 'Please select your revenue range'),
  message: z.string().optional(),
})

type FormValues = z.infer<typeof schema>

function InputField({
  label,
  error,
  children,
}: {
  label: string
  error?: string
  children: React.ReactNode
}) {
  return (
    <div>
      <label className="block text-sm font-medium text-slate-300 mb-1.5">{label}</label>
      {children}
      {error && <p className="mt-1 text-xs text-red-400">{error}</p>}
    </div>
  )
}

const inputClass =
  'w-full bg-navy-800 border border-navy-700 rounded-lg px-4 py-3 text-white text-sm placeholder-slate-500 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/30 transition-colors'

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [serverError, setServerError] = useState('')

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({ resolver: zodResolver(schema) })

  const onSubmit = async (data: FormValues) => {
    setSubmitting(true)
    setServerError('')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (!res.ok) throw new Error('Submission failed')
      setSubmitted(true)
    } catch {
      setServerError('Something went wrong. Please try again or email us directly.')
    } finally {
      setSubmitting(false)
    }
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-16 gap-6 text-center">
        <div className="w-16 h-16 rounded-full bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center">
          <CheckCircle className="w-8 h-8 text-cyan-400" />
        </div>
        <div>
          <h3 className="text-2xl font-bold text-white mb-2">You&apos;re booked in!</h3>
          <p className="text-slate-400 max-w-md">
            We&apos;ll review your info and reach out within 24 hours to schedule your free Revenue
            Recovery Audit. Check your inbox.
          </p>
        </div>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      {/* Name row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <InputField label="First Name" error={errors.firstName?.message}>
          <input
            {...register('firstName')}
            placeholder="John"
            className={inputClass}
          />
        </InputField>
        <InputField label="Last Name" error={errors.lastName?.message}>
          <input
            {...register('lastName')}
            placeholder="Smith"
            className={inputClass}
          />
        </InputField>
      </div>

      {/* Email + Phone */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <InputField label="Email Address" error={errors.email?.message}>
          <input
            {...register('email')}
            type="email"
            placeholder="john@smithhvac.com"
            className={inputClass}
          />
        </InputField>
        <InputField label="Phone Number" error={errors.phone?.message}>
          <input
            {...register('phone')}
            type="tel"
            placeholder="(555) 000-0000"
            className={inputClass}
          />
        </InputField>
      </div>

      {/* Company */}
      <InputField label="Company Name" error={errors.company?.message}>
        <input
          {...register('company')}
          placeholder="Smith Heating & Cooling"
          className={inputClass}
        />
      </InputField>

      {/* Revenue range */}
      <InputField label="Monthly Revenue" error={errors.monthlyRevenue?.message}>
        <select {...register('monthlyRevenue')} className={inputClass}>
          <option value="">Select your range…</option>
          {REVENUE_RANGES.map((r) => (
            <option key={r.value} value={r.value}>
              {r.label}
            </option>
          ))}
        </select>
      </InputField>

      {/* Message */}
      <InputField label="Message (optional)" error={errors.message?.message}>
        <textarea
          {...register('message')}
          rows={3}
          placeholder="Anything specific you'd like us to know before the call?"
          className={inputClass}
        />
      </InputField>

      {serverError && (
        <p className="text-red-400 text-sm">{serverError}</p>
      )}

      <Button
        type="submit"
        size="lg"
        className="w-full"
        disabled={submitting}
      >
        {submitting ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            Sending…
          </>
        ) : (
          <>
            Book My Free Revenue Recovery Audit
            <Send className="w-4 h-4" />
          </>
        )}
      </Button>

      <p className="text-center text-xs text-slate-600">
        No spam. No pressure. Just a 30-minute call to find your leaks.
      </p>
    </form>
  )
}
