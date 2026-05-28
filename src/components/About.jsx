import { m } from 'framer-motion'
import { Reveal, Stagger, StaggerItem } from './motion/Reveal'
import { CodeIcon, TrendingUpIcon, TrophyIcon, ShieldIcon } from './Icons'

const PASSIONS = [
  {
    icon: CodeIcon,
    title: 'Tech & Dev',
    description: 'Passionate about computer science since childhood, inspired by my father.',
    color: 'text-accent border-accent/30 bg-accent/5',
  },
  {
    icon: TrendingUpIcon,
    title: 'Trading',
    description: 'Strong interest in finance, trading, and technical analysis.',
    color: 'text-emerald-400 border-emerald-400/30 bg-emerald-400/5',
  },
  {
    icon: TrophyIcon,
    title: 'Tennis',
    description: 'Competitive tennis player since age 3 — sport is a core part of who I am.',
    color: 'text-yellow-400 border-yellow-400/30 bg-yellow-400/5',
  },
  {
    icon: ShieldIcon,
    title: 'Cybersecurity',
    description: 'Future goal: specialise in cybersecurity in the coming years.',
    color: 'text-rose-400 border-rose-400/30 bg-rose-400/5',
  },
]

export default function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />

      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <Reveal direction="left" duration={0.7}>
            <div className="relative flex justify-center lg:justify-start">
              <m.div
                whileHover={{ y: -4 }}
                transition={{ type: 'spring', stiffness: 220, damping: 22 }}
                className="relative w-72 h-80 sm:w-80 sm:h-96"
              >
                <div className="absolute top-4 left-4 w-full h-full rounded-2xl border border-accent/40" />
                <div className="relative w-full h-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                  <img
                    src="/image/tomNoir-removebg-preview.png"
                    alt="Tom Gallice"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-accent rounded-xl px-4 py-3 shadow-lg shadow-accent/30">
                  <p className="text-2xl font-bold text-white leading-none">Epitech</p>
                  <p className="text-xs text-white/80 mt-0.5">Since 2025</p>
                </div>
              </m.div>
            </div>
          </Reveal>

          <Stagger className="space-y-6" staggerChildren={0.1}>
            <StaggerItem>
              <p className="text-accent font-mono text-sm uppercase tracking-widest mb-2">
                Get to know me
              </p>
              <h2 className="section-title">About Me</h2>
              <m.div
                initial={{ width: 0 }}
                whileInView={{ width: 48 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="h-1 bg-accent rounded-full mb-6"
              />
            </StaggerItem>

            <StaggerItem className="space-y-4 text-gray-400 leading-relaxed">
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
            </StaggerItem>

            <StaggerItem className="flex flex-wrap gap-3 pt-2">
              <a href="#contact" className="btn-primary">
                Let's Talk
              </a>
              <a
                href="/cv/cv-tom-gallice.pdf"
                download="CV-Tom-Gallice.pdf"
                target="_blank"
                rel="noopener"
                className="btn-outline"
              >
                Download CV
              </a>
            </StaggerItem>
          </Stagger>
        </div>

        <Stagger className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-20" staggerChildren={0.08}>
          {PASSIONS.map(({ icon: Icon, title, description, color }) => (
            <StaggerItem key={title} direction="up">
              <m.div
                whileHover={{ y: -6 }}
                transition={{ type: 'spring', stiffness: 280, damping: 24 }}
                className={`card border ${color} cursor-default h-full`}
              >
                <div className="mb-3">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-white font-semibold text-sm mb-1">{title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{description}</p>
              </m.div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  )
}
