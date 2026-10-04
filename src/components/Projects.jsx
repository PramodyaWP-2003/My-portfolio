import { Github, ExternalLink } from 'lucide-react'
import { projects } from '../data'
import { Section, Link, Badge } from './ui'

export default function Projects() {
  return (
    <Section id="projects" title="Featured projects" intro="Repository and demo links appear once they are added in src/data.js.">
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <article key={p.title} className={`flex flex-col rounded-xl border p-6 transition-colors hover:border-accent/60 ${p.placeholder ? 'border-dashed border-line bg-transparent' : 'border-line bg-panel'}`}>
            <div className="flex items-start justify-between gap-3">
              <h3 className="font-display text-lg font-semibold">{p.title}</h3>
              <span className="shrink-0 rounded-full border border-line px-2.5 py-0.5 text-xs text-muted">{p.status}</span>
            </div>
            <p className="mt-3 flex-1 text-sm text-muted">{p.description}</p>
            {p.tech.length > 0 && (
              <ul className="mt-4 flex flex-wrap gap-2">
                {p.tech.map((t) => <li key={t} className="rounded bg-raised px-2 py-0.5 font-mono text-xs text-accent">{t}</li>)}
              </ul>
            )}
            {!p.placeholder && (
              <div className="mt-5 flex gap-5 border-t border-line pt-4">
                <Link href={p.github} icon={Github}>Code</Link>
                <Link href={p.demo} icon={ExternalLink}>Live demo</Link>
              </div>
            )}
          </article>
        ))}
      </div>
    </Section>
  )
}
