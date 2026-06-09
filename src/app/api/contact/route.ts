import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'

const schema = z.object({
  firstName: z.string().min(2),
  lastName: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(10),
  company: z.string().min(2),
  monthlyRevenue: z.string().min(1),
  message: z.string().optional(),
})

export async function POST(req: NextRequest) {
  let body: unknown

  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 })
  }

  const result = schema.safeParse(body)
  if (!result.success) {
    return NextResponse.json({ error: 'Validation failed', issues: result.error.issues }, { status: 422 })
  }

  const data = result.data

  const webhookUrl = process.env.CONTACT_WEBHOOK_URL
  if (webhookUrl) {
    try {
      await fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          first_name: data.firstName,
          last_name: data.lastName,
          email: data.email,
          phone: data.phone,
          company: data.company,
          monthly_revenue: data.monthlyRevenue,
          message: data.message ?? '',
          source: 'AriogaFlow Website',
          submitted_at: new Date().toISOString(),
        }),
      })
    } catch (err) {
      console.error('Webhook delivery failed:', err)
    }
  }

  return NextResponse.json({ success: true })
}
