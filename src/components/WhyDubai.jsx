import { useEffect, useRef } from 'react'
import { ROI_DATA, MAP_DOTS } from '../data'

export default function WhyDubai() {
  const roiRef = useRef(null)

  useEffect(() => {
    // ROI bars
    const fills = document.querySelectorAll('.roi-fill')
    fills.forEach((f, i) => {
      f.style.width = (ROI_DATA[i].scale * 100) + '%'
      f.style.transform = 'scaleX(0)'
      f.style.transformOrigin = 'left'
      f.style.transition = `transform 1.4s cubic-bezier(.4,0,.2,1) ${i * 0.2}s`
    })

    const roi = roiRef.current
    if (roi) {
      const io = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting) {
          fills.forEach(f => { f.style.transform = 'scaleX(1)' })
          io.disconnect()
        }
      }, { threshold: 0.5 })
      io.observe(roi)
    }

    // Bento 3D tilt
    const cards = document.querySelectorAll('.b')
    cards.forEach(card => {
      card.addEventListener('mousemove', function(e) {
        const r = this.getBoundingClientRect()
        const x = (e.clientX - r.left) / r.width  - .5
        const y = (e.clientY - r.top)  / r.height - .5
        this.style.transform = `perspective(900px) rotateX(${-y * 7}deg) rotateY(${x * 7}deg) translateY(-4px)`
        this.style.transition = 'transform .08s linear'
      })
      card.addEventListener('mouseleave', function() {
        this.style.transform = ''
        this.style.transition = 'transform .5s cubic-bezier(.4,0,.2,1),border-color .4s ease'
      })
    })
  }, [])

  return (
    <section id="why">
      <div className="sh sr">
        <div className="sh-eye">Why Dubai</div>
        <h2 className="sh-h">America's most <em>strategic</em><br />overseas investment</h2>
        <p className="sh-p">Every metric that matters — returns, safety, liquidity, and lifestyle — points to Dubai. Here's the data.</p>
      </div>

      <div className="bento">
        <div className="b b1 sr" data-delay="1">
          <div className="b-label">The destination</div>
          <div className="b-title">Dubai Real Estate<br />Outperforms Every<br />US Metro</div>
          <p className="b-desc" style={{marginTop:'.5rem'}}>Average yields in Dubai range 7–12%, versus 3–5% in New York or Miami. With zero tax, your net return is unmatched.</p>
          <div className="b-visual">
            <div className="b-visual-bg" style={{backgroundImage:"url('https://images.unsplash.com/photo-1519684378050-8a5ced8e3552?w=800&q=80')"}} />
          </div>
        </div>

        <div className="b b2 sr" data-delay="2">
          <div className="b-icon">🏦</div>
          <div className="b-num">0%</div>
          <div className="b-label">Income Tax</div>
          <p className="b-desc">Keep every dollar of rental income. No federal, no state, no capital gains tax on property.</p>
        </div>

        <div className="b b3 sr" data-delay="3">
          <div className="b-label">City vs City ROI</div>
          <div className="roi-bars" ref={roiRef}>
            {ROI_DATA.map(row => (
              <div key={row.city} className="roi-row">
                <div className="roi-meta">{row.city} <span>{row.pct}</span></div>
                <div className="roi-track"><div className="roi-fill" /></div>
              </div>
            ))}
          </div>
        </div>

        <div className="b b4 sr" data-delay="2">
          <div className="b-icon">🛂</div>
          <div className="b-num" style={{fontSize:'2.8rem'}}>10-Yr<br />Visa</div>
          <div className="b-label">Golden Visa</div>
          <p className="b-desc">Invest $550K+ and receive UAE residency for your entire family. Renewable every 10 years.</p>
        </div>

        <div className="b b5 sr" data-delay="3">
          <div className="b-icon">💵</div>
          <div className="b-num">27+</div>
          <div className="b-label">Years AED–USD Peg</div>
          <p className="b-desc">Since 1997. Zero currency risk. Your dollar stays a dollar.</p>
        </div>

        <div className="b b6 sr" data-delay="1">
          <div className="b-label">Premium Locations</div>
          <div className="b-title" style={{fontSize:'1.3rem',marginBottom:'.5rem'}}>5 World-Class<br />Neighborhoods</div>
          <div className="mini-map">
            <div className="map-grid" />
            <div className="map-dots">
              {MAP_DOTS.map(dot => (
                <div key={dot.label} className="map-dot" style={{left:dot.left,top:dot.top}}>
                  <div className="map-label" style={{left:'14px',top:'-4px'}}>{dot.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="b b7 sr" data-delay="2">
          <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-start',flexWrap:'wrap',gap:'1rem'}}>
            <div>
              <div className="b-icon">🔒</div>
              <div className="b-title" style={{fontSize:'1.3rem'}}>#1 Safest City Globally</div>
              <p className="b-desc" style={{maxWidth:'340px'}}>RERA-regulated, escrow-protected transactions. Dubai law mandates all off-plan funds held in escrow until construction milestones.</p>
            </div>
            <div style={{display:'flex',flexDirection:'column',gap:'.75rem',minWidth:'180px'}}>
              {[['AAA','Market Rating'],['100%','Foreign Ownership']].map(([val,lbl]) => (
                <div key={lbl} style={{padding:'1rem',background:'var(--glass)',border:'1px solid var(--border)',borderRadius:'12px',textAlign:'center'}}>
                  <div style={{fontFamily:'Cormorant Garamond,serif',fontSize:'2rem',color:'var(--gold)',fontWeight:600}}>{val}</div>
                  <div style={{fontSize:'.68rem',color:'var(--muted)',letterSpacing:'.12em',textTransform:'uppercase'}}>{lbl}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
