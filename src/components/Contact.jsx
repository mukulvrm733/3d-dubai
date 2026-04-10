import { useState, useEffect } from 'react'
import { useRipple } from '../hooks/useRipple'

const CONTACT_ITEMS = [
  { ico:'📞', label:'US Toll-Free',    val:'+1 (800) 555-DUBAI' },
  { ico:'✉️', label:'Email',           val:'invest@aurumdubai.com' },
  { ico:'🕐', label:'US Office Hours', val:'Mon–Sat, 8am–8pm EST' },
  { ico:'🏙️', label:'New York Office', val:'1540 Broadway, New York, NY 10036' },
]

const TRUST_ITEMS = [
  'RERA-licensed Dubai brokerage',
  'US-based legal & compliance team',
  '$0 advisory fee — ever',
  '100% escrow-secured transactions',
  '2,400+ satisfied US investors',
]

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const ripple = useRipple()

  useEffect(() => {
    // Stagger contact items
    const items = [...document.querySelectorAll('.ci-item,.ts-row,.pc-item')]
    items.forEach((el, i) => {
      el.style.opacity = '0'
      el.style.transform = 'translateX(-16px)'
      el.style.transition = `opacity .5s ease ${i * .08}s,transform .5s ease ${i * .08}s`
      const io = new IntersectionObserver(en => {
        if (en[0].isIntersecting) { el.style.opacity = '1'; el.style.transform = ''; io.disconnect() }
      }, { threshold: 0.2 })
      io.observe(el)
    })
  }, [])

  return (
    <section id="contact" style={{background:'var(--ink2)'}}>
      <div className="contact-wrap">
        <div className="contact-info srl">
          <div className="sh">
            <div className="sh-eye">Get Started</div>
            <h2 className="sh-h">Speak with a<br /><em>Dubai Expert</em><br />Today</h2>
            <p className="sh-p" style={{marginTop:'1rem'}}>Free 30-minute consultation. No commitment. US-based advisors, EST-friendly hours.</p>
          </div>
          <div className="ci-items">
            {CONTACT_ITEMS.map(item => (
              <div key={item.label} className="ci-item">
                <div className="ci-ico">{item.ico}</div>
                <div><div className="ci-l">{item.label}</div><div className="ci-v">{item.val}</div></div>
              </div>
            ))}
          </div>
          <div className="trust-seal">
            <div className="ts-title">Why Trust Aurum</div>
            <div className="ts-list">
              {TRUST_ITEMS.map(item => (
                <div key={item} className="ts-row"><span className="ts-check">✓</span> {item}</div>
              ))}
            </div>
          </div>
        </div>

        <div className="contact-form srr">
          <div className="cf-title">Book Your Free Call</div>
          <div className="cf-sub">Typically respond within 2 hours during business hours.</div>
          <form onSubmit={e => { e.preventDefault(); setSubmitted(true) }}>
            <div className="cf-grid">
              <div className="fg"><label className="fl">First Name</label><input type="text"  className="fi" placeholder="John"  required /></div>
              <div className="fg"><label className="fl">Last Name</label> <input type="text"  className="fi" placeholder="Smith" required /></div>
              <div className="fg"><label className="fl">Email</label>      <input type="email" className="fi" placeholder="john@example.com" required /></div>
              <div className="fg"><label className="fl">Phone</label>      <input type="tel"   className="fi" placeholder="+1 (555) 000-0000" /></div>
              <div className="fg">
                <label className="fl">Investment Budget</label>
                <select className="fi">
                  <option value="">Select range</option>
                  <option>$400K – $800K</option><option>$800K – $2M</option>
                  <option>$2M – $5M</option><option>$5M+</option>
                </select>
              </div>
              <div className="fg">
                <label className="fl">Preferred Area</label>
                <select className="fi">
                  <option value="">Any / Suggest One</option>
                  <option>Downtown Dubai</option><option>Palm Jumeirah</option>
                  <option>Dubai Marina</option><option>Business Bay</option>
                  <option>Dubai Creek Harbour</option>
                </select>
              </div>
              <div className="fg full">
                <label className="fl">Investment Goals (optional)</label>
                <textarea className="fi" placeholder="e.g. Passive income, Golden Visa, portfolio diversification..." />
              </div>
            </div>
            <button
              type="submit"
              className="cf-submit"
              onClick={e => ripple(e)}
              disabled={submitted}
              style={submitted ? {background:'linear-gradient(135deg,#2a7a4f,#3daa6e)',boxShadow:'0 8px 32px rgba(74,222,128,.3)'} : {}}
            >
              {submitted ? "✓ Booked! We'll call within 2 hours." : 'Book Free Consultation →'}
            </button>
            <div className="cf-note">We never share your data. Privacy policy applies.</div>
          </form>
        </div>
      </div>
    </section>
  )
}
