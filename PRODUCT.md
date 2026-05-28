# Product

## Register

brand

## Users

**Primary**: tech recruiters and engineering leads scanning portfolios to source 1st-year Epitech students for internships and apprenticeships. They land from LinkedIn, give the site 30 seconds, and decide whether to reply to an outreach or open the inbox.

**Secondary**:
- Freelance prospects looking for someone to ship a small web project quickly.
- Dev / trading / cybersec community members who find Tom through Twitter, Discord, or word of mouth and want to gauge his level.
- Tom himself, using the site as a single canonical "this is who I am" link.

Context of use: desktop (recruiters, professional review), mobile (community drop-in from social). The site has to hold up cold, without prior introduction.

## Product Purpose

A single-page portfolio that turns "Tom Gallice, 1st-year Epitech student" from an abstract CV line into a credible, memorable person worth a meeting. It exists because Tom is multi-faceted (developer, independent trader with a prop firm, competitive tennis player since age 3, future cybersecurity specialist) and a CV alone flattens that into nothing. The site has to convey range without looking scattered.

Success looks like: a recruiter who saw the portfolio remembers Tom by name a week later, and replies to a cold message because they already half-know him.

## Brand Personality

**Three words: young, ambitious, multi-faceted.**

The voice is confident but not arrogant. Tom is 18, in his first year at Epitech, and the site should own that rather than dress it up as senior experience. The tone is direct, lightly assertive, and never apologetic. No fake modesty ("just a small project"), no overclaiming ("expert in cybersecurity"). State what's true, with precision.

The interface should feel like meeting Tom: focused, energetic, slightly intense, with hidden depth. Discipline from tennis and trading shows up in the rigor of the execution, not in the copy.

## Anti-references

Things this portfolio must NOT look like:

- **The AI-default dev portfolio**: dark navy background, blue accent, Inter + Fira Code, hero-centered, "Hi I'm X, a passionate developer." Instantly forgettable, recognisable as ChatGPT output from the palette alone.
- **Creative agency with custom cursor**: cursor that follows the mouse, WebGL hero scenes, scroll-jacked narratives, GSAP everywhere. Tom is a developer, not an animator. Effects without purpose read as insecurity.
- **ThemeForest / Bootstrap template**: navbar with rounded pills, hero with a circle photo and CTA, three-card "Services" grid, identical project cards in a 2x2. Generic developer-portfolio shape.
- **Luxe editorial italic serif**: Instrument Serif at scale, warm cream backgrounds, magazine layouts. Beautiful in isolation, wrong for an 18-year-old trying to land a tech internship. Reads as "wedding stationery" rather than "next intern".

## Design Principles

1. **Own the youth, don't hide it.** "1st year at Epitech" is a feature, not a weakness. The site should feel like a confident kid with range, not a junior trying to look senior. Energy beats polish-as-performance.

2. **Range without scatter.** Tom does four things (code, trading, tennis, security). Each one must feel like part of the same person, not four hobbies on a résumé. The throughline is *reading patterns under pressure, then acting cleanly*.

3. **Show, don't decorate.** Animations and visual flourishes only when they make something clearer or more memorable. Spotlight on project cards earns its place (signals quality of execution). A custom cursor would not. When in doubt, cut.

4. **Distinctive on first frame.** A recruiter who sees the top of the homepage should not be able to guess which template generated it. Palette, type, and layout must commit to something — even if quiet — that isn't the trained reflex.

5. **Lisible avant tout.** Aesthetic ambition never trades for legibility. Body text, contrasts, focus states, and touch targets meet WCAG AA without thinking about it. The site has to work for the recruiter scanning at 11pm on a phone.

## Accessibility & Inclusion

Target WCAG 2.1 AA across colour contrast, keyboard navigation, focus indication, and prefers-reduced-motion.

No specific assistive-tech mandate from Tom, but the site is the first impression for hiring teams that increasingly check accessibility baselines as a signal of code quality. Treat it as a craft requirement, not a checkbox.

Animations must always be skippable: every motion effect respects `prefers-reduced-motion: reduce`, and the auto-playing slide animations should never block content from being read.
