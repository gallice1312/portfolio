import { m } from 'framer-motion'
import { Stagger, StaggerItem } from './motion/Reveal'

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
    <footer className="bg-navy-900/60 border-t border-white/5 py-10 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />

      <div className="section-container">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <a
            href="#home"
            className="font-mono text-base font-semibold text-white hover:text-accent transition-colors"
          >
            <span className="text-accent">&lt;/&gt;</span> Tom Gallice
          </a>

          <nav aria-label="Footer navigation">
            <Stagger as="ul" className="flex flex-wrap justify-center gap-x-6 gap-y-2" staggerChildren={0.04}>
              {NAV_LINKS.map(({ label, href }) => (
                <StaggerItem as="li" key={href} direction="up">
                  <m.a
                    href={href}
                    whileHover={{ y: -2 }}
                    transition={{ type: 'spring', stiffness: 320, damping: 22 }}
                    className="text-gray-500 hover:text-accent text-sm transition-colors inline-block"
                  >
                    {label}
                  </m.a>
                </StaggerItem>
              ))}
            </Stagger>
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
