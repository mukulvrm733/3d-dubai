import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Projects.css'

const projects = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&q=80&auto=format&fit=crop',
    type: 'Villa', status: 'Off-Plan', name: 'Palm Signature Villa',
    loc: 'Palm Jumeirah, Dubai', priceRaw: 5200000, price: 'AED 5,200,000',
    beds: 4, sqft: '4,500', developer: 'Emaar',
    desc: 'A stunning 4-bedroom villa on the iconic Palm Jumeirah with private pool, direct beach access and panoramic sea views.',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80&auto=format&fit=crop',
    type: 'Apartment', status: 'Ready', name: 'Marina Bay Residence',
    loc: 'Dubai Marina', priceRaw: 2100000, price: 'AED 2,100,000',
    beds: 2, sqft: '1,350', developer: 'DAMAC',
    desc: 'Elegant 2-bedroom apartment with panoramic marina views, world-class amenities and a vibrant waterfront lifestyle.',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80&auto=format&fit=crop',
    type: 'Townhouse', status: 'Off-Plan', name: 'Bay Grove Townhouse',
    loc: 'Business Bay, Dubai', priceRaw: 3800000, price: 'AED 3,800,000',
    beds: 3, sqft: '2,800', developer: 'Nakheel',
    desc: 'Spacious 3-bedroom townhouse in the heart of Business Bay with a rooftop terrace and contemporary interiors.',
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80&auto=format&fit=crop',
    type: 'Penthouse', status: 'Ready', name: 'Downtown Sky Residence',
    loc: 'Downtown Dubai', priceRaw: 8500000, price: 'AED 8,500,000',
    beds: 3, sqft: '3,200', developer: 'Emaar',
    desc: 'Iconic penthouse with floor-to-ceiling Burj Khalifa views, a private terrace and high-end designer finishes.',
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80&auto=format&fit=crop',
    type: 'Villa', status: 'Ready', name: 'Arabian Ranches Estate',
    loc: 'Arabian Ranches, Dubai', priceRaw: 4500000, price: 'AED 4,500,000',
    beds: 5, sqft: '5,200', developer: 'Emaar',
    desc: 'Luxurious 5-bedroom villa in the prestigious Arabian Ranches community featuring lush gardens and a private pool.',
  },
  {
    id: 6,
    image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&q=80&auto=format&fit=crop',
    type: 'Apartment', status: 'Off-Plan', name: 'Creek Vista Heights',
    loc: 'Dubai Creek Harbour', priceRaw: 1800000, price: 'AED 1,800,000',
    beds: 1, sqft: '920', developer: 'Emaar',
    desc: 'Premium 1-bedroom apartment overlooking Dubai Creek Tower with modern finishes and resort-style amenities.',
  },
  {
    id: 7,
    image: 'https://images.unsplash.com/photo-1574362848149-11496d93a7c7?w=800&q=80&auto=format&fit=crop',
    type: 'Mansion', status: 'Ready', name: 'Jumeirah Bay Island Villa',
    loc: 'Jumeirah Bay Island', priceRaw: 25000000, price: 'AED 25,000,000',
    beds: 7, sqft: '12,000', developer: 'Meraas',
    desc: 'Ultra-luxury 7-bedroom mansion on Jumeirah Bay Island with a private beach, infinity pool and boat berth.',
  },
  {
    id: 8,
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80&auto=format&fit=crop',
    type: 'Apartment', status: 'Ready', name: 'DIFC Skyline Suite',
    loc: 'DIFC, Dubai', priceRaw: 3200000, price: 'AED 3,200,000',
    beds: 2, sqft: '1,650', developer: 'DAMAC',
    desc: 'Sophisticated 2-bedroom suite in the financial district with iconic skyline views and concierge services.',
  },
  {
    id: 9,
    image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800&q=80&auto=format&fit=crop',
    type: 'Townhouse', status: 'Off-Plan', name: 'Emaar Beachfront Residence',
    loc: 'Emaar Beachfront, Dubai', priceRaw: 6800000, price: 'AED 6,800,000',
    beds: 4, sqft: '3,800', developer: 'Emaar',
    desc: 'Beachfront townhouse with direct Arabian Gulf access, a private terrace and uninterrupted horizon views.',
  },
  {
    id: 10,
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80&auto=format&fit=crop',
    type: 'Villa', status: 'Off-Plan', name: 'Sobha Hartland Estate',
    loc: 'Mohammed Bin Rashid City', priceRaw: 9200000, price: 'AED 9,200,000',
    beds: 6, sqft: '7,500', developer: 'Sobha',
    desc: 'Magnificent 6-bedroom estate in Sobha Hartland with a private garden, smart-home technology and city views.',
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
  const [location, setLocation] = useState('All Dubai Areas')
  const [propType, setPropType] = useState('Any Type')
  const [budget, setBudget] = useState('Any Budget')
  const [flipped, setFlipped] = useState({})

  const filtered = projects.filter(p => {
    const locMatch = location === 'All Dubai Areas' || p.loc.toLowerCase().includes(location.toLowerCase())
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
              {['All Dubai Areas','Downtown Dubai','Palm Jumeirah','Dubai Marina','Business Bay'].map(o => <option key={o}>{o}</option>)}
            </select>
          </div>
          <div className="search-field">
            <span className="search-label">Property Type</span>
            <select className="search-select" value={propType} onChange={e => setPropType(e.target.value)}>
              {['Any Type','Villa','Apartment','Townhouse','Penthouse','Mansion'].map(o => <option key={o}>{o}</option>)}
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
                  <img src={p.image} alt={p.name} className="flip-card__img" loading="lazy" />
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
                    </div>
                    <div>
                      <p className="flip-card__price-back">{p.price}</p>
                      <div className="flip-card__btns">
                        <a href="#" className="flip-btn flip-btn--explore" onClick={e => e.preventDefault()}>Explore</a>
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
