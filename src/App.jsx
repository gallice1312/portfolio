import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experiences from './components/Experiences'
import Contact from './components/Contact'
import Footer from './components/Footer'
import AnimatedBackground from './components/AnimatedBackground'
import ScrollProgress from './components/ScrollProgress'
import CursorGlow from './components/CursorGlow'

export default function App() {
  return (
    <div className="min-h-screen bg-navy-950 relative overflow-x-hidden">
      <AnimatedBackground className="fixed inset-0 z-0" />
      <CursorGlow />
      <ScrollProgress />
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experiences />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  )
}
