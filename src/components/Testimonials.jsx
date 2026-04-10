import { useEffect } from 'react'
import { TESTIMONIALS } from '../data'

export default function Testimonials() {
  const featured  = TESTIMONIALS.find(t => t.featured)
  const rest      = TESTIMONIALS.filter(t => !t.featured)

  useEffect(() => {
    // Testimonial card 3D tilt
    document.querySelectorAll('.tc').forEach(card => {
      card.addEventListener('mousemove', function(e) {
        const r = this.getBoundingClientRect()
        const x = (e.clientX - r.left) / r.width  - .5
        const y = (e.clientY - r.top)  / r.height - .5
        this.style.transform = `perspective(900px) rotateX(${-y * 6}deg) rotateY(${x * 6}deg) translateY(-5px)`
        this.style.transition = 'transform .08s linear'
      })
      card.addEventListener('mouseleave', function() {
        this.style.transform = ''
        this.style.transition = 'transform .5s cubic-bezier(.4,0,.2,1),border-color .4s ease'
      })
    })
  }, [])

  const Card = ({ t }) => (
    <div className={`tc${t.featured ? ' featured' : ''}`}>
      <div className="tc-stars">{'★'.repeat(t.stars)}</div>
      <p className="tc-text">{t.text}</p>
      <div className="tc-author">
        <div className="tc-av">{t.initials}</div>
        <div>
          <div className="tc-name">{t.name}</div>
          <div className="tc-from">{t.from}</div>
        </div>
      </div>
    </div>
  )

  return (
    <section id="testimonials">
      <div className="sh center sr" style={{marginBottom:'4rem'}}>
        <div className="sh-eye">Client Stories</div>
        <h2 className="sh-h">What <em>Americans</em><br />Say After Investing</h2>
      </div>
      <div className="testi-grid sr">
        {featured && <Card t={featured} />}
        <div style={{display:'flex',flexDirection:'column',gap:'1rem'}}>
          {rest.map(t => <Card key={t.id} t={t} />)}
        </div>
      </div>
    </section>
  )
}
