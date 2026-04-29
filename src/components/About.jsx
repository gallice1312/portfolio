const PASSIONS = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Tech & Dev',
    description: 'Passionate about computer science since childhood, inspired by my father.',
    color: 'text-accent border-accent/30 bg-accent/5',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
      </svg>
    ),
    title: 'Trading',
    description: 'Strong interest in finance, trading, and technical analysis.',
    color: 'text-emerald-400 border-emerald-400/30 bg-emerald-400/5',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Tennis',
    description: 'Competitive tennis player since age 3 — sport is a core part of who I am.',
    color: 'text-yellow-400 border-yellow-400/30 bg-yellow-400/5',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
    title: 'Cybersecurity',
    description: 'Future goal: specialise in cybersecurity in the coming years.',
    color: 'text-rose-400 border-rose-400/30 bg-rose-400/5',
  },
]

export default function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Photo */}
          <div className="relative flex justify-center lg:justify-start">
            <div className="relative w-72 h-80 sm:w-80 sm:h-96">
              <div className="absolute top-4 left-4 w-full h-full rounded-2xl border-2 border-accent/30" />
              <div className="relative w-full h-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                <img
                  src="/image/tomNoir-removebg-preview.png"
                  alt="Tom Gallice"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-accent rounded-xl px-4 py-3 shadow-lg shadow-accent/25">
                <p className="text-2xl font-bold text-white leading-none">Epitech</p>
                <p className="text-xs text-white/80 mt-0.5">Since 2025</p>
              </div>
            </div>
          </div>

          
          <div className="space-y-6">
            <div>
              <p className="text-accent font-mono text-sm uppercase tracking-widest mb-2">
                Get to know me
              </p>
              <h2 className="section-title">About Me</h2>
              <div className="w-12 h-1 bg-accent rounded-full mb-6" />
            </div>

            <div className="space-y-4 text-gray-400 leading-relaxed">
              <p>
                Hi! I'm <span className="text-white font-medium">Tom Gallice</span>, an Epitech student
                since September 2025. My passion for computer science started in childhood — inspired
                by my father, it was an obvious choice to pursue studies in this field.
              </p>
              <p>
                Alongside tech, I developed a strong interest in <span className="text-emerald-400 font-medium">finance and trading</span>,
                particularly technical analysis, which I now practice independently alongside my studies.
              </p>
              <p>
                Sport is equally important to me — I've been playing
                <span className="text-yellow-400 font-medium"> tennis competitively since the age of 3</span>.
                Discipline on the court carries over directly into how I approach code.
              </p>
              <p>
                Looking ahead, my goal is to <span className="text-rose-400 font-medium">specialise in cybersecurity</span> in the coming years.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              <a href="#contact" className="btn-primary">
                Let's Talk
              </a>
              <a href="#" download className="btn-outline">
                Download CV
              </a>
            </div>
          </div>
        </div>

        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-20">
          {PASSIONS.map(({ icon, title, description, color }) => (
            <div
              key={title}
              className={`card border hover:-translate-y-1 transition-all duration-300 ${color}`}
            >
              <div className="mb-3">{icon}</div>
              <h3 className="text-white font-semibold text-sm mb-1">{title}</h3>
              <p className="text-gray-500 text-xs leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
