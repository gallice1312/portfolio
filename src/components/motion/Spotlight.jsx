import { useRef, useState } from 'react'

/**
 * Spotlight wrapper:
 * - Tracks mouse position via CSS vars (--mx, --my).
 * - Renders two pseudo-layers:
 *    1. A soft radial highlight that follows the cursor (Linear/Vercel feel).
 *    2. An animated gradient border that brightens around the cursor.
 * - Pure CSS for the effect, JS only for var updates -> very cheap.
 */
export default function Spotlight({
  children,
  className = '',
  radius = 320,
  color = 'rgb(var(--c-clay) / 0.18)',
  borderColor = 'rgb(var(--c-clay) / 0.55)',
  ...rest
}) {
  const ref = useRef(null)
  const [hovered, setHovered] = useState(false)

  const onMove = (e) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    el.style.setProperty('--mx', `${e.clientX - rect.left}px`)
    el.style.setProperty('--my', `${e.clientY - rect.top}px`)
  }

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`group/spot relative ${className}`}
      style={{
        '--spot-radius': `${radius}px`,
        '--spot-color': color,
        '--spot-border': borderColor,
      }}
      {...rest}
    >
      {/* Gradient border that lights up near cursor */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 group-hover/spot:opacity-100 transition-opacity duration-300"
        style={{
          background:
            'radial-gradient(var(--spot-radius) circle at var(--mx) var(--my), var(--spot-border), transparent 70%)',
          WebkitMask:
            'linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)',
          WebkitMaskComposite: 'xor',
          mask: 'linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)',
          maskComposite: 'exclude',
          padding: '1px',
        }}
      />

      {/* Inner soft highlight following cursor */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 group-hover/spot:opacity-100 transition-opacity duration-300"
        style={{
          background:
            'radial-gradient(var(--spot-radius) circle at var(--mx) var(--my), var(--spot-color), transparent 60%)',
        }}
      />

      {children}
    </div>
  )
}
