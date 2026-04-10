import { useRipple } from '../hooks/useRipple'

export default function FloatingCTA() {
  const ripple = useRipple()
  return (
    <div className="fcta" onClick={e => { ripple(e); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }) }}>
      <div className="fcta-dot">💬</div>
      <div className="fcta-txt">
        <div className="fcta-l">Free consultation</div>
        <div className="fcta-v">Talk to an Expert</div>
      </div>
    </div>
  )
}
