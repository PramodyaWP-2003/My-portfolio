import { Section } from './ui'
import OrbitAvatar from './OrbitAvatar'

export default function About() {
  return (
    <Section id="about" title="About me">
      <div className="grid items-center gap-10 lg:grid-cols-[auto_1fr]">
        <OrbitAvatar />
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="space-y-5 text-muted">
            <p>I am a BICT (Hons.) undergraduate at the University of Colombo, Faculty of Technology, with a strong interest in DevOps, Cloud Engineering, and modern software infrastructure. My passion for technology goes beyond software development, driving me to explore how applications are built, deployed, automated, and maintained in real-world environments.</p>
            <p>With hands-on experience in full-stack web development, I have developed projects using the MERN stack, built responsive websites with HTML, CSS, and JavaScript, and worked with databases such as MongoDB Atlas. I have also explored CI/CD pipeline automation and application deployment using platforms like Vercel and Render. Alongside web development, I have designed and developed an Android application using Java and Android Studio, supported by detailed documentation and Figma-based UI/UX designs.</p>
          </div>
          <div className="space-y-5 text-muted">
            <p>Currently, I am strengthening my technical foundation in Linux, Docker, networking, and CI/CD, while expanding my knowledge of cloud technologies and infrastructure automation. I am particularly interested in building reliable, scalable, and secure systems and understanding the technologies that power modern applications.</p>
            <p>Beyond coding, I bring a creative perspective through my experience in graphic design, UI/UX design, and digital content creation using tools such as Adobe Photoshop, Illustrator, Canva, and Figma. My freelance design work and contributions as a designer and editor for university publications and student organizations have helped me develop strong collaboration, communication, and creative problem-solving skills.</p>
            <p>I believe in continuous learning, practical experience, and turning ideas into meaningful solutions. My goal is to combine my software development experience, creative mindset, and growing infrastructure expertise to build efficient, automated, and dependable technology solutions.</p>
          </div>
        </div>
      </div>
    </Section>
  )
}