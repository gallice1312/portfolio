import { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'

const CONTACT_INFO = [
  {
    label: 'Email',
    value: 'tom@gallice.co',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    label: 'Location',
    value: 'Bordeaux, France',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    label: 'Availability',
    value: 'Open to opportunities',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | sending | success | error
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
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

      <div className="section-container">
        <div className="text-center mb-14">
          <p className="text-accent font-mono text-sm uppercase tracking-widest mb-2">Get in touch</p>
          <h2 className="section-title">Contact Me</h2>
          <div className="w-12 h-1 bg-accent rounded-full mx-auto mb-4" />
          <p className="section-subtitle">Have a project in mind or just want to say hi? I'd love to hear from you.</p>
        </div>

        <div className="grid lg:grid-cols-[1fr_1.6fr] gap-10 max-w-5xl mx-auto">

          
          <div className="space-y-6">
            <div className="card space-y-6">
              <h3 className="text-white font-semibold text-lg">Let's connect</h3>
              {CONTACT_INFO.map(({ label, value, icon }) => (
                <div key={label} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center text-accent flex-shrink-0">
                    {icon}
                  </div>
                  <div>
                    <p className="text-gray-500 text-xs uppercase tracking-widest">{label}</p>
                    <p className="text-gray-200 text-sm mt-0.5">{value}</p>
                  </div>
                </div>
              ))}
            </div>

            
            <div className="card">
              <p className="text-gray-500 text-xs uppercase tracking-widest mb-4">Find me on</p>
              <div className="flex gap-3">
                <a
                  href="https://www.linkedin.com/in/tom-gallice-b2ab2733b/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="w-11 h-11 rounded-lg bg-navy-700 border border-white/5 flex items-center justify-center text-gray-400 hover:text-accent hover:border-accent/50 transition-all"
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
                  className="w-11 h-11 rounded-lg bg-navy-700 border border-white/5 flex items-center justify-center text-gray-400 hover:text-accent hover:border-accent/50 transition-all"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          
          <div className="card">
            {status === 'success' ? (
              <div className="flex flex-col items-center justify-center py-12 text-center gap-4">
                <div className="w-16 h-16 rounded-full bg-accent/10 border border-accent/30 flex items-center justify-center">
                  <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-white font-semibold text-xl">Message sent!</h3>
                <p className="text-gray-400 text-sm">Thanks for reaching out. I'll get back to you soon.</p>
                <button onClick={() => { setStatus('idle'); setForm({ name: '', email: '', subject: '', message: '' }) }} className="btn-outline mt-2">
                  Send another
                </button>
              </div>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-5" noValidate>
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
                      className="w-full bg-navy-700 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-accent/60 focus:ring-1 focus:ring-accent/30 transition-colors"
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
                      className="w-full bg-navy-700 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-accent/60 focus:ring-1 focus:ring-accent/30 transition-colors"
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
                    className="w-full bg-navy-700 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-accent/60 focus:ring-1 focus:ring-accent/30 transition-colors"
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
                    className="w-full bg-navy-700 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-accent/60 focus:ring-1 focus:ring-accent/30 transition-colors resize-none"
                  />
                </div>

                {status === 'error' && (
                  <p className="text-rose-400 text-sm text-center">
                    Something went wrong. Please try again or email me directly at tom@gallice.co
                  </p>
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
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
