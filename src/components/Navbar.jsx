import { useState, useEffect } from 'react'
import logo from '../images/IMG_5717.png'
import './Navbar.css'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`} id="navbar">
      <div className="container navbar__inner">
        {/* Logo */}
        <a href="#" className="navbar__logo" id="logo-link">
          <img src={logo} alt="ReelHub Logo" className="navbar__logo-img" />
        </a>

        {/* Nav Links */}
        <ul className={`navbar__links ${menuOpen ? 'navbar__links--open' : ''}`} id="nav-links">
          {['Services', 'How It Works', 'Pricing', 'Testimonials'].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                className="navbar__link"
                onClick={() => setMenuOpen(false)}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="navbar__actions">
          <a href="https://wa.me/910000000000?text=Hi%20ReelHub!%20I'm%20interested%20in%20getting%20started." target="_blank" rel="noopener noreferrer" className="btn btn-primary navbar__cta" id="nav-cta">
            Get Started
          </a>
          <button
            className={`navbar__hamburger ${menuOpen ? 'navbar__hamburger--open' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            id="hamburger-btn"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </nav>
  )
}
