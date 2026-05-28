# Design

## Visual Theme

**Dark, neutral cool base with subtle per-section tints.** The portfolio is read on screens, often at night, often on the side of a recruiter's open laptop after hours. The base is a near-black tinted very slightly blue, not warm espresso, not pure black.

Each scroll section drifts the background hue by a small amount and pairs with its own accent color, so scrolling feels like walking through different rooms in the same building. The chrome (navbar, footer, type) stays consistent; the *light* changes.

**Color strategy**: Full palette. Four named section accents (blue / violet / green / amber), each carrying ~25% of one section's surface and decorations, plus a neutral cool used everywhere else. Cream-on-dark for body. No single "brand color".

## Palette (OKLCH)

### Surface
```
bg-base       oklch(13% 0.005 250)   /* neutral cool, page base, hero, contact */
bg-elevated   oklch(17% 0.005 250)   /* cards, inputs */
bg-deep       oklch(10% 0.005 250)   /* footer, deepest */
line          oklch(28% 0.008 250)   /* hairline borders */
line-strong   oklch(40% 0.01 250)    /* prominent borders, dividers */
```

### Section backgrounds (subtle hue shift from base)
```
sec-hero      oklch(13% 0.005 250)   /* same as base */
sec-about     oklch(14% 0.020 245)   /* slight blue wash */
sec-skills    oklch(14% 0.020 290)   /* slight violet wash */
sec-projects  oklch(14% 0.020 155)   /* slight green wash */
sec-exp       oklch(14% 0.020 60)    /* slight amber wash */
sec-contact   oklch(13% 0.005 250)   /* back to base */
```

### Section accents (per section identity)
```
blue          oklch(72% 0.18 245)    /* about — calm, personal intro */
violet        oklch(72% 0.20 290)    /* skills — cybersec, technical depth */
green         oklch(75% 0.16 155)    /* projects — markets, signal, growth */
amber         oklch(78% 0.16 65)     /* experiences — journey, warmth */
```

### Type
```
ink           oklch(96% 0.005 90)    /* primary text, almost white */
muted         oklch(72% 0.008 250)   /* secondary text */
faint         oklch(52% 0.008 250)   /* tertiary, metadata */
```

### State
```
status-go     oklch(78% 0.14 155)    /* "available for work" pulse */
status-warn   oklch(80% 0.16 80)     /* reserved, errors */
```

### HEX equivalents (Tailwind config)
```
bg-base       #15171c
bg-elevated   #1d2027
bg-deep       #101216
line          #353a45
line-strong   #4d5363

sec-about     #181d28
sec-skills    #1d1928
sec-projects  #18221c
sec-exp       #221c14
sec-contact   #15171c

blue          #6093f3
violet        #a17ff7
green         #5fc69a
amber         #f0b06b

ink           #f3efe7
muted         #adb4c0
faint         #6f7785
```

## Typography

**Type system: 2 families, deep weight contrast.**

- **Sans** (display + body): **Geist** — geometric grotesque, neutral, modern. 300 / 400 / 500 / 600 / 700. Used for everything except eyebrows and code-style accents.
- **Mono**: **Geist Mono** — paired weight, slightly wider tracking. Used for section eyebrows, metadata, project tag pills, numbers, status pills.

**No serif.** No italic display. The previous Instrument Serif direction was anti-referenced.

### Scale
```
display-xl  text-5xl sm:text-6xl xl:text-7xl   /* hero h1 */
display-lg  text-4xl sm:text-5xl lg:text-6xl   /* section h2 */
display-md  text-2xl sm:text-3xl               /* card titles */
body-lg     text-lg                            /* hero description, section subtitle */
body        text-base                          /* default */
body-sm     text-sm                            /* card body, metadata */
caption     text-xs                            /* eyebrow, tags */
```

### Tracking & leading
- Display: `tracking-tight` (-0.02em to -0.03em), `leading-[1.05]` to `leading-tight`
- Body: default tracking, `leading-relaxed`
- Mono eyebrows: `uppercase tracking-[0.22em]`
- Tabular numbers: `tabular-nums` on metrics, periods, percentages

## Components

### Section
Each section follows the same shell:
- Vertical padding `py-24 sm:py-32`
- A subtle top hairline gradient (`bg-gradient-to-r from-transparent via-{section-accent}/30 to-transparent`)
- Section-specific background color
- Eyebrow + heading + subtitle pattern, left-aligned in `max-w-2xl`

```jsx
<section className="bg-sec-skills py-28">
  <div className="section-container">
    <p className="text-violet font-mono uppercase tracking-[0.22em] text-xs mb-3">Stack</p>
    <h2 className="text-5xl font-semibold text-ink">My skills.</h2>
  </div>
</section>
```

### Buttons
- **`btn-primary`**: cream pill on dark, dark text. Always legible against any section background.
- **`btn-outline`**: 1px outline in current section accent, text in same accent. Hover fills.
- **`btn-ghost`**: ink text with caret/arrow, no background. For tertiary nav and "view all" links.

### Cards
- `bg-elevated` (consistent across sections, not section-tinted)
- 1px border `line/60`, rounded `xl`
- Hover: border becomes section accent at 40% opacity
- Project cards add the spotlight effect (cursor-following radial gradient) in the section accent color
- No nested cards. Ever.

### Eyebrow
Mono uppercase, section accent color, `tracking-[0.22em]`. Always paired with a title.

### Skill bars (Skills only)
1.5px height, `bg-elevated` track, `bg-violet` to lighter violet gradient fill. Animate `scaleX` from 0 to 1 in 1.1s on enter.

### Timeline (Experiences only)
3px amber dot with `bg-base` ring, 1px line `bg-line` connecting them. No card wrappers around items.

### Spotlight (Project cards)
Pure CSS radial gradient that follows the cursor via CSS variables (`--mx`, `--my` updated on `mousemove`). Color = section accent (green) at 70% alpha for the border layer, 14% for the inner glow.

## Motion

**Curve everywhere**: `cubic-bezier(0.22, 1, 0.36, 1)` (a tuned ease-out-quart). No bounce, no elastic, no linear.

**Inventory of motion**:
- Section reveals: 30px translate + opacity, 0.6s, in-view trigger via Framer Motion
- Stagger inside reveals: 0.08-0.12s between children
- Hero slide transition: split-text (each letter blurs in + translates up), 0.025s delay per character
- Skill bars: `scaleX(0 → 1)`, 1.1s on enter
- Project card → modal: Framer `layoutId` shared-layout morph
- Spotlight on cards: CSS-var-driven cursor tracking, 300ms opacity fade
- Magnetic CTAs: 0.25 strength spring, sober
- Scroll progress bar: spring-smoothed `useScroll`

**Reduced motion**: `<MotionConfig reducedMotion="user">` at the root. A global CSS guard zeroes all animations / transitions when `prefers-reduced-motion: reduce`. The canvas aurora pauses entirely.

## Layout

- Section container: `max-w-6xl mx-auto px-5 sm:px-8 lg:px-12`
- Body line length: 65-75ch capped via `max-w-prose` on prose blocks
- Vertical rhythm: 6.5rem (`py-26`) between sections on desktop, 6rem on mobile
- Grid: most sections use asymmetric ratios (`grid-cols-[5fr_7fr]`, `grid-cols-[7fr_5fr]`) to avoid the centred-symmetric SaaS look
- Touch targets: 44×44px minimum on all interactive elements
- Focus indicator: 2px outline in current section accent, 3px offset, applied via `:focus-visible`

## Anti-patterns (project-specific)

In addition to the global impeccable bans:

- **No italic serif display** anywhere. The Instrument Serif experiment was rejected.
- **No clay / terracotta / warm cream backgrounds**. The base is cool-neutral, not warm.
- **No identical card grids** with icon + heading + text repeated 3-4 times across sections.
- **No "Hi I'm X, a passionate developer"** opener. Open with confidence, not a self-introduction template.
- **No emoji as decoration in headings.** Mono caret prefix or numbered eyebrow only.
- **No custom cursor**, no scroll-jacked narrative, no WebGL hero.
