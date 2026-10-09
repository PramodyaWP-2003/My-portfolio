import { Section } from './ui'
import OrbitAvatar from './OrbitAvatar'

export default function About() {
  return (
    <Section id="about" title="About me">
      <div className="grid items-center gap-10 lg:grid-cols-[auto_1fr]">
        <OrbitAvatar />
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="space-y-5 text-muted">
            <p>I am a third-year BICT (Hons) undergraduate at the Faculty of Technology, University of Colombo, Sri Lanka. I am interested in the whole software lifecycle: designing, developing, deploying and automating.</p>
            <p>I started with web development and design, building MERN-stack applications and designing interfaces in Figma. Along the way I became curious about what happens after the code is written: how it is packaged, tested, deployed and kept running.</p>
          </div>
          <div className="space-y-5 text-muted">
            <p>That curiosity is moving me toward Cloud Engineering and DevOps. I am learning Linux, networking, Docker, and CI/CD step by step, and I will add real projects here as I finish them.</p>
            <p>My full-stack and design background helps me understand what developers need from a pipeline and what users need from the product. Outside coursework I edit student magazines and do freelance design.</p>
          </div>
        </div>
      </div>
    </Section>
  )
}