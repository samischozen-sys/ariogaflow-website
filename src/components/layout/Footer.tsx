import Link from 'next/link'
import { Zap, Mail, Phone, MapPin } from 'lucide-react'
import { NAV_LINKS } from '@/lib/constants'

export default function Footer() {
  return (
    <footer className="bg-navy-900 border-t border-navy-700/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-cyan-500 flex items-center justify-center">
                <Zap className="w-4 h-4 text-white" strokeWidth={2.5} />
              </div>
              <span className="font-bold text-lg text-white tracking-tight">
                Arioga<span className="text-cyan-400">Flow</span>
              </span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              Done-for-you CRM &amp; automation systems that recover lost revenue for HVAC and plumbing companies.
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-sm uppercase tracking-widest">Navigation</h3>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-cyan-400 text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/contact" className="text-slate-400 hover:text-cyan-400 text-sm transition-colors">
                  Book Free Audit
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-sm uppercase tracking-widest">Contact</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:sam@ariogaflow.com"
                  className="flex items-center gap-2 text-slate-400 hover:text-cyan-400 text-sm transition-colors"
                >
                  <Mail className="w-4 h-4 shrink-0" />
                  sam@ariogaflow.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+13467745707"
                  className="flex items-center gap-2 text-slate-400 hover:text-cyan-400 text-sm transition-colors"
                >
                  <Phone className="w-4 h-4 shrink-0" />
                  (346) 774-5707
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-navy-700/50 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            &copy; {new Date().getFullYear()} AriogaFlow. All rights reserved.
          </p>
          <p className="text-slate-600 text-xs">
            CRM &amp; Automation for HVAC &amp; Plumbing Companies
          </p>
        </div>
      </div>
    </footer>
  )
}
