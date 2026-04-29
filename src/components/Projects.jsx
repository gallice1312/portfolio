const PROJECTS = [
  {
    title: 'Trading — Becoming a Profitable Trader',
    description:
      'An ongoing personal journey to become a consistently profitable trader. Working with a prop firm, applying rigorous technical analysis and risk management on real markets. This project is as much about mindset and discipline as it is about strategy — tracking performance, refining setups, and building a structured trading process over time.',
    tags: ['Risk Management', 'Technical Analysis', 'TradingView'],
    image: 'https://placehold.co/600x340/0d1f0d/22c55e?text=Trading+%F0%9F%93%88',
    featured: true,
  },
  {
    title: 'Bookworm — NLP Engine',
    description:
      'NLP engine developed at Epitech that analyses books from Project Gutenberg and generates structured "book cards". Covers lexical diversity, topic modelling, named entity recognition, text summarisation, and book similarity using TF-IDF and cosine distance.',
    tags: ['Python', 'spaCy', 'scikit-learn', 'NLTK', 'pandas', 'NLP'],
    image: 'https://placehold.co/600x340/161b22/3b82f6?text=Bookworm+NLP',
    featured: false,
  },
  {
    title: 'Eliza — AI Movie Chatbot',
    description:
      'Conversational chatbot with a Flask backend integrating an LLM and a movie API. Features user authentication, session management, and a vanilla JS / Nginx frontend. Deployed with Docker Compose.',
    tags: ['Python', 'Flask', 'LLM', 'Docker', 'Nginx', 'JavaScript'],
    image: 'https://placehold.co/600x340/161b22/3b82f6?text=Eliza+Chatbot',
    featured: false,
  },
  {
    title: 'E-Todo — Full-Stack Task Manager',
    description:
      'Full-stack todo application with user authentication (JWT + bcrypt), a REST API documented with Swagger, and a React + TailwindCSS frontend. Stack: Node.js / Express backend with MySQL, containerised with Docker.',
    tags: ['React', 'Node.js', 'Express', 'MySQL', 'JWT', 'Docker', 'TailwindCSS'],
    image: 'https://placehold.co/600x340/161b22/3b82f6?text=E-Todo',
    featured: false,
  },
  {
    title: 'Hack Juice — CTF OWASP',
    description:
      'CTF challenges on the OWASP Juice Shop platform (difficulty 3–4). Exploited SQL Injection for authentication bypass, Broken Access Control (basket manipulation, forged reviews/feedback, Easter Egg), and Improper Input Validation (admin registration, null byte injection).',
    tags: ['CTF', 'SQL Injection', 'OWASP', 'Cybersecurity', 'Pentesting'],
    image: 'https://placehold.co/600x340/161b22/22c55e?text=Hack+Juice+CTF',
    featured: false,
  },
  {
    title: 'Portfolio — This Website',
    description:
      'Personal developer portfolio built from scratch with React, Vite, and TailwindCSS. Single-page app with smooth scroll navigation, responsive layout, dark theme, and animated components.',
    tags: ['React', 'Vite', 'TailwindCSS', 'JavaScript'],
    image: 'https://placehold.co/600x340/161b22/3b82f6?text=Portfolio',
    featured: false,
  },
]

function ProjectCard({ title, description, tags, image, featured }) {
  return (
    <article className={`card group flex flex-col overflow-hidden p-0 ${featured ? 'md:col-span-2' : ''}`}>
     
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={`${title} preview`}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {featured && (
          <span className="absolute top-3 left-3 bg-accent text-white text-xs font-semibold px-2.5 py-1 rounded-full">
            Featured
          </span>
        )}
      </div>

    
      <div className="flex flex-col flex-1 p-6 gap-4">
        <h3 className="text-white font-bold text-lg group-hover:text-accent transition-colors">
          {title}
        </h3>
        <p className="text-gray-400 text-sm leading-relaxed flex-1">{description}</p>

       
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2.5 py-1 rounded-md bg-accent/10 text-accent-light border border-accent/20"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

      <div className="section-container">
        <div className="text-center mb-14">
          <p className="text-accent font-mono text-sm uppercase tracking-widest mb-2">What I've built</p>
          <h2 className="section-title">Recent Projects</h2>
          <div className="w-12 h-1 bg-accent rounded-full mx-auto mb-4" />
          <p className="section-subtitle">A selection of projects I've worked on at Epitech and beyond.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  )
}
