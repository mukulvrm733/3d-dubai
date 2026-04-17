import { useEffect, useRef, useState } from 'react'
import './App.css'
import HeroCarousel from './HeroCarousel'

/* ─────────────────── DATA ─────────────────── */
const developers = [
  { name: 'Emaar Properties',    logo: '/partner/emaar-Photoroom.png' },
  { name: 'DAMAC Properties',    logo: '/partner/images-Photoroom.png' },
  { name: 'Nakheel',             logo: '/partner/nakheel-Photoroom.png' },
  { name: 'Meraas',              logo: '/partner/Meraas.png' },
  { name: 'Sobha Realty',        logo: '/partner/SOBHA-Photoroom.png' },
  { name: 'Aldar Properties',    logo: '/partner/aldar-properties-logo.png' },
  { name: 'Dubai Properties',    logo: '/partner/dubai-properties-logo-en4.png' },
  { name: 'Select Group',        logo: '/partner/Select-Group-Logo-Black.png' },
  { name: 'Azizi Developments',  logo: '/partner/AZIZI-Photoroom.png' },
  { name: 'Binghatti Developers',logo: '/partner/BINGHATTI-Photoroom.png' },
  { name: 'Danube Properties',   logo: '/partner/Danube-Logo.webp' },
]

const projects = [
  {
    badge: 'Off-Plan',
    img: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=700&q=80',
    name: 'Creek Vista Heights',
    loc: '📍 Dubai Creek Harbour',
    price: 'Starting AED 1.2M',
    tags: ['2BR / 3BR', 'Q2 2027', '60/40 Plan'],
    backRows: [
      { k: 'Type', v: 'Apartment' },
      { k: 'Completion', v: 'Q2 2027' },
      { k: 'Payment', v: '60/40 Plan' },
      { k: 'Status', v: 'Off-Plan' },
    ],
  },
  {
    badge: 'Ready',
    img: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=700&q=80',
    name: 'Marina Bay Residences',
    loc: '📍 Dubai Marina',
    price: 'Starting AED 1.8M',
    tags: ['1BR / 2BR', 'Ready to Move', 'Sea View'],
    backRows: [
      { k: 'Type', v: 'Apartment' },
      { k: 'View', v: 'Sea & Marina' },
      { k: 'Status', v: 'Ready Now' },
      { k: 'Visa', v: '✓ Eligible' },
    ],
  },
  {
    badge: 'Luxury Villa',
    img: 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=700&q=80',
    name: 'Palm Grove Villas',
    loc: '📍 Palm Jumeirah',
    price: 'Starting AED 8.5M',
    tags: ['4BR / 5BR', 'Private Pool', 'Beach Access'],
    backRows: [
      { k: 'Type', v: 'Villa' },
      { k: 'Beds', v: '4 – 5 BR' },
      { k: 'Pool', v: 'Private' },
      { k: 'Visa', v: '✓ Eligible' },
    ],
  },
  {
    badge: 'Investment',
    img: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=700&q=80',
    name: 'Business Bay Towers',
    loc: '📍 Business Bay',
    price: 'Starting AED 850K',
    tags: ['Studio / 1BR', 'High ROI', 'Central Location'],
    backRows: [
      { k: 'Type', v: 'Studio / 1BR' },
      { k: 'Yield', v: '9–11% est.' },
      { k: 'Status', v: 'Ready Now' },
      { k: 'Visa', v: '✓ Eligible' },
    ],
  },
]

const whyItems = [
  {
    num: '01', icon: '🧭',
    title: 'Clear and Honest Guidance',
    desc: 'We walk you through your options clearly — including both advantages and risks — so you always know exactly what you\'re choosing.',
  },
  {
    num: '02', icon: '🔎',
    title: 'Carefully Selected Properties',
    desc: 'Instead of endless listings, we focus on a refined set of properties that truly align with your needs, whether buying or renting.',
  },
  {
    num: '03', icon: '📋',
    title: 'Simple and Structured Process',
    desc: 'We simplify the journey step by step — from shortlisting to final paperwork — so everything stays clear and manageable.',
  },
  {
    num: '04', icon: '🤝',
    title: 'Support That Continues',
    desc: 'Our role doesn\'t end when the deal is done. We stay available so you always have someone to rely on when it matters.',
  },
]

const services = [
  {
    icon: '🏗️', title: 'Off-Plan Properties',
    desc: 'Explore newly launched projects across Dubai with flexible payment plans. We help you understand opportunity, timelines, and risks.',
    points: ['Flexible payment plans', 'New launch opportunities', 'Guided decision support'],
  },
  {
    icon: '🏠', title: 'Ready / Secondary Properties',
    desc: 'For buyers looking for completed homes or immediate returns, we identify suitable ready properties and guide you through clearly.',
    points: ['Ready-to-move options', 'Resale opportunities', 'Clear transaction process'],
  },
  {
    icon: '🔑', title: 'Rental Services',
    desc: 'Whether looking to rent or lease out a property, we assist in finding the right match and managing the process smoothly.',
    points: ['Tenant support', 'Property listing assistance', 'Simple leasing process'],
  },
  {
    icon: '💰', title: 'Mortgage Support',
    desc: 'In-house mortgage support to help you understand eligibility and explore financing options. Clear and straightforward.',
    points: ['Eligibility guidance', 'Financing options', 'End-to-end support'],
  },
  {
    icon: '🌟', title: 'Golden Visa Support',
    desc: 'We assist eligible buyers in understanding the Golden Visa process and requirements as part of their purchase journey.',
    points: ['Eligibility assessment', 'Document guidance', 'Structured process'],
  },
]

const testimonials = [
  {
    stars: 5, av: 'RK', name: 'Rahul & Kavya Mehta', from: 'Dubai Residents',
    text: '"Working with Infinite Imperial Ventures made the entire process straightforward. Honest about every option, never pushing us toward a decision we weren\'t comfortable with. We found our perfect apartment in Business Bay."',
  },
  {
    stars: 5, av: 'MS', name: 'Mohammed Al Saeed', from: 'Investor, Abu Dhabi',
    text: '"I was nervous investing as a first-time buyer. The team guided me through every step patiently, explained all costs upfront, and helped me choose a property that actually fit my budget and goals."',
  },
  {
    stars: 5, av: 'SB', name: 'Sarah Bennett', from: 'Expat Buyer, UK',
    text: '"Clear, honest, and professional. They didn\'t show me a hundred options — they showed me the right ones. The entire transaction from shortlisting to handover was handled smoothly."',
  },
]

const faqs = [
  { q: 'Can foreigners buy property in Dubai?',                      a: 'Yes, foreign buyers can purchase property in designated freehold areas in Dubai with full ownership rights.' },
  { q: 'What are the main costs involved when buying a property?',   a: 'In addition to the property price, there are costs such as Dubai Land Department fees, registration charges, and other related expenses. We explain all costs clearly before you proceed.' },
  { q: 'Can I get a mortgage in Dubai?',                             a: 'Yes, both residents and non-residents can apply for a mortgage, subject to eligibility. We can guide you through the available options.' },
  { q: 'How long does the buying process take?',                     a: 'The timeline depends on the type of property and payment structure, but we ensure the process is handled smoothly and without unnecessary delays.' },
  { q: 'What do I need to rent a property in Dubai?',                a: 'Renting typically requires valid identification, visa details (if applicable), and initial payments such as security deposit and rent. We guide you through the process to make it simple.' },
]

const statsData = [
  { val: 350, sfx: '+', label: 'Properties Sold' },
  { val: 100, sfx: '%', label: 'Client Satisfaction' },
  { val: 12,  sfx: '+', label: 'Years in Dubai Market' },
  { val: 50,  sfx: '+', label: 'Developer Partners' },
]

/* ─────────────────── HELPERS ─────────────────── */
function addRipple(e: React.MouseEvent<HTMLElement>) {
  const btn = e.currentTarget
  const r = document.createElement('span')
  r.className = 'ripple'
  const rect = btn.getBoundingClientRect()
  const size = Math.max(rect.width, rect.height)
  r.style.cssText = `width:${size}px;height:${size}px;left:${e.clientX - rect.left - size / 2}px;top:${e.clientY - rect.top - size / 2}px;position:absolute;border-radius:50%;`
  btn.appendChild(r)
  setTimeout(() => r.remove(), 700)
}

function smoothScroll(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

/* ─────────────────── TILT HOOK ─────────────────── */
function useTilt(selector: string, intensity = 7) {
  useEffect(() => {
    const cards = [...document.querySelectorAll(selector)] as HTMLElement[]
    const mm = (e: MouseEvent) => {
      const c = e.currentTarget as HTMLElement
      const r = c.getBoundingClientRect()
      const x = (e.clientX - r.left) / r.width - 0.5
      const y = (e.clientY - r.top) / r.height - 0.5
      c.style.transform = `perspective(900px) rotateX(${-y * intensity}deg) rotateY(${x * intensity}deg) translateZ(12px)`
      c.style.transition = 'transform .08s linear'
    }
    const ml = (e: MouseEvent) => {
      const c = e.currentTarget as HTMLElement
      c.style.transform = ''
      c.style.transition = 'transform .6s cubic-bezier(.4,0,.2,1)'
    }
    cards.forEach(c => { c.addEventListener('mousemove', mm); c.addEventListener('mouseleave', ml) })
    return () => cards.forEach(c => { c.removeEventListener('mousemove', mm); c.removeEventListener('mouseleave', ml) })
  })
}

/* ─────────────────── LEAD FORM MODAL ─────────────────── */
type Project = typeof projects[0]

function LeadModal({ card, onClose }: { card: Project; onClose: () => void }) {
  const [sent, setSent] = useState(false)
  const [closing, setClosing] = useState(false)

  const close = () => {
    setClosing(true)
    setTimeout(onClose, 280)
  }

  // close on overlay click or Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') close() }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [])

  return (
    <div className={`modal-overlay${closing ? ' closing' : ''}`} onClick={e => { if (e.target === e.currentTarget) close() }}>
      <div className="modal-box">
        <div className="modal-head">
          <div className="modal-head-text">
            <span className="modal-tag">{card.badge}</span>
            <div className="modal-title">{card.name}</div>
            <div className="modal-loc">{card.loc} · {card.price}</div>
          </div>
          <button className="modal-close" onClick={close}>✕</button>
        </div>
        <div className="modal-divider" />
        <div className="modal-body">
          {sent ? (
            <div className="modal-success">
              <div className="modal-success-ico">✅</div>
              <h3>We'll be in touch soon!</h3>
              <p>Thank you for your interest in {card.name}. Our team will contact you shortly.</p>
            </div>
          ) : (
            <>
              <p>Fill in your details and we'll get back to you with full information on this property.</p>
              <form onSubmit={e => { e.preventDefault(); setSent(true) }}>
                <div className="modal-form-row">
                  <div className="modal-fg"><label>First Name</label><input type="text" placeholder="John" required /></div>
                  <div className="modal-fg"><label>Last Name</label><input type="text" placeholder="Smith" required /></div>
                </div>
                <div className="modal-fg"><label>Email Address</label><input type="email" placeholder="john@example.com" required /></div>
                <div className="modal-fg"><label>Phone Number</label><input type="tel" placeholder="+971 50 000 0000" /></div>
                <div className="modal-fg">
                  <label>Interested In</label>
                  <select defaultValue={card.name}>
                    <option>{card.name}</option>
                    <option>Buying a Property</option>
                    <option>Renting a Property</option>
                    <option>Investment Advice</option>
                    <option>Mortgage Support</option>
                    <option>Golden Visa Guidance</option>
                  </select>
                </div>
                <div className="modal-fg">
                  <label>Message (optional)</label>
                  <textarea placeholder={`I'm interested in ${card.name}. Please send me more details.`} />
                </div>
                <button type="submit" className="modal-submit">
                  Send Enquiry
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

/* ─────────────────── APP ─────────────────── */
export default function App() {
  const [preloaderGone, setPreloaderGone] = useState(false)
  const [navSolid, setNavSolid]           = useState(false)
  const [mobileNavOpen, setMobileNavOpen] = useState(false)
  const [activeDot, setActiveDot]         = useState('hero')
  const [formDone, setFormDone]           = useState(false)
  const [openFaq, setOpenFaq]             = useState<number | null>(null)
  const [stats, setStats]                 = useState(statsData.map(() => 0))
  const [activeCard, setActiveCard]       = useState<Project | null>(null)

  const progressRef  = useRef<HTMLDivElement>(null)
  const statsRef     = useRef<HTMLDivElement>(null)

  /* Preloader */
  useEffect(() => {
    const t = setTimeout(() => setPreloaderGone(true), 4000)
    return () => clearTimeout(t)
  }, [])

  /* Lock body scroll when mobile nav is open */
  useEffect(() => {
    document.body.style.overflow = mobileNavOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileNavOpen])

  /* Scroll */
  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY
      setNavSolid(scrollY > 60)
      const pct = scrollY / (document.documentElement.scrollHeight - window.innerHeight) * 100
      if (progressRef.current) progressRef.current.style.width = pct + '%'
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])


  /* Scroll reveal */
  useEffect(() => {
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('up') })
    }, { threshold: 0.08 })
    document.querySelectorAll('.sr,.srl,.srr').forEach(el => io.observe(el))
    return () => io.disconnect()
  }, [])

  /* Section dot nav */
  useEffect(() => {
    const ids = ['hero', 'about', 'projects', 'why', 'services', 'testimonials', 'faq', 'contact']
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) setActiveDot(e.target.id) })
    }, { threshold: 0.25 })
    ids.forEach(id => { const el = document.getElementById(id); if (el) io.observe(el) })
    return () => io.disconnect()
  }, [])

  /* Stats counters */
  useEffect(() => {
    if (!statsRef.current) return
    const io = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return
      io.disconnect()
      statsData.forEach((s, idx) => {
        const duration = 1400
        const steps = 60
        const inc = s.val / steps
        let cur = 0
        const t = setInterval(() => {
          cur = Math.min(cur + inc, s.val)
          setStats(prev => prev.map((v, i) => i === idx ? Math.floor(cur) : v))
          if (cur >= s.val) clearInterval(t)
        }, duration / steps)
      })
    }, { threshold: 0.5 })
    io.observe(statsRef.current)
    return () => io.disconnect()
  }, [])

  /* Magnetic buttons */
  useEffect(() => {
    const btns = [...document.querySelectorAll('.btn-gold,.n-cta,.fb-cta,.form-submit')] as HTMLElement[]
    const mm = (e: MouseEvent) => {
      const b = e.currentTarget as HTMLElement
      const r = b.getBoundingClientRect()
      const x = (e.clientX - r.left - r.width / 2) * 0.28
      const y = (e.clientY - r.top - r.height / 2) * 0.28
      b.style.transform = `translate(${x}px,${y}px) translateY(-2px)`
    }
    const ml = (e: MouseEvent) => { (e.currentTarget as HTMLElement).style.transform = '' }
    btns.forEach(b => { b.addEventListener('mousemove', mm); b.addEventListener('mouseleave', ml) })
    return () => btns.forEach(b => { b.removeEventListener('mousemove', mm); b.removeEventListener('mouseleave', ml) })
  }, [preloaderGone])

  /* 3D tilt on all cards */
  useTilt('.tc', 6)
  useTilt('.why-card', 8)
  useTilt('.svc-card', 5)

  const sectionIds = ['hero', 'about', 'projects', 'why', 'services', 'testimonials', 'faq', 'contact']

  /* Hero heading words with staggered animation */

  return (
    <>
      {/* Lead form modal */}
      {activeCard && <LeadModal card={activeCard} onClose={() => setActiveCard(null)} />}

      {/* Scroll progress */}
      <div id="scroll-progress" ref={progressRef} />

      {/* Preloader */}
      <div id="preloader" className={preloaderGone ? 'gone' : ''}>
        {/* corner accents */}
        <div className="pl-corner pl-corner-tl" />
        <div className="pl-corner pl-corner-tr" />
        <div className="pl-corner pl-corner-bl" />
        <div className="pl-corner pl-corner-br" />

        {/* emblem — slides from LEFT + rotateY flip */}
        <div className="pl-emblem">
          <img src="/img-1.webp" alt="IIV emblem" />
        </div>

        {/* wordmark — slides from RIGHT to centre */}
        <div className="pl-wordmark">
          <span className="pl-wordmark-line">Infinite</span>
          <span className="pl-wordmark-line">Imperial</span>
          <span className="pl-wordmark-line">Ventures</span>
        </div>

        {/* tagline */}
        <div className="pl-tagline">Dubai Real Estate Specialists</div>

        {/* progress bar with shooting-star + sparkles */}
        <div className="pl-bar-wrap">
          <div className="pl-bar" />
          <div className="pl-star" />
          <div className="pl-star" />
          <div className="pl-star" />
          <div className="pl-star" />
          <div className="pl-star" />
          <div className="pl-star" />
        </div>
      </div>

      {/* ══ ALL PAGE CONTENT — fades in as preloader exits ══ */}
      <div id="main-content">

      {/* Section dot nav */}
      <div className="section-dots">
        {sectionIds.map(id => (
          <div
            key={id}
            className={`sd${activeDot === id ? ' active' : ''}`}
            title={id.charAt(0).toUpperCase() + id.slice(1)}
            onClick={() => smoothScroll(id)}
          />
        ))}
      </div>

      {/* ══ NAV ══ */}
      <nav className={navSolid ? 'solid' : ''}>
        <div className="n-logo">
          <img src="/img-1.webp" alt="IIV" className="n-logo-img" />
          <div className="n-logo-text">
            <span>Infinite Imperial</span>
            <span>Ventures</span>
          </div>
        </div>
        <button
          className={`n-hamburger${mobileNavOpen ? ' open' : ''}`}
          onClick={() => setMobileNavOpen(v => !v)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </nav>

      {/* Mobile nav overlay — sibling of nav so backdrop-filter on nav.solid doesn't trap it */}
      <div className={`n-links${mobileNavOpen ? ' n-links--open' : ''}`}>
        <button className="n-close" onClick={() => setMobileNavOpen(false)} aria-label="Close menu">✕</button>
        <div className="n-menu-header">
          <img src="/img-1.webp" alt="IIV" className="n-menu-logo" />
          <div className="n-menu-brand">
            <span>Infinite Imperial</span>
            <span>Ventures</span>
          </div>
          <p className="n-menu-tagline">Dubai Real Estate</p>
          <div className="n-menu-divider" />
        </div>
        <a href="#about"        onClick={() => setMobileNavOpen(false)}>About</a>
        <a href="#projects"     onClick={() => setMobileNavOpen(false)}>Projects</a>
        <a href="#why"          onClick={() => setMobileNavOpen(false)}>Why Us</a>
        <a href="#services"     onClick={() => setMobileNavOpen(false)}>Services</a>
        <a href="#faq"          onClick={() => setMobileNavOpen(false)}>FAQ</a>
        <button
          className="n-cta"
          onClick={e => { addRipple(e); smoothScroll('contact'); setMobileNavOpen(false) }}
          style={{ position: 'relative', overflow: 'hidden' }}
        >
          Get in Touch
        </button>
      </div>

      {/* ══ HERO ══ */}
      <HeroCarousel
        onScrollTo={smoothScroll}
        addRipple={addRipple}
        openLeadForm={c => setActiveCard(c as unknown as Project)}
      />

      {/* ══ DEVELOPER LOGOS ══ */}
      <div className="dev-ticker">
        <div className="dev-ticker-label">Partnered with Dubai's leading developers</div>
        <div style={{ overflow: 'hidden' }}>
          <div className="dev-track">
            {[...developers, ...developers].map((dev, i) => (
              <div key={i} className="dev-item">
                <img src={dev.logo} alt={dev.name} className={`dev-logo${dev.name === 'Nakheel' ? ' dev-logo--nakheel' : ''}`} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ══ ABOUT ══ */}
      <div id="about" className="section-bg" style={{ padding: '110px 60px' }}>
        <div className="about-inner" style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div className="about-img-wrap srl">
            <div className="about-img" />
            <div className="about-img-shine" />
            <div className="about-stat-badge">
              <div className="asb-num">100%</div>
              <div className="asb-label">Client Satisfaction</div>
            </div>
          </div>
          <div className="about-text srr">
            <div className="sh-eye">Infinite Imperial Ventures</div>
            <div className="divider" style={{ margin: '12px 0 20px' }} />
            <h2 style={{ fontFamily: 'Sacramento, cursive', fontSize: 'clamp(2.8rem,5vw,4.2rem)', fontWeight: 400, lineHeight: 1.2, letterSpacing: '.01em', marginBottom: 20, background: 'linear-gradient(150deg,#F2D96A 0%,#D4A030 22%,#A87020 48%,#7C4E10 72%,#B8852A 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              A Clear Approach to<br /><span style={{ color: 'var(--gold)' }}>Dubai Real Estate</span>
            </h2>
            <p>
              We offer a curated selection of apartments, villas, and townhouses across Dubai, suited for both end-users and investors. Whether exploring your first property or expanding your portfolio, we help identify the right options based on your needs.
            </p>
            <p>
              Our role is to guide you through each step of the process, so you can move forward with clarity and confidence.
            </p>
            <div className="about-pillars">
              {['Residential & Investment Properties', 'Off-Plan & Ready Units', 'Rental & Mortgage Guidance', 'Golden Visa Assistance'].map(p => (
                <div key={p} className="ap-item">
                  <div className="ap-dot" />{p}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ══ STATS STRIP ══ */}
      <div className="stats-strip" ref={statsRef}>
        <div className="stats-inner">
          {statsData.map((s, i) => (
            <div key={s.label} className="stat-item sr" style={{ transitionDelay: `${i * 0.1}s` }}>
              <div className="stat-num">{stats[i]}{s.sfx}</div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ══ PROJECTS ══ */}
      <div id="projects" className="section-bg-alt" style={{ padding: '110px 60px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div className="sh sr">
            <div className="sh-eye">Featured Projects</div>
            <h2 className="sh-h">Properties Suited for<br /><em>Every Goal</em></h2>
            <p className="sh-p">Hover a card to explore — click to enquire.</p>
          </div>

          {/* 4-column flip-card grid */}
          <div className="pj-grid sr">
            {projects.map(p => (
              <div
                key={p.name}
                className="pj-card"
                onClick={() => setActiveCard(p)}
              >
                <div className="pj-card-inner">

                  {/* ── Front face — image only ── */}
                  <div
                    className="pj-front"
                    style={{ backgroundImage: `url(${p.img})` }}
                  >
                    <div className="proj-badge">{p.badge}</div>
                  </div>

                  {/* ── Back face (image bg + highlighted text) ── */}
                  <div
                    className="pj-back"
                    style={{ backgroundImage: `url(${p.img})` }}
                  >
                    <div className="pj-back-overlay" />
                    <div className="pj-back-content">
                      <div className="pj-back-badge">{p.badge}</div>
                      <div className="pj-back-name">{p.name}</div>
                      <div className="pj-back-loc">{p.loc}</div>
                      <div className="pj-back-price">{p.price}</div>
                      <div className="pj-back-tags">
                        {p.tags.map(t => <span key={t} className="pj-back-tag">{t}</span>)}
                      </div>
                      <div className="pj-back-cta">Enquire Now →</div>
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>

          <div className="projects-cta">
            <button
              className="btn-gold"
              style={{ position: 'relative', overflow: 'hidden', padding: '14px 40px', fontSize: '.92rem' }}
              onClick={e => { addRipple(e); smoothScroll('contact') }}
            >
              View All Projects
            </button>
          </div>
        </div>
      </div>

      {/* ══ WHY CHOOSE US ══ */}
      <div id="why" className="section-bg" style={{ padding: '110px 60px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div className="sh sr">
            <div className="sh-eye">Why Choose Us</div>
            <h2 className="sh-h">Guidance You Can<br /><em>Trust</em></h2>
            <p className="sh-p">We don't just show properties — we help you understand your options, make informed decisions, and move forward with confidence.</p>
          </div>
          <div className="why-grid">
            {whyItems.map((w, i) => (
              <div key={w.num} className="why-card sr" style={{ transitionDelay: `${i * 0.1}s` }}>
                <div className="why-card-shine" />
                <div className="why-icon">{w.icon}</div>
                <div className="why-num">{w.num}</div>
                <div className="why-title">{w.title}</div>
                <div className="why-desc">{w.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ══ SERVICES ══ */}
      <div id="services" className="section-bg-alt" style={{ padding: '110px 60px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div className="sh sr">
            <div className="sh-eye">Our Services</div>
            <h2 className="sh-h">Everything You Need,<br /><em>Under One Roof</em></h2>
            <p className="sh-p">From finding the right property to completing the process — we cover every aspect of your real estate journey.</p>
          </div>
          <div className="services-grid">
            {services.map((s, i) => (
              <div key={s.title} className="svc-card sr" style={{ transitionDelay: `${i * 0.08}s` }}>
                <div className="svc-icon">{s.icon}</div>
                <div className="svc-title">{s.title}</div>
                <div className="svc-desc">{s.desc}</div>
                <div className="svc-points">
                  {s.points.map(pt => <div key={pt} className="svc-pt">{pt}</div>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ══ TESTIMONIALS ══ */}
      <div id="testimonials" className="section-bg" style={{ padding: '110px 60px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div className="sh sr">
            <div className="sh-eye">Client Stories</div>
            <h2 className="sh-h">What Our <em>Clients Say</em></h2>
            <p className="sh-p">Hear directly from people who have found the right property with our guidance.</p>
          </div>
          <div className="test-grid">
            {testimonials.map((t, i) => (
              <div key={t.name} className="tc sr" style={{ transitionDelay: `${i * 0.12}s` }}>
                <div className="tc-stars">{'★'.repeat(t.stars)}</div>
                <div className="tc-text">{t.text}</div>
                <div className="tc-author">
                  <div className="tc-av">{t.av}</div>
                  <div>
                    <div className="tc-name">{t.name}</div>
                    <div className="tc-from">{t.from}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ══ FAQ ══ */}
      <div id="faq" className="section-bg-alt" style={{ padding: '110px 60px' }}>
        <div className="faq-inner">
          <div className="sh sr">
            <div className="sh-eye">FAQs</div>
            <h2 className="sh-h">Frequently Asked <em>Questions</em></h2>
            <p className="sh-p">Answers to the most common questions about buying, renting, and investing in Dubai.</p>
          </div>
          <div className="faq-list">
            {faqs.map((f, i) => (
              <div
                key={i}
                className={`faq-item${openFaq === i ? ' open' : ''}`}
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                <div className="faq-q" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                  {f.q}
                  <div className="faq-icon">+</div>
                </div>
                <div className="faq-a">{f.a}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ══ CONTACT ══ */}
      <div id="contact" className="section-bg" style={{ padding: '110px 60px' }}>
        <div className="contact-inner" style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div className="contact-info srl">
            <h2>Let's Help You Find<br />the <span style={{ color: 'var(--gold)' }}>Right Property</span></h2>
            <p>Whether you have a specific property in mind or are just starting to explore your options, we're here to help.</p>
            <div className="ci-list">
              {[
                {
                  ico: (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.18h3a2 2 0 0 1 2 1.72c.13 1 .37 1.97.72 2.91a2 2 0 0 1-.45 2.11L7.91 8.91A16 16 0 0 0 15.09 16.09l.91-.87a2 2 0 0 1 2.11-.45c.94.35 1.91.59 2.91.72A2 2 0 0 1 22 16.92z" />
                    </svg>
                  ),
                  label: 'Phone', val: '+971 42 947 655', href: 'tel:+97142947655',
                },
                {
                  ico: (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
                      <rect x="2" y="4" width="20" height="16" rx="3" />
                      <polyline points="2,4 12,13 22,4" />
                    </svg>
                  ),
                  label: 'Email', val: 'info@iivre.com', href: 'mailto:info@iivre.com',
                },
                {
                  ico: (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                      <circle cx="12" cy="9" r="2.5" />
                    </svg>
                  ),
                  label: 'Office Address', val: 'Fifty One Tower — 603, 6th Floor, Business Bay, Dubai', href: 'https://maps.google.com/?q=Fifty+One+Tower,+Business+Bay,+Dubai',
                },
              ].map(c => (
                <a key={c.label} className="ci-item" href={c.href} target={c.label === 'Office Address' ? '_blank' : undefined} rel={c.label === 'Office Address' ? 'noopener noreferrer' : undefined} style={{ textDecoration: 'none', color: 'inherit' }}>
                  <div className="ci-icon">{c.ico}</div>
                  <div>
                    <div className="ci-label">{c.label}</div>
                    <div className="ci-val">{c.val}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>
          <div className="srr">
            <div className="contact-form">
              {formDone ? (
                <div className="form-done">
                  <div className="form-done-ico">✅</div>
                  <h3>Message Received</h3>
                  <p>Thank you for reaching out. Our team will be in touch shortly.</p>
                </div>
              ) : (
                <>
                  <h3>Send Us a Message</h3>
                  <form onSubmit={e => { e.preventDefault(); setFormDone(true) }}>
                    <div className="form-row">
                      <div className="fg"><label>First Name</label><input type="text" placeholder="John" required /></div>
                      <div className="fg"><label>Last Name</label><input type="text" placeholder="Smith" required /></div>
                    </div>
                    <div className="fg"><label>Email Address</label><input type="email" placeholder="john@example.com" required /></div>
                    <div className="fg"><label>Phone Number</label><input type="tel" placeholder="+971 50 000 0000" /></div>
                    <div className="fg">
                      <label>I'm interested in</label>
                      <select>
                        <option value="">Select an option</option>
                        <option>Buying a Property</option>
                        <option>Renting a Property</option>
                        <option>Investment Advice</option>
                        <option>Off-Plan Properties</option>
                        <option>Mortgage Support</option>
                        <option>Golden Visa Guidance</option>
                      </select>
                    </div>
                    <div className="fg"><label>Message</label><textarea placeholder="Tell us about your requirements..." /></div>
                    <button
                      type="submit"
                      className="form-submit"
                      onClick={e => addRipple(e as unknown as React.MouseEvent<HTMLElement>)}
                    >
                      Send Message
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* ══ FOOTER ══ */}
      <footer>
        <div className="footer-inner">
          <div className="footer-top">
            <div className="footer-brand">
              <div className="f-logo">
                <img src="/img-1.webp" alt="Infinite Imperial Ventures" className="f-logo-img" />
                <div className="n-logo-text">
                  <span>Infinite Imperial</span>
                  <span>Ventures</span>
                </div>
              </div>
              <p>Established with a simple focus — to provide a more straightforward and client-focused real estate experience in Dubai. We work closely with clients to understand their goals and guide them toward properties that align with their needs.</p>
              <div className="f-social">
                <div className="f-soc" title="LinkedIn">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
                    <rect x="2" y="2" width="20" height="20" rx="5" />
                    <line x1="8" y1="11" x2="8" y2="17" />
                    <line x1="8" y1="7" x2="8" y2="8" />
                    <path d="M12 17v-4a2 2 0 0 1 4 0v4" />
                    <line x1="12" y1="11" x2="12" y2="17" />
                  </svg>
                </div>
                <div className="f-soc" title="Instagram">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
                    <rect x="2" y="2" width="20" height="20" rx="6" />
                    <circle cx="12" cy="12" r="4" />
                    <circle cx="17.5" cy="6.5" r=".5" fill="currentColor" />
                  </svg>
                </div>
                <div className="f-soc" title="WhatsApp">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="footer-col">
              <h4>Quick Links</h4>
              {['About Us|about','Projects|projects','Why Choose Us|why','Our Services|services','FAQ|faq','Contact|contact'].map(l => {
                const [label, id] = l.split('|')
                return <a key={id} href={`#${id}`}>{label}</a>
              })}
            </div>
            <div className="footer-col">
              <h4>Services</h4>
              {['Off-Plan Properties','Ready Properties','Rental Services','Mortgage Support','Golden Visa'].map(s => (
                <a key={s} href="#services">{s}</a>
              ))}
            </div>
            <div className="footer-col">
              <h4>From Our Founder</h4>
              <p style={{ fontStyle: 'italic', lineHeight: 1.7 }}>"Our commitment is simple — to build trust through clear communication, practical advice, and consistent support."</p>
              <p style={{ marginTop: 16, fontWeight: 700, color: 'rgba(255,255,255,.75)', fontSize: '.88rem' }}>Arjun Sharma</p>
              <p style={{ color: 'var(--gold2)', fontSize: '.78rem', fontWeight: 600 }}>Founder &amp; CEO</p>
            </div>
          </div>
          <div className="footer-divider" />
          <div className="footer-bottom">
            <span style={{ color: 'rgba(255,255,255,.35)' }}>© 2025 Infinite Imperial Ventures. All rights reserved.</span>
            <span>iivre.com</span>
          </div>
        </div>
      </footer>

      </div>{/* end #main-content */}
    </>
  )
}
