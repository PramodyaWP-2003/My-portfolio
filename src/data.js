// Central content file. Edit this file to update the whole site.
// Leave a link as "" until it exists; the UI then shows "Link coming soon" instead of a broken link.

export const profile = {
  name: 'Pasindu Pramodya',
  title: 'BICT (Hons) Undergraduate | Aspiring DevOps & Cloud Engineer',
  intro:
    'I build full-stack web applications and I am now moving toward the infrastructure side: Linux, networking, containers, CI/CD and cloud. I like understanding how software gets from an idea to a running, automated deployment.',
  email: 'pramodya.wp@gmail.com', // TODO: replace
  cvPath: import.meta.env.BASE_URL + 'Pasindu_Pramodya_CV.pdf',
  photo: import.meta.env.BASE_URL + 'profile.jpg',
  year: new Date().getFullYear(),
}

export const socials = {
  github: 'https://github.com/PramodyaWP-2003', 
  linkedin: 'https://www.linkedin.com/in/pasindu-pramodya-0a6017418',
}

export const skillGroups = [
  { title: 'Cloud & DevOps', icon: 'cloud', items: [
    { name: 'Docker', status: 'Learning' },
    { name: 'CI/CD', status: 'Planned' },
    { name: 'Cloud fundamentals', status: 'Learning' } ] },
  { title: 'Networking & Systems', icon: 'network', items: [
    { name: 'Linux basics', status: 'Basics' },
    { name: 'Cisco Networking Basics', status: 'In progress' },
    { name: 'Cisco Packet Tracer', status: 'Projects planned' } ] },
  { title: 'Development', icon: 'code', items: [
    { name: 'React', status: 'Hands-on' }, { name: 'Node.js', status: 'Hands-on' },
    { name: 'Express.js', status: 'Hands-on' }, { name: 'MongoDB', status: 'Hands-on' },
    { name: 'HTML', status: 'Hands-on' }, { name: 'CSS', status: 'Hands-on' },
    { name: 'JavaScript', status: 'Hands-on' } ] },
  { title: 'Tools', icon: 'tools', items: [
    { name: 'Git', status: 'Hands-on' }, { name: 'GitHub', status: 'Hands-on' }, { name: 'Figma', status: 'Hands-on' } ] },
  { title: 'Design', icon: 'palette', items: [
    { name: 'Adobe Photoshop', status: 'Hands-on' }, { name: 'Adobe Illustrator', status: 'Hands-on' },
    { name: 'UI/UX design', status: 'Hands-on' } ] },
]

export const projects = [
  { title: 'Taskflow', status: 'Deployment in progress',
    description: 'A task management web application built with the MERN stack.',
    tech: ['MongoDB', 'Express', 'React', 'Node.js'], github: 'https://github.com/PramodyaWP-2003/Taskflow', demo: 'https://taskflow-neon-mu.vercel.app' },
  { title: 'University Management System', status: 'Group project',
    description: 'A group project built using the MERN stack.',
    tech: ['MongoDB', 'Express', 'React', 'Node.js'], github: '', demo: '' },
  { title: 'To Do Mobile App', status: 'Tested on a phone',
    description: 'A mobile app installed and tested on a physical phone, with a Figma wireframe based on Material Design 3 and built with Android studio.',
    tech: ['Mobile', 'Figma', 'Material Design 3'], github: 'https://github.com/PramodyaWP-2003/DoMate-ToDo-app', demo: '' },
  { title: 'Text Editor', status: 'Personal project',
    description: 'A personal development project exploring how a text editor works.',
    tech: [], github: 'https://github.com/PramodyaWP-2003/Text-Editor', demo: '' },
  { title: 'Coffee Shop Website', status: 'Practice project',
    description: 'A practice website for strengthening front-end fundamentals.',
    tech: ['HTML', 'CSS', 'JavaScript'], github: '', demo: '' },
  { title: 'Future DevOps & Cloud Project', status: 'Placeholder', placeholder: true,
    description: 'Reserved for my first hands-on DevOps or cloud project. This card will be updated after completion.',
    tech: [], github: '', demo: '' },
]

export const experience = [
  { role: 'Freelance Graphic Designer', org: 'Self-employed', text: 'Design work delivered with Adobe Photoshop and Illustrator, which taught me to work from client briefs and deadlines.' },
  { role: 'Newsletter Team Contributor', org: 'IEEE', text: 'Active contributor to the monthly newsletter magazine team. Two issues completed and another in progress.' },
  { role: 'Editor', org: 'Welfare Society and Arts Club, University of Colombo', text: 'Editorial responsibilities across two student organisations.' },
  { role: 'Editing Team Member', org: 'Technomedia Society and Arts Club', text: 'Part of the editing teams for the magazines “Purawaramana” (Technomedia Society) and “Navaru” (Arts Club).' },
  { role: 'Certificate of Appreciation', org: 'Arts Club', text: 'Recognised for contribution to the Arts Club.' },
]

export const certifications = [
  { title: 'Introduction to Git and GitHub', issuer: 'Coursera', status: 'Completed', link: '' },
  { title: 'Front-End Web Development', issuer: 'University of Moratuwa', status: 'Completed', link: '' },
  { title: 'Cisco Networking Basics', issuer: 'Cisco', status: 'In progress', link: '' },
  { title: 'Docker basics', issuer: 'Self-paced', status: 'In progress', link: '' },
  { title: 'CI/CD and cloud learning', issuer: 'Self-paced', status: 'Planned', link: '' },
]
