import { Cloud, Container, Terminal, GitBranch, Server, Network } from 'lucide-react'
import Avatar from './Avatar'

const icons = [Cloud, Container, Terminal, GitBranch, Server, Network]

// Photo on the left, DevOps / cloud icons floating beside it
export default function OrbitAvatar() {
  return (
    <div className="flex items-center gap-6 sm:gap-8">
      <div className="relative shrink-0">
        
        <Avatar size="h-40 w-40 sm:h-44 sm:w-44" />
      </div>
      <ul aria-hidden="true" className="grid grid-cols-2 gap-3">
        {icons.map((Icon, i) => (
          <li key={i} className={`float glass grid h-11 w-11 place-items-center rounded-xl text-accent ${i % 2 ? 'translate-y-5' : ''}`}
            style={{ '--d': `${i * 0.3}s` }}>
            <Icon size={19} />
          </li>
        ))}
      </ul>
    </div>
  )
}