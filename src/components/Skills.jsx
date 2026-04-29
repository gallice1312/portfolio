const SKILL_CATEGORIES = [
  {
    category: 'Frontend',
    skills: [
      { name: 'React', level: 80, icon: '⚛️' },
      { name: 'JavaScript', level: 85, icon: '𝗝𝗦' },
      { name: 'HTML & CSS', level: 90, icon: '🌐' },
      { name: 'TailwindCSS', level: 75, icon: '🎨' },
      { name: 'Vite', level: 70, icon: '⚡' },
    ],
  },
  {
    category: 'Backend',
    skills: [
      { name: 'Python', level: 85, icon: '🐍' },
      { name: 'Flask', level: 70, icon: '🌶️' },
      { name: 'Node.js', level: 75, icon: '🟩' },
      { name: 'MySQL', level: 65, icon: '🗄️' },
    ],
  },
  {
    category: 'Tools & Security',
    skills: [
      { name: 'Git', level: 85, icon: '🐙' },
      { name: 'Docker', level: 65, icon: '🐳' },
      { name: 'CTF / OWASP', level: 65, icon: '🔐' },
      { name: 'Nginx', level: 55, icon: '🌐' },
    ],
  },
]

const TECH_BADGES = [
  'Python', 'React', 'Node.js', 'Flask', 'JavaScript',
  'TailwindCSS', 'Docker', 'MySQL', 'Nginx', 'JWT',
  'spaCy', 'scikit-learn', 'NLP', 'REST API', 'Linux',
]

function SkillBar({ name, level, icon }) {
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between text-sm">
        <span className="flex items-center gap-2 text-gray-200 font-medium">
          <span className="text-base">{icon}</span>
          {name}
        </span>
        <span className="text-accent font-mono text-xs">{level}%</span>
      </div>
      <div className="h-1.5 bg-navy-700 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-accent to-accent-light rounded-full transition-all duration-1000"
          style={{ width: `${level}%` }}
        />
      </div>
    </div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-navy-900 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

      <div className="section-container">
        <div className="text-center mb-14">
          <p className="text-accent font-mono text-sm uppercase tracking-widest mb-2">What I work with</p>
          <h2 className="section-title">My Skills</h2>
          <div className="w-12 h-1 bg-accent rounded-full mx-auto mb-4" />
          <p className="section-subtitle">
            A curated stack of technologies I use to build great products.
          </p>
        </div>

        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {SKILL_CATEGORIES.map(({ category, skills }) => (
            <div key={category} className="card space-y-5">
              <h3 className="text-white font-semibold text-lg border-b border-white/5 pb-3">
                {category}
              </h3>
              {skills.map((skill) => (
                <SkillBar key={skill.name} {...skill} />
              ))}
            </div>
          ))}
        </div>

     
        <div className="text-center">
          <p className="text-gray-500 text-sm uppercase tracking-widest mb-6">Also familiar with</p>
          <div className="flex flex-wrap justify-center gap-3">
            {TECH_BADGES.map((badge) => (
              <span
                key={badge}
                className="px-4 py-2 rounded-full text-sm font-medium border border-white/10 text-gray-300 bg-navy-800 hover:border-accent/50 hover:text-accent transition-all duration-200"
              >
                {badge}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
