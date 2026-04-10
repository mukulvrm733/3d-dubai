import { useRipple } from '../hooks/useRipple'
import { PROPERTIES } from '../data'

export default function Properties() {
  const ripple = useRipple()
  const goContact = (e) => { ripple(e); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }) }

  return (
    <section id="properties">
      <div className="sh sr">
        <div className="sh-eye">Featured Listings</div>
        <h2 className="sh-h">Curated for <em>US Investors</em></h2>
        <p className="sh-p">Hover any card to reveal full investment analysis. All prices USD. Financing available via US-based lenders.</p>
      </div>

      <div className="props-grid">
        {PROPERTIES.map((p, i) => (
          <div key={p.id} className="fc sr" data-delay={String((i % 3) + 1)}>
            <div className="fc-inner">
              <div className="fc-f">
                <div className="fc-img">
                  <div className="fc-img-bg" style={{backgroundImage:`url('${p.image}')`}} />
                  <div className="fc-badge">{p.badge}</div>
                </div>
                <div className="fc-info">
                  <div className="fc-price">{p.price}</div>
                  <div className="fc-name">{p.name}</div>
                  <div className="fc-loc">{p.location}</div>
                  <div className="fc-feats">
                    <div className="fc-feat"><span className="fc-feat-ico">🛏</span>{p.beds} Beds</div>
                    <div className="fc-feat"><span className="fc-feat-ico">🚿</span>{p.baths} Baths</div>
                    <div className="fc-feat"><span className="fc-feat-ico">📐</span>{p.sqft} sqft</div>
                  </div>
                </div>
              </div>
              <div className="fc-b">
                <div className="fcb-label">Investment Breakdown</div>
                <div className="fcb-price">{p.backPrice}</div>
                <div className="fcb-rows">
                  {p.rows.map(row => (
                    <div key={row.label} className="fcb-row">
                      <span>{row.label}</span><strong>{row.val}</strong>
                    </div>
                  ))}
                </div>
                <button className="fcb-btn" onClick={goContact}>Book Viewing →</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
