import { useState, useEffect } from 'react'

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experiences', href: '#experiences' },
  { label: 'Contact Me', href: '#contact' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('#home')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (href) => {
    setActive(href)
    setMenuOpen(false)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-navy-950/95 backdrop-blur-sm shadow-lg shadow-black/20' : 'bg-transparent'
      }`}
    >
      <div className="section-container">
        <nav className="flex items-center justify-between h-16 lg:h-20" aria-label="Main navigation">
         
          <a
            href="#home"
            onClick={() => handleNav('#home')}
            className="font-mono text-lg font-semibold text-white hover:text-accent transition-colors"
          >
            <span className="text-accent">&lt;/&gt;</span>{' '}
            <span>Tom Gallice</span>
          </a>

          
          <ul className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map(({ label, href }) => (
              <li key={href}>
                <a
                  href={href}
                  onClick={() => handleNav(href)}
                  className={`relative px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                    active === href
                      ? 'text-accent'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {active === href && (
                    <span className="absolute inset-x-2 bottom-0 h-0.5 bg-accent rounded-full" />
                  )}
                  {label}
                </a>
              </li>
            ))}
          </ul>

         
          <button
            className="lg:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5 rounded-md hover:bg-white/10 transition-colors"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((o) => !o)}
          >
            <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </nav>
      </div>

      
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 bg-navy-900/98 backdrop-blur-sm border-t border-white/5 ${
          menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <ul className="section-container py-4 flex flex-col gap-1">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                onClick={() => handleNav(href)}
                className={`block px-4 py-3 rounded-md text-sm font-medium transition-colors ${
                  active === href
                    ? 'text-accent bg-accent/10'
                    : 'text-gray-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}
