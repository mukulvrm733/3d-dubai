import { useState, useEffect } from 'react'
import { useRipple } from '../hooks/useRipple'
import PhoneInput from './PhoneInput'

export default function LeadFormModal({ open, onClose }) {
  const [submitted, setSubmitted] = useState(false)
  const ripple = useRipple()

  useEffect(() => {
    if (!open) { setSubmitted(false); return }
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [open])

  useEffect(() => {
    const onKey = e => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose])

  if (!open) return null

  return (
    <div className="lm-backdrop" onClick={onClose}>
      <div className="lm-card" onClick={e => e.stopPropagation()}>
        <button className="lm-close" onClick={onClose} aria-label="Close">✕</button>

        <div className="lm-head">
          <div className="sh-eye" style={{justifyContent:'flex-start',marginBottom:'.6rem'}}>Get in Touch</div>
          <h2 className="lm-title">Let's Find Your<br /><em>Ideal Property</em></h2>
          <p className="lm-sub">Fill in the form below — we'll reach out within 24 hours.</p>
        </div>

        <form className="lm-form" onSubmit={e => { e.preventDefault(); setSubmitted(true) }}>
          <div className="cf-grid">
            <div className="fg">
              <label className="fl">First Name</label>
              <input type="text" className="fi" placeholder="Your first name" required />
            </div>
            <div className="fg">
              <label className="fl">Last Name</label>
              <input type="text" className="fi" placeholder="Your last name" required />
            </div>
            <div className="fg">
              <label className="fl">Email</label>
              <input type="email" className="fi" placeholder="your@email.com" required />
            </div>
            <div className="fg">
              <label className="fl">Phone</label>
              <PhoneInput placeholder="Phone number" />
            </div>
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
            style={submitted ? { background:'linear-gradient(135deg,#2a7a4f,#3daa6e)', boxShadow:'0 8px 32px rgba(74,222,128,.3)' } : {}}
          >
            {submitted ? "✓ Sent — we'll be in touch shortly." : 'Send Message →'}
          </button>
          <div className="cf-note">We never share your data. Privacy policy applies.</div>
        </form>
      </div>
    </div>
  )
}
