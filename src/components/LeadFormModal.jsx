import { useState } from 'react'
import './LeadFormModal.css'

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

export default function LeadFormModal({ onClose }) {
  const [form, setForm] = useState({ name: '', countryCode: '+971', phone: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [codeOpen, setCodeOpen] = useState(false)
  const [codeSearch, setCodeSearch] = useState('')


  const set = (k) => (e) => setForm(f => ({ ...f, [k]: e.target.value }))

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

  const filteredCodes = countryCodes.filter(c =>
    c.country.toLowerCase().includes(codeSearch.toLowerCase()) ||
    c.code.includes(codeSearch)
  )

  const selectedCountry = countryCodes.find(c => c.code === form.countryCode) || countryCodes[0]

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="lead-overlay" onClick={(e) => { if (e.target === e.currentTarget) onClose() }}>
      <div className="lead-modal">
        <button className="lead-close" onClick={onClose} aria-label="Close">&#215;</button>

        {submitted ? (
          <div className="lead-success">
            <div className="lead-success-icon">&#10003;</div>
            <h3>Thank You!</h3>
            <p>Our team will reach out to you within 24 hours.</p>
            <button className="btn-warm lead-done" onClick={onClose}><span>Close</span></button>
          </div>
        ) : (
          <>
            <div className="lead-header">
              <h2 className="lead-title">Let's Find Your<br /><em>Perfect Property</em></h2>
              <p className="lead-sub">Fill in your details and our team will reach out within 24 hours.</p>
            </div>

            <form className="lead-form" onSubmit={handleSubmit}>
              <div className="lead-row">
                <div className="lead-field">
                  <label>Full Name <span>*</span></label>
                  <input type="text" placeholder="Your full name" required value={form.name} onChange={set('name')} />
                </div>
                <div className="lead-field">
                  <label>Phone Number <span>*</span></label>
                  <div className="lead-phone-wrap">
                    <div className="lead-code-sel" onClick={() => setCodeOpen(o => !o)}>
                      <span className="lead-code-flag">{selectedCountry.flag}</span>
                      <span className="lead-code-val">{selectedCountry.code}</span>
                      <span className="lead-code-caret">▾</span>
                      {codeOpen && (
                        <div className="lead-code-dropdown" onClick={e => e.stopPropagation()}>
                          <input
                            type="text"
                            className="lead-code-search"
                            placeholder="Search country..."
                            value={codeSearch}
                            onChange={e => setCodeSearch(e.target.value)}
                            autoFocus
                          />
                          <div className="lead-code-list">
                            {filteredCodes.map(c => (
                              <div
                                key={c.code + c.country}
                                className={`lead-code-opt${form.countryCode === c.code ? ' lead-code-opt--active' : ''}`}
                                onClick={() => { setForm(f => ({ ...f, countryCode: c.code })); setCodeOpen(false); setCodeSearch('') }}
                              >
                                <span className="lead-code-opt-flag">{c.flag}</span>
                                <span className="lead-code-opt-name">{c.country}</span>
                                <span className="lead-code-opt-num">{c.code}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                    <input
                      type="tel"
                      className="lead-phone-input"
                      placeholder="XX XXX XXXX"
                      required
                      value={form.phone}
                      onChange={handlePhoneChange}
                    />
                  </div>
                </div>
              </div>
              <div className="lead-field">
                <label>Email Address</label>
                <input type="email" placeholder="your@email.com" value={form.email} onChange={set('email')} />
              </div>
              <div className="lead-field">
                <label>Message</label>
                <textarea rows="3" placeholder="Tell us about your property requirements..." value={form.message} onChange={set('message')} />
              </div>
              <button type="submit" className="btn-warm lead-submit"><span>Send Enquiry</span></button>
            </form>
          </>
        )}
      </div>
    </div>
  )
}
