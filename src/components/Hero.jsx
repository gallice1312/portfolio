import { useState, useRef } from 'react'
import { m, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion'
import Magnetic from './motion/Magnetic'
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  ArrowDownIcon,
  ArrowRightIcon,
  TerminalIcon,
  LinkedInIcon,
  GitHubIcon,
} from './Icons'

const SLIDES = [
  {
    title: "I'm Tom Gallice,",
    role: 'Epitech Student & Developer',
    description:
      'Passionate about computer science since childhood, currently in my 1st year at Epitech. I build web apps, explore systems, and aim to specialise in cybersecurity.',
    image: '/image/tomNoir-removebg-preview.png',
    objectPosition: 'center',
  },
  {
    title: "I'm Tom Gallice,",
    role: 'Independent Trader',
    description:
      'Alongside my studies, I trade independently with a prop firm. Strong focus on technical analysis, chart reading, and disciplined risk management.',
    image: '/image/tom-trading.png',
    objectPosition: 'center',
  },
  {
    title: "I'm Tom Gallice,",
    role: 'Competitive Tennis Player',
    description:
      'Playing competitive tennis since the age of 3. The discipline and focus I build on the court carry over directly into how I approach every technical challenge.',
    image: '/image/tom-tennis.png',
    objectPosition: 'center',
  },
]

function TiltPhoto({ image, objectPosition, slideKey }) {
  const ref = useRef(null)
  const rx = useMotionValue(0)
  const ry = useMotionValue(0)
  const srx = useSpring(rx, { stiffness: 200, damping: 24 })
  const sry = useSpring(ry, { stiffness: 200, damping: 24 })
  const rotateX = useTransform(srx, (v) => `${v}deg`)
  const rotateY = useTransform(sry, (v) => `${v}deg`)

  const onMove = (e) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const cx = rect.left + rect.width / 2
    const cy = rect.top + rect.height / 2
    const dx = (e.clientX - cx) / (rect.width / 2)
    const dy = (e.clientY - cy) / (rect.height / 2)
    rx.set(-dy * 5)
    ry.set(dx * 5)
  }
  const onLeave = () => {
    rx.set(0)
    ry.set(0)
  }

  return (
    <m.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className="relative"
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d', perspective: 1000 }}
    >
      <div
        aria-hidden
        className="absolute -inset-8 rounded-full bg-accent/15 blur-3xl opacity-60"
      />
      <div className="relative w-56 h-56 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-accent/30 shadow-2xl shadow-accent/20">
        <AnimatePresence mode="sync">
          <m.img
            key={slideKey}
            src={image}
            alt="Tom Gallice"
            initial={{ opacity: 0, scale: 1.06 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.04 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0 w-full h-full object-cover"
            style={{ objectPosition }}
            draggable={false}
          />
        </AnimatePresence>
      </div>
      <div
        aria-hidden
        className="absolute inset-0 rounded-full border border-dashed border-accent/25 scale-110 animate-spin-slow pointer-events-none"
      />
      <div
        aria-hidden
        className="absolute inset-0 rounded-full border border-white/5 scale-[1.18] animate-spin-very-slow pointer-events-none"
      />

      <div className="absolute bottom-4 right-0 bg-navy-800/95 backdrop-blur border border-white/10 rounded-full px-3 py-1.5 flex items-center gap-2 text-xs font-medium shadow-lg">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400/60 animate-pulse-ring" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
        </span>
        Available for work
      </div>
    </m.div>
  )
}

const titleVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -10 },
}

export default function Hero() {
  const [current, setCurrent] = useState(0)
  const prev = () => setCurrent((c) => (c - 1 + SLIDES.length) % SLIDES.length)
  const next = () => setCurrent((c) => (c + 1) % SLIDES.length)
  const { title, role, description, image, objectPosition } = SLIDES[current]

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden pt-20"
    >
      <div
        aria-hidden
        className="absolute -top-40 -left-40 w-96 h-96 bg-accent/10 rounded-full blur-3xl pointer-events-none"
      />
      <div
        aria-hidden
        className="absolute -bottom-40 -right-40 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none"
      />

      <div className="section-container w-full">
        <div className="grid lg:grid-cols-[1fr_auto_1fr] items-center gap-8 lg:gap-12 py-12">
          <div className="flex flex-col gap-6 order-2 lg:order-1 text-center lg:text-left">
            <AnimatePresence mode="wait">
              <m.div
                key={current}
                variants={titleVariants}
                initial="hidden"
                animate="show"
                exit="exit"
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="space-y-3"
              >
                <p className="text-accent font-mono text-sm uppercase tracking-widest">
                  Welcome to my portfolio
                </p>
                <h1 className="text-4xl sm:text-5xl xl:text-6xl font-extrabold leading-tight">
                  {title}
                  <br />
                  <span className="text-gradient-accent">{role}</span>
                </h1>
                <p className="text-gray-400 text-lg max-w-md mx-auto lg:mx-0 leading-relaxed">
                  {description}
                </p>
              </m.div>
            </AnimatePresence>

            <m.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.6 }}
              className="flex flex-wrap gap-3 justify-center lg:justify-start"
            >
              <Magnetic strength={0.18}>
                <a href="#projects" className="btn-primary">
                  View Projects
                  <ArrowRightIcon className="w-4 h-4" />
                </a>
              </Magnetic>
              <Magnetic strength={0.18}>
                <a href="#contact" className="btn-outline">
                  Contact Me
                </a>
              </Magnetic>
            </m.div>

            <m.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex justify-center lg:justify-start mt-4"
            >
              <m.a
                href="#about"
                aria-label="Scroll to about"
                animate={{ y: [0, 4, 0] }}
                transition={{ y: { duration: 2, repeat: Infinity, ease: 'easeInOut' } }}
                whileHover={{ scale: 1.08 }}
                className="w-11 h-11 rounded-full border border-accent/60 flex items-center justify-center text-accent hover:bg-accent hover:text-white hover:border-accent transition-colors"
              >
                <ArrowDownIcon className="w-4 h-4" />
              </m.a>
            </m.div>
          </div>

          <div className="relative flex items-center justify-center order-1 lg:order-2">
            <Magnetic strength={0.25}>
              <m.button
                onClick={prev}
                aria-label="Previous slide"
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.94 }}
                className="absolute -left-6 lg:-left-14 z-10 w-10 h-10 rounded-full bg-navy-800/80 backdrop-blur border border-white/10 flex items-center justify-center text-gray-400 hover:text-accent hover:border-accent/60 transition-colors"
              >
                <ChevronLeftIcon />
              </m.button>
            </Magnetic>

            <TiltPhoto image={image} objectPosition={objectPosition} slideKey={current} />

            <Magnetic strength={0.25}>
              <m.button
                onClick={next}
                aria-label="Next slide"
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.94 }}
                className="absolute -right-6 lg:-right-14 z-10 w-10 h-10 rounded-full bg-navy-800/80 backdrop-blur border border-white/10 flex items-center justify-center text-gray-400 hover:text-accent hover:border-accent/60 transition-colors"
              >
                <ChevronRightIcon />
              </m.button>
            </Magnetic>
          </div>

          <m.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="flex flex-col gap-4 order-3"
          >
            <m.div
              whileHover={{ y: -4 }}
              transition={{ type: 'spring', stiffness: 280, damping: 24 }}
              className="card group"
            >
              <p className="text-xs font-mono text-accent uppercase tracking-widest mb-2 inline-flex items-center gap-2">
                <TerminalIcon className="w-3.5 h-3.5" />
                About Me
              </p>
              <p className="text-gray-300 text-sm leading-relaxed">
                Epitech student, independent trader, and competitive tennis player. I build things, analyse markets, and aim for cybersecurity.
              </p>
              <a
                href="#about"
                className="inline-flex items-center gap-1.5 mt-3 text-accent text-xs font-semibold hover:gap-2 transition-all"
              >
                LEARN MORE
                <ArrowRightIcon className="w-3 h-3" />
              </a>
            </m.div>

            <m.div
              whileHover={{ y: -4 }}
              transition={{ type: 'spring', stiffness: 280, damping: 24 }}
              className="card"
            >
              <p className="text-xs font-mono text-accent uppercase tracking-widest mb-3">
                Follow Me
              </p>
              <div className="flex items-center gap-3">
                <Magnetic strength={0.2}>
                  <m.a
                    href="https://www.linkedin.com/in/tom-gallice-b2ab2733b/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    whileHover={{ y: -3 }}
                    className="w-10 h-10 rounded-lg bg-navy-700 border border-white/5 flex items-center justify-center text-gray-400 hover:text-accent hover:border-accent/40 transition-colors"
                  >
                    <LinkedInIcon />
                  </m.a>
                </Magnetic>
                <Magnetic strength={0.2}>
                  <m.a
                    href="https://github.com/gallice1312"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    whileHover={{ y: -3 }}
                    className="w-10 h-10 rounded-lg bg-navy-700 border border-white/5 flex items-center justify-center text-gray-400 hover:text-accent hover:border-accent/40 transition-colors"
                  >
                    <GitHubIcon />
                  </m.a>
                </Magnetic>
              </div>
            </m.div>
          </m.div>
        </div>

        <div className="flex justify-center gap-2 pb-8">
          {SLIDES.map((_, i) => (
            <m.button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`Go to slide ${i + 1}`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              animate={{ width: i === current ? 32 : 8 }}
              transition={{ type: 'spring', stiffness: 280, damping: 26 }}
              className={`h-1.5 rounded-full transition-colors duration-300 ${
                i === current ? 'bg-accent' : 'bg-white/15 hover:bg-white/30'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
