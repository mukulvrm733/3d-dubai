const PARTNER_LOGOS = [
  { src: '/partner/emaar-Photoroom.png',           alt: 'Emaar' },
  { src: '/partner/nakheel-Photoroom.png',          alt: 'Nakheel',           large: true },
  { src: '/partner/SOBHA-Photoroom.png',            alt: 'Sobha' },
  { src: '/partner/AZIZI-Photoroom.png',            alt: 'Azizi' },
  { src: '/partner/BINGHATTI-Photoroom.png',        alt: 'Binghatti' },
  { src: '/partner/Danube-Logo.webp',               alt: 'Danube' },
  { src: '/partner/aldar-properties-logo.png',      alt: 'Aldar Properties',  large: true },
  { src: '/partner/Meraas.png',                     alt: 'Meraas' },
  { src: '/partner/dubai-properties-logo-en4.png',  alt: 'Dubai Properties',  large: true },
  { src: '/partner/Select-Group-Logo-Black.png',    alt: 'Select Group' },
  { src: '/partner/images-Photoroom.png',           alt: 'Developer Partner' },
]

const logos = [...PARTNER_LOGOS, ...PARTNER_LOGOS]

export default function Ticker() {
  return (
    <div className="dev-logos">
      <div className="dl-label">Our Developer Partners</div>
      <div className="dl-track-wrap">
        <div className="dl-track">
          {logos.map((logo, i) => (
            <div key={i} className={`dl-item${logo.large ? ' dl-item--lg' : ''}`}>
              <img src={logo.src} alt={logo.alt} className={`dl-img${logo.large ? ' dl-img--lg' : ''}`} loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
