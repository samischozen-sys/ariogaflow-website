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

const PORTAL_ID = '246446597'
const FORM_ID = 'edb278f1-dd87-40d2-9b7d-282d92e92fa0'

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

  const { firstName, lastName, email, phone, company, monthlyRevenue, message } = result.data

  const fields: { name: string; value: string }[] = [
    { name: 'firstname', value: firstName },
    { name: 'lastname', value: lastName },
    { name: 'email', value: email },
    { name: 'phone', value: phone },
    { name: 'company', value: company },
    { name: 'monthly_revenue', value: monthlyRevenue },
  ]
  if (message) fields.push({ name: 'message', value: message })

  const hsRes = await fetch(
    `https://api.hsforms.com/submissions/v3/integration/submit/${PORTAL_ID}/${FORM_ID}`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        fields,
        context: {
          pageUri: req.headers.get('referer') ?? 'https://ariogaflow.com/contact',
          pageName: 'AriogaFlow — Book Free Audit',
        },
      }),
    }
  )

  if (!hsRes.ok) {
    const errorText = await hsRes.text()
    console.error('HubSpot submission error:', hsRes.status, errorText)
    return NextResponse.json({ error: 'Submission failed' }, { status: 502 })
  }

  return NextResponse.json({ success: true })
}
