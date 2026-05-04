import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import './About.css'

export default function About() {
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
          <h1 className="page-hero__title">About <em>Us</em></h1>
          <p className="page-hero__sub">Infinite Imperial Ventures — A Clear Approach to Dubai Real Estate.</p>
        </div>
      </div>

      {/* About Intro */}
      <section className="about-intro">
        <div className="about-intro__inner reveal">
          <div className="about-intro__text">
            <h2 className="sec-title">A Clear Approach to<br /><em>Dubai Real Estate</em></h2>
            <p>Infinite Imperial Ventures was established with a simple focus — to provide a more straightforward and client-focused real estate experience in Dubai.</p>
            <p>We work closely with clients to understand their goals and guide them toward properties that genuinely align with their needs, whether for living or investment.</p>
            <p>From well-located residential communities to carefully selected opportunities, our role is to help you make sense of the options available and move forward with clarity and confidence.</p>
            <p>Dubai's real estate market moves quickly, and our approach is to ensure every decision is made with the right understanding, not pressure.</p>
          </div>
          <div className="about-intro__visual">
            <div className="about-intro__img-wrap">
              <img src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=900&q=80&auto=format&fit=crop" alt="Dubai Real Estate" loading="lazy" />
            </div>
            <div className="about-intro__stats">
              <div className="astat"><span className="astat__num">500+</span><span className="astat__lbl">Properties Curated</span></div>
              <div className="astat"><span className="astat__num">200+</span><span className="astat__lbl">Clients Served</span></div>
              <div className="astat"><span className="astat__num">100%</span><span className="astat__lbl">Transparent Advice</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Message */}
      <section className="founder">
        <div className="founder__inner reveal">
          <div className="founder__layout">
            <div className="founder__img-wrap">
              <img src="/img-3.webp" alt="CEO Arjun Sharma" className="founder__img" loading="lazy" />
            </div>
            <div className="founder__quote-wrap">
              <div className="founder__big-quote">&ldquo;</div>
              <blockquote className="founder__quote">
                Dubai's real estate market offers a wide range of opportunities, but navigating them is not always straightforward.
                At Infinite Imperial Ventures, our focus is to bring clarity to that process. We work closely with clients to help them understand their options, identify what truly fits their goals, and make decisions with confidence.
                Whether you are investing, relocating, or looking for the right home, our role is to guide you with a structured and transparent approach at every step.
                Our commitment is simple — to build trust through clear communication, practical advice, and consistent support.
              </blockquote>
              <div className="founder__sig">
                <div className="founder__name">Arjun Sharma</div>
                <div className="founder__role">Founder &amp; CEO, Infinite Imperial Ventures</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="diff-section">
        <div className="diff-inner">
          <h2 className="sec-title">What Makes Us <em>Different</em></h2>
          
          <div className="diff-grid">
            {[
              {
                n: '01', title: 'We Focus on Clarity, Not Pressure',
                desc: "We don't push decisions. We help you understand your options clearly so you can choose what truly fits.",
                icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>,
              },
              {
                n: '02', title: 'We Filter, Not Flood',
                desc: 'Instead of showing endless listings, we focus on a refined set of options that actually make sense for you.',
                icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/></svg>,
              },
              {
                n: '03', title: 'We Keep the Process Simple',
                desc: 'From first conversation to final steps, we guide you in a structured and straightforward way.',
                icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>,
              },
              {
                n: '04', title: 'We Think Beyond the Transaction',
                desc: "Our goal is not just to close a deal, but to help you make a decision you'll be confident about long term.",
                icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
              },
            ].map(d => (
              <div className="diff-card reveal" key={d.n}>
                <div className="diff-icon-wrap">{d.icon}</div>
                <div className="diff-num">{d.n}</div>
                <h3 className="diff-title">{d.title}</h3>
                <p className="diff-desc">{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="about-cta">
        <div className="about-cta__inner reveal">
          <h2 className="sec-title" style={{ color: 'var(--cream)' }}>Ready to Work<br /><em>With Us?</em></h2>
          <p className="about-cta__sub">Let's find the right property for your needs — together.</p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn-warm"><span>Get in Touch</span></Link>
            <Link to="/services" className="btn-outline-warm">Our Services</Link>
          </div>
        </div>
      </section>
    </>
  )
}
