import { useState, useEffect, useRef } from 'react'

export const COUNTRIES = [
  { f: '🇦🇪', n: 'United Arab Emirates', c: '+971' },
  { f: '🇮🇳', n: 'India', c: '+91' },
  { f: '🇵🇰', n: 'Pakistan', c: '+92' },
  { f: '🇧🇩', n: 'Bangladesh', c: '+880' },
  { f: '🇸🇦', n: 'Saudi Arabia', c: '+966' },
  { f: '🇬🇧', n: 'United Kingdom', c: '+44' },
  { f: '🇺🇸', n: 'United States', c: '+1' },
  { f: '🇨🇦', n: 'Canada', c: '+1-CA' },
  { f: '🇦🇺', n: 'Australia', c: '+61' },
  { f: '🇩🇪', n: 'Germany', c: '+49' },
  { f: '🇫🇷', n: 'France', c: '+33' },
  { f: '🇮🇹', n: 'Italy', c: '+39' },
  { f: '🇪🇸', n: 'Spain', c: '+34' },
  { f: '🇳🇱', n: 'Netherlands', c: '+31' },
  { f: '🇧🇪', n: 'Belgium', c: '+32' },
  { f: '🇨🇭', n: 'Switzerland', c: '+41' },
  { f: '🇦🇹', n: 'Austria', c: '+43' },
  { f: '🇸🇪', n: 'Sweden', c: '+46' },
  { f: '🇳🇴', n: 'Norway', c: '+47' },
  { f: '🇩🇰', n: 'Denmark', c: '+45' },
  { f: '🇫🇮', n: 'Finland', c: '+358' },
  { f: '🇵🇹', n: 'Portugal', c: '+351' },
  { f: '🇬🇷', n: 'Greece', c: '+30' },
  { f: '🇵🇱', n: 'Poland', c: '+48' },
  { f: '🇨🇿', n: 'Czech Republic', c: '+420' },
  { f: '🇭🇺', n: 'Hungary', c: '+36' },
  { f: '🇷🇴', n: 'Romania', c: '+40' },
  { f: '🇷🇺', n: 'Russia', c: '+7' },
  { f: '🇺🇦', n: 'Ukraine', c: '+380' },
  { f: '🇹🇷', n: 'Turkey', c: '+90' },
  { f: '🇮🇱', n: 'Israel', c: '+972' },
  { f: '🇯🇴', n: 'Jordan', c: '+962' },
  { f: '🇰🇼', n: 'Kuwait', c: '+965' },
  { f: '🇶🇦', n: 'Qatar', c: '+974' },
  { f: '🇧🇭', n: 'Bahrain', c: '+973' },
  { f: '🇴🇲', n: 'Oman', c: '+968' },
  { f: '🇾🇪', n: 'Yemen', c: '+967' },
  { f: '🇮🇶', n: 'Iraq', c: '+964' },
  { f: '🇮🇷', n: 'Iran', c: '+98' },
  { f: '🇦🇫', n: 'Afghanistan', c: '+93' },
  { f: '🇱🇧', n: 'Lebanon', c: '+961' },
  { f: '🇸🇾', n: 'Syria', c: '+963' },
  { f: '🇱🇰', n: 'Sri Lanka', c: '+94' },
  { f: '🇳🇵', n: 'Nepal', c: '+977' },
  { f: '🇲🇻', n: 'Maldives', c: '+960' },
  { f: '🇲🇾', n: 'Malaysia', c: '+60' },
  { f: '🇸🇬', n: 'Singapore', c: '+65' },
  { f: '🇮🇩', n: 'Indonesia', c: '+62' },
  { f: '🇵🇭', n: 'Philippines', c: '+63' },
  { f: '🇹🇭', n: 'Thailand', c: '+66' },
  { f: '🇻🇳', n: 'Vietnam', c: '+84' },
  { f: '🇰🇷', n: 'South Korea', c: '+82' },
  { f: '🇯🇵', n: 'Japan', c: '+81' },
  { f: '🇨🇳', n: 'China', c: '+86' },
  { f: '🇭🇰', n: 'Hong Kong', c: '+852' },
  { f: '🇹🇼', n: 'Taiwan', c: '+886' },
  { f: '🇲🇲', n: 'Myanmar', c: '+95' },
  { f: '🇰🇭', n: 'Cambodia', c: '+855' },
  { f: '🇳🇿', n: 'New Zealand', c: '+64' },
  { f: '🇿🇦', n: 'South Africa', c: '+27' },
  { f: '🇰🇪', n: 'Kenya', c: '+254' },
  { f: '🇳🇬', n: 'Nigeria', c: '+234' },
  { f: '🇬🇭', n: 'Ghana', c: '+233' },
  { f: '🇪🇹', n: 'Ethiopia', c: '+251' },
  { f: '🇹🇿', n: 'Tanzania', c: '+255' },
  { f: '🇺🇬', n: 'Uganda', c: '+256' },
  { f: '🇷🇼', n: 'Rwanda', c: '+250' },
  { f: '🇿🇼', n: 'Zimbabwe', c: '+263' },
  { f: '🇿🇲', n: 'Zambia', c: '+260' },
  { f: '🇲🇦', n: 'Morocco', c: '+212' },
  { f: '🇹🇳', n: 'Tunisia', c: '+216' },
  { f: '🇩🇿', n: 'Algeria', c: '+213' },
  { f: '🇱🇾', n: 'Libya', c: '+218' },
  { f: '🇪🇬', n: 'Egypt', c: '+20' },
  { f: '🇸🇩', n: 'Sudan', c: '+249' },
  { f: '🇲🇽', n: 'Mexico', c: '+52' },
  { f: '🇧🇷', n: 'Brazil', c: '+55' },
  { f: '🇦🇷', n: 'Argentina', c: '+54' },
  { f: '🇨🇱', n: 'Chile', c: '+56' },
  { f: '🇨🇴', n: 'Colombia', c: '+57' },
  { f: '🇵🇪', n: 'Peru', c: '+51' },
  { f: '🇻🇪', n: 'Venezuela', c: '+58' },
  { f: '🇦🇿', n: 'Azerbaijan', c: '+994' },
  { f: '🇬🇪', n: 'Georgia', c: '+995' },
  { f: '🇦🇲', n: 'Armenia', c: '+374' },
  { f: '🇰🇿', n: 'Kazakhstan', c: '+7-KZ' },
  { f: '🇺🇿', n: 'Uzbekistan', c: '+998' },
  { f: '🇲🇳', n: 'Mongolia', c: '+976' },
]

function dialCode(country) {
  return country.c.replace(/-[A-Z]+$/, '')
}

export default function PhoneInput({ placeholder = 'Phone number', onChange }) {
  const [country, setCountry] = useState(COUNTRIES[0])
  const [numVal, setNumVal] = useState('')
  const [open, setOpen] = useState(false)
  const [search, setSearch] = useState('')
  const [hiIdx, setHiIdx] = useState(0)

  const wrapRef = useRef(null)
  const searchRef = useRef(null)
  const listRef = useRef(null)

  const filtered = COUNTRIES.filter(c => {
    const q = search.toLowerCase()
    return c.n.toLowerCase().includes(q) || dialCode(c).includes(q.replace('+', ''))
  })

  // Close dropdown on outside click
  useEffect(() => {
    if (!open) return
    const handler = e => { if (!wrapRef.current?.contains(e.target)) setOpen(false) }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [open])

  // Focus search + reset when opened
  useEffect(() => {
    if (open) {
      setSearch('')
      setHiIdx(0)
      setTimeout(() => searchRef.current?.focus(), 30)
    }
  }, [open])

  // Scroll highlighted item into view
  useEffect(() => {
    const list = listRef.current
    if (!list) return
    const item = list.children[hiIdx]
    item?.scrollIntoView({ block: 'nearest' })
  }, [hiIdx])

  const pick = (c) => {
    setCountry(c)
    setOpen(false)
    onChange?.(dialCode(c), numVal)
  }

  const handleKeyDown = e => {
    if (e.key === 'ArrowDown') { e.preventDefault(); setHiIdx(h => Math.min(h + 1, filtered.length - 1)) }
    else if (e.key === 'ArrowUp') { e.preventDefault(); setHiIdx(h => Math.max(h - 1, 0)) }
    else if (e.key === 'Enter') { e.preventDefault(); if (filtered[hiIdx]) pick(filtered[hiIdx]) }
    else if (e.key === 'Escape') setOpen(false)
  }

  const handleNumChange = e => {
    const val = e.target.value
    // Auto-detect country from typed + prefix and strip the code
    if (val.startsWith('+')) {
      const match = [...COUNTRIES].sort((a, b) => dialCode(b).length - dialCode(a).length)
        .find(c => val.startsWith(dialCode(c)) && dialCode(c).length > 1)
      if (match) {
        const stripped = val.slice(dialCode(match).length).replace(/^\s+/, '')
        setCountry(match)
        setNumVal(stripped)
        onChange?.(dialCode(match), stripped)
        return
      }
    }
    setNumVal(val)
    onChange?.(dialCode(country), val)
  }

  const code = dialCode(country)

  return (
    <div className="pi-wrap" ref={wrapRef}>
      <div className="pi-field">
        <button
          type="button"
          className={`pi-trigger${open ? ' pi-trigger--open' : ''}`}
          onClick={() => setOpen(o => !o)}
          aria-label="Select country code"
          aria-expanded={open}
        >
          <span className="pi-flag">{country.f}</span>
          <span className="pi-code">{code}</span>
          <svg className="pi-chevron" width="10" height="6" viewBox="0 0 10 6" fill="none">
            <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <input
          type="tel"
          className="fi pi-num"
          placeholder={placeholder}
          value={numVal}
          onChange={handleNumChange}
        />
      </div>

      {open && (
        <div className="pi-dropdown" role="listbox">
          <div className="pi-search-wrap">
            <span className="pi-search-icon">🔍</span>
            <input
              ref={searchRef}
              className="pi-search"
              type="text"
              placeholder="Search country or dial code..."
              value={search}
              onChange={e => { setSearch(e.target.value); setHiIdx(0) }}
              onKeyDown={handleKeyDown}
              autoComplete="off"
            />
          </div>
          <div className="pi-list" ref={listRef}>
            {filtered.length === 0
              ? <div className="pi-empty">No countries found</div>
              : filtered.map((c, i) => (
                <div
                  key={c.c + c.n}
                  className={`pi-item${i === hiIdx ? ' pi-hi' : ''}`}
                  role="option"
                  aria-selected={c.c === country.c}
                  onMouseDown={() => pick(c)}
                  onMouseEnter={() => setHiIdx(i)}
                >
                  <span className="pi-item-flag">{c.f}</span>
                  <span className="pi-item-name">{c.n}</span>
                  <span className="pi-item-code">{dialCode(c)}</span>
                  {c.c === country.c && <span className="pi-item-check">✓</span>}
                </div>
              ))
            }
          </div>
        </div>
      )}
    </div>
  )
}
