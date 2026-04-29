import { useState } from 'react'

const SLIDES = [
  {
    title: "I'm Tom Gallice,",
    role: 'Epitech Student & Developer',
    description:
      'Passionate about computer science since childhood, currently in my 1st year at Epitech. I build web apps, explore systems, and aim to specialise in cybersecurity.',
  },
  {
    title: "I'm Tom Gallice,",
    role: 'Independent Trader',
    description:
      'Alongside my studies, I trade independently with a prop firm. Strong focus on technical analysis, chart reading, and disciplined risk management.',
  },
  {
    title: "I'm Tom Gallice,",
    role: 'Competitive Tennis Player',
    description:
      'Playing competitive tennis since the age of 3. The discipline and focus I build on the court carry over directly into how I approach every technical challenge.',
  },
]

export default function Hero() {
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent((c) => (c - 1 + SLIDES.length) % SLIDES.length)
  const next = () => setCurrent((c) => (c + 1) % SLIDES.length)

  const { title, role, description } = SLIDES[current]

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden pt-20"
    >
      
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-accent/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="section-container w-full">
        <div className="grid lg:grid-cols-[1fr_auto_1fr] items-center gap-8 lg:gap-12 py-12">

        
          <div className="flex flex-col gap-6 order-2 lg:order-1 text-center lg:text-left">
            <div className="space-y-3 animate-fade-up">
              <p className="text-accent font-mono text-sm uppercase tracking-widest">
                Welcome to my portfolio
              </p>
              <h1 className="text-4xl sm:text-5xl xl:text-6xl font-extrabold leading-tight">
                {title}
                <br />
                <span className="text-accent">{role}</span>
              </h1>
              <p className="text-gray-400 text-lg max-w-md mx-auto lg:mx-0 leading-relaxed">
                {description}
              </p>
            </div>

            <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
              <a href="#projects" className="btn-primary">
                View Projects
              </a>
              <a href="#contact" className="btn-outline">
                Contact Me
              </a>
            </div>

            
            <div className="flex justify-center lg:justify-start mt-4">
              <a
                href="#about"
                aria-label="Scroll to about"
                className="w-11 h-11 rounded-full border-2 border-accent flex items-center justify-center text-accent hover:bg-accent hover:text-white transition-all duration-200 animate-bounce-slow"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </a>
            </div>
          </div>

          
          <div className="relative flex items-center justify-center order-1 lg:order-2">
           
            <button
              onClick={prev}
              aria-label="Previous slide"
              className="absolute -left-6 lg:-left-10 z-10 w-10 h-10 rounded-full bg-navy-800 border border-white/10 flex items-center justify-center text-gray-400 hover:text-accent hover:border-accent transition-all"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            
            <div className="relative">
              <div className="w-56 h-56 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-accent/30 shadow-2xl shadow-accent/10">
                <img
                  src="/image/tomNoir-removebg-preview.png"
                  alt="Tom Gallice"
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-accent/20 scale-110 animate-[spin_20s_linear_infinite]" />
              
              <div className="absolute bottom-4 right-0 bg-navy-800 border border-white/10 rounded-full px-3 py-1.5 flex items-center gap-2 text-xs font-medium shadow-lg">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                Available for work
              </div>
            </div>

            
            <button
              onClick={next}
              aria-label="Next slide"
              className="absolute -right-6 lg:-right-10 z-10 w-10 h-10 rounded-full bg-navy-800 border border-white/10 flex items-center justify-center text-gray-400 hover:text-accent hover:border-accent transition-all"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          
          <div className="flex flex-col gap-4 order-3">
            
            <div className="card group">
              <p className="text-xs font-mono text-accent uppercase tracking-widest mb-2">
                About Me
              </p>
              <p className="text-gray-300 text-sm leading-relaxed">
                Epitech student, independent trader, and competitive tennis player. I build things, analyse markets, and aim for cybersecurity.
              </p>
              <a
                href="#about"
                className="inline-flex items-center gap-1 mt-3 text-accent text-xs font-semibold hover:gap-2 transition-all"
              >
                LEARN MORE
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>

       
            <div className="card">
              <p className="text-xs font-mono text-accent uppercase tracking-widest mb-3">
                Follow Me
              </p>
              <div className="flex items-center gap-3">
                <a
                  href="https://www.linkedin.com/in/tom-gallice-b2ab2733b/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="w-10 h-10 rounded-lg bg-navy-700 border border-white/5 flex items-center justify-center text-gray-400 hover:text-accent hover:border-accent/50 transition-all"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a
                  href="https://github.com/gallice1312"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="w-10 h-10 rounded-lg bg-navy-700 border border-white/5 flex items-center justify-center text-gray-400 hover:text-accent hover:border-accent/50 transition-all"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

        </div>

        
        <div className="flex justify-center gap-2 pb-8">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === current ? 'w-8 bg-accent' : 'w-2 bg-white/20 hover:bg-white/40'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
