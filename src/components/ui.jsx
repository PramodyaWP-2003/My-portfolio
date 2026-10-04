import { ExternalLink } from 'lucide-react'
import Reveal from './Reveal'

export function Section({ id, title, intro, children }) {
  return (
    <section id={id} className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
      <Reveal>
        <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h2>
        {intro && <p className="mt-3 max-w-2xl text-muted">{intro}</p>}
        <div className="mt-10">{children}</div>
      </Reveal>
    </section>
  )
}

// Renders a real link when href exists, otherwise a clearly disabled placeholder (no broken links).
export function Link({ href, icon: Icon = ExternalLink, children, className = '' }) {
  const base = `inline-flex items-center gap-2 text-sm font-medium ${className}`
  if (!href)
    return <span aria-disabled="true" title="Link coming soon" className={`${base} cursor-not-allowed text-muted/60`}><Icon size={16} />{children} (soon)</span>
  return <a href={href} target="_blank" rel="noopener noreferrer" className={`${base} text-accent hover:text-white transition-colors`}><Icon size={16} />{children}</a>
}

const tone = { Completed: 'text-ok border-ok/40', 'In progress': 'text-warn border-warn/40', Planned: 'text-muted border-line' }
export const statusTone = (s) => tone[s] || 'text-accent border-accent/40'
export function Badge({ children }) {
  return <span className={`rounded-full border px-2.5 py-0.5 text-xs font-medium ${statusTone(children)}`}>{children}</span>
}
