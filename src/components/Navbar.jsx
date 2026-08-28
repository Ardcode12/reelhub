import { useState, useEffect } from 'react'
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
          <span className="navbar__logo-icon">
            {/* Professional film reel icon */}
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Outer ring */}
              <circle cx="18" cy="18" r="16.5" stroke="#d4a020" strokeWidth="1.5"/>
              {/* Inner hub */}
              <circle cx="18" cy="18" r="5" fill="#916f4c" stroke="#d4a020" strokeWidth="1"/>
              {/* Sprocket holes – 6 evenly spaced */}
              <circle cx="18" cy="5"  r="2" fill="#d4a020" opacity="0.85"/>
              <circle cx="29.59" cy="11.5" r="2" fill="#d4a020" opacity="0.85"/>
              <circle cx="29.59" cy="24.5" r="2" fill="#d4a020" opacity="0.85"/>
              <circle cx="18" cy="31" r="2" fill="#d4a020" opacity="0.85"/>
              <circle cx="6.41"  cy="24.5" r="2" fill="#d4a020" opacity="0.85"/>
              <circle cx="6.41"  cy="11.5" r="2" fill="#d4a020" opacity="0.85"/>
              {/* Spokes from centre to sprocket holes */}
              <line x1="18" y1="13" x2="18" y2="7"    stroke="#916f4c" strokeWidth="1" opacity="0.6"/>
              <line x1="18" y1="13" x2="27.59" y2="12.5" stroke="#916f4c" strokeWidth="1" opacity="0.6"/>
              <line x1="18" y1="13" x2="27.59" y2="23.5" stroke="#916f4c" strokeWidth="1" opacity="0.6"/>
              <line x1="18" y1="23" x2="18" y2="29"   stroke="#916f4c" strokeWidth="1" opacity="0.6"/>
              <line x1="18" y1="23" x2="8.41"  y2="23.5"  stroke="#916f4c" strokeWidth="1" opacity="0.6"/>
              <line x1="18" y1="13" x2="8.41"  y2="12.5"  stroke="#916f4c" strokeWidth="1" opacity="0.6"/>
              {/* Golden centre dot */}
              <circle cx="18" cy="18" r="2" fill="#d4a020"/>
            </svg>
          </span>
          <span className="navbar__logo-text">
            Nelson<span className="navbar__logo-reel">Reel</span>
          </span>
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
          <a href="#pricing" className="btn btn-primary navbar__cta" id="nav-cta">
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
