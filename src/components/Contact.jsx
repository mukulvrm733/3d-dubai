import { useState, useEffect } from 'react'
import { useRipple } from '../hooks/useRipple'
import PhoneInput from './PhoneInput'

const CONTACT_ITEMS = [
  { ico:'📞', label:'Phone',   val:'+971 42 947 655',  href:'tel:+97142947655' },
  { ico:'✉️', label:'Email',   val:'info@iivre.com',   href:'mailto:info@iivre.com' },
  { ico:'📍', label:'Address', val:'Fifty One Tower – 603, 6th Floor, Business Bay, Dubai',
    href:'https://maps.google.com/?q=Fifty+One+Tower+603+Business+Bay+Dubai', target:'_blank' },
]

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const ripple = useRipple()

  useEffect(() => {
    const items = [...document.querySelectorAll('.ci-item,.ts-row')]
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
    <section id="contact">
      <div className="contact-wrap">
        <div className="contact-info srl">
          <div className="sh center">
            <div className="sh-eye">Contact Us</div>
            <h2 className="sh-h">Let's Help You<br />Find the <em>Right</em><br />Property</h2>
            <p className="sh-p" style={{marginTop:'1rem'}}>Reach out and we'll guide you through your options — clearly and without pressure.</p>
          </div>
          <div className="ci-items">
            {CONTACT_ITEMS.map(item => (
              <div key={item.label} className="ci-item">
                <div className="ci-ico">{item.ico}</div>
                <div>
                  <div className="ci-l">{item.label}</div>
                  <a
                    href={item.href}
                    target={item.target || '_self'}
                    rel={item.target === '_blank' ? 'noopener noreferrer' : undefined}
                    className="ci-link"
                  >
                    {item.val}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="contact-form srr">
          <div className="cf-title">Send Us a Message</div>
          <div className="cf-sub">We'll get back to you within 24 hours.</div>
          <form onSubmit={e => { e.preventDefault(); setSubmitted(true) }}>
            <div className="cf-grid">
              <div className="fg"><label className="fl">First Name</label><input type="text"  className="fi" placeholder="Your first name"  required /></div>
              <div className="fg"><label className="fl">Last Name</label> <input type="text"  className="fi" placeholder="Your last name" required /></div>
              <div className="fg"><label className="fl">Email</label>      <input type="email" className="fi" placeholder="your@email.com" required /></div>
              <div className="fg"><label className="fl">Phone</label><PhoneInput placeholder="Phone number" /></div>
              <div className="fg full">
                <label className="fl">Message (optional)</label>
                <textarea className="fi" placeholder="Tell us what you're looking for — we'll take it from there." />
              </div>
            </div>
            <button
              type="submit"
              className="cf-submit"
              onClick={e => ripple(e)}
              disabled={submitted}
              style={submitted ? {background:'linear-gradient(135deg,#2a7a4f,#3daa6e)',boxShadow:'0 8px 32px rgba(74,222,128,.3)'} : {}}
            >
              {submitted ? '✓ Sent — we\'ll be in touch shortly.' : 'Send Message →'}
            </button>
            <div className="cf-note">We never share your data. Privacy policy applies.</div>
          </form>
        </div>
      </div>
    </section>
  )
}
