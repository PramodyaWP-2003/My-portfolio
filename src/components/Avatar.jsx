import { useState } from 'react'
import { profile } from '../data'

export default function Avatar({ size = 'h-20 w-20' }) {
  const [failed, setFailed] = useState(!profile.photo)
  const initials = profile.name.split(' ').map((w) => w[0]).join('')
  const ring = `${size} shrink-0 rounded-full ring-2 ring-accent/60 ring-offset-4 ring-offset-bg`
  if (failed)
    return <div role="img" aria-label={`${profile.name} initials`} className={`${ring} flex items-center justify-center bg-raised font-display text-xl font-semibold text-accent`}>{initials}</div>
  return <img src={profile.photo} alt={`Portrait of ${profile.name}`} width="80" height="80" className={`${ring} object-cover`} onError={() => setFailed(true)} />
}