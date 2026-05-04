import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import LeadFormModal from '../components/LeadFormModal'
import './Home.css'

const featuredProjects = [
  {
    id: 1,
    image: '/Projects/Skyflame.webp',
    type: 'Apartment / Luxury Residential', status: 'Off-Plan', name: 'Binghatti Skyflame',
    loc: 'Majan, Dubailand, Dubai', price: 'Starting from AED 699,999',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80&auto=format&fit=crop',
    type: 'Apartment', status: 'Ready', name: 'Marina Bay Residence',
    loc: 'Dubai Marina', price: 'AED 2,100,000',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80&auto=format&fit=crop',
    type: 'Townhouse', status: 'Off-Plan', name: 'Bay Grove Townhouse',
    loc: 'Business Bay, Dubai', price: 'AED 3,800,000',
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80&auto=format&fit=crop',
    type: 'Penthouse', status: 'Ready', name: 'Downtown Sky Residence',
    loc: 'Downtown Dubai', price: 'AED 8,500,000',
  },
]

// To change a logo's size, edit the `size` value (in px) for that partner below.
const partners = [
  { abbr: 'EMR', file: 'emaar-Photoroom.png',             size: 22 },
  { abbr: 'DAM', file: 'images-Photoroom.png',            size: 22 },
  { abbr: 'NKH', file: 'nakheel-Photoroom.png',           size: 75 },
  { abbr: 'MRS', file: 'Meraas.png',                      size: 30 },
  { abbr: 'DAN', file: 'Danube-Logo.webp',                size: 22 },
  { abbr: 'ALD', file: 'aldar-properties-logo.png',       size: 60 },
  { abbr: 'DPG', file: 'dubai-properties-logo-en4.png',   size: 55 },
  { abbr: 'SEL', file: 'Select-Group-Logo-Black.png',     size: 32 },
  { abbr: 'BNG', file: 'BINGHATTI-Photoroom.png',         size: 32 },
  { abbr: 'SBH', file: 'SOBHA-Photoroom.png',             size: 55 },
  { abbr: 'ELG', file: 'Ellington.png',                   size: 45 },
  { abbr: 'ALG', file: 'Al_Ghurair.png',                  size: 68 },
]

const faqs = [
  { q: 'Can foreigners buy property in Dubai?', a: 'Yes, foreign buyers can purchase property in freehold areas in Dubai with full ownership rights.' },
  { q: 'What are the main costs involved when buying a property?', a: 'In addition to the property price, there are costs such as Dubai Land Department fees (registration charges) and other related expenses. We explain all costs clearly before you proceed.' },
  { q: 'Can I get a mortgage in Dubai?', a: 'Yes, both residents and non-residents can apply for a mortgage, subject to eligibility. We can guide you through the available options.' },
  { q: 'How long does the buying process take?', a: 'The timeline depends on the type of property and payment structure, but we ensure the process is handled smoothly and without unnecessary delays.' },
  { q: 'What do I need to rent a property in Dubai?', a: 'Renting typically requires valid identification, visa details (if applicable), and initial payments such as security deposit and rent. We guide you through the process to make it simple.' },
]

/* Pre-defined star positions — no Math.random() in render */
const STARS = [
  { x: 3.1, y: 7.2, s: 1.0, o: 0.35 }, { x: 8.7, y: 15.3, s: 0.7, o: 0.20 }, { x: 14.2, y: 3.8, s: 1.2, o: 0.30 },
  { x: 21.5, y: 28.6, s: 0.6, o: 0.25 }, { x: 27.8, y: 11.4, s: 0.9, o: 0.15 }, { x: 35.3, y: 32.1, s: 0.8, o: 0.30 },
  { x: 42.1, y: 5.7, s: 1.1, o: 0.20 }, { x: 48.6, y: 19.3, s: 0.7, o: 0.35 }, { x: 54.9, y: 27.8, s: 0.9, o: 0.15 },
  { x: 61.4, y: 8.2, s: 1.1, o: 0.25 }, { x: 68.3, y: 21.7, s: 0.6, o: 0.30 }, { x: 74.7, y: 13.5, s: 1.0, o: 0.20 },
  { x: 81.2, y: 36.4, s: 0.8, o: 0.25 }, { x: 87.9, y: 6.1, s: 1.2, o: 0.30 }, { x: 93.6, y: 19.8, s: 0.7, o: 0.20 },
  { x: 10.4, y: 42.3, s: 1.0, o: 0.20 }, { x: 17.8, y: 56.1, s: 0.8, o: 0.15 }, { x: 24.5, y: 68.7, s: 1.1, o: 0.25 },
  { x: 32.7, y: 44.2, s: 0.7, o: 0.30 }, { x: 39.8, y: 73.5, s: 1.3, o: 0.20 }, { x: 46.3, y: 51.9, s: 0.9, o: 0.25 },
  { x: 52.8, y: 66.4, s: 0.6, o: 0.15 }, { x: 59.7, y: 43.1, s: 1.0, o: 0.30 }, { x: 66.2, y: 75.8, s: 0.8, o: 0.20 },
  { x: 73.1, y: 54.6, s: 1.2, o: 0.25 }, { x: 79.8, y: 47.3, s: 0.7, o: 0.15 }, { x: 86.5, y: 69.2, s: 1.0, o: 0.30 },
  { x: 92.3, y: 61.7, s: 0.8, o: 0.20 }, { x: 5.8, y: 81.4, s: 1.1, o: 0.25 }, { x: 13.4, y: 89.3, s: 0.6, o: 0.15 },
  { x: 19.7, y: 78.6, s: 0.9, o: 0.30 }, { x: 29.6, y: 93.2, s: 1.0, o: 0.20 }, { x: 37.2, y: 83.7, s: 0.7, o: 0.25 },
  { x: 44.8, y: 91.5, s: 1.2, o: 0.15 }, { x: 51.6, y: 86.3, s: 0.8, o: 0.30 }, { x: 57.4, y: 96.1, s: 1.0, o: 0.20 },
  { x: 64.1, y: 88.7, s: 0.9, o: 0.25 }, { x: 71.5, y: 93.4, s: 0.6, o: 0.15 }, { x: 77.8, y: 81.2, s: 1.1, o: 0.30 },
  { x: 84.3, y: 91.8, s: 0.7, o: 0.20 }, { x: 91.7, y: 86.5, s: 1.3, o: 0.25 }, { x: 96.4, y: 46.2, s: 0.8, o: 0.30 },
  { x: 49.7, y: 36.8, s: 0.9, o: 0.20 }, { x: 36.5, y: 61.3, s: 1.0, o: 0.25 }, { x: 62.9, y: 53.7, s: 0.7, o: 0.15 },
  { x: 76.4, y: 39.1, s: 1.1, o: 0.30 }, { x: 15.6, y: 63.4, s: 0.6, o: 0.20 }, { x: 43.2, y: 38.7, s: 0.8, o: 0.25 },
  { x: 70.1, y: 29.3, s: 1.2, o: 0.15 }, { x: 83.8, y: 16.4, s: 0.9, o: 0.30 }, { x: 97.2, y: 72.8, s: 0.7, o: 0.20 },
]

/* Design 1 — Constellation: 12 logos scattered in a 900×480 viewBox (center filled) */
const C_VBW = 900, C_VBH = 480
const C_POS = [
  { x: 88, y: 55 },   // 0  top-left
  { x: 355, y: 28 },  // 1  top-center
  { x: 678, y: 50 },  // 2  top-right
  { x: 872, y: 182 }, // 3  far-right
  { x: 838, y: 390 }, // 4  bottom-right
  { x: 578, y: 452 }, // 5  bottom-center
  { x: 248, y: 438 }, // 6  bottom-left
  { x: 40, y: 308 },  // 7  far-left
  { x: 218, y: 188 }, // 8  inner center-left
  { x: 476, y: 228 }, // 9  inner center
  { x: 692, y: 195 }, // 10 inner center-right
  { x: 434, y: 373 }, // 11 center of Sobha/Aldar/Dubai-Properties
]
const C_LINES = [
  // outer ring
  [0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 7], [7, 0],
  // inner triangle
  [8, 9], [9, 10], [10, 8],
  // spokes outer → inner
  [0, 8], [1, 9], [2, 10], [4, 10], [5, 9], [6, 8], [7, 8],
  // Al Ghurair (11) sits at center of Sobha/Aldar/Dubai-Properties
  [5, 11], [6, 11], [9, 11],
]

const GoogleG = ({ width = 20, height = 20 }) => (
  <svg viewBox="0 0 24 24" width={width} height={height}>
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
  </svg>
)

const reviews = [
  {
    name: 'Rania Al-Mansouri', initials: 'RM', avatarBg: '#7B4F3A', time: '2 months ago',
    quote: 'IIV helped me navigate the Dubai property market with complete clarity. They took the time to explain all my options and never once pressured me. I found the perfect apartment in Business Bay.',
    role: 'Investment Buyer · Dubai',
  },
  {
    name: 'James Whitfield', initials: 'JW', avatarBg: '#1E5F74', time: '4 months ago',
    quote: 'As a first-time buyer from overseas, I was apprehensive. The team at IIV made everything straightforward — from the initial consultation to signing the final documents. Exceptional service.',
    role: 'Residential Buyer · London',
  },
  {
    name: 'Ahmed Al-Rashidi', initials: 'AR', avatarBg: '#2E4057', time: '6 months ago',
    quote: 'What sets IIV apart is their honest approach. They showed me a refined selection of properties rather than flooding me with irrelevant options. I am now the proud owner of a villa on the Palm.',
    role: 'Villa Owner · Abu Dhabi',
  },
]

function StarField() {
  return STARS.map((s, i) => (
    <div key={i} className="c-star" style={{ left: `${s.x}%`, top: `${s.y}%`, width: `${s.s}px`, height: `${s.s}px`, opacity: s.o }} />
  ))
}

function ConstellationPartners() {
  return (
    <section className="constellation">
      <div className="constellation__inner">
        <div className="constellation__head">
          <h2 className="constellation__title">Trusted by Dubai's Finest</h2>
        </div>

        <div className="constellation__canvas">
          <StarField />
          <svg className="c-svg" viewBox={`0 0 ${C_VBW} ${C_VBH}`} preserveAspectRatio="none">
            <defs>
              <filter id="cGlow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="2.5" result="blur" />
                <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
              </filter>
            </defs>
            <g filter="url(#cGlow)">
              {C_LINES.map(([a, b], i) => (
                <line key={i}
                  x1={C_POS[a].x} y1={C_POS[a].y}
                  x2={C_POS[b].x} y2={C_POS[b].y}
                  stroke="rgba(232,201,122,0.22)" strokeWidth="0.5" strokeDasharray="4 8"
                />
              ))}
            </g>
          </svg>
          {partners.map((p, i) => (
            <div key={p.abbr} className="c-logo" style={{
              '--logo-size': `${p.size}px`,
              left: `${(C_POS[i].x / C_VBW) * 100}%`,
              top: `${(C_POS[i].y / C_VBH) * 100}%`,
              animationName: `cFloat${(i % 5) + 1}`,
              animationDuration: `${5 + i * 0.5}s`,
              animationDelay: `-${i * 1.1}s`,
            }}>
              <img
                src={`/partner/${p.file}`}
                alt={p.abbr}
                loading="lazy"
              />
            </div>
          ))}
        </div>

        <div className="c-logo-grid">
          {partners.map((p) => (
            <div key={p.abbr} className="c-logo-grid__item">
              <img
                src={`/partner/${p.file}`}
                alt={p.abbr}
                loading="lazy"
                style={{ height: `${Math.round(p.size * 1.1)}px` }}
              />
            </div>
          ))}
        </div>

        <div className="constellation__stats">
          <div className="cstat"><span className="cstat__num">200+</span><span className="cstat__lbl">Partners</span></div>
          <div className="cstat"><span className="cstat__num">500+</span><span className="cstat__lbl">Projects</span></div>
          <div className="cstat"><span className="cstat__num">200M+</span><span className="cstat__lbl">in Sales</span></div>
        </div>
      </div>
    </section>
  )
}


function useReveal() {
  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('in') })
    }, { threshold: 0.08 })
    document.querySelectorAll('.reveal').forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])
}

export default function Home() {
  const [openFaq, setOpenFaq] = useState(null)
  const [showLead, setShowLead] = useState(false)
  const location = useLocation()
  useReveal()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    if (location.state?.scrollTo === 'faq') {
      setTimeout(() => {
        document.getElementById('faq')?.scrollIntoView({ behavior: 'smooth' })
      }, 150)
    }
  }, [location.state])

  return (
    <>
      {/* Hero */}
      <section className="hero">
        <div className="hero__sky" />
        <img
          src="/2.webp"
          alt="Dubai" className="hero__bg-img"
        />
        <div className="hero__sun" />
        <div className="hero__horizon" />
        <div className="hero__cityline" />
        <div className="hero__ground" />
        <div className="hero__content">
          <div className="hero__inner">

            <h1 className="hero__title">Find the Right<br /><em>Property</em> in Dubai</h1>
            <div className="hero__bottom">
              <p className="hero__desc">Your journey to the right property starts here. We offer a curated selection of apartments, villas, and townhouses across Dubai, suited for both end-users and investors.</p>
              <div className="hero__btns">
                <Link to="/projects" className="btn-warm"><span>View Projects</span></Link>
                <button onClick={() => setShowLead(true)} className="btn-outline-warm">Get in Touch</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Design 1 — Constellation */}
      <ConstellationPartners />

      {/* Featured Projects */}
      <section className="feat-proj">
        <div className="feat-proj__inner">
          <div className="feat-proj__head reveal">
            <h2 className="sec-title">Featured <em>Projects</em></h2>
            <p className="feat-proj__sub">A curated selection of Dubai's finest properties</p>
          </div>
          <div className="feat-proj__grid">
            {featuredProjects.map(p => (
              <div className="fp-card reveal" key={p.id}>
                <div className="fp-card__img-wrap">
                  <img src={p.image} alt={p.name} className="fp-card__img" loading="lazy" />
                  <span className={`fp-card__status fp-card__status--${p.status === 'Ready' ? 'ready' : 'offplan'}`}>{p.status}</span>
                </div>
                <div className="fp-card__body">
                  <span className="fp-card__type">{p.type}</span>
                  <h3 className="fp-card__name">{p.name}</h3>
                  <p className="fp-card__loc">{p.loc}</p>
                  <p className="fp-card__price">{p.price}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="feat-proj__cta reveal">
            <Link to="/projects" className="btn-warm"><span>View All Projects</span></Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why">
        <div className="why__bg" />
        <div className="why__inner">
          <div className="why__grid reveal">
            <div className="why__text">
              <h2 className="sec-title" style={{ color: 'var(--cream)' }}>A Clear Approach to<br /><em>Dubai Real Estate</em></h2>
              <p className="why__desc">Infinite Imperial Ventures was established with a simple focus — to provide a more straightforward and client-focused real estate experience in Dubai.</p>
              <div className="reasons-grid">
                {[
                  { n: '01', title: 'Clear & Honest Guidance', text: 'We walk you through options clearly, including both advantages and risks, so you always know what you\'re choosing.' },
                  { n: '02', title: 'Carefully Selected Properties', text: 'Instead of overwhelming you with listings, we focus on a refined set that truly aligns with your needs.' },
                  { n: '03', title: 'Simple & Structured Process', text: 'We guide you step by step, from shortlisting to final paperwork, so everything stays clear and manageable.' },
                  { n: '04', title: 'Support That Continues', text: 'Our role doesn\'t end when the deal is done. We stay available to support you even after.' },
                ].map(r => (
                  <div className="reason-item" key={r.n}>
                    <div className="reason-number">{r.n}</div>
                    <div className="reason-title">{r.title}</div>
                    <div className="reason-text">{r.text}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="why__visual">
              <div className="why__visual-main">
                <img src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=900&q=80&auto=format&fit=crop" alt="IIV Property" loading="lazy" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials — Google Review Style */}
      <section className="testi">
        <div className="testi__inner">
          <div className="testi__head reveal">
            <div>
              <h2 className="sec-title">What Our Clients <em>Say</em></h2>
              <p className="testi__sub">Trusted by buyers, investors, and families across the world.</p>
            </div>
            <div className="testi__grating">
              <GoogleG width={36} height={36} />
              <div>
                <div className="testi__gscore">4.9 <span className="testi__gstars">★★★★★</span></div>
                <div className="testi__gcount">Based on 47 Google Reviews</div>
              </div>
            </div>
          </div>

          <div className="testi-grid">
            {reviews.map((t, i) => (
              <div className="gcard reveal" key={i}>
                <div className="gcard__header">
                  <div className="gcard__avatar" style={{ background: t.avatarBg }}>{t.initials}</div>
                  <div className="gcard__meta">
                    <div className="gcard__name">{t.name}</div>
                    <div className="gcard__time">{t.time}</div>
                  </div>
                  <div className="gcard__g"><GoogleG width={18} height={18} /></div>
                </div>
                <div className="gcard__stars">★★★★★</div>
                <p className="gcard__text">{t.quote}</p>
                <div className="gcard__role">{t.role}</div>
              </div>
            ))}
          </div>

          <div className="testi__footer reveal">
            <span className="testi__footer-label">Verified Google Reviews</span>
            <div className="testi__footer-stars">★★★★★</div>
            <span className="testi__footer-score">4.9 / 5 · 47 Reviews</span>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="faq" id="faq">
        <div className="faq__inner">

          <h2 className="sec-title" style={{ color: 'var(--cream)' }}>Frequently Asked Questions</h2>
          <div className="faq__list">
            {faqs.map((f, i) => (
              <div className={`faq-item${openFaq === i ? ' faq-item--open' : ''}`} key={i}>
                <button className="faq-q" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                  <span>{f.q}</span>
                  <div className="faq-icon">+</div>
                </button>
                <div className="faq-a">{f.a}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {showLead && <LeadFormModal onClose={() => setShowLead(false)} />}
    </>
  )
}
