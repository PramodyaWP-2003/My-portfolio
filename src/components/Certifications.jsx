import { BadgeCheck } from 'lucide-react'
import { certifications } from '../data'
import { Section, Link, Badge } from './ui'

export default function Certifications() {
  return (
    <Section id="learning" title="Certifications & learning">
      <ul className="grid gap-4 md:grid-cols-2">
        {certifications.map((c) => (
          <li key={c.title} className="flex items-start gap-4 rounded-xl border border-line bg-panel p-5">
            <BadgeCheck className="mt-1 shrink-0 text-accent" size={20} />
            <div className="flex-1">
              <h3 className="font-display font-semibold">{c.title}</h3>
              <p className="text-sm text-muted">{c.issuer}</p>
              <div className="mt-3 flex items-center gap-4"><Badge>{c.status}</Badge>{c.status === 'Completed' && <Link href={c.link}>Certificate</Link>}</div>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  )
}
