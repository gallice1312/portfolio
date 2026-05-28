import { m } from 'framer-motion'
import { Reveal, Stagger, StaggerItem } from './motion/Reveal'
import { PaletteIcon, ServerIcon, ShieldIcon } from './Icons'

const ICONS = {
  React: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
      <circle cx="12" cy="12" r="1.4" fill="currentColor" stroke="none" />
      <ellipse cx="12" cy="12" rx="10" ry="4" />
      <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)" />
      <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)" />
    </svg>
  ),
  JavaScript: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="w-5 h-5">
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <path d="M10 11v5a1.5 1.5 0 0 1-3 0" strokeLinecap="round" />
      <path d="M17 11.5c-.4-.6-1.1-1-2-1-1.1 0-2 .7-2 1.5 0 2 4 1.2 4 3.2 0 1-1 1.8-2.2 1.8-1 0-1.8-.4-2.2-1.1" strokeLinecap="round" />
    </svg>
  ),
  'HTML & CSS': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="w-5 h-5">
      <path d="M8 8l-4 4 4 4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M16 8l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M14 6l-4 12" strokeLinecap="round" />
    </svg>
  ),
  TailwindCSS: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="w-5 h-5">
      <path d="M7 11c1-3 3-4.5 6-4.5 2 0 3 1 4 2s2 1.5 3 1.5c-1 3-3 4.5-6 4.5-2 0-3-1-4-2s-2-1.5-3-1.5z" strokeLinejoin="round" />
      <path d="M3 17c1-3 3-4.5 6-4.5 2 0 3 1 4 2s2 1.5 3 1.5c-1 3-3 4.5-6 4.5-2 0-3-1-4-2s-2-1.5-3-1.5z" strokeLinejoin="round" />
    </svg>
  ),
  Vite: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="w-5 h-5">
      <path d="M13 2L4 14h6l-1 8 9-12h-6l1-8z" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  ),
  Python: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="w-5 h-5">
      <path d="M12 3c-3 0-4 1.2-4 3v3h5v1H6c-2 0-3 1.5-3 4s1 4 3 4h2v-2c0-1.8 1-3 4-3h3c1.7 0 3-1.3 3-3V6c0-1.8-1-3-4-3h-2z" strokeLinejoin="round" />
      <circle cx="10" cy="6" r=".8" fill="currentColor" stroke="none" />
      <path d="M12 21c3 0 4-1.2 4-3v-3h-5v-1h7c2 0 3-1.5 3-4" strokeLinejoin="round" strokeLinecap="round" />
      <circle cx="14" cy="18" r=".8" fill="currentColor" stroke="none" />
    </svg>
  ),
  Flask: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="w-5 h-5">
      <path d="M10 3h4" strokeLinecap="round" />
      <path d="M10 3v6L5 19a2 2 0 0 0 1.8 3h10.4A2 2 0 0 0 19 19l-5-10V3" strokeLinejoin="round" />
      <path d="M7.5 14h9" strokeLinecap="round" />
    </svg>
  ),
  'Node.js': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="w-5 h-5">
      <path d="M12 2l9 5v10l-9 5-9-5V7l9-5z" strokeLinejoin="round" />
      <path d="M9 10v5a2 2 0 0 0 4 0v-5" strokeLinecap="round" />
      <path d="M15 10h2.5a1.5 1.5 0 0 1 0 3H16a1.5 1.5 0 0 0 0 3h2" strokeLinecap="round" />
    </svg>
  ),
  MySQL: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="w-5 h-5">
      <ellipse cx="12" cy="5" rx="8" ry="2.5" />
      <path d="M4 5v6c0 1.4 3.6 2.5 8 2.5s8-1.1 8-2.5V5" />
      <path d="M4 11v6c0 1.4 3.6 2.5 8 2.5s8-1.1 8-2.5v-6" />
    </svg>
  ),
  Git: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="w-5 h-5">
      <circle cx="6" cy="6" r="2.2" />
      <circle cx="6" cy="18" r="2.2" />
      <circle cx="18" cy="12" r="2.2" />
      <path d="M6 8.2v7.6" strokeLinecap="round" />
      <path d="M6 12h6a4 4 0 0 1 4 4v0" />
    </svg>
  ),
  Docker: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
      <rect x="3" y="11" width="3" height="3" />
      <rect x="7" y="11" width="3" height="3" />
      <rect x="11" y="11" width="3" height="3" />
      <rect x="7" y="7" width="3" height="3" />
      <rect x="11" y="7" width="3" height="3" />
      <rect x="11" y="3" width="3" height="3" />
      <path d="M2 14h15a4 4 0 0 0 4-3s-2-1-3 0c-.3-2-2-3-2-3" strokeLinejoin="round" strokeLinecap="round" />
      <path d="M5 18c3 1 9 1 12-1" strokeLinecap="round" />
    </svg>
  ),
  'CTF / OWASP': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="w-5 h-5">
      <path d="M12 2l8 3v6c0 5-3.5 9-8 11-4.5-2-8-6-8-11V5l8-3z" strokeLinejoin="round" />
      <path d="M9 12l2.2 2.2L15 10" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  Nginx: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="w-5 h-5">
      <path d="M12 2l9 5v10l-9 5-9-5V7l9-5z" strokeLinejoin="round" />
      <path d="M9 17V8l6 8V8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
}

const SKILL_CATEGORIES = [
  {
    category: 'Frontend',
    Icon: PaletteIcon,
    skills: [
      { name: 'React', level: 80 },
      { name: 'JavaScript', level: 85 },
      { name: 'HTML & CSS', level: 90 },
      { name: 'TailwindCSS', level: 75 },
      { name: 'Vite', level: 70 },
    ],
  },
  {
    category: 'Backend',
    Icon: ServerIcon,
    skills: [
      { name: 'Python', level: 85 },
      { name: 'Flask', level: 70 },
      { name: 'Node.js', level: 75 },
      { name: 'MySQL', level: 65 },
    ],
  },
  {
    category: 'Tools & Security',
    Icon: ShieldIcon,
    skills: [
      { name: 'Git', level: 85 },
      { name: 'Docker', level: 65 },
      { name: 'CTF / OWASP', level: 65 },
      { name: 'Nginx', level: 55 },
    ],
  },
]

const TECH_BADGES = [
  'Python', 'React', 'Node.js', 'Flask', 'JavaScript',
  'TailwindCSS', 'Docker', 'MySQL', 'Nginx', 'JWT',
  'spaCy', 'scikit-learn', 'NLP', 'REST API', 'Linux',
]

function SkillBar({ name, level, index }) {
  const icon = ICONS[name]
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between text-sm">
        <span className="flex items-center gap-2.5 text-gray-200 font-medium">
          <span className="inline-flex items-center justify-center w-7 h-7 rounded-md bg-accent/10 text-accent border border-accent/20">
            {icon}
          </span>
          {name}
        </span>
        <m.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 + index * 0.1 }}
          className="text-accent font-mono text-xs"
        >
          {level}%
        </m.span>
      </div>
      <div className="h-2 bg-navy-700 rounded-full overflow-hidden relative">
        <m.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.2, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
          className="h-full bg-gradient-to-r from-accent via-accent-light to-emerald-400 rounded-full relative"
        >
          <div className="absolute inset-0 shine rounded-full" />
        </m.div>
      </div>
    </div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-navy-900/40 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />

      <div className="section-container">
        <Reveal direction="up">
          <div className="text-center mb-14">
            <p className="text-accent font-mono text-sm uppercase tracking-widest mb-2">What I work with</p>
            <h2 className="section-title">My Skills</h2>
            <m.div
              initial={{ width: 0 }}
              whileInView={{ width: 48 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="h-1 bg-accent rounded-full mx-auto mb-4"
            />
            <p className="section-subtitle">
              A curated stack of technologies I use to build great products.
            </p>
          </div>
        </Reveal>

        <Stagger className="grid md:grid-cols-3 gap-8 mb-16" staggerChildren={0.12}>
          {SKILL_CATEGORIES.map(({ category, Icon, skills }) => (
            <StaggerItem key={category} direction="up">
              <m.div
                whileHover={{ y: -6 }}
                transition={{ type: 'spring', stiffness: 280, damping: 24 }}
                className="card space-y-5 h-full"
              >
                <h3 className="text-white font-semibold text-lg border-b border-white/5 pb-3 flex items-center gap-3">
                  <span className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-accent/10 text-accent border border-accent/20">
                    <Icon className="w-4 h-4" />
                  </span>
                  {category}
                </h3>
                {skills.map((skill, i) => (
                  <SkillBar key={skill.name} {...skill} index={i} />
                ))}
              </m.div>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal>
          <div className="text-center">
            <p className="text-gray-500 text-sm uppercase tracking-widest mb-6">Also familiar with</p>
            <Stagger className="flex flex-wrap justify-center gap-3" staggerChildren={0.04} delayChildren={0.1}>
              {TECH_BADGES.map((badge) => (
                <StaggerItem key={badge} direction="up">
                  <m.span
                    whileHover={{ y: -3 }}
                    transition={{ type: 'spring', stiffness: 320, damping: 22 }}
                    className="inline-block px-4 py-2 rounded-full text-sm font-medium border border-white/10 text-gray-300 bg-navy-800 hover:border-accent/40 hover:text-accent transition-colors cursor-default"
                  >
                    {badge}
                  </m.span>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
