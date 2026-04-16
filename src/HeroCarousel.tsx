import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence, useMotionValue, useSpring } from 'framer-motion'
import './HeroCarousel.css'

/* ═══════════════════════════════════
   CARD DATA  (4 properties)
═══════════════════════════════════ */
type CardData = {
  img:    string
  badge:  string
  name:   string
  loc:    string
  price:  string
  detail: string
  beds:   string
  type:   string
  accent: string
}

const CARDS: CardData[] = [
  {
    img:    'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=800&q=80',
    badge:  'Luxury Villa',
    name:   'Palm Grove Villas',
    loc:    '📍 Palm Jumeirah',
    price:  'From AED 8.5M',
    detail: 'Private Pool · Beach Access',
    beds:   '4 – 5 BR',
    type:   'Villa',
    accent: '#B8902A',
  },
  {
    img:    'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80',
    badge:  'Off-Plan',
    name:   'Creek Vista Heights',
    loc:    '📍 Dubai Creek Harbour',
    price:  'From AED 1.2M',
    detail: '60/40 Payment Plan',
    beds:   '2 – 3 BR',
    type:   'Apartment',
    accent: '#3D8FA4',
  },
  {
    img:    'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80',
    badge:  'Ready',
    name:   'Marina Bay Residences',
    loc:    '📍 Dubai Marina',
    price:  'From AED 1.8M',
    detail: 'Sea & Marina View',
    beds:   '1 – 2 BR',
    type:   'Apartment',
    accent: '#4A7C3F',
  },
  {
    img:    'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80',
    badge:  'Investment',
    name:   'Business Bay Towers',
    loc:    '📍 Business Bay',
    price:  'From AED 850K',
    detail: '9–11% Estimated Yield',
    beds:   'Studio – 1 BR',
    type:   'Apartment',
    accent: '#7B4EA6',
  },
]

/* ═══════════════════════════════════
   VISUAL CONFIGS
═══════════════════════════════════ */
type SlotCfg = {
  x: number; rotateY: number; scale: number; opacity: number; zIndex: number
}

/*
  relPos → visual slot mapping (4 cards):
    0  → slot  0  (center / active)
    1  → slot +1  (right)
    2  → slot +2  (far right)
    3  → slot -1  (left)
*/
/*
  DEFAULT STATE — tight stack, cards peek behind each other.
  Visible at all times (no hover required).
*/
const STACK_SLOTS: Record<number, SlotCfg> = {
  [-1]: { x:  -50, rotateY:  9, scale: 0.88, opacity: 0.72, zIndex: 6  },
  [ 0]: { x:    0, rotateY:  0, scale: 1.00, opacity: 1.00, zIndex: 10 },
  [ 1]: { x:   50, rotateY: -9, scale: 0.88, opacity: 0.72, zIndex: 6  },
  [ 2]: { x:   90, rotateY:-17, scale: 0.76, opacity: 0.42, zIndex: 3  },
}

/*
  HOVER STATE — cards spread wide into full 3-D fan.
  Triggered when cursor enters the card area.
*/
const HOVER_SLOTS: Record<number, SlotCfg> = {
  [-1]: { x: -192, rotateY:  13, scale: 0.83, opacity: 0.60, zIndex: 5  },
  [ 0]: { x:    0, rotateY:   0, scale: 1.07, opacity: 1.00, zIndex: 10 },
  [ 1]: { x:  184, rotateY: -13, scale: 0.83, opacity: 0.60, zIndex: 5  },
  [ 2]: { x:  338, rotateY: -25, scale: 0.69, opacity: 0.28, zIndex: 3  },
}

/* mobile single-card fallbacks */
const MOBILE_ACTIVE:   SlotCfg = { x: 0, rotateY: 0, scale: 1.00, opacity: 1, zIndex: 10 }
const MOBILE_INACTIVE: SlotCfg = { x: 0, rotateY: 0, scale: 0.93, opacity: 0, zIndex:  0 }

function relToSlot(rel: number): number {
  return rel === 3 ? -1 : rel   // 3 → left(-1), 0,1,2 → themselves
}

/* ═══════════════════════════════════
   TYPES
═══════════════════════════════════ */
/** Minimal shape the lead-form modal requires */
export type HeroCardLead = Pick<CardData, 'badge' | 'name' | 'loc' | 'price'>

type Props = {
  onScrollTo:   (id: string) => void
  addRipple:    (e: React.MouseEvent<HTMLElement>) => void
  openLeadForm: (card: HeroCardLead) => void
}

/* ═══════════════════════════════════
   COMPONENT
═══════════════════════════════════ */
export default function HeroCarousel({ onScrollTo, addRipple, openLeadForm }: Props) {
  const [active,    setActive]    = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  /* Initialise synchronously so the first render already uses mobile slots —
     prevents desktop x-offsets from briefly overflowing the viewport */
  const [isMobile,  setIsMobile]  = useState(() => window.innerWidth <= 768)

  const heroBgRef   = useRef<HTMLDivElement>(null)
  const touchStartX = useRef(0)
  const N = CARDS.length

  /* ── mobile detection (handles resize / orientation change) ── */
  useEffect(() => {
    const mq = window.matchMedia('(max-width: 768px)')
    const update = (m: MediaQueryList | MediaQueryListEvent) => setIsMobile(m.matches)
    mq.addEventListener('change', update)
    return () => mq.removeEventListener('change', update)
  }, [])

  /* ── scroll parallax on bg image ── */
  useEffect(() => {
    const fn = () => {
      if (heroBgRef.current)
        heroBgRef.current.style.transform = `translateY(${window.scrollY * 0.3}px)`
    }
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  /* ── subtle mouse parallax on whole section ── */
  const mX  = useMotionValue(0)
  const mY  = useMotionValue(0)
  const spX = useSpring(mX, { stiffness: 50, damping: 18 })
  const spY = useSpring(mY, { stiffness: 50, damping: 18 })

  const onSectionMove = (e: React.MouseEvent<HTMLElement>) => {
    if (isMobile) return
    const r = e.currentTarget.getBoundingClientRect()
    mX.set(((e.clientX - r.left) / r.width  - 0.5) * 12)
    mY.set(((e.clientY - r.top)  / r.height - 0.5) *  6)
  }
  const onSectionLeave = () => { mX.set(0); mY.set(0) }

  const prev = () => setActive(a => (a - 1 + N) % N)
  const next = () => setActive(a => (a + 1) % N)

  /* ── derive card config per frame ── */
  const getCardCfg = (i: number): SlotCfg => {
    const rel  = (i - active + N) % N   // 0=active, 1=right, 2=far-right, 3=left
    const slot = relToSlot(rel)
    const isAct = rel === 0

    // mobile: single visible card, others hidden
    if (isMobile) return isAct ? MOBILE_ACTIVE : MOBILE_INACTIVE
    // desktop hover: wide 3-D fan
    if (isHovered) return HOVER_SLOTS[slot]
    // desktop default: tight overlapping stack — always visible
    return STACK_SLOTS[slot]
  }

  return (
    <section
      id="hero"
      onMouseMove={onSectionMove}
      onMouseLeave={onSectionLeave}
    >
      {/* ── background ── */}
      <div className="hero-bg">
        <div className="hero-bg-img" ref={heroBgRef} />
        <div className="hero-bg-overlay" />
      </div>
      <div className="hero-orb hero-orb-1" />
      <div className="hero-orb hero-orb-2" />
      <div className="hero-orb hero-orb-3" />

      <div className="hero-inner">

        {/* ═══════════════════════════════
            LEFT  –  unchanged copy
        ═══════════════════════════════ */}
        <div className="hero-l">
          <div className="hero-eyebrow">
            <span />
            Dubai Real Estate Specialists
          </div>
          <h1 className="hero-h1">
            <span className="hero-line"              style={{ animationDelay: '.45s' }}>Find the right</span>
            <span className="hero-line hero-line-sm" style={{ animationDelay: '.65s' }}>property in</span>
            <span className="hero-word-gold"         style={{ animationDelay: '.88s' }}>Dubai</span>
          </h1>
          <p className="hero-desc">
            Your journey to the right property starts here. We guide you through every
            step with clarity, honesty, and personalised support.
          </p>
          <div className="hero-actions">
            <button
              className="btn-gold"
              onClick={e => { addRipple(e); onScrollTo('projects') }}
              style={{ position: 'relative', overflow: 'hidden' }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
              </svg>
              Explore Projects
            </button>
            <button
              className="btn-outline"
              onClick={e => { addRipple(e); onScrollTo('contact') }}
              style={{ position: 'relative', overflow: 'hidden' }}
            >
              📞 Free Consultation
            </button>
          </div>
          <div className="hero-trust">
            <div className="trust-avs">
              {['RK', 'MS', 'SB', 'AJ'].map(av => (
                <div key={av} className="trust-av">{av}</div>
              ))}
            </div>
            <div className="trust-txt">
              <strong>Trusted by clients across the globe</strong>
              <span>Apartments · Villas · Townhouses · Investment</span>
            </div>
          </div>
        </div>

        {/* ═══════════════════════════════
            RIGHT  –  card carousel
        ═══════════════════════════════ */}
        <div className="hero-visual hc-visual" style={{ position: 'relative' }}>

          {/* side nav buttons — mobile only */}
          {isMobile && (
            <button className="hc-swipe-side hc-swipe-side--l" onClick={prev} aria-label="Previous property">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" width="20" height="20">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>
          )}
          {isMobile && (
            <button className="hc-swipe-side hc-swipe-side--r" onClick={next} aria-label="Next property">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" width="20" height="20">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          )}

          {/* parallax wrapper */}
          <motion.div
            className="hc-scene"
            style={!isMobile ? { x: spX, y: spY } : {}}
            onMouseEnter={() => { if (!isMobile) setIsHovered(true)  }}
            onMouseLeave={() => { if (!isMobile) setIsHovered(false) }}
            onTouchStart={e => { touchStartX.current = e.touches[0].clientX }}
            onTouchEnd={e => {
              const d = touchStartX.current - e.changedTouches[0].clientX
              if (d >  44) next()
              if (d < -44) prev()
            }}
          >

            {/* ── 3-D card stage ── */}
            <div className="hc-stage">
              {CARDS.map((card, i) => {
                const cfg   = getCardCfg(i)
                const rel   = (i - active + N) % N
                const isAct = rel === 0

                return (
                  <motion.div
                    key={card.name}
                    className={`hc-card${isAct ? ' hc-card--active' : ''}${isHovered ? ' hc-card--deck' : ''}`}
                    animate={{
                      x:       cfg.x,
                      rotateY: cfg.rotateY,
                      scale:   cfg.scale,
                      opacity: cfg.opacity,
                    }}
                    style={{ zIndex: cfg.zIndex }}
                    transition={{ duration: 0.48, ease: [0.4, 0, 0.2, 1] }}
                    /* active card → open lead form; side cards → navigate */
                    onClick={() => {
                      if (isAct)   openLeadForm(card)
                      else if (rel === 3) prev()
                      else         next()
                    }}
                  >
                    {/* image */}
                    <div
                      className="hc-img"
                      style={{ backgroundImage: `url(${card.img})` }}
                    >
                      <span
                        className="hc-badge"
                        style={{ background: card.accent }}
                      >
                        {card.badge}
                      </span>
                    </div>

                    {/* body — centred text */}
                    <div className="hc-body">
                      <div className="hc-name">{card.name}</div>
                      <div className="hc-loc">{card.loc}</div>
                      <div className="hc-price">{card.price}</div>
                      <div className="hc-detail">{card.detail}</div>

                      <div className="hc-meta">
                        <div className="hc-meta-item">
                          <span className="hc-meta-val">{card.beds}</span>
                          <span className="hc-meta-lbl">Bedrooms</span>
                        </div>
                        <div className="hc-meta-sep" />
                        <div className="hc-meta-item">
                          <span className="hc-meta-val">{card.type}</span>
                          <span className="hc-meta-lbl">Type</span>
                        </div>
                      </div>
                    </div>

                    {/* accent border ring on active card */}
                    {isAct && (
                      <div
                        className="hc-ring"
                        style={{ borderColor: card.accent }}
                      />
                    )}

                    {/* ── nav arrow overlaid on the immediate side cards ── */}
                    <AnimatePresence>
                      {isHovered && !isAct && (rel === 3 || rel === 1) && (
                        <motion.button
                          className={`hc-card-nav${rel === 3 ? ' hc-card-nav--prev' : ''}`}
                          initial={{ opacity: 0, scale: 0.72 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.72 }}
                          transition={{ duration: 0.22 }}
                          onClick={e => { e.stopPropagation(); rel === 3 ? prev() : next() }}
                          aria-label={rel === 3 ? 'Previous property' : 'Next property'}
                        >
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                            {rel === 3
                              ? <polyline points="15 18 9 12 15 6" />
                              : <polyline points="9 18 15 12 9 6" />
                            }
                          </svg>
                        </motion.button>
                      )}
                    </AnimatePresence>
                  </motion.div>
                )
              })}
            </div>{/* /hc-stage */}

            {/* ── navigation: arrows + dots on mobile (always), dots on desktop hover ── */}
            {isMobile ? (
              <div className="hc-nav hc-nav--mobile">
                <div className="hc-dots">
                  {CARDS.map((c, i) => (
                    <button
                      key={c.name}
                      className={`hc-dot${i === active ? ' hc-dot--on' : ''}`}
                      style={i === active ? { background: CARDS[active].accent } : {}}
                      onClick={() => setActive(i)}
                      aria-label={`Go to card ${i + 1}`}
                    />
                  ))}
                </div>
              </div>
            ) : (
              <AnimatePresence>
                {isHovered && (
                  <motion.div
                    className="hc-nav"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.26 }}
                  >
                    <div className="hc-dots">
                      {CARDS.map((c, i) => (
                        <button
                          key={c.name}
                          className={`hc-dot${i === active ? ' hc-dot--on' : ''}`}
                          style={i === active ? { background: CARDS[active].accent } : {}}
                          onClick={() => setActive(i)}
                          aria-label={`Card ${i + 1}`}
                        />
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            )}

          </motion.div>{/* /hc-scene */}
        </div>{/* /hc-visual */}
      </div>{/* /hero-inner */}
    </section>
  )
}
