import { useEffect, useState } from 'react'
import { m, AnimatePresence } from 'framer-motion'
import { Reveal, Stagger, StaggerItem } from './motion/Reveal'

const EXPERIENCES = [
  {
    type: 'education',
    title: 'Baccalauréat — Mention Assez Bien',
    organisation: 'Lycée Sainte-Marie La Bastide',
    period: 'Sept. 2022 — May 2025',
    description:
      'Obtained the Baccalauréat with "Mention Assez Bien". Specialties: Mathematics and English.',
    longDescription:
      'Three years of high school at Lycée Sainte-Marie La Bastide, leading to the French Baccalauréat with the "Assez Bien" honours mention. I chose Mathematics and English as my two main specialties — the analytical mindset from maths and the language fluency from English are both foundations I still rely on every day in tech and trading.',
    highlights: [
      'French Baccalauréat with "Mention Assez Bien"',
      'Specialties: Mathematics and English',
      'Built strong analytical and problem-solving habits',
      'Fluent English communication, written and oral',
    ],
    tags: ['Mathematics', 'English', 'Baccalauréat'],
  },
  {
    type: 'work',
    title: 'Baker / Sales Assistant',
    organisation: 'Boulangerie',
    period: 'Summer 2025 (2 months)',
    description:
      'Worked as a sales vendor during summer holidays after high school. Developed customer service and communication skills in a fast-paced retail environment.',
    longDescription:
      'Two-month summer job in a French bakery between high school and Epitech. The role mixed front-of-house sales with light production support during peak hours. It was my first real exposure to a high-pressure customer-facing environment — a useful complement to the more solitary side of coding and trading.',
    highlights: [
      'Direct customer service and cash handling',
      'Worked under high-volume morning and lunch rushes',
      'Coordinated with a small team of bakers and sellers',
      'Built reliability and punctuality habits (5 a.m. shifts)',
    ],
    tags: ['Customer Service', 'Sales', 'Teamwork'],
  },
  {
    type: 'education',
    title: 'Bachelor in Computer Science — 1st Year',
    organisation: 'Epitech',
    period: 'Sept. 2025 — 2028+',
    description:
      'Currently enrolled in the Bachelor program at Epitech — an innovative, project-based school with no traditional lectures. Learning by doing through team projects in Python, web development, and more. Objective: specialise in cybersecurity in upcoming years.',
    longDescription:
      'Three-to-five year Bachelor program at Epitech, one of France\'s leading project-based computer science schools. The pedagogy has no traditional lectures — students learn by building real projects, individually and in teams, with peer reviews and tight deadlines. The first years cover algorithms, Python, Linux, web development, databases and software engineering practices, and I am orienting my upcoming specialisation toward cybersecurity.',
    highlights: [
      'Project-based pedagogy, no traditional lectures',
      'Team projects every few weeks with peer reviews',
      'Strong Linux / Unix ecosystem fluency',
      'Algorithms, Python, web stack, databases',
      'Targeted specialisation: cybersecurity',
    ],
    tags: ['Python', 'Linux', 'Web', 'Cybersecurity (goal)'],
  },
  {
    type: 'project',
    title: 'Independent Trader — Prop Firm',
    organisation: 'Self-employed',
    period: 'Sept. 2025 — Present',
    description:
      'Trading independently alongside studies at Epitech, working with a prop firm. Focus on technical analysis, chart reading, risk management, and building consistent trading strategies.',
    longDescription:
      'In parallel with Epitech, I trade financial markets on a funded account through a proprietary trading firm. The activity is entirely self-driven: I run my own analysis, follow a written trading plan, journal every position, and review performance weekly. The goal is not quick gains — it is building a repeatable, statistically sound process over years.',
    highlights: [
      'Funded account through a proprietary trading firm',
      'Discretionary trading driven by technical analysis',
      'Strict risk management: fixed R per trade, daily loss cap',
      'Written trading plan and full trade journal',
      'Weekly performance review and strategy iteration',
    ],
    tags: ['Trading', 'Technical Analysis', 'Risk Management', 'Finance'],
  },
]

const TYPE_STYLES = {
  work: { dot: 'bg-accent', ring: 'bg-accent/40', label: 'Work', badge: 'bg-accent/10 text-accent border-accent/30' },
  education: { dot: 'bg-green-400', ring: 'bg-green-400/40', label: 'Education', badge: 'bg-green-400/10 text-green-400 border-green-400/30' },
  project: { dot: 'bg-purple-400', ring: 'bg-purple-400/40', label: 'Project', badge: 'bg-purple-400/10 text-purple-400 border-purple-400/30' },
}

function ArrowRightIcon({ className = 'w-4 h-4' }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
    </svg>
  )
}

function CloseIcon({ className = 'w-5 h-5' }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
  )
}

function CheckIcon({ className = 'w-4 h-4' }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
    </svg>
  )
}

function ExperienceItem({ exp, isLast, index, onOpen }) {
  const { title, organisation, period, description, tags, type } = exp
  const style = TYPE_STYLES[type]
  const fromLeft = index % 2 === 0
  return (
    <m.div
      initial={{ opacity: 0, x: fromLeft ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="relative flex gap-6 md:gap-10"
    >
      <div className="flex flex-col items-center">
        <div className="relative">
          <m.span
            aria-hidden
            className={`absolute inset-0 rounded-full ${style.ring}`}
            animate={{ scale: [1, 1.8, 1], opacity: [0.45, 0, 0.45] }}
            transition={{ duration: 2.8, repeat: Infinity, ease: 'easeOut' }}
          />
          <div className={`relative w-4 h-4 rounded-full border-2 border-navy-950 ${style.dot} shadow-lg mt-1`} />
        </div>
        {!isLast && (
          <m.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            style={{ originY: 0 }}
            className="w-0.5 flex-1 bg-gradient-to-b from-white/20 to-white/5 mt-2"
          />
        )}
      </div>

      <m.button
        type="button"
        onClick={onOpen}
        whileHover={{ y: -4 }}
        whileTap={{ scale: 0.985 }}
        transition={{ type: 'spring', stiffness: 280, damping: 24 }}
        className="card flex-1 mb-8 text-left w-full cursor-pointer hover:shadow-xl hover:shadow-accent/15 group"
      >
        <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
          <div>
            <h3 className="text-white font-semibold text-lg group-hover:text-accent transition-colors">
              {title}
            </h3>
            <p className="text-accent-light text-sm font-medium mt-0.5">{organisation}</p>
          </div>
          <div className="flex flex-col items-end gap-1.5">
            <span className={`text-xs font-medium px-2.5 py-1 rounded-full border ${style.badge}`}>
              {style.label}
            </span>
            <span className="text-gray-500 text-xs font-mono">{period}</span>
          </div>
        </div>

        <p className="text-gray-400 text-sm leading-relaxed mb-4">{description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2.5 py-1 rounded-md bg-navy-700 text-gray-400 border border-white/5"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between pt-3 border-t border-white/5">
          <span className="text-accent text-sm font-medium inline-flex items-center gap-1.5 group-hover:gap-2.5 transition-all">
            View details
            <ArrowRightIcon />
          </span>
          <span className="text-gray-500 text-xs">Click to open</span>
        </div>
      </m.button>
    </m.div>
  )
}

function ExperienceModal({ exp, onClose }) {
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = prev
    }
  }, [onClose])

  const { title, organisation, period, description, longDescription, highlights, tags, type } = exp
  const style = TYPE_STYLES[type]

  return (
    <m.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-navy-950/85 backdrop-blur-md" />

      <m.div
        onClick={(e) => e.stopPropagation()}
        initial={{ opacity: 0, scale: 0.85, y: 40 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        transition={{ type: 'spring', stiffness: 280, damping: 22 }}
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-navy-900 border border-white/10 rounded-2xl shadow-2xl shadow-accent/20"
      >
        <m.button
          onClick={onClose}
          aria-label="Close details"
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.92 }}
          className="absolute top-4 right-4 z-10 w-9 h-9 inline-flex items-center justify-center rounded-full bg-navy-950/70 hover:bg-accent text-white border border-white/10 hover:border-accent transition-colors"
        >
          <CloseIcon />
        </m.button>

        <div className="p-6 sm:p-8 space-y-6">
          <div className="space-y-3 pr-10">
            <div className="flex flex-wrap items-center gap-2">
              <span className={`text-xs font-medium px-2.5 py-1 rounded-full border ${style.badge}`}>
                {style.label}
              </span>
              <span className="text-gray-500 text-xs font-mono">{period}</span>
            </div>
            <div>
              <h3 className="text-white font-bold text-2xl sm:text-3xl">{title}</h3>
              <p className="text-accent-light text-sm font-medium mt-1">{organisation}</p>
            </div>
          </div>

          <p className="text-gray-300 leading-relaxed">{longDescription || description}</p>

          {highlights?.length > 0 && (
            <div>
              <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-3">
                Key highlights
              </h4>
              <ul className="space-y-2.5">
                {highlights.map((item, i) => (
                  <m.li
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + i * 0.06 }}
                    className="flex gap-3 text-gray-300 text-sm leading-relaxed"
                  >
                    <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-accent/15 text-accent inline-flex items-center justify-center">
                      <CheckIcon className="w-3 h-3" />
                    </span>
                    <span>{item}</span>
                  </m.li>
                ))}
              </ul>
            </div>
          )}

          {tags?.length > 0 && (
            <div>
              <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-3">
                Topics & skills
              </h4>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag, i) => (
                  <m.span
                    key={tag}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + i * 0.03, duration: 0.35 }}
                    className="text-xs px-2.5 py-1 rounded-md bg-accent/10 text-accent-light border border-accent/20"
                  >
                    {tag}
                  </m.span>
                ))}
              </div>
            </div>
          )}
        </div>
      </m.div>
    </m.div>
  )
}

export default function Experiences() {
  const [active, setActive] = useState(null)

  return (
    <section id="experiences" className="py-24 bg-navy-900/40 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />

      <div className="section-container">
        <Reveal>
          <div className="text-center mb-14">
            <p className="text-accent font-mono text-sm uppercase tracking-widest mb-2">My journey</p>
            <h2 className="section-title">Experiences</h2>
            <m.div
              initial={{ width: 0 }}
              whileInView={{ width: 48 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="h-1 bg-accent rounded-full mx-auto mb-4"
            />
            <p className="section-subtitle">Education, work, and notable projects over the years — click any card for the full story.</p>
          </div>
        </Reveal>

        <Stagger className="flex flex-wrap justify-center gap-4 mb-12" staggerChildren={0.08}>
          {Object.entries(TYPE_STYLES).map(([key, { dot, label }]) => (
            <StaggerItem key={key} direction="up">
              <span className="flex items-center gap-2 text-gray-400 text-sm">
                <span className={`w-2.5 h-2.5 rounded-full ${dot}`} />
                {label}
              </span>
            </StaggerItem>
          ))}
        </Stagger>

        <div className="max-w-3xl mx-auto">
          {EXPERIENCES.map((exp, i) => (
            <ExperienceItem
              key={exp.title}
              exp={exp}
              index={i}
              isLast={i === EXPERIENCES.length - 1}
              onOpen={() => setActive(exp)}
            />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active && <ExperienceModal exp={active} onClose={() => setActive(null)} />}
      </AnimatePresence>
    </section>
  )
}
