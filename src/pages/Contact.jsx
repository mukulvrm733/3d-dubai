import { useEffect, useState } from 'react'
import './Contact.css'

const countryCodes = [
  { flag:'🇦🇪',country:'United Arab Emirates',code:'+971'},
  { flag:'🇮🇳',country:'India',code:'+91'},
  { flag:'🇵🇰',country:'Pakistan',code:'+92'},
  { flag:'🇧🇩',country:'Bangladesh',code:'+880'},
  { flag:'🇸🇦',country:'Saudi Arabia',code:'+966'},
  { flag:'🇬🇧',country:'United Kingdom',code:'+44'},
  { flag:'🇺🇸',country:'United States',code:'+1'},
  { flag:'🇨🇦',country:'Canada',code:'+1'},
  { flag:'🇦🇺',country:'Australia',code:'+61'},
  { flag:'🇩🇪',country:'Germany',code:'+49'},
  { flag:'🇫🇷',country:'France',code:'+33'},
  { flag:'🇮🇹',country:'Italy',code:'+39'},
  { flag:'🇪🇸',country:'Spain',code:'+34'},
  { flag:'🇳🇱',country:'Netherlands',code:'+31'},
  { flag:'🇧🇪',country:'Belgium',code:'+32'},
  { flag:'🇨🇭',country:'Switzerland',code:'+41'},
  { flag:'🇦🇹',country:'Austria',code:'+43'},
  { flag:'🇸🇪',country:'Sweden',code:'+46'},
  { flag:'🇳🇴',country:'Norway',code:'+47'},
  { flag:'🇩🇰',country:'Denmark',code:'+45'},
  { flag:'🇫🇮',country:'Finland',code:'+358'},
  { flag:'🇵🇹',country:'Portugal',code:'+351'},
  { flag:'🇬🇷',country:'Greece',code:'+30'},
  { flag:'🇵🇱',country:'Poland',code:'+48'},
  { flag:'🇨🇿',country:'Czech Republic',code:'+420'},
  { flag:'🇭🇺',country:'Hungary',code:'+36'},
  { flag:'🇷🇴',country:'Romania',code:'+40'},
  { flag:'🇧🇬',country:'Bulgaria',code:'+359'},
  { flag:'🇷🇺',country:'Russia',code:'+7'},
  { flag:'🇺🇦',country:'Ukraine',code:'+380'},
  { flag:'🇹🇷',country:'Turkey',code:'+90'},
  { flag:'🇮🇱',country:'Israel',code:'+972'},
  { flag:'🇯🇴',country:'Jordan',code:'+962'},
  { flag:'🇰🇼',country:'Kuwait',code:'+965'},
  { flag:'🇶🇦',country:'Qatar',code:'+974'},
  { flag:'🇧🇭',country:'Bahrain',code:'+973'},
  { flag:'🇴🇲',country:'Oman',code:'+968'},
  { flag:'🇾🇪',country:'Yemen',code:'+967'},
  { flag:'🇮🇶',country:'Iraq',code:'+964'},
  { flag:'🇮🇷',country:'Iran',code:'+98'},
  { flag:'🇦🇫',country:'Afghanistan',code:'+93'},
  { flag:'🇱🇰',country:'Sri Lanka',code:'+94'},
  { flag:'🇳🇵',country:'Nepal',code:'+977'},
  { flag:'🇲🇻',country:'Maldives',code:'+960'},
  { flag:'🇲🇾',country:'Malaysia',code:'+60'},
  { flag:'🇸🇬',country:'Singapore',code:'+65'},
  { flag:'🇮🇩',country:'Indonesia',code:'+62'},
  { flag:'🇵🇭',country:'Philippines',code:'+63'},
  { flag:'🇹🇭',country:'Thailand',code:'+66'},
  { flag:'🇻🇳',country:'Vietnam',code:'+84'},
  { flag:'🇰🇷',country:'South Korea',code:'+82'},
  { flag:'🇯🇵',country:'Japan',code:'+81'},
  { flag:'🇨🇳',country:'China',code:'+86'},
  { flag:'🇭🇰',country:'Hong Kong',code:'+852'},
  { flag:'🇹🇼',country:'Taiwan',code:'+886'},
  { flag:'🇳🇿',country:'New Zealand',code:'+64'},
  { flag:'🇿🇦',country:'South Africa',code:'+27'},
  { flag:'🇰🇪',country:'Kenya',code:'+254'},
  { flag:'🇳🇬',country:'Nigeria',code:'+234'},
  { flag:'🇬🇭',country:'Ghana',code:'+233'},
  { flag:'🇪🇹',country:'Ethiopia',code:'+251'},
  { flag:'🇹🇿',country:'Tanzania',code:'+255'},
  { flag:'🇺🇬',country:'Uganda',code:'+256'},
  { flag:'🇷🇼',country:'Rwanda',code:'+250'},
  { flag:'🇿🇼',country:'Zimbabwe',code:'+263'},
  { flag:'🇿🇲',country:'Zambia',code:'+260'},
  { flag:'🇲🇦',country:'Morocco',code:'+212'},
  { flag:'🇹🇳',country:'Tunisia',code:'+216'},
  { flag:'🇩🇿',country:'Algeria',code:'+213'},
  { flag:'🇱🇾',country:'Libya',code:'+218'},
  { flag:'🇪🇬',country:'Egypt',code:'+20'},
  { flag:'🇸🇩',country:'Sudan',code:'+249'},
  { flag:'🇲🇽',country:'Mexico',code:'+52'},
  { flag:'🇧🇷',country:'Brazil',code:'+55'},
  { flag:'🇦🇷',country:'Argentina',code:'+54'},
  { flag:'🇨🇱',country:'Chile',code:'+56'},
  { flag:'🇨🇴',country:'Colombia',code:'+57'},
  { flag:'🇵🇪',country:'Peru',code:'+51'},
  { flag:'🇻🇪',country:'Venezuela',code:'+58'},
  { flag:'🇪🇨',country:'Ecuador',code:'+593'},
  { flag:'🇧🇴',country:'Bolivia',code:'+591'},
  { flag:'🇵🇾',country:'Paraguay',code:'+595'},
  { flag:'🇺🇾',country:'Uruguay',code:'+598'},
  { flag:'🇨🇷',country:'Costa Rica',code:'+506'},
  { flag:'🇵🇦',country:'Panama',code:'+507'},
  { flag:'🇯🇲',country:'Jamaica',code:'+1876'},
  { flag:'🇹🇹',country:'Trinidad & Tobago',code:'+1868'},
  { flag:'🇱🇧',country:'Lebanon',code:'+961'},
  { flag:'🇸🇾',country:'Syria',code:'+963'},
  { flag:'🇦🇿',country:'Azerbaijan',code:'+994'},
  { flag:'🇬🇪',country:'Georgia',code:'+995'},
  { flag:'🇦🇲',country:'Armenia',code:'+374'},
  { flag:'🇰🇿',country:'Kazakhstan',code:'+7'},
  { flag:'🇺🇿',country:'Uzbekistan',code:'+998'},
  { flag:'🇹🇲',country:'Turkmenistan',code:'+993'},
  { flag:'🇰🇬',country:'Kyrgyzstan',code:'+996'},
  { flag:'🇹🇯',country:'Tajikistan',code:'+992'},
  { flag:'🇲🇳',country:'Mongolia',code:'+976'},
  { flag:'🇲🇲',country:'Myanmar',code:'+95'},
  { flag:'🇰🇭',country:'Cambodia',code:'+855'},
  { flag:'🇱🇦',country:'Laos',code:'+856'},
  { flag:'🇧🇳',country:'Brunei',code:'+673'},
  { flag:'🇫🇯',country:'Fiji',code:'+679'},
  { flag:'🇮🇪',country:'Ireland',code:'+353'},
  { flag:'🇮🇸',country:'Iceland',code:'+354'},
  { flag:'🇱🇺',country:'Luxembourg',code:'+352'},
  { flag:'🇲🇹',country:'Malta',code:'+356'},
  { flag:'🇨🇾',country:'Cyprus',code:'+357'},
  { flag:'🇸🇰',country:'Slovakia',code:'+421'},
  { flag:'🇸🇮',country:'Slovenia',code:'+386'},
  { flag:'🇭🇷',country:'Croatia',code:'+385'},
  { flag:'🇷🇸',country:'Serbia',code:'+381'},
  { flag:'🇧🇦',country:'Bosnia & Herzegovina',code:'+387'},
  { flag:'🇲🇪',country:'Montenegro',code:'+382'},
  { flag:'🇲🇰',country:'North Macedonia',code:'+389'},
  { flag:'🇦🇱',country:'Albania',code:'+355'},
  { flag:'🇱🇻',country:'Latvia',code:'+371'},
  { flag:'🇱🇹',country:'Lithuania',code:'+370'},
  { flag:'🇪🇪',country:'Estonia',code:'+372'},
  { flag:'🇧🇾',country:'Belarus',code:'+375'},
  { flag:'🇲🇩',country:'Moldova',code:'+373'},
  { flag:'🇨🇲',country:'Cameroon',code:'+237'},
  { flag:'🇸🇳',country:'Senegal',code:'+221'},
  { flag:'🇵🇬',country:'Papua New Guinea',code:'+675'},
  { flag:'🇲🇿',country:'Mozambique',code:'+258'},
  { flag:'🇲🇬',country:'Madagascar',code:'+261'},
]

export default function Contact() {
  const [form, setForm] = useState({
    firstName: '', lastName: '', email: '',
    countryCode: '+971', phone: '',
    propType: 'Villa / Mansion', budget: 'AED 5M – 15M',
    contactTime: 'Afternoon', message: '',
  })
  const [codeSearch, setCodeSearch] = useState('')
  const [codeOpen, setCodeOpen] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0)
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('in') })
    }, { threshold: 0.08 })
    document.querySelectorAll('.reveal').forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  const filteredCodes = countryCodes.filter(c =>
    c.country.toLowerCase().includes(codeSearch.toLowerCase()) ||
    c.code.includes(codeSearch)
  )

  const handleSubmit = e => {
    e.preventDefault()
    setSubmitted(true)
  }

  const set = (key) => (e) => setForm(f => ({ ...f, [key]: e.target.value }))

  const handlePhoneChange = (e) => {
    const val = e.target.value
    if (val.startsWith('+')) {
      const sorted = [...countryCodes].sort((a, b) => b.code.length - a.code.length)
      const match = sorted.find(c => val.startsWith(c.code))
      if (match) {
        setForm(f => ({ ...f, countryCode: match.code, phone: val.slice(match.code.length).trimStart() }))
        return
      }
    }
    setForm(f => ({ ...f, phone: val }))
  }

  return (
    <>
      {/* Page Hero */}
      <div className="page-hero">
        <div className="page-hero__sky" />
        <div className="page-hero__content">
          <h1 className="page-hero__title">Get in <em>Touch</em></h1>
          <p className="page-hero__sub">Let us help you find the right property in Dubai.</p>
        </div>
      </div>

      {/* Trust Bar */}
      <div className="ctrust-bar">
        <div className="ctrust-inner">
          {[
            { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>, label: 'DLD Licensed', sub: 'Fully Regulated' },
            { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>, label: '200+ Clients', sub: 'Successfully Served' },
            { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 11 12 14 22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>, label: '100% Transparent', sub: 'No Hidden Fees' },
            { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>, label: '24hr Response', sub: 'Guaranteed Reply' },
          ].map((item, i) => (
            <div className="ctrust-item" key={i}>
              <div className="ctrust-icon">{item.icon}</div>
              <div>
                <div className="ctrust-label">{item.label}</div>
                <div className="ctrust-sub">{item.sub}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Grid */}
      <section className="contact-section">
        <div className="contact-inner">
          <div className="contact-grid">

            {/* Left: Info + Process */}
            <div className="contact-left reveal">
              <h2 className="sec-title">Let's Help You Find<br />the Right Property</h2>
              <p className="contact-desc">Whether you are exploring your first property or expanding your portfolio, we help you identify the right options based on your needs and priorities.</p>

              <div className="contact-info-items">
                <div className="cinfo-item">
                  <div className="cinfo-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="18" height="18"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.26h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.81a16 16 0 0 0 5.27 5.27l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7a2 2 0 0 1 1.72 2.02z"/></svg>
                  </div>
                  <div>
                    <div className="cinfo-label">Phone</div>
                    <a href="tel:+97142947655" className="cinfo-value">+971 42 947 655</a>
                  </div>
                </div>
                <div className="cinfo-item">
                  <div className="cinfo-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="18" height="18"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                  </div>
                  <div>
                    <div className="cinfo-label">Email</div>
                    <a href="mailto:info@iivre.com" className="cinfo-value">info@iivre.com</a>
                  </div>
                </div>
                <div className="cinfo-item">
                  <div className="cinfo-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="18" height="18"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                  </div>
                  <div>
                    <div className="cinfo-label">Office Address</div>
                    <div className="cinfo-value">Fifty One Tower, 6th Floor — 603<br />Business Bay, Dubai, UAE</div>
                  </div>
                </div>
                <div className="cinfo-item">
                  <div className="cinfo-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="18" height="18"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                  </div>
                  <div>
                    <div className="cinfo-label">Office Hours</div>
                    <div className="cinfo-value">Mon – Sat · 9:00 AM – 7:00 PM<br /><span style={{ fontSize: '0.62rem', color: 'var(--copper)' }}>Virtual appointments available globally</span></div>
                  </div>
                </div>
              </div>

              <div className="contact-process">
                {[
                  { n: '1', title: 'Clear Consultation', desc: 'We learn your requirements and goals, explaining all options clearly.' },
                  { n: '2', title: 'Refined Shortlist', desc: 'We focus on properties that truly align with your needs.' },
                  { n: '3', title: 'Guided Viewings', desc: 'Property visits at your convenience with full context.' },
                  { n: '4', title: 'Ongoing Support', desc: 'We stay available even after the deal is done.' },
                ].map((step, i, arr) => (
                  <div className={`pstep${i < arr.length - 1 ? ' pstep--line' : ''}`} key={step.n}>
                    <div className="pstep__num">{step.n}</div>
                    <div className="pstep__info">
                      <h4>{step.title}</h4>
                      <p>{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Form */}
            <div className="contact-form reveal">
              {submitted ? (
                <div className="form-success">
                  <div className="form-success__icon">✓</div>
                  <h3>Enquiry Received</h3>
                  <p>Thank you! We will get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="tf-form-title">Send an Enquiry</div>
                  <p className="tf-form-sub">Fill in your details and we will be in touch within 24 hours.</p>

                  <div className="tf-grid2">
                    <div className="tf-field">
                      <label className="tf-label">First Name</label>
                      <input className="tf-input" type="text" placeholder="John" value={form.firstName} onChange={set('firstName')} required />
                    </div>
                    <div className="tf-field">
                      <label className="tf-label">Last Name</label>
                      <input className="tf-input" type="text" placeholder="Smith" value={form.lastName} onChange={set('lastName')} required />
                    </div>
                  </div>

                  <div className="tf-field">
                    <label className="tf-label">Email</label>
                    <input className="tf-input" type="email" placeholder="john@example.com" value={form.email} onChange={set('email')} required />
                  </div>

                  {/* Phone with country code selector */}
                  <div className="tf-field">
                    <label className="tf-label">Phone / WhatsApp</label>
                    <div className="phone-wrap">
                      <div className="code-selector" onClick={() => setCodeOpen(o => !o)}>
                        <span className="code-flag">{countryCodes.find(c => c.code === form.countryCode)?.flag}</span>
                        <span className="code-country-name">{form.countryCode}</span>
                        <span className="code-caret">▾</span>
                        {codeOpen && (
                          <div className="code-dropdown" onClick={e => e.stopPropagation()}>
                            <input
                              className="code-search"
                              type="text"
                              placeholder="Search country..."
                              value={codeSearch}
                              onChange={e => setCodeSearch(e.target.value)}
                              autoFocus
                            />
                            <div className="code-list">
                              {filteredCodes.map(c => (
                                <div
                                  key={c.code + c.country}
                                  className={`code-option${form.countryCode === c.code ? ' code-option--active' : ''}`}
                                  onClick={() => { setForm(f => ({ ...f, countryCode: c.code })); setCodeOpen(false); setCodeSearch('') }}
                                >
                                  <span className="code-flag-item">{c.flag}</span>
                                  <span className="code-country">{c.country}</span>
                                  <span className="code-val">{c.code}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                      <input className="tf-input phone-input" type="tel" placeholder="XX XXX XXXX" value={form.phone} onChange={handlePhoneChange} />
                    </div>
                  </div>

                  <div className="tf-grid2">
                    <div className="tf-field">
                      <label className="tf-label">Property Type</label>
                      <select className="tf-select" value={form.propType} onChange={set('propType')}>
                        {['Villa / Mansion', 'Penthouse', 'Apartment', 'Townhouse'].map(o => <option key={o}>{o}</option>)}
                      </select>
                    </div>
                    <div className="tf-field">
                      <label className="tf-label">Budget</label>
                      <select className="tf-select" value={form.budget} onChange={set('budget')}>
                        {['AED 2M – 5M', 'AED 5M – 15M', 'AED 15M – 50M', 'AED 50M+'].map(o => <option key={o}>{o}</option>)}
                      </select>
                    </div>
                  </div>

                  <div className="tf-field">
                    <span className="tf-label">Preferred Contact Time</span>
                    <div className="tf-timeline">
                      {['Morning', 'Afternoon', 'Evening', 'Anytime'].map(t => (
                        <div
                          key={t}
                          className={`tf-time-opt${form.contactTime === t ? ' tf-time-opt--active' : ''}`}
                          onClick={() => setForm(f => ({ ...f, contactTime: t }))}
                        >{t}</div>
                      ))}
                    </div>
                  </div>

                  <div className="tf-field">
                    <label className="tf-label">Your Requirements</label>
                    <textarea className="tf-textarea" placeholder="Tell us about your dream property..." value={form.message} onChange={set('message')} />
                  </div>

                  <button type="submit" className="tf-submit">Submit Enquiry</button>

                  <p className="tf-privacy">Your details are kept confidential and never shared with third parties.</p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="contact-map-section">
        <div className="contact-map-header reveal">
          <h3 className="contact-map-title">Visit Our <em>Office</em></h3>
          <p className="contact-map-sub">Fifty One Tower, 6th Floor, Business Bay — Dubai, UAE</p>
        </div>
        <div className="contact-map-wrap">
          <iframe
            title="IIV Office Location"
            src="https://maps.google.com/maps?q=Fifty+One+Tower+Business+Bay+Dubai&t=&z=15&ie=UTF8&iwloc=&output=embed"
            className="contact-map-iframe"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />
          <div className="contact-map-overlay">
            <div className="contact-map-card">
              <div className="cmc-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="20" height="20"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
              </div>
              <div>
                <div className="cmc-label">Our Office</div>
                <div className="cmc-address">Fifty One Tower, 6th Floor — 603<br />Business Bay, Dubai, UAE</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
