import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const links = [['about', 'About'], ['skills', 'Skills'], ['projects', 'Projects'], ['experience', 'Experience'], ['learning', 'Learning'], ['contact', 'Contact']]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <header className="sticky top-0 z-50 border-b border-line/70 bg-bg/80 backdrop-blur">
      <nav aria-label="Main" className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <a href="#top" className="font-display font-semibold">Pasindu<span className="text-accent">.</span></a>
        <ul className="hidden items-center gap-7 md:flex">
          {links.map(([id, label]) => <li key={id}><a href={`#${id}`} className="text-sm text-muted transition-colors hover:text-ink">{label}</a></li>)}
        </ul>
        <button className="rounded-md p-2 text-muted hover:text-ink md:hidden" aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? 'Close menu' : 'Open menu'} onClick={() => setOpen(!open)}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>
      {open && (
        <ul id="mobile-menu" className="border-t border-line bg-panel px-5 py-3 md:hidden">
          {links.map(([id, label]) => <li key={id}><a href={`#${id}`} onClick={() => setOpen(false)} className="block py-3 text-muted hover:text-ink">{label}</a></li>)}
        </ul>
      )}
    </header>
  )
}
