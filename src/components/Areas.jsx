import { useState, useRef } from 'react'
import { useRipple } from '../hooks/useRipple'
import { AREAS } from '../data'

export default function Areas() {
  const [idx, setIdx] = useState(0)
  const trackRef = useRef(null)
  const ripple = useRipple()

  const move = (d) => {
    const track = trackRef.current
    if (!track) return
    const cards = track.querySelectorAll('.nh')
    const visible = window.innerWidth < 768 ? 1 : window.innerWidth < 1100 ? 2 : 3
    const max = Math.max(0, cards.length - visible)
    const next = Math.max(0, Math.min(max, idx + d))
    setIdx(next)
    const w = cards[0].offsetWidth + 20 // gap is 1.2rem ≈ 19px
    track.style.transform = `translateX(-${next * w}px)`
  }

  return (
    <section id="areas" style={{padding:'7rem 0 7rem 5%',overflow:'hidden'}}>
      <div className="areas-header sh sr">
        <div className="sh-eye">Prime Locations</div>
        <h2 className="sh-h">Dubai's Most <em>Coveted</em><br />Neighborhoods</h2>
        <p className="sh-p">Five world-class districts, each with distinct character and investment profile. Hover to reveal details.</p>
      </div>
      <div className="hs-wrap">
        <div className="hs-track" ref={trackRef}>
          {AREAS.map(a => (
            <div key={a.id} className="nh">
              <div className="nh-bg" style={{backgroundImage:`url('${a.bg}')`}} />
              <div className="nh-ov" />
              <div className="nh-body">
                <div className="nh-area">{a.area}</div>
                <div className="nh-name">
                  {a.name[0]}<br />{a.name[1]}
                </div>
                <div className="nh-from">{a.from}</div>
                <div className="nh-detail">{a.detail}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="hs-nav">
        <div className="hs-arr" onClick={e => { ripple(e); move(-1) }}>←</div>
        <div className="hs-arr" onClick={e => { ripple(e); move(1)  }}>→</div>
      </div>
    </section>
  )
}
