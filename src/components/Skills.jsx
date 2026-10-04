import { Cloud, Network, Code2, Wrench, Palette } from 'lucide-react'
import { skillGroups } from '../data'
import { Section, statusTone } from './ui'

const icons = { cloud: Cloud, network: Network, code: Code2, tools: Wrench, palette: Palette }

export default function Skills() {
  return (
    <Section id="skills" title="Technical skills" intro="Each skill shows where I honestly am with it. Items marked Learning, In progress or Planned are not claims of expertise.">
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((g) => {
          const Icon = icons[g.icon]
          return (
            <article key={g.title} className="rounded-xl border border-line bg-panel p-6">
              <h3 className="flex items-center gap-2 font-display text-lg font-semibold"><Icon size={18} className="text-accent" />{g.title}</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {g.items.map((i) => (
                  <li key={i.name} className={`rounded-md border px-3 py-1.5 text-sm ${statusTone(i.status === 'Hands-on' ? '' : i.status === 'Learning' || i.status === 'In progress' ? 'In progress' : 'Planned')}`}>
                    <span className="text-ink">{i.name}</span> <span className="text-xs opacity-80">{i.status}</span>
                  </li>
                ))}
              </ul>
            </article>
          )
        })}
      </div>
    </Section>
  )
}
