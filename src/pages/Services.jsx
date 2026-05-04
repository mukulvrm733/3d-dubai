import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Services.css'

const services = [
  {
    num: '01', title: 'Off-Plan Properties',
    desc: 'Explore newly launched projects across Dubai with flexible payment plans. We help you understand the opportunity, timelines, and risks before you make a decision.',
    points: ['Flexible payment plans', 'New launch opportunities', 'Guided decision support'],
  },
  {
    num: '02', title: 'Ready / Secondary Properties',
    desc: 'For buyers looking for completed homes or immediate returns, we help you identify suitable ready properties and guide you through the process clearly.',
    points: ['Ready-to-move options', 'Resale opportunities', 'Clear transaction process'],
  },
  {
    num: '03', title: 'Rental Services',
    desc: "Whether you're looking to rent or lease out a property, we assist in finding the right match and managing the process smoothly.",
    points: ['Tenant support', 'Property listing assistance', 'Simple leasing process'],
  },
  {
    num: '04', title: 'Mortgage Support',
    desc: 'We provide in-house mortgage support to help you understand your eligibility and explore suitable financing options. From initial guidance to final steps, we keep the process clear and straightforward.',
    points: ['Eligibility guidance', 'Financing options', 'Step-by-step process'],
  },
  {
    num: '05', title: 'Golden Visa Support',
    desc: 'We assist eligible property buyers in understanding the Golden Visa process and requirements as part of their purchase journey, ensuring everything is handled in a clear and structured way.',
    points: ['Eligibility assessment', 'Document guidance', 'Structured process support'],
  },
]

export default function Services() {
  useEffect(() => {
    window.scrollTo(0, 0)
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('in') })
    }, { threshold: 0.08 })
    document.querySelectorAll('.reveal').forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  return (
    <>
      {/* Page Hero */}
      <div className="page-hero">
        <div className="page-hero__sky" />
        <div className="page-hero__content">
          
          <h1 className="page-hero__title">Our <em>Services</em></h1>
          <p className="page-hero__sub">From off-plan to ready homes, rentals to mortgages — we guide you through every path in Dubai real estate.</p>
        </div>
      </div>

      {/* Services Grid */}
      <section className="svcs-section">
        <div className="svcs-inner">
          <div className="svcs-grid">
            {services.map(s => (
              <div className="svc-card reveal" key={s.num}>
                <div className="svc-num">{s.num}</div>
                <h3 className="svc-title">{s.title}</h3>
                <p className="svc-desc">{s.desc}</p>
                <ul className="svc-pts">
                  {s.points.map(pt => <li key={pt}>{pt}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="process-section">
        <div className="process-inner">
          <div className="process-header reveal">
            <h2 className="sec-title">A Simple, Structured <em>Process</em></h2>
            <p className="process-sub">From your first conversation to the final handover — every step is transparent, guided, and built around your needs.</p>
          </div>
          <div className="proc-divider" />
          <div className="proc-grid">
            {[
              {
                n: '01', title: 'Clear Consultation',
                desc: 'We begin by understanding your goals, budget, and lifestyle priorities. Every option is explained in full — advantages, risks, and realistic timelines — so you always know exactly what you\'re considering.',
                detail: 'No pressure, no jargon. Just honest, straightforward guidance from day one.',
                icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>,
              },
              {
                n: '02', title: 'Refined Shortlist',
                desc: 'Instead of overwhelming you with hundreds of listings, we present a carefully curated selection of properties that genuinely align with your criteria, investment goals, and long-term vision.',
                detail: 'Quality over quantity — every option on your list is there for a clear reason.',
                icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/></svg>,
              },
              {
                n: '03', title: 'Guided Viewings',
                desc: 'We arrange property visits at your convenience — providing full context on each option including location advantages, developer reputation, pricing comparisons, and projected returns.',
                detail: 'In-person or virtual viewings available for international and overseas clients.',
                icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>,
              },
              {
                n: '04', title: 'Ongoing Support',
                desc: 'From offer acceptance to final paperwork and property handover, we manage every step with precision. Our commitment does not end at the transaction — we remain available for any questions that arise after.',
                detail: 'Post-sale support including property management referrals and resale guidance.',
                icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
              },
            ].map(step => (
              <div className="proc-card reveal" key={step.n}>
                <div className="proc-icon-wrap">{step.icon}</div>
                <div className="proc-num">{step.n}</div>
                <h3 className="proc-title">{step.title}</h3>
                <p className="proc-desc">{step.desc}</p>
                <p className="proc-detail">{step.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="svc-cta">
        <div className="svc-cta__inner reveal">
          <h2 className="sec-title" style={{ color: 'var(--cream)' }}>Ready to Find Your<br /><em>Perfect Property?</em></h2>
          <p className="svc-cta__sub">Let us guide you with clarity, honesty, and expertise.</p>
          <Link to="/contact" className="btn-warm"><span>Get in Touch</span></Link>
        </div>
      </section>
    </>
  )
}
