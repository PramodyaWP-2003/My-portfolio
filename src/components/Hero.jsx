import { Download, Github, Linkedin } from 'lucide-react'
import { profile, socials } from '../data'
import { Link } from './ui'
//import Avatar from './Avatar'

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
    <section id="top" className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-[1.15fr_1fr]">
      <div className="hero-rise">
        <p className="hero-item font-mono text-sm text-accent" style={{ '--d': '0ms' }}>Hi, I am</p>
        <h1 className="hero-item mt-2 font-display text-4xl font-bold leading-tight tracking-tight sm:text-6xl" style={{ '--d': '100ms' }}>{profile.name}</h1>
        <p className="hero-item mt-4 font-display text-lg text-muted sm:text-xl" style={{ '--d': '200ms' }}>{profile.title}</p>
        <p className="hero-item mt-6 max-w-xl text-muted" style={{ '--d': '300ms' }}>{profile.intro}</p>
        <div className="hero-item mt-8 flex flex-wrap gap-3" style={{ '--d': '400ms' }}>
          <a href="#projects" className={`${btn} bg-accent text-bg hover:bg-white`}>View Projects</a>
          <a href="#contact" className={`${btn} border border-line text-ink hover:border-accent`}>Contact Me</a>
          <a href={profile.cvPath} download className={`${btn} border border-line text-ink hover:border-accent`}><Download size={16} />Download CV</a>
        </div>
        <div className="hero-item mt-8 flex gap-6" style={{ '--d': '500ms' }}>
          <Link href={socials.github} icon={Github}>GitHub</Link>
          <Link href={socials.linkedin} icon={Linkedin}>LinkedIn</Link>
        </div>
      </div>
      <div className="hero-rise-2 overflow-hidden rounded-xl border border-line bg-panel shadow-2xl shadow-black/40" aria-label="Terminal showing my learning roadmap">
        <div className="flex items-center gap-2 border-b border-line bg-raised px-4 py-3">
          <span className="h-3 w-3 rounded-full bg-line" /><span className="h-3 w-3 rounded-full bg-line" /><span className="h-3 w-3 rounded-full bg-line" />
          <span className="ml-3 font-mono text-xs text-muted">pasindu@learning:~</span>
        </div>
        <pre className="overflow-x-auto p-5 font-mono text-[13px] leading-7 sm:text-sm">
          {lines.map(([t, k]) => <div key={t} className={color[k]}>{t}</div>)}
          <div className="text-ink">$ <span className="caret inline-block h-4 w-2 translate-y-0.5 bg-accent" /></div>
        </pre>
      </div>
    </section>
  )
}
