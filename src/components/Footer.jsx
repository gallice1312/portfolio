const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experiences', href: '#experiences' },
  { label: 'Contact Me', href: '#contact' },
]

export default function Footer() {
  return (
    <footer className="bg-navy-900 border-t border-white/5 py-10">
      <div className="section-container">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          
          <a href="#home" className="font-mono text-base font-semibold text-white hover:text-accent transition-colors">
            <span className="text-accent">&lt;/&gt;</span> Tom Gallice
          </a>

          
          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2">
              {NAV_LINKS.map(({ label, href }) => (
                <li key={href}>
                  <a
                    href={href}
                    className="text-gray-500 hover:text-accent text-sm transition-colors"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-8 pt-6 border-t border-white/5 text-center">
          <p className="text-gray-600 text-sm">
            © {new Date().getFullYear()} Tom Gallice. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
