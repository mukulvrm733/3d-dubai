import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './Projects.css'

const projects = [
  // ── Apartments ──────────────────────────────────────────────────────────────
  {
    id: 1,
    image: '/Projects/TerraWoods.webp',
    type: 'Apartment', status: 'Off-Plan', name: 'Terra Woods by Emaar',
    loc: 'Dubai Expo City, Dubai', priceRaw: 1590000, price: 'Starting from AED 1.59M',
    beds: '1 – 3 BR', sqft: '742 – 2,702 sq ft', developer: 'Emaar', paymentPlan: '80/20',
    desc: 'A nature-inspired development by Emaar at Dubai Expo City blending lush green landscapes with contemporary architecture and premium finishes.',
  },
  {
    id: 2,
    image: '/Projects/serenz.webp',
    type: 'Apartment', status: 'Off-Plan', name: 'Serenz by Danube',
    loc: 'JVC, Dubai', priceRaw: 864000, price: 'Starting from AED 864K',
    beds: 'Studio – 4 BR', sqft: '381 – 1,691 sq ft', developer: 'Danube', paymentPlan: '70/30',
    desc: 'An elegant residential tower by Danube in Jumeirah Village Circle offering studio to 4-bedroom apartments with resort-style amenities.',
  },
  {
    id: 3,
    image: '/Projects/Skyflame.webp',
    type: 'Apartment', status: 'Off-Plan', name: 'Binghatti Skyflame',
    loc: 'Majan, Dubai', priceRaw: 698000, price: 'Starting from AED 698K',
    beds: 'Studio – 2 BR', sqft: '697 – 1,343 sq ft', developer: 'Binghatti', paymentPlan: '70/30',
    desc: 'A high-rise twin-tower masterpiece in Majan offering luxury resort-style living with iconic architecture and private pool terraces.',
  },
  {
    id: 4,
    image: '/Projects/VisionIconic.webp',
    type: 'Apartment', status: 'Off-Plan', name: 'Vision Iconic by Binghatti',
    loc: 'Meydan, Dubai', priceRaw: 2600000, price: 'Starting from AED 2.6M',
    beds: '1 – 5 BR', sqft: '695 – 3,057 sq ft', developer: 'Binghatti', paymentPlan: '70/30',
    desc: 'A landmark residential tower by Binghatti in Meydan featuring expansive layouts, smart-home technology and breathtaking city skyline views.',
  },
  {
    id: 5,
    image: 'Projects/CreekView.webp',
    type: 'Apartment', status: 'Off-Plan', name: 'Creek Views 4 by Azizi',
    loc: 'Al Jaddaf, Dubai', priceRaw: 1120000, price: 'Starting from AED 1.12M',
    beds: '1 & 3 BR', sqft: '543 – 2,346 sq ft', developer: 'Azizi', paymentPlan: '50/50',
    desc: 'Premium waterfront apartments by Azizi in Al Jaddaf overlooking the iconic Dubai Creek with modern interiors and vibrant community living.',
  },
  {
    id: 6,
    image: '/Projects/The Wilds.webp',
    type: 'Apartment', status: 'Off-Plan', name: 'The Wilds Residences by Aldar',
    loc: 'Wadi Al Safa 3, Dubai', priceRaw: 1670000, price: 'Starting from AED 1.67M',
    beds: '1 – 3 BR', sqft: '1,274 – 1,511 sq ft', developer: 'Aldar', paymentPlan: '65/35',
    desc: 'A serene residential escape by Aldar in Wadi Al Safa 3 embracing natural surroundings with spacious, thoughtfully designed apartments.',
  },
  {
    id: 7,
    image: '/Projects/Yas Park.jpg',
    type: 'Apartment', status: 'Off-Plan', name: 'Yas Park Place by Aldar',
    loc: 'Yas Island, Abu Dhabi', priceRaw: 1390000, price: 'Starting from AED 1.39M',
    beds: 'Studio – 4 BR', sqft: '486 – 2,423 sq ft', developer: 'Aldar', paymentPlan: '50/50',
    desc: 'A prestigious Aldar development on Yas Island offering vibrant community living steps from world-class leisure, entertainment and theme parks.',
  },
  {
    id: 8,
    image: '/Projects/SeaCliff.jpg',
    type: 'Apartment', status: 'Off-Plan', name: 'Sea Cliff by Imtiaz',
    loc: 'Dubai Islands, Dubai', priceRaw: 2090000, price: 'Starting from AED 2.09M',
    beds: '1 – 4 BR', sqft: '737 – 1,593 sq ft', developer: 'Imtiaz', paymentPlan: '50/50',
    desc: 'A cliffside residential gem by Imtiaz on Dubai Islands with stunning sea views and a resort-inspired coastal lifestyle.',
  },
  {
    id: 9,
    image: '/Projects/The-Hillgate.jpeg',
    type: 'Apartment', status: 'Off-Plan', name: 'The Hillgate by Ellington',
    loc: 'Dubai Silicon Oasis, Dubai', priceRaw: 1310000, price: 'Starting from AED 1.31M',
    beds: '1 – 3 BR', sqft: '1,197 – 3,066 sq ft', developer: 'Ellington', paymentPlan: '70/30',
    desc: 'A sophisticated residential community by Ellington in Dubai Silicon Oasis offering spacious apartments with refined contemporary design.',
  },
  // ── Villas ───────────────────────────────────────────────────────────────────
  {
    id: 10,
    image: '/Projects/The Orchard.webp',
    type: 'Villa', status: 'Off-Plan', name: 'The Orchard at Sobha City',
    loc: 'Abu Dhabi', priceRaw: 9040000, price: 'Starting from AED 9.04M',
    beds: '4 – 6 BR', sqft: '4,309 – 6,383 sq ft', developer: 'Sobha', paymentPlan: '60/40',
    desc: 'An exclusive collection of luxurious townhouses and villas by Sobha in Abu Dhabi set within a lush, master-planned urban oasis.',
  },
  {
    id: 11,
    image: '/Projects/Serro-2.webp',
    type: 'Villa', status: 'Off-Plan', name: 'Serro 2',
    loc: 'The Heights, Dubai', priceRaw: 6810000, price: 'Starting from AED 6.81M',
    beds: '3 – 5 BR', sqft: '3,340 – 5,761 sq ft', developer: 'Majid Al Futtaim', paymentPlan: '80/20',
    desc: 'Premium villa residences at The Heights Country Club offering expansive layouts, private gardens and tranquil suburban living in Dubai.',
  },
  {
    id: 12,
    image: '/Projects/ovelle.jpg',
    type: 'Villa', status: 'Off-Plan', name: 'Ovelle The Valley by Emaar',
    loc: 'The Valley, Dubai', priceRaw: 7270000, price: 'Starting from AED 7.27M',
    beds: '4 – 5 BR', sqft: '4,356 – 7,970 sq ft', developer: 'Emaar', paymentPlan: '80/20',
    desc: 'Stunning standalone villas by Emaar in The Valley featuring expansive interiors, private pools and a vibrant family-friendly master community.',
  },
  {
    id: 13,
    image: '/Projects/Nad-al-sheba.avif',
    type: 'Villa', status: 'Off-Plan', name: 'Nad Al Sheba Gardens Ph. 11',
    loc: 'Nad Al Sheba, Dubai', priceRaw: 6150000, price: 'Starting from AED 6.15M',
    beds: '3 – 6 BR', sqft: '4,795 – 5,650 sq ft', developer: 'Meraas', paymentPlan: '80/20',
    desc: 'The latest phase of Meraas\'s acclaimed Nad Al Sheba Gardens — elegant townhouses and villas in a lush gated community close to central Dubai.',
  },
]

function matchBudget(priceRaw, budget) {
  if (budget === 'Any Budget') return true
  if (budget === 'Under AED 2M') return priceRaw < 2000000
  if (budget === 'AED 2M – 5M') return priceRaw >= 2000000 && priceRaw <= 5000000
  if (budget === 'AED 5M – 15M') return priceRaw > 5000000 && priceRaw <= 15000000
  if (budget === 'AED 15M+') return priceRaw > 15000000
  return true
}

export default function Projects() {
  const [location, setLocation] = useState('All Areas')
  const [propType, setPropType] = useState('Any Type')
  const [budget, setBudget] = useState('Any Budget')
  const [flipped, setFlipped] = useState({})

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const filtered = projects.filter(p => {
    const locMatch = location === 'All Areas' || p.loc.toLowerCase().includes(location.toLowerCase())
    const typeMatch = propType === 'Any Type' || p.type === propType
    return locMatch && typeMatch && matchBudget(p.priceRaw, budget)
  })

  const handleCardClick = (id) => {
    if (window.matchMedia('(hover: none)').matches) {
      setFlipped(f => ({ ...f, [id]: !f[id] }))
    }
  }

  return (
    <>
      {/* Page header */}
      <div className="proj-hero">
        <div className="proj-hero__bg" />
        <div className="proj-hero__inner">
         
          <h1 className="proj-hero__title">Signature <em>Projects</em></h1>
          <p className="proj-hero__sub">Curated properties across Dubai's most prestigious addresses</p>
        </div>
      </div>

      {/* Search / filter bar */}
      <div className="proj-search-wrap">
        <div className="proj-search-bar">
          <div className="search-field">
            <span className="search-label">Location</span>
            <select className="search-select" value={location} onChange={e => setLocation(e.target.value)}>
              {['All Areas','Dubai','Abu Dhabi'].map(o => <option key={o}>{o}</option>)}
            </select>
          </div>
          <div className="search-field">
            <span className="search-label">Property Type</span>
            <select className="search-select" value={propType} onChange={e => setPropType(e.target.value)}>
              {['Any Type','Apartment','Villa'].map(o => <option key={o}>{o}</option>)}
            </select>
          </div>
          <div className="search-field">
            <span className="search-label">Budget</span>
            <select className="search-select" value={budget} onChange={e => setBudget(e.target.value)}>
              {['Any Budget','Under AED 2M','AED 2M – 5M','AED 5M – 15M','AED 15M+'].map(o => <option key={o}>{o}</option>)}
            </select>
          </div>
        </div>
      </div>

      {/* Grid */}
      <div className="proj-grid-wrap">
        <p className="proj-results">
          {filtered.length} {filtered.length === 1 ? 'property' : 'properties'} found
        </p>

        <div className="proj-grid">
          {filtered.map(p => (
            <div
              key={p.id}
              className={`flip-card${flipped[p.id] ? ' flip-card--flipped' : ''}`}
              onClick={() => handleCardClick(p.id)}
            >
              <div className="flip-card__inner">
                {/* Front */}
                <div className="flip-card__front">
                  <img src={p.image} alt={p.name} className="flip-card__img" />
                  <div className="flip-card__front-overlay">
                    <span className="flip-card__type">{p.type} · {p.status}</span>
                    <h3 className="flip-card__name">{p.name}</h3>
                    <p className="flip-card__loc">{p.loc}</p>
                    <p className="flip-card__price">{p.price}</p>
                  </div>
                </div>

                {/* Back */}
                <div className="flip-card__back">
                  <div className="flip-card__back-content">
                    <div>
                      <span className="flip-card__type">{p.type} · {p.status}</span>
                      <h3 className="flip-card__name flip-card__name--back">{p.name}</h3>
                      <p className="flip-card__loc">{p.loc}</p>
                    </div>
                    <p className="flip-card__desc">{p.desc}</p>
                    <div className="flip-card__meta">
                      <div><b>{p.beds}</b><span>Beds</span></div>
                      <div><b>{p.sqft}</b><span>Sq Ft</span></div>
                      <div><b>{p.developer}</b><span>Developer</span></div>
                      <div><b>{p.paymentPlan}</b><span>Payment Plan</span></div>
                    </div>
                    <div>
                      <p className="flip-card__price-back">{p.price}</p>
                      <div className="flip-card__btns">
                        <Link to="/contact" className="flip-btn flip-btn--contact">Contact Us</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {filtered.length === 0 && (
            <p className="proj-empty">No properties match your filters — try broadening your search.</p>
          )}
        </div>
      </div>
    </>
  )
}
