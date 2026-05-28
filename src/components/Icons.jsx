const baseProps = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  viewBox: '0 0 24 24',
}

export function CodeIcon({ className = 'w-5 h-5' }) {
  return (
    <svg {...baseProps} className={className}>
      <path d="m16 18 6-6-6-6" />
      <path d="m8 6-6 6 6 6" />
      <path d="m14.5 4-5 16" />
    </svg>
  )
}

export function TrendingUpIcon({ className = 'w-5 h-5' }) {
  return (
    <svg {...baseProps} className={className}>
      <path d="M3 17l6-6 4 4 8-8" />
      <path d="M14 7h7v7" />
    </svg>
  )
}

export function TrophyIcon({ className = 'w-5 h-5' }) {
  return (
    <svg {...baseProps} className={className}>
      <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
      <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
      <path d="M4 22h16" />
      <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
      <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
      <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
    </svg>
  )
}

export function ShieldIcon({ className = 'w-5 h-5' }) {
  return (
    <svg {...baseProps} className={className}>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  )
}

export function LockIcon({ className = 'w-5 h-5' }) {
  return (
    <svg {...baseProps} className={className}>
      <rect x="3" y="11" width="18" height="11" rx="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  )
}

export function MailIcon({ className = 'w-5 h-5' }) {
  return (
    <svg {...baseProps} className={className}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  )
}

export function MapPinIcon({ className = 'w-5 h-5' }) {
  return (
    <svg {...baseProps} className={className}>
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}

export function BriefcaseIcon({ className = 'w-5 h-5' }) {
  return (
    <svg {...baseProps} className={className}>
      <rect x="2" y="7" width="20" height="14" rx="2" />
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </svg>
  )
}

export function StarIcon({ className = 'w-4 h-4', filled = false }) {
  return (
    <svg
      {...baseProps}
      fill={filled ? 'currentColor' : 'none'}
      className={className}
    >
      <path d="M12 2l3 7h7l-5.5 4.5L18 21l-6-4-6 4 1.5-7.5L2 9h7z" />
    </svg>
  )
}

export function CheckCircleIcon({ className = 'w-5 h-5' }) {
  return (
    <svg {...baseProps} className={className}>
      <circle cx="12" cy="12" r="10" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  )
}

export function PaletteIcon({ className = 'w-5 h-5' }) {
  return (
    <svg {...baseProps} className={className}>
      <circle cx="13.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
      <circle cx="17.5" cy="10.5" r="0.8" fill="currentColor" stroke="none" />
      <circle cx="8.5" cy="7.5" r="0.8" fill="currentColor" stroke="none" />
      <circle cx="6.5" cy="12.5" r="0.8" fill="currentColor" stroke="none" />
      <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.5 0 1-.5 1-1v-1c0-.5.5-1 1-1h2a4 4 0 0 0 4-4 8 8 0 0 0-8-8Z" />
    </svg>
  )
}

export function ServerIcon({ className = 'w-5 h-5' }) {
  return (
    <svg {...baseProps} className={className}>
      <rect x="2" y="3" width="20" height="8" rx="2" />
      <rect x="2" y="13" width="20" height="8" rx="2" />
      <path d="M6 7h.01" />
      <path d="M6 17h.01" />
    </svg>
  )
}

export function TerminalIcon({ className = 'w-5 h-5' }) {
  return (
    <svg {...baseProps} className={className}>
      <path d="m4 17 6-6-6-6" />
      <path d="M12 19h8" />
    </svg>
  )
}

export function SparkleIcon({ className = 'w-4 h-4' }) {
  return (
    <svg {...baseProps} className={className}>
      <path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2 2M16.4 16.4l2 2M5.6 18.4l2-2M16.4 7.6l2-2" />
    </svg>
  )
}

export function ArrowRightIcon({ className = 'w-4 h-4' }) {
  return (
    <svg {...baseProps} className={className}>
      <path d="M5 12h14" />
      <path d="m13 5 7 7-7 7" />
    </svg>
  )
}

export function ArrowDownIcon({ className = 'w-5 h-5' }) {
  return (
    <svg {...baseProps} className={className}>
      <path d="M12 5v14" />
      <path d="m19 12-7 7-7-7" />
    </svg>
  )
}

export function ChevronLeftIcon({ className = 'w-4 h-4' }) {
  return (
    <svg {...baseProps} className={className}>
      <path d="m15 18-6-6 6-6" />
    </svg>
  )
}

export function ChevronRightIcon({ className = 'w-4 h-4' }) {
  return (
    <svg {...baseProps} className={className}>
      <path d="m9 18 6-6-6-6" />
    </svg>
  )
}

export function CloseIcon({ className = 'w-5 h-5' }) {
  return (
    <svg {...baseProps} className={className}>
      <path d="M6 6l12 12" />
      <path d="M6 18 18 6" />
    </svg>
  )
}

export function CheckIcon({ className = 'w-4 h-4' }) {
  return (
    <svg {...baseProps} strokeWidth={2.4} className={className}>
      <path d="M5 13l4 4L19 7" />
    </svg>
  )
}

export function SendIcon({ className = 'w-4 h-4' }) {
  return (
    <svg {...baseProps} className={className}>
      <path d="m22 2-7 20-4-9-9-4z" />
      <path d="M22 2 11 13" />
    </svg>
  )
}

export function LinkedInIcon({ className = 'w-5 h-5' }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

export function GitHubIcon({ className = 'w-5 h-5' }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  )
}
