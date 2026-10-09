import { useState } from 'react'
import { Mail, Github, Linkedin, Phone, Send, CheckCircle2, AlertCircle } from 'lucide-react'
import { profile, socials } from '../data'
import { Section, Link } from './ui'

const field = 'mt-1.5 w-full rounded-lg border border-line bg-panel px-4 py-2.5 text-ink placeholder:text-muted/60 focus:border-accent focus:outline-none'

export default function Contact() {
  const [status, setStatus] = useState('idle') // idle | sending | success | error
  const [error, setError] = useState('')

  // Sends the message through Web3Forms, which emails it to your Gmail. No login needed for visitors.
  const submit = async (e) => {
    e.preventDefault()
    const form = e.target
    if (!profile.web3formsKey) {
      setError('The form is not connected yet. Please use the email link instead.')
      setStatus('error')
      return
    }
    const f = new FormData(form)
    setStatus('sending')
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: profile.web3formsKey,
          subject: `Portfolio message from ${f.get('name')}`,
          from_name: 'Portfolio website',
          name: f.get('name'),
          email: f.get('email'),
          message: f.get('message'),
          botcheck: f.get('botcheck') ? true : '',
        }),
      })
      const data = await res.json()
      if (!data.success) throw new Error(data.message)
      setStatus('success')
      form.reset()
    } catch {
      setError('Could not send your message. Please try again, or use the email link.')
      setStatus('error')
    }
  }

  return (
    <Section id="contact" title="Get in touch" intro="Open to internship opportunities in software development, Cloud Engineering and DevOps.">
      <div className="grid gap-10 lg:grid-cols-2">
        <ul className="space-y-4">
          <li>
            <a href={`mailto:${profile.email}`} className="inline-flex items-center gap-3 text-ink transition-colors hover:text-accent">
              <Mail size={18} className="text-accent" />{profile.email}
            </a>
          </li>
          {profile.phone && (
            <li className="inline-flex items-center gap-3 text-ink">
              <Phone size={18} className="text-accent" />{profile.phone}
            </li>
          )}
          <li><Link href={socials.linkedin} icon={Linkedin} className="!text-base">LinkedIn</Link></li>
          <li><Link href={socials.github} icon={Github} className="!text-base">GitHub</Link></li>
        </ul>

        <form onSubmit={submit} className="space-y-4">
          <label className="block text-sm">Name<input name="name" required className={field} autoComplete="name" /></label>
          <label className="block text-sm">Email<input name="email" type="email" required className={field} autoComplete="email" /></label>
          <label className="block text-sm">Message<textarea name="message" rows="5" required className={field} /></label>
          {/* Spam trap: hidden from people, bots tend to fill it */}
          <input type="checkbox" name="botcheck" tabIndex="-1" autoComplete="off" className="hidden" />
          <button type="submit" disabled={status === 'sending'}
            className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-bg transition-colors hover:bg-white disabled:opacity-60">
            <Send size={16} />{status === 'sending' ? 'Sending...' : 'Send message'}
          </button>
          <div role="status" aria-live="polite" className="text-sm">
            {status === 'success' && <p className="flex items-center gap-2 text-ok"><CheckCircle2 size={16} />Thank you! Your message was sent.</p>}
            {status === 'error' && <p className="flex items-center gap-2 text-warn"><AlertCircle size={16} />{error}</p>}
          </div>
        </form>
      </div>
    </Section>
  )
}