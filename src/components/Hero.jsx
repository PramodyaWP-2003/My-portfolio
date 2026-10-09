import { Download, Github, Linkedin, Cloud, Container, Terminal, GitBranch, Server, Network } from 'lucide-react'
import { profile, socials } from '../data'
import { Link } from './ui'
import Typewriter from './Typewriter'

const icons = [Cloud, Container, Terminal, GitBranch, Server, Network]
const lines = [
  ['$ cat roadmap.txt', 'cmd'],
  ['full-stack web ........ done', 'ok'],
  ['linux + networking ..... in progress', 'warn'],
  ['docker ................. learning', 'warn'],
  ['ci/cd .................. planned', 'dim'],
  ['cloud platform ......... planned', 'dim'],
]
const color = { cmd: 'text-ink', ok: 'text-ok', warn: 'text-warn', dim: 'text-muted' }

export default function Hero() {
  const btn = 'inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold transition-colors'
  return (
    <section id="top" className="mx-auto grid max-w-6xl items-center gap-12 px-5 pb-16 pt-28 sm:px-8 sm:pb-24 sm:pt-36 lg:grid-cols-[1.15fr_1fr]">
      <div>
        <div className="hero-item flex flex-wrap items-center gap-4" style={{ '--d': '0ms' }}>
          <span className="font-mono text-sm text-accent">Hi, I am</span>
          <ul aria-hidden="true" className="flex gap-2.5">
            {icons.map((Icon, i) => (
              <li key={i} className="float glass grid h-10 w-10 place-items-center rounded-xl text-accent" style={{ '--d': `${i * 0.25}s` }}>
                <Icon size={18} />
              </li>
            ))}
          </ul>
        </div>
        <h1 className="hero-item mt-5 font-display text-4xl font-bold leading-tight tracking-tight sm:text-6xl" style={{ '--d': '100ms' }}>
          <Typewriter text={profile.name} />
        </h1>
        <p className="hero-item mt-4 font-display text-lg text-muted sm:text-xl" style={{ '--d': '200ms' }}>{profile.title}</p>
        <p className="hero-item mt-6 max-w-xl text-muted" style={{ '--d': '300ms' }}>{profile.intro}</p>
        <div className="hero-item mt-8 flex flex-wrap gap-3" style={{ '--d': '400ms' }}>
          <a href="#projects" className={`${btn} bg-accent text-bg hover:bg-white`}>View Projects</a>
          <a href="#contact" className={`${btn} glass text-ink hover:border-accent`}>Contact Me</a>
          <a href={profile.cvPath} download className={`${btn} glass text-ink hover:border-accent`}><Download size={16} />Download CV</a>
        </div>
        <div className="hero-item mt-8 flex gap-6" style={{ '--d': '500ms' }}>
          <Link href={socials.github} icon={Github}>GitHub</Link>
          <Link href={socials.linkedin} icon={Linkedin}>LinkedIn</Link>
        </div>
      </div>

      <div className="hero-item overflow-hidden rounded-xl border border-line bg-panel shadow-2xl shadow-black/40" style={{ '--d': '300ms' }} aria-label="Terminal showing my learning roadmap">
        <div className="flex items-center gap-2 border-b border-line bg-raised px-4 py-3">
          <span className="h-3 w-3 rounded-full bg-white/15" /><span className="h-3 w-3 rounded-full bg-white/15" /><span className="h-3 w-3 rounded-full bg-white/15" />
          <span className="ml-3 font-mono text-xs text-muted">pasindu@learning:~</span>
        </div>
        <pre className="overflow-x-auto p-5 font-mono text-[13px] leading-7 sm:text-sm">
          {lines.map(([t, k], i) => <div key={t} className={`hero-item ${color[k]}`} style={{ '--d': `${700 + i * 180}ms` }}>{t}</div>)}
          <div className="text-ink">$ <span className="caret inline-block h-4 w-2 translate-y-0.5 bg-accent" /></div>
        </pre>
      </div>
    </section>
  )
}