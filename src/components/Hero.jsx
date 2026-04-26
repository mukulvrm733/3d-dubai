import { useEffect, useRef } from 'react'
import { useRipple } from '../hooks/useRipple'

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
        <h1 className="hero-h1">
          <span className="hero-h1-top">Find the right property in</span>
          <em>Dubai</em>
        </h1>
        <p className="hero-desc">
          Your journey to the right property starts here. We offer a curated selection of apartments, villas, and townhouses across Dubai — suited for both end-users and investors.
        </p>
        <div className="hero-actions">
          <button className="btn-gold" onClick={e => { ripple(e); go('projects') }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>
            View Projects
          </button>
          <button className="btn-ghost" onClick={e => { ripple(e); go('why') }}>
            Why Choose Us
          </button>
        </div>
      </div>

    </section>
  )
}
