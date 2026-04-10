import { FOOTER_COLS } from '../data'

export default function Footer() {
  return (
    <footer>
      <div className="ft-grid">
        <div className="ft-brand">
          <div className="ft-logo">AURUM</div>
          <div style={{fontSize:'.65rem',letterSpacing:'.25em',textTransform:'uppercase',color:'var(--gold3)'}}>Dubai Premium Real Estate</div>
          <p className="ft-tagline">America's most trusted gateway to Dubai real estate. Tax-free returns, Golden Visas, world-class lifestyle — managed from home.</p>
          <div className="ft-socials">
            {['in','li','▶','𝕏'].map(s => <div key={s} className="fs">{s}</div>)}
          </div>
        </div>
        {Object.entries(FOOTER_COLS).map(([col, links]) => (
          <div key={col} className="ft-col">
            <h5>{col}</h5>
            <div className="ft-links">
              {links.map(link => <a key={link} href="#">{link}</a>)}
            </div>
          </div>
        ))}
      </div>
      <div className="ft-bottom">
        <span>© 2026 Aurum Dubai Estates LLC · RERA License #12345</span>
        <span><a href="#">Privacy</a> · <a href="#">Terms</a> · <a href="#">Disclaimer</a></span>
      </div>
    </footer>
  )
}
