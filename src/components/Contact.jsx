import { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'
import { m, AnimatePresence } from 'framer-motion'
import { Reveal, Stagger, StaggerItem } from './motion/Reveal'
import Magnetic from './motion/Magnetic'
import {
  MailIcon,
  MapPinIcon,
  BriefcaseIcon,
  CheckCircleIcon,
  SendIcon,
  LinkedInIcon,
  GitHubIcon,
} from './Icons'

const CONTACT_INFO = [
  { label: 'Email', value: 'tom@gallice.co', Icon: MailIcon },
  { label: 'Location', value: 'Bordeaux, France', Icon: MapPinIcon },
  { label: 'Availability', value: 'Open to opportunities', Icon: BriefcaseIcon },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState('idle')
  const formRef = useRef(null)

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus('sending')

    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      formRef.current,
      { publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY },
    ).then(
      () => setStatus('success'),
      () => setStatus('error'),
    )
  }

  return (
    <section id="contact" className="py-24 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />

      <div className="section-container">
        <Reveal>
          <div className="text-center mb-14">
            <p className="text-accent font-mono text-sm uppercase tracking-widest mb-2">Get in touch</p>
            <h2 className="section-title">Contact Me</h2>
            <m.div
              initial={{ width: 0 }}
              whileInView={{ width: 48 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="h-1 bg-accent rounded-full mx-auto mb-4"
            />
            <p className="section-subtitle">Have a project in mind or just want to say hi? I'd love to hear from you.</p>
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-[1fr_1.6fr] gap-10 max-w-5xl mx-auto">
          <Reveal direction="left">
            <div className="space-y-6">
              <m.div
                whileHover={{ y: -4 }}
                transition={{ type: 'spring', stiffness: 280, damping: 24 }}
                className="card space-y-6"
              >
                <h3 className="text-white font-semibold text-lg">Let's connect</h3>
                <Stagger staggerChildren={0.08} className="space-y-5">
                  {CONTACT_INFO.map(({ label, value, Icon }) => (
                    <StaggerItem key={label} direction="left" className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center text-accent flex-shrink-0">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-gray-500 text-xs uppercase tracking-widest">{label}</p>
                        <p className="text-gray-200 text-sm mt-0.5">{value}</p>
                      </div>
                    </StaggerItem>
                  ))}
                </Stagger>
              </m.div>

              <m.div
                whileHover={{ y: -4 }}
                transition={{ type: 'spring', stiffness: 280, damping: 24 }}
                className="card"
              >
                <p className="text-gray-500 text-xs uppercase tracking-widest mb-4">Find me on</p>
                <div className="flex gap-3">
                  <Magnetic strength={0.2}>
                    <m.a
                      href="https://www.linkedin.com/in/tom-gallice-b2ab2733b/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn"
                      whileHover={{ y: -3 }}
                      className="w-11 h-11 rounded-lg bg-navy-700 border border-white/5 flex items-center justify-center text-gray-400 hover:text-accent hover:border-accent/40 transition-colors"
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
                      className="w-11 h-11 rounded-lg bg-navy-700 border border-white/5 flex items-center justify-center text-gray-400 hover:text-accent hover:border-accent/40 transition-colors"
                    >
                      <GitHubIcon />
                    </m.a>
                  </Magnetic>
                </div>
              </m.div>
            </div>
          </Reveal>

          <Reveal direction="right">
            <div className="card">
              <AnimatePresence mode="wait">
                {status === 'success' ? (
                  <m.div
                    key="success"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.4 }}
                    className="flex flex-col items-center justify-center py-12 text-center gap-4"
                  >
                    <m.div
                      initial={{ scale: 0.6, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ type: 'spring', stiffness: 240, damping: 20, delay: 0.1 }}
                      className="w-16 h-16 rounded-full bg-accent/10 border border-accent/30 flex items-center justify-center text-accent"
                    >
                      <CheckCircleIcon className="w-8 h-8" />
                    </m.div>
                    <h3 className="text-white font-semibold text-xl">Message sent</h3>
                    <p className="text-gray-400 text-sm">Thanks for reaching out. I'll get back to you soon.</p>
                    <button
                      onClick={() => { setStatus('idle'); setForm({ name: '', email: '', subject: '', message: '' }) }}
                      className="btn-outline mt-2"
                    >
                      Send another
                    </button>
                  </m.div>
                ) : (
                  <m.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    ref={formRef}
                    onSubmit={handleSubmit}
                    className="space-y-5"
                    noValidate
                  >
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div className="space-y-1.5">
                        <label htmlFor="name" className="text-xs text-gray-400 uppercase tracking-widest">
                          Name
                        </label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={form.name}
                          onChange={handleChange}
                          placeholder="Your Name"
                          className="w-full bg-navy-700 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-accent/60 focus:ring-2 focus:ring-accent/20 transition-colors"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <label htmlFor="email" className="text-xs text-gray-400 uppercase tracking-widest">
                          Email
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={form.email}
                          onChange={handleChange}
                          placeholder="you@example.com"
                          className="w-full bg-navy-700 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-accent/60 focus:ring-2 focus:ring-accent/20 transition-colors"
                        />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="subject" className="text-xs text-gray-400 uppercase tracking-widest">
                        Subject
                      </label>
                      <input
                        id="subject"
                        name="subject"
                        type="text"
                        value={form.subject}
                        onChange={handleChange}
                        placeholder="What's this about?"
                        className="w-full bg-navy-700 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-accent/60 focus:ring-2 focus:ring-accent/20 transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="message" className="text-xs text-gray-400 uppercase tracking-widest">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Tell me about your project or just say hi..."
                        className="w-full bg-navy-700 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-accent/60 focus:ring-2 focus:ring-accent/20 transition-colors resize-none"
                      />
                    </div>

                    {status === 'error' && (
                      <m.p
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-rose-400 text-sm text-center"
                      >
                        Something went wrong. Please try again or email me directly at tom@gallice.co
                      </m.p>
                    )}

                    <button
                      type="submit"
                      disabled={status === 'sending'}
                      className="btn-primary w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {status === 'sending' ? (
                        <>
                          <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 00-8 8h4z" />
                          </svg>
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <SendIcon className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </m.form>
                )}
              </AnimatePresence>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
