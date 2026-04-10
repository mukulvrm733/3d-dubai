import { useState, useEffect } from 'react'
import { useRipple } from '../hooks/useRipple'

const LINKS = [['properties','Properties'],['why','Why Dubai'],['areas','Areas'],['tour','Virtual Tour'],['testimonials','Reviews']]

export default function Navbar() {
  const [solid, setSolid] = useState(false)
  const [open, setOpen] = useState(false)
  const ripple = useRipple()

  const go = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setOpen(false)
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
          <div className="n-logo-mark">A</div>
          AURUM
        </div>
        <div className="n-links">
          {LINKS.map(([id,label]) => (
            <a key={id} href={`#${id}`} onClick={e => { e.preventDefault(); go(id) }}>{label}</a>
          ))}
          <button className="n-cta" onClick={e => { ripple(e); go('contact') }}>Consult Free</button>
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
            <button className="n-cta n-mob-cta" onClick={e => { ripple(e); go('contact') }}>Consult Free</button>
          </div>
        </div>
      )}
    </>
  )
}
