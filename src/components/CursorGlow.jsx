import { useEffect, useState } from 'react'
import { m, useMotionValue, useSpring } from 'framer-motion'

export default function CursorGlow() {
  const x = useMotionValue(-200)
  const y = useMotionValue(-200)
  const sx = useSpring(x, { stiffness: 220, damping: 28, mass: 0.6 })
  const sy = useSpring(y, { stiffness: 220, damping: 28, mass: 0.6 })
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    const finePointer = window.matchMedia('(pointer: fine)').matches
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!finePointer || reduceMotion) return
    setEnabled(true)
    const onMove = (e) => {
      x.set(e.clientX - 200)
      y.set(e.clientY - 200)
    }
    window.addEventListener('pointermove', onMove)
    return () => window.removeEventListener('pointermove', onMove)
  }, [x, y])

  if (!enabled) return null

  return (
    <m.div
      aria-hidden
      className="pointer-events-none fixed top-0 left-0 z-[5] w-[500px] h-[500px] rounded-full"
      style={{
        x: sx,
        y: sy,
        background:
          'radial-gradient(circle, rgba(96,165,250,0.08) 0%, rgba(96,165,250,0.02) 40%, transparent 70%)',
        mixBlendMode: 'screen',
      }}
    />
  )
}
