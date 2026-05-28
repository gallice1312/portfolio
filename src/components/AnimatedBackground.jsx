import { useEffect, useRef } from 'react'

/**
 * Subtle drifting "aurora" background:
 * - Canvas of soft radial blobs that slowly orbit and pulse.
 * - Multiply blending against the navy backdrop = liquid color shifts.
 * - Respects prefers-reduced-motion.
 * - Cheap: 4 blobs, no shaders, ~60fps trivially.
 */
export default function AnimatedBackground({ className = '' }) {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    let raf = 0
    let width = 0
    let height = 0

    // Blob hues mirror the new harmonised section accents:
    // periwinkle 235° / lavender 265° / mint 170° / coral 18°.
    // All sit at similar saturation/lightness so they blend instead of clash.
    const blobs = [
      { hue: 235, sat: 70, light: 65, r: 0.55, cx: 0.2,  cy: 0.3,  speed: 0.00018, phase: 0,   alpha: 0.32 },
      { hue: 265, sat: 72, light: 66, r: 0.5,  cx: 0.8,  cy: 0.25, speed: 0.00022, phase: 1.7, alpha: 0.34 },
      { hue: 170, sat: 60, light: 60, r: 0.5,  cx: 0.7,  cy: 0.8,  speed: 0.00016, phase: 3.1, alpha: 0.28 },
      { hue: 18,  sat: 70, light: 68, r: 0.42, cx: 0.25, cy: 0.75, speed: 0.00024, phase: 4.4, alpha: 0.22 },
    ]

    const resize = () => {
      const rect = canvas.getBoundingClientRect()
      width = rect.width
      height = rect.height
      canvas.width = Math.floor(width * dpr)
      canvas.height = Math.floor(height * dpr)
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }
    resize()
    const ro = new ResizeObserver(resize)
    ro.observe(canvas)

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    // Pause the animation loop when the canvas is offscreen.
    let inView = true
    const io = new IntersectionObserver(
      ([entry]) => {
        const wasInView = inView
        inView = entry.isIntersecting
        if (inView && !wasInView && !reduceMotion) {
          raf = requestAnimationFrame(draw)
        }
      },
      { rootMargin: '50px' },
    )
    io.observe(canvas)

    const draw = (t) => {
      ctx.clearRect(0, 0, width, height)
      ctx.globalCompositeOperation = 'lighter'

      const radius = Math.max(width, height)

      for (const b of blobs) {
        const k = reduceMotion ? 0 : t * b.speed + b.phase
        // Orbit each blob in a gentle ellipse around its anchor
        const ox = Math.cos(k) * 0.08
        const oy = Math.sin(k * 1.3) * 0.08
        const x = (b.cx + ox) * width
        const y = (b.cy + oy) * height
        const r = b.r * radius * (1 + Math.sin(k * 0.7) * 0.08)

        const grad = ctx.createRadialGradient(x, y, 0, x, y, r)
        grad.addColorStop(0, `hsla(${b.hue}, ${b.sat}%, ${b.light}%, ${b.alpha})`)
        grad.addColorStop(0.55, `hsla(${b.hue}, ${b.sat}%, ${b.light}%, ${b.alpha * 0.18})`)
        grad.addColorStop(1, `hsla(${b.hue}, ${b.sat}%, ${b.light}%, 0)`)
        ctx.fillStyle = grad
        ctx.fillRect(0, 0, width, height)
      }

      if (!reduceMotion && inView) raf = requestAnimationFrame(draw)
    }

    raf = requestAnimationFrame(draw)
    return () => {
      cancelAnimationFrame(raf)
      ro.disconnect()
      io.disconnect()
    }
  }, [])

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`} aria-hidden="true">
      <canvas
        ref={canvasRef}
        className="w-full h-full opacity-[0.45] mix-blend-screen"
      />
      {/* Soft vignette to keep edges calm */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(21,23,28,0.92)_100%)]" />
      {/* Fine grid overlay — gives a techy, "demonstrative" texture */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
          maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 75%)',
          WebkitMaskImage: 'radial-gradient(ellipse at center, black 30%, transparent 75%)',
        }}
      />
    </div>
  )
}
