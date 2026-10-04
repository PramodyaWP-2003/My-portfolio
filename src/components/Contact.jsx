import { useState } from 'react'
import { Mail, Github, Linkedin } from 'lucide-react'
import { profile, socials } from '../data'
import { Section, Link } from './ui'

const field = 'mt-1.5 w-full rounded-lg border border-line bg-panel px-4 py-2.5 text-ink placeholder:text-muted/60 focus:border-accent focus:outline-none'

export default function Contact() {
  const [sent, setSent] = useState(false)
  // No backend is connected. Submitting opens the visitor's email app with the message pre-filled.
  const submit = (e) => {
    e.preventDefault()
    const f = new FormData(e.target)
    const to = encodeURIComponent(profile.email)
    const subject = encodeURIComponent(`Portfolio message from ${f.get('name')}`)
    const body = encodeURIComponent(`${f.get('message')}\n\nFrom: ${f.get('name')} (${f.get('email')})`)
    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${to}&su=${subject}&body=${body}`, '_blank', 'noopener,noreferrer')
    setSent(true)
  }
  return (
    <Section id="contact" title="Get in touch" intro="Open to internship opportunities in software development, Cloud Engineering and DevOps.">
      <div className="grid gap-10 lg:grid-cols-2">
        <div className="space-y-4">
          <a href={`mailto:${profile.email}`} className="flex items-center gap-3 text-ink hover:text-accent"><Mail size={18} className="text-accent" />{profile.email}</a>
          <Link href={socials.linkedin} icon={Linkedin} className="!text-base">LinkedIn</Link><br />
          <Link href={socials.github} icon={Github} className="!text-base">GitHub</Link>
        </div>
        <form onSubmit={submit} className="space-y-4">
          <label className="block text-sm">Name<input name="name" required className={field} autoComplete="name" /></label>
          <label className="block text-sm">Email<input name="email" type="email" required className={field} autoComplete="email" /></label>
          <label className="block text-sm">Message<textarea name="message" rows="5" required className={field} /></label>
          <button type="submit" className="rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-bg transition-colors hover:bg-white">Open in Gmail</button>
          <p className="text-xs text-muted" role="status">{sent ? 'Gmail should open in a new tab with the message ready to send.' : 'This form does not store anything. It opens a Gmail draft with your message pre-filled.'}</p>
        </form>
      </div>
    </Section>
  )
}
