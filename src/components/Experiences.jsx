const EXPERIENCES = [
  {
    type: 'education',
    title: 'Baccalauréat — Mention Assez Bien',
    organisation: 'Lycée Sainte-Marie La Bastide',
    period: 'Sept. 2022 — May 2025',
    description:
      'Obtained the Baccalauréat with "Mention Assez Bien". Specialties: Mathematics and English.',
    tags: ['Mathematics', 'English', 'Baccalauréat'],
  },
  {
    type: 'work',
    title: 'Baker / Sales Assistant',
    organisation: 'Boulangerie',
    period: 'Summer 2025 (2 months)',
    description:
      'Worked as a sales vendor during summer holidays after high school. Developed customer service and communication skills in a fast-paced retail environment.',
    tags: ['Customer Service', 'Sales', 'Teamwork'],
  },
  {
    type: 'education',
    title: 'Bachelor in Computer Science — 1st Year',
    organisation: 'Epitech',
    period: 'Sept. 2025 — 2028+',
    description:
      'Currently enrolled in the Bachelor program at Epitech — an innovative, project-based school with no traditional lectures. Learning by doing through team projects in C, Python, web development, and more. Objective: specialise in cybersecurity in upcoming years.',
    tags: ['Python', 'Linux', 'Web', 'Cybersecurity (goal)'],
  },
  {
    type: 'project',
    title: 'Independent Trader — Prop Firm',
    organisation: 'Self-employed',
    period: 'Sept. 2025 — Present',
    description:
      'Trading independently alongside studies at Epitech, working with a prop firm. Focus on technical analysis, chart reading, risk management, and building consistent trading strategies.',
    tags: ['Trading', 'Technical Analysis', 'Risk Management', 'Finance'],
  },
]

const TYPE_STYLES = {
  work: { dot: 'bg-accent', label: 'Work', badge: 'bg-accent/10 text-accent border-accent/30' },
  education: { dot: 'bg-green-400', label: 'Education', badge: 'bg-green-400/10 text-green-400 border-green-400/30' },
  project: { dot: 'bg-purple-400', label: 'Project', badge: 'bg-purple-400/10 text-purple-400 border-purple-400/30' },
}

function ExperienceItem({ title, organisation, period, description, tags, type, isLast }) {
  const style = TYPE_STYLES[type]
  return (
    <div className="relative flex gap-6 md:gap-10">
  
      <div className="flex flex-col items-center">
        <div className={`w-4 h-4 rounded-full border-2 border-navy-950 ${style.dot} shadow-lg mt-1 flex-shrink-0`} />
        {!isLast && <div className="w-0.5 flex-1 bg-white/10 mt-2" />}
      </div>

      
      <div className={`card flex-1 mb-8 ${isLast ? '' : ''}`}>
        <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
          <div>
            <h3 className="text-white font-semibold text-lg">{title}</h3>
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

        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2.5 py-1 rounded-md bg-navy-700 text-gray-400 border border-white/5"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function Experiences() {
  return (
    <section id="experiences" className="py-24 bg-navy-900 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

      <div className="section-container">
        <div className="text-center mb-14">
          <p className="text-accent font-mono text-sm uppercase tracking-widest mb-2">My journey</p>
          <h2 className="section-title">Experiences</h2>
          <div className="w-12 h-1 bg-accent rounded-full mx-auto mb-4" />
          <p className="section-subtitle">Education, work, and notable projects over the years.</p>
        </div>

       
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.entries(TYPE_STYLES).map(([key, { dot, label }]) => (
            <span key={key} className="flex items-center gap-2 text-gray-400 text-sm">
              <span className={`w-3 h-3 rounded-full ${dot}`} />
              {label}
            </span>
          ))}
        </div>

        
        <div className="max-w-3xl mx-auto">
          {EXPERIENCES.map((exp, i) => (
            <ExperienceItem
              key={exp.title}
              {...exp}
              isLast={i === EXPERIENCES.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
