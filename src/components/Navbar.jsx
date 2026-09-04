import { useState, useEffect } from 'react'
import logo from '../images/IMG_5717.png'
import { useWhatsApp } from '../context/WhatsAppContext'
import './Navbar.css'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { openWhatsAppModal } = useWhatsApp()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`} id="navbar">
      <div className="container navbar__inner">
        {/* Logo */}
        <a href="#" className="navbar__logo" id="logo-link">
          <img src={logo} alt="ReelHub Logo" className="navbar__logo-img" />
        </a>

        {/* Nav Links */}
        <div className={`navbar__links ${menuOpen ? 'navbar__links--open' : ''}`}>
          <a href="#services" className="navbar__link" onClick={() => setMenuOpen(false)}>Services</a>
          <a href="#how-it-works" className="navbar__link" onClick={() => setMenuOpen(false)}>How It Works</a>
          <a href="#pricing" className="navbar__link" onClick={() => setMenuOpen(false)}>Pricing</a>
          <a href="#testimonials" className="navbar__link" onClick={() => setMenuOpen(false)}>Testimonials</a>
        </div>

        {/* CTA */}
        <div className="navbar__actions">
        
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
