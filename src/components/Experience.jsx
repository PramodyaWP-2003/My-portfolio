import { experience } from '../data'
import { Section } from './ui'

export default function Experience() {
  return (
    <Section id="experience" title="Experience & activities" intro="Design and editorial work that built my teamwork, communication and sense of responsibility.">
      <ol className="space-y-6 border-l border-line pl-6">
        {experience.map((e) => (
          <li key={e.role + e.org} className="relative">
            <span className="absolute -left-[29px] top-2 h-2.5 w-2.5 rounded-full bg-accent" />
            <h3 className="font-display text-lg font-semibold">{e.role}</h3>
            <p className="text-sm text-accent">{e.org}</p>
            <p className="mt-1 max-w-2xl text-muted">{e.text}</p>
          </li>
        ))}
      </ol>
    </Section>
  )
}
