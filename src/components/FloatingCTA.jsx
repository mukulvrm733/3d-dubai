const WA_NUMBER = '971589510137'
const WA_TEXT = encodeURIComponent(
  "Hi! I'm interested in a free consultation about Dubai real estate. Please get in touch."
)

export default function FloatingCTA() {
  const openWhatsApp = () => {
    window.open(`https://wa.me/${WA_NUMBER}?text=${WA_TEXT}`, '_blank', 'noopener,noreferrer')
  }

  return (
    <div className="fcta" onClick={openWhatsApp}>
      <div className="fcta-dot">💬</div>
      <div className="fcta-txt">
        <div className="fcta-l">Free consultation</div>
        <div className="fcta-v">Chat on WhatsApp</div>
      </div>
    </div>
  )
}
