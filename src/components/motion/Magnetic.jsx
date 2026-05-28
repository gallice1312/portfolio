import { useRef } from 'react'
import { m, useMotionValue, useSpring, useTransform } from 'framer-motion'

/**
 * Magnetic wrapper: child element is gently pulled toward the cursor on hover.
 * Sober: 0.25 strength by default, springy return on leave.
 */
export default function Magnetic({
  children,
  strength = 0.25,
  className = '',
  as = 'div',
  ...rest
}) {
  const ref = useRef(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const sx = useSpring(x, { stiffness: 220, damping: 18, mass: 0.4 })
  const sy = useSpring(y, { stiffness: 220, damping: 18, mass: 0.4 })

  const onMove = (e) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const mx = e.clientX - (rect.left + rect.width / 2)
    const my = e.clientY - (rect.top + rect.height / 2)
    x.set(mx * strength)
    y.set(my * strength)
  }
  const onLeave = () => {
    x.set(0)
    y.set(0)
  }

  const MotionTag = m[as] ?? m.div
  return (
    <MotionTag
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ x: sx, y: sy }}
      className={`inline-block ${className}`}
      {...rest}
    >
      {children}
    </MotionTag>
  )
}
