import { useState, useEffect } from 'react'
import { useRipple } from '../hooks/useRipple'

const LINKS = [['about','About'],['projects','Projects'],['why','Why Us'],['services','Services'],['faq','FAQ'],['contact','Contact Us']]

export default function Navbar({ onOpenLeadForm }) {
  const [solid, setSolid] = useState(false)
  const [open, setOpen] = useState(false)
  const ripple = useRipple()

  const go = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setOpen(false)
  }

  const handleGetInTouch = (e) => {
    ripple(e)
    setOpen(false)
    onOpenLeadForm()
  }

  useEffect(() => {
    const fn = () => setSolid(window.scrollY > 60)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <>
      <nav id="nav" className={solid ? 'solid' : ''}>
        <div className="n-logo">
          <img src="/img-1.webp" alt="IIV" className="n-logo-img1" />
          <img src="/img-2.webp" alt="Infinite Imperial Ventures" className="n-logo-img2" />
        </div>
        <div className="n-links">
          {LINKS.map(([id,label]) => (
            <a key={id} href={`#${id}`} onClick={e => { e.preventDefault(); go(id) }}>{label}</a>
          ))}
          <button className="n-cta" onClick={handleGetInTouch}>Get in Touch</button>
        </div>
        <button className={`n-ham${open ? ' open' : ''}`} onClick={() => setOpen(o => !o)} aria-label="Toggle menu">
          <span /><span /><span />
        </button>
      </nav>

      {open && (
        <div className="n-mob" onClick={() => setOpen(false)}>
          <div className="n-mob-inner" onClick={e => e.stopPropagation()}>
            {LINKS.map(([id,label]) => (
              <a key={id} href={`#${id}`} onClick={e => { e.preventDefault(); go(id) }}>{label}</a>
            ))}
            <button className="n-cta n-mob-cta" onClick={handleGetInTouch}>Get in Touch</button>
          </div>
        </div>
      )}
    </>
  )
}
