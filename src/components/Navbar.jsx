import { useEffect, useRef, useState } from 'react'

const links = [['about', 'About'], ['skills', 'Skills'], ['projects', 'Projects'], ['experience', 'Experience'], ['learning', 'Learning'], ['contact', 'Contact']]
const sectionIds = ['top', ...links.map(([id]) => id)]

export default function Navbar() {
  const [active, setActive] = useState('')
  const [progress, setProgress] = useState(0)
  const listRef = useRef(null)

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement
      setProgress(h.scrollTop / Math.max(h.scrollHeight - h.clientHeight, 1))
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id === 'top' ? '' : e.target.id)),
      { rootMargin: '-45% 0px -50% 0px' }
    )
    sectionIds.forEach((id) => { const el = document.getElementById(id); if (el) io.observe(el) })
    return () => io.disconnect()
  }, [])

  // Phone: keep the active link visible inside the scrolling bar
  useEffect(() => {
    listRef.current?.querySelector('.is-active')?.scrollIntoView({ inline: 'center', block: 'nearest' })
  }, [active])

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-6 sm:pt-4">
      <div aria-hidden="true" className="progress fixed left-0 top-0 z-[60] h-[3px] w-full origin-left" style={{ transform: `scaleX(${progress})` }} />
      <nav aria-label="Main" className="glass mx-auto flex h-14 max-w-5xl items-center gap-2 rounded-full pl-4 pr-2 sm:pl-6 md:grid md:grid-cols-[1fr_auto_1fr] md:pr-3">
        <a href="#top" className="shrink-0 justify-self-start font-display font-semibold tracking-tight">
          <span className="sm:hidden">P</span><span className="hidden sm:inline">Pasindu</span><span className="text-accent">.</span>
        </a>

        <ul ref={listRef} className="nav-scroll flex min-w-0 flex-1 items-center gap-1 overflow-x-auto py-1 md:flex-none md:overflow-visible [&>li:first-child]:ml-auto [&>li:last-child]:mr-auto">
          {links.map(([id, label]) => (
            <li key={id} className={`shrink-0 ${id === 'contact' ? 'md:hidden' : ''}`}>
              <a href={`#${id}`} aria-current={active === id ? 'true' : undefined}
                className={`nav-link ${id === 'contact' ? 'cta' : ''} ${active === id ? 'is-active' : ''}`}>{label}</a>
            </li>
          ))}
        </ul>

          <div className="hidden justify-self-end md:block">
            <a href="#contact" aria-current={active === 'contact' ? 'true' : undefined}
              className={`nav-link cta ${active === 'contact' ? 'is-active' : ''}`}>Contact</a>
          </div>
      </nav>
    </header>
  )
}