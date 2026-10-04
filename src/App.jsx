import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Certifications from './components/Certifications'
import Contact from './components/Contact'
import { profile } from './data'

export default function App() {
  return (
    <>
      <a href="#about" className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-[60] focus:rounded focus:bg-accent focus:px-3 focus:py-2 focus:text-bg">Skip to content</a>
      <Navbar />
      <main>
        <Hero /><About /><Skills /><Projects /><Experience /><Certifications /><Contact />
      </main>
      <footer className="border-t border-line py-8 text-center text-sm text-muted">© {profile.year} {profile.name}. All rights reserved.</footer>
    </>
  )
}
