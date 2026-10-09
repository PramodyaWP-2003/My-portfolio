import { useEffect, useState } from 'react'

// Types the text letter by letter. Space is reserved up front, so the layout does not jump.
// The caret has zero width, so it can never wrap onto a new line.
export default function Typewriter({ text, speed = 85, startDelay = 500 }) {
  const reduce = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const [n, setN] = useState(reduce ? text.length : 0)

  useEffect(() => {
    if (reduce) return
    let i = 0
    let id
    const t = setTimeout(() => {
      id = setInterval(() => {
        i += 1
        setN(i)
        if (i >= text.length) clearInterval(id)
      }, speed)
    }, startDelay)
    return () => { clearTimeout(t); clearInterval(id) }
  }, [text, speed, startDelay, reduce])

  return (
    <span className="relative inline-block" aria-label={text}>
      <span className="invisible" aria-hidden="true">{text}</span>
      <span className="absolute inset-0" aria-hidden="true">
        <span className="text-gradient">{text.slice(0, n)}</span>
        <span className="caret relative inline-block h-[0.85em] w-0">
          <span className="absolute left-1 top-0 h-full w-[3px] rounded-sm bg-accent" />
        </span>
      </span>
    </span>
  )
}