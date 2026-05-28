import { m } from 'framer-motion'

const VARIANTS = {
  up: {
    hidden: { opacity: 0, y: 28 },
    show: { opacity: 1, y: 0 },
  },
  down: {
    hidden: { opacity: 0, y: -28 },
    show: { opacity: 1, y: 0 },
  },
  left: {
    hidden: { opacity: 0, x: -32 },
    show: { opacity: 1, x: 0 },
  },
  right: {
    hidden: { opacity: 0, x: 32 },
    show: { opacity: 1, x: 0 },
  },
  fade: {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  },
  scale: {
    hidden: { opacity: 0, scale: 0.92 },
    show: { opacity: 1, scale: 1 },
  },
}

export function Reveal({
  children,
  as = 'div',
  direction = 'up',
  delay = 0,
  duration = 0.7,
  once = true,
  amount = 0.25,
  className,
  ...rest
}) {
  const MotionTag = m[as] ?? m.div
  return (
    <MotionTag
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount }}
      variants={VARIANTS[direction]}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
      {...rest}
    >
      {children}
    </MotionTag>
  )
}

export function Stagger({
  children,
  as = 'div',
  delayChildren = 0.05,
  staggerChildren = 0.08,
  once = true,
  amount = 0.2,
  className,
  ...rest
}) {
  const MotionTag = m[as] ?? m.div
  return (
    <MotionTag
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount }}
      variants={{
        hidden: {},
        show: {
          transition: { delayChildren, staggerChildren },
        },
      }}
      className={className}
      {...rest}
    >
      {children}
    </MotionTag>
  )
}

export function StaggerItem({
  children,
  as = 'div',
  direction = 'up',
  duration = 0.6,
  className,
  ...rest
}) {
  const MotionTag = m[as] ?? m.div
  return (
    <MotionTag
      variants={VARIANTS[direction]}
      transition={{ duration, ease: [0.22, 1, 0.36, 1] }}
      className={className}
      {...rest}
    >
      {children}
    </MotionTag>
  )
}
