import { useEffect, useRef } from 'react'
import { useRipple } from '../hooks/useRipple'

const AVATARS = ['JM','SR','DW','AL','+']

export default function Hero() {
  const bgRef = useRef(null)
  const ripple = useRipple()
  const go = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  useEffect(() => {
    const bg = bgRef.current
    const g1 = document.querySelector('.hero-glow.g1')
    const g2 = document.querySelector('.hero-glow.g2')
    let mX = 0, mY = 0, sY = 0

    const onScroll = () => {
      sY = window.scrollY
      if (g1) g1.style.transform = `translateY(${sY * .22}px) translate(${mX * .5}px,${mY * .4}px)`
      if (g2) g2.style.transform = `translateY(${sY * -.13}px) translate(${mX * -.35}px,${mY * -.3}px)`
      if (bg) bg.style.transform = `translateY(${sY * .4}px) translateZ(0)`
    }
    window.addEventListener('scroll', onScroll, { passive: true })

    const hero = document.getElementById('hero')
    const onMove = (e) => {
      const r = hero.getBoundingClientRect()
      mX = (e.clientX - r.left - r.width / 2) * .06
      mY = (e.clientY - r.top  - r.height/ 2) * .05
      if (g1) g1.style.transform = `translateY(${sY * .22}px) translate(${mX}px,${mY}px)`
      if (g2) g2.style.transform = `translateY(${sY * -.13}px) translate(${-mX * .7}px,${-mY * .6}px)`
      if (bg) {
        const bx = (e.clientX - r.left - r.width / 2) * .015
        const by = (e.clientY - r.top  - r.height/ 2) * .01
        bg.style.transform = `translateY(${sY * .4}px) translate(${bx}px,${by}px) translateZ(0)`
      }
    }
    hero?.addEventListener('mousemove', onMove)

    // 3D card stack tilt
    const stack = document.getElementById('cardStack')
    if (stack) {
      const onSMove = (e) => {
        const rect = stack.getBoundingClientRect()
        const x = ((e.clientX - rect.left) / rect.width  - .5) * 10
        const y = ((e.clientY - rect.top)  / rect.height - .5) * -10
        const c0 = stack.querySelector('.c0')
        if (c0) c0.style.transform = `rotateY(${x}deg) rotateX(${y}deg) translateZ(20px)`
      }
      const onSLeave = () => { const c0 = stack.querySelector('.c0'); if (c0) c0.style.transform = '' }
      stack.addEventListener('mousemove', onSMove)
      stack.addEventListener('mouseleave', onSLeave)
    }

    // Magnetic CTA buttons
    document.querySelectorAll('.btn-gold,.n-cta').forEach(btn => {
      btn.addEventListener('mousemove', function(e) {
        const r = this.getBoundingClientRect()
        const x = (e.clientX - r.left - r.width / 2) * .3
        const y = (e.clientY - r.top  - r.height/ 2) * .3
        this.style.transform = `translate(${x}px,${y - 2}px)`
      })
      btn.addEventListener('mouseleave', function() { this.style.transform = '' })
    })

    return () => {
      window.removeEventListener('scroll', onScroll)
      hero?.removeEventListener('mousemove', onMove)
    }
  }, [])

  return (
    <section id="hero">
      <div className="hero-bg">
        <div className="hero-bg-img" ref={bgRef} />
        <div className="hero-bg-overlay" />
        <div className="hero-bg-shimmer" />
      </div>

      <div className="hero-glow g1" />
      <div className="hero-glow g2" />

      {/* LEFT */}
      <div className="hero-l">
        <div className="hero-eyebrow">
          <span />&nbsp;Trusted by 2,400+ American Investors
        </div>
        <h1 className="hero-h1">
          Dubai's Finest<br />
          Real Estate,<br />
          <em>Zero Tax</em>
        </h1>
        <p className="hero-desc">
          Premium Dubai properties delivering 8–12% annual returns — fully managed from the United States. No tax. No complexity. Pure return.
        </p>
        <div className="hero-actions">
          <button className="btn-gold" onClick={e => { ripple(e); go('properties') }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>
            Explore Properties
          </button>
          <button className="btn-ghost" onClick={e => { ripple(e); go('tour') }}>
            ▶&nbsp;&nbsp;Virtual Tour
          </button>
        </div>
        <div className="hero-trust">
          <div className="trust-avatars">
            {AVATARS.map(a => <div key={a} className="trust-av">{a}</div>)}
          </div>
          <div className="trust-txt">
            <strong>2,400+ Americans invested</strong>
            Average return: 10.2% annually
          </div>
        </div>
      </div>

      {/* RIGHT — 3D card stack */}
      <div className="hero-r">
        <div className="card-stack" id="cardStack">
          <div className="stack-card c2">
            <div className="sc-img" style={{background:"url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=80') center/cover",height:'58%'}} />
            <div className="sc-body">
              <div className="sc-tag">Ultra Luxury</div>
              <div className="sc-price">$12.5M</div>
              <div className="sc-name">DIFC Skyline Mansion</div>
            </div>
          </div>
          <div className="stack-card c1">
            <div className="sc-img" style={{background:"url('https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=600&q=80') center/cover",height:'58%'}} />
            <div className="sc-body">
              <div className="sc-tag">Villa</div>
              <div className="sc-price">$5.8M</div>
              <div className="sc-name">Palm Frond Villa</div>
            </div>
          </div>
          <div className="stack-card c0">
            <div className="sc-img" style={{background:"url('https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=600&q=80') center/cover",height:'58%'}}>
              <div style={{position:'absolute',inset:0,background:'linear-gradient(0deg,#0E1018 0%,transparent 55%)',zIndex:1}} />
            </div>
            <div className="sc-body">
              <div className="sc-tag">Penthouse</div>
              <div className="sc-price">$3,200,000</div>
              <div className="sc-name">Burj Khalifa Residences · Downtown</div>
              <div className="sc-stats">
                <div className="sc-stat"><strong>8.4%</strong>Annual Yield</div>
                <div className="sc-stat"><strong>$22.4K</strong>Monthly Rent</div>
                <div className="sc-stat"><strong>4,800</strong>sq ft</div>
              </div>
            </div>
          </div>

          <div className="float-pill fp1">
            <div className="pill-dot" />
            <span>Live Deal Closed · <span className="pill-num">$2.1M</span> Palm Jumeirah</span>
          </div>
          <div className="float-pill fp2">
            <span>🏆 ROI This Month · <span className="pill-num">+10.8%</span></span>
          </div>
        </div>
      </div>
    </section>
  )
}
