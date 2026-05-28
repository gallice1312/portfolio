import { useEffect, useState } from 'react'
import { m, AnimatePresence } from 'framer-motion'
import { Reveal, Stagger, StaggerItem } from './motion/Reveal'
import ProjectBanner from './ProjectBanners'
import { StarIcon } from './Icons'

const PROJECTS = [
  {
    title: 'Trading — Becoming a Profitable Trader',
    description:
      'An ongoing personal journey to become a consistently profitable trader. Working with a prop firm, applying rigorous technical analysis and risk management on real markets.',
    longDescription:
      'A long-term personal project focused on building the mindset, discipline and process of a professional discretionary trader. I work with a proprietary trading firm on funded accounts, applying multi-timeframe technical analysis, structured risk management and journaling on every trade. The project is as much about psychology and consistency as it is about strategy — tracking performance, refining setups, and iterating on a written trading plan over time.',
    highlights: [
      'Funded account with a proprietary trading firm',
      'Top-down technical analysis on Forex & indices',
      'Strict risk management (fixed R per trade, daily loss limits)',
      'Trade journaling and performance review every week',
      'Strategy iteration based on statistics, not feelings',
    ],
    tags: ['Risk Management', 'Technical Analysis', 'TradingView'],
    banner: 'trading',
    role: 'Solo — personal project',
    year: '2024 — ongoing',
    status: 'In progress',
    featured: true,
  },
  {
    title: 'WinFlow — Trading Journal & AI Coach',
    description:
      'Web app for traders to journal trades, track performance and analyse the psychological side of trading. Comes with an integrated AI coach that debriefs your mindset and answers trading questions.',
    longDescription:
      'WinFlow is a full-stack Next.js application built as an Epitech end-of-year project. It gives traders a single place to log their trades, monitor account-level risk rules (max daily loss, profit target, etc.), and dig into advanced statistics — winrate, P&L, expectancy, per-pair breakdown. On top of the journal, a dedicated Psychology / Mindset module tracks emotions and quantifies their impact on results. An AI coach powered by Groq LLMs (llama-3.3-70b) discusses your sessions and helps reframe your mindset.',
    highlights: [
      'Secure auth with NextAuth + Prisma adapter',
      'Multi-account trading journal with risk rules engine',
      'Advanced stats: winrate, P&L, expectancy, per-pair breakdown',
      'Mindset / psychology module linking emotions to results',
      'AI trading coach powered by Groq LLMs (llama-3.3-70b)',
      'PostgreSQL + Prisma, responsive UI, ready for Vercel / Railway deploy',
    ],
    tags: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'NextAuth', 'Groq AI', 'TailwindCSS'],
    banner: 'winflow',
    role: 'Team project — Epitech YEP',
    year: '2026',
    status: 'In progress',
    featured: false,
  },
  {
    title: 'Bookworm — NLP Engine',
    description:
      'NLP engine that analyses books from Project Gutenberg and generates structured "book cards" — lexical diversity, topics, entities, summary and similarity.',
    longDescription:
      'Academic project at Epitech. Bookworm is a Python NLP engine that ingests raw books from Project Gutenberg and outputs a structured "book card" describing each title across several dimensions. The pipeline combines classical NLP (tokenisation, lemmatisation, NER) with statistical models (TF-IDF, cosine similarity) and topic modelling to produce a compact, comparable representation of any book.',
    highlights: [
      'Lexical diversity and readability metrics',
      'Topic modelling with LDA',
      'Named Entity Recognition via spaCy',
      'Extractive text summarisation',
      'Book-to-book similarity using TF-IDF + cosine distance',
    ],
    tags: ['Python', 'spaCy', 'scikit-learn', 'NLTK', 'pandas', 'NLP'],
    banner: 'bookworm',
    role: 'Team project — Epitech',
    year: '2026',
    status: 'Completed',
    featured: false,
  },
  {
    title: 'Eliza — AI Movie Chatbot',
    description:
      'Conversational chatbot with a Flask backend integrating an LLM and a movie API. Authentication, sessions, vanilla JS / Nginx frontend, deployed with Docker Compose.',
    longDescription:
      'Eliza is a full-stack conversational chatbot focused on cinema. The backend (Flask) orchestrates an LLM with a movie API to answer questions about films, actors and recommendations. It handles user authentication, persistent sessions and rate-limiting. The frontend is a lightweight vanilla JS / Nginx stack, and the whole project is containerised with Docker Compose for one-command deployment.',
    highlights: [
      'LLM integration with prompt engineering for movie context',
      'User authentication and session management',
      'External movie API integration',
      'Vanilla JS frontend served by Nginx',
      'Reproducible deployment via Docker Compose',
    ],
    tags: ['Python', 'Flask', 'LLM', 'Docker', 'Nginx', 'JavaScript'],
    banner: 'eliza',
    role: 'Team project — Epitech',
    year: '2026',
    status: 'Completed',
    featured: false,
  },
  {
    title: 'E-Todo — Full-Stack Task Manager',
    description:
      'Full-stack todo application with JWT authentication, a REST API documented with Swagger, and a React + TailwindCSS frontend. Node.js / Express backend with MySQL.',
    longDescription:
      'E-Todo is a complete full-stack task manager built end-to-end. The backend exposes a documented REST API (Swagger / OpenAPI) over Node.js + Express, with JWT authentication and bcrypt password hashing. Data is persisted in MySQL. The frontend is a responsive React + TailwindCSS app consuming the API. The whole stack is containerised with Docker for easy local setup.',
    highlights: [
      'JWT authentication with bcrypt-hashed passwords',
      'REST API documented with Swagger / OpenAPI',
      'MySQL persistence with parameterised queries',
      'React + TailwindCSS frontend, fully responsive',
      'Dockerised stack for one-command setup',
    ],
    tags: ['React', 'Node.js', 'Express', 'MySQL', 'JWT', 'Docker', 'TailwindCSS'],
    banner: 'etodo',
    role: 'Team project — Epitech',
    year: '2025',
    status: 'Completed',
    featured: false,
  },
  {
    title: 'Hack Juice — CTF OWASP',
    description:
      'CTF challenges on the OWASP Juice Shop platform (difficulty 3–4). SQL Injection, Broken Access Control, Improper Input Validation and more.',
    longDescription:
      'Capture-The-Flag write-ups on the OWASP Juice Shop, the reference vulnerable web application. I focused on difficulty 3–4 challenges to practise modern web exploitation techniques. Every challenge is documented with the vulnerability, the exploit, and the corresponding OWASP Top 10 category, building a personal cheat-sheet for offensive web security.',
    highlights: [
      'SQL Injection for authentication bypass',
      'Broken Access Control — basket manipulation & forged feedback',
      'Improper Input Validation — admin registration, null byte injection',
      'Easter Egg discovery via directory traversal',
      'Each finding mapped to the OWASP Top 10',
    ],
    tags: ['CTF', 'SQL Injection', 'OWASP', 'Cybersecurity', 'Pentesting'],
    banner: 'hackjuice',
    role: 'Solo — personal practice',
    year: '2025',
    status: 'Completed',
    featured: false,
  },
  {
    title: 'Portfolio — This Website',
    description:
      'Personal developer portfolio built from scratch with React, Vite, and TailwindCSS. Smooth scroll, responsive layout, dark theme, animated components.',
    longDescription:
      'The site you are currently browsing. A single-page React app built with Vite and TailwindCSS, designed and shipped from scratch. The focus was on a clean dark theme, smooth scroll navigation between sections, accessible typography, and subtle motion to make the page feel alive without being noisy.',
    highlights: [
      'Single-page React app powered by Vite',
      'TailwindCSS design system with a custom dark palette',
      'Smooth scroll navigation and animated sections',
      'Fully responsive — mobile, tablet and desktop',
      'Lightweight bundle, fast first paint',
    ],
    tags: ['React', 'Vite', 'TailwindCSS', 'JavaScript'],
    banner: 'portfolio',
    role: 'Solo — personal project',
    year: '2025',
    status: 'Live',
    featured: false,
  },
]

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

function ProjectCard({ project, onOpen }) {
  const { title, description, tags, banner, featured, year, status } = project
  return (
    <m.article
      onClick={onOpen}
      whileHover={{ y: -6 }}
      whileTap={{ scale: 0.985 }}
      transition={{ type: 'spring', stiffness: 280, damping: 24 }}
      className="card group relative flex flex-col overflow-hidden p-0 cursor-pointer hover:shadow-2xl hover:shadow-accent/15 h-full"
    >
      <div className={`relative overflow-hidden ${featured ? 'h-64' : 'h-48'}`}>
        <div className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-105">
          <ProjectBanner variant={banner} />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 via-transparent to-transparent" />

        <div className="absolute top-3 left-3 flex gap-2">
          {featured && (
            <span className="bg-accent text-white text-[11px] font-semibold px-2.5 py-1 rounded-full shadow-lg shadow-accent/30 inline-flex items-center gap-1">
              <StarIcon className="w-3 h-3" filled />
              Featured
            </span>
          )}
          {status && (
            <span className="bg-navy-900/80 backdrop-blur text-gray-200 text-[11px] font-medium px-2.5 py-1 rounded-full border border-white/10">
              {status}
            </span>
          )}
        </div>

        {year && (
          <span className="absolute top-3 right-3 bg-navy-900/80 backdrop-blur text-gray-300 text-[11px] font-mono px-2.5 py-1 rounded-full border border-white/10">
            {year}
          </span>
        )}
      </div>

      <div className="flex flex-col flex-1 p-6 gap-4">
        <h3 className="text-white font-bold text-lg group-hover:text-accent transition-colors">
          {title}
        </h3>
        <p className="text-gray-400 text-sm leading-relaxed flex-1">{description}</p>

        <div className="flex flex-wrap gap-2">
          {tags.slice(0, 5).map((tag) => (
            <span
              key={tag}
              className="text-xs px-2.5 py-1 rounded-md bg-accent/10 text-accent-light border border-accent/20"
            >
              {tag}
            </span>
          ))}
          {tags.length > 5 && (
            <span className="text-xs px-2.5 py-1 rounded-md bg-white/5 text-gray-400 border border-white/10">
              +{tags.length - 5}
            </span>
          )}
        </div>

        <div className="flex items-center justify-between pt-3 border-t border-white/5">
          <span className="text-accent text-sm font-medium inline-flex items-center gap-1.5 group-hover:gap-2.5 transition-all">
            View details
            <ArrowRightIcon className="w-4 h-4" />
          </span>
          <span className="text-gray-500 text-xs">Click to open</span>
        </div>
      </div>
    </m.article>
  )
}

function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = prevOverflow
    }
  }, [onClose])

  const { title, longDescription, description, highlights, tags, banner, role, year, status, featured } = project

  return (
    <m.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <m.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="absolute inset-0 bg-navy-950/85 backdrop-blur-md"
      />

      <m.div
        onClick={(e) => e.stopPropagation()}
        initial={{ opacity: 0, scale: 0.85, y: 40 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        transition={{ type: 'spring', stiffness: 280, damping: 22 }}
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-navy-900 border border-white/10 rounded-2xl shadow-2xl shadow-accent/20"
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

        <div className="relative h-56 sm:h-72">
          <ProjectBanner variant={banner} />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/30 to-transparent" />
          <div className="absolute bottom-4 left-6 right-6 flex flex-wrap items-center gap-2">
            {featured && (
              <span className="bg-accent text-white text-[11px] font-semibold px-2.5 py-1 rounded-full inline-flex items-center gap-1">
                <StarIcon className="w-3 h-3" filled />
                Featured
              </span>
            )}
            {status && (
              <span className="bg-navy-900/80 backdrop-blur text-gray-200 text-[11px] font-medium px-2.5 py-1 rounded-full border border-white/10">
                {status}
              </span>
            )}
            {year && (
              <span className="bg-navy-900/80 backdrop-blur text-gray-300 text-[11px] font-mono px-2.5 py-1 rounded-full border border-white/10">
                {year}
              </span>
            )}
          </div>
        </div>

        <div className="p-6 sm:p-8 space-y-6">
          <div>
            <h3 className="text-white font-bold text-2xl sm:text-3xl mb-2">{title}</h3>
            {role && <p className="text-accent text-sm font-mono">{role}</p>}
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

          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-3">
              Stack & tools
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
        </div>
      </m.div>
    </m.div>
  )
}

export default function Projects() {
  const [active, setActive] = useState(null)

  return (
    <section id="projects" className="py-24 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />

      <div className="section-container">
        <Reveal>
          <div className="text-center mb-14">
            <p className="text-accent font-mono text-sm uppercase tracking-widest mb-2">What I've built</p>
            <h2 className="section-title">Recent Projects</h2>
            <m.div
              initial={{ width: 0 }}
              whileInView={{ width: 48 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="h-1 bg-accent rounded-full mx-auto mb-4"
            />
            <p className="section-subtitle">A selection of projects I've worked on at Epitech and beyond — click any card for the full story.</p>
          </div>
        </Reveal>

        <Stagger className="grid md:grid-cols-2 gap-6" staggerChildren={0.1}>
          {PROJECTS.map((project) => (
            <StaggerItem
              key={project.title}
              direction="up"
              className={project.featured ? 'md:col-span-2' : ''}
            >
              <ProjectCard project={project} onOpen={() => setActive(project)} />
            </StaggerItem>
          ))}
        </Stagger>
      </div>

      <AnimatePresence>
        {active && <ProjectModal project={active} onClose={() => setActive(null)} />}
      </AnimatePresence>
    </section>
  )
}
