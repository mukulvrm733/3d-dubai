import { Link, useNavigate, useLocation } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
  const navigate = useNavigate()
  const location = useLocation()

  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  const goToFaq = (e) => {
    e.preventDefault()
    if (location.pathname === '/') {
      document.getElementById('faq')?.scrollIntoView({ behavior: 'smooth' })
    } else {
      navigate('/', { state: { scrollTo: 'faq' } })
    }
  }

  return (
    <footer className="footer">
      <div className="footer__grid">
        <div className="footer__brand">
          <Link to="/" onClick={scrollTop} className="footer__logo">
            <img src="/img-1.webp" alt="IIV" className="footer__logo-img" loading="lazy" />
            <img src="/img-2.webp" alt="IIV" className="footer__logo-img" loading="lazy" />
          </Link>
          <p className="footer__desc">Infinite Imperial Ventures — A Clear Approach to Dubai Real Estate. We help you identify the right property based on your needs and priorities.</p>

          <div className="footer__social">
            <a href="https://www.instagram.com/infiniteimperialventures" className="footer__social-link" aria-label="Instagram">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <circle cx="12" cy="12" r="4"/>
                <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
              </svg>
            </a>
            <a href="https://www.facebook.com/profile.php?id=61574676416131" className="footer__social-link" aria-label="Facebook">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
              </svg>
            </a>
            <a href="https://x.com/IIV_REDXB" className="footer__social-link" aria-label="X (Twitter)">
              <svg viewBox="0 0 24 24" fill="currentColor" stroke="none">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.259 5.631 5.905-5.631zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z"/>
              </svg>
            </a>
            <a href="https://www.youtube.com/@iivrealestatellc" className="footer__social-link" aria-label="YouTube">
              <svg viewBox="0 0 24 24" fill="currentColor" stroke="none">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
          </div>
        </div>

        <div className="footer__col">
          <h5>Properties</h5>
          <ul>
            <li><Link to="/services" onClick={scrollTop}>Off-Plan</Link></li>
            <li><Link to="/services" onClick={scrollTop}>Ready Homes</Link></li>
            <li><Link to="/projects" onClick={scrollTop}>Villas</Link></li>
            <li><Link to="/projects" onClick={scrollTop}>Apartments</Link></li>
          </ul>
        </div>

        <div className="footer__col">
          <h5>Areas</h5>
          <ul>
            <li><Link to="/projects" onClick={scrollTop}>Palm Jumeirah</Link></li>
            <li><Link to="/projects" onClick={scrollTop}>Downtown</Link></li>
            <li><Link to="/projects" onClick={scrollTop}>Dubai Marina</Link></li>
            <li><Link to="/projects" onClick={scrollTop}>Business Bay</Link></li>
          </ul>
        </div>

        <div className="footer__col">
          <h5>Company</h5>
          <ul>
            <li><Link to="/about" onClick={scrollTop}>About IIV</Link></li>
            <li><Link to="/services" onClick={scrollTop}>Our Services</Link></li>
            <li><a href="/#faq" onClick={goToFaq}>FAQ</a></li>
            <li><Link to="/contact" onClick={scrollTop}>Contact Us</Link></li>
          </ul>
        </div>
      </div>

      <div className="footer__bottom">
        <span>© 2026 Infinite Imperial Ventures. All Rights Reserved.</span>
        <span>DLD Licensed · Business Bay, Dubai · info@iivre.com</span>
      </div>
    </footer>
  )
}
