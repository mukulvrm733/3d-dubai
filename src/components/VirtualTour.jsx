import { useEffect, useRef } from 'react'

const FEATS = [
  { ico:'🎯', t:'4K Resolution · 360°', d:'Full-sphere tours with dollhouse view, floor plans, and measurement tools built in.' },
  { ico:'🕶️', t:'VR Headset Compatible', d:'Stream directly to Oculus Quest, Apple Vision Pro, or any WebXR-compatible headset.' },
  { ico:'👤', t:'Live Agent Walkthrough', d:'Book a guided virtual tour with a Dubai agent via video call — available 7 days, EST-friendly hours.' },
]

export default function VirtualTour() {
  const visRef = useRef(null)

  useEffect(() => {
    const vis = visRef.current
    const card = vis?.querySelector('.tour-card')
    if (!vis || !card) return

    const onMove = (e) => {
      const r = vis.getBoundingClientRect()
      const x = (e.clientX - r.left) / r.width  - .5
      const y = (e.clientY - r.top)  / r.height - .5
      card.style.animation = 'none'
      card.style.transform = `rotateY(${x * 12}deg) rotateX(${-y * 8}deg)`
    }
    const onLeave = () => { card.style.transform = ''; setTimeout(() => { card.style.animation = '' }, 50) }

    vis.addEventListener('mousemove', onMove)
    vis.addEventListener('mouseleave', onLeave)
    return () => { vis.removeEventListener('mousemove', onMove); vis.removeEventListener('mouseleave', onLeave) }
  }, [])

  return (
    <section id="tour">
      <div className="tour-wrap">
        <div className="tour-vis srr" ref={visRef}>
          <div className="tour-card">
            <div className="tour-bg" />
            <div className="tour-overlay" />
            <div className="tour-play" onClick={() => alert('Integrate Matterport or Kuula 360° embed here.')}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
            </div>
            <div className="tour-label tl1">
              <div className="tl-t">Current Property</div>
              <div className="tl-v">Burj Khalifa Penthouse</div>
            </div>
            <div className="tour-label tl2">
              <div className="tl-t">Live Yield</div>
              <div className="tl-v gold">8.4% p.a.</div>
            </div>
          </div>
        </div>

        <div className="tour-info srl">
          <div className="sh">
            <div className="sh-eye">Immersive Experience</div>
            <h2 className="sh-h">Walk Through<br />Your <em>Future Home</em><br />From New York</h2>
            <p className="sh-p" style={{marginTop:'1rem'}}>Our 4K 360° virtual tours let you inspect every room, view, and finish before you wire a single dollar.</p>
          </div>
          <div className="tour-feats">
            {FEATS.map(f => (
              <div key={f.t} className="tf">
                <div className="tf-ico">{f.ico}</div>
                <div><div className="tf-t">{f.t}</div><div className="tf-d">{f.d}</div></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
