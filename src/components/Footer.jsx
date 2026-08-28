import './Footer.css'

const links = {
  Product: ['Social Reels', 'Cinematic Reels', 'Brand Reels', 'Pricing'],
  Company: ['About Us', 'Portfolio', 'Blog', 'Careers'],
  Support: ['Help Center', 'Contact Us', 'Order Status', 'Refund Policy'],
}

export default function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className="container footer__inner">
        {/* Brand */}
        <div className="footer__brand">
          <div className="footer__logo">
            <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
              <circle cx="16" cy="16" r="15" stroke="#d4a020" strokeWidth="1.5"/>
              <path d="M10 10 L22 16 L10 22 Z" fill="#916f4c"/>
              <circle cx="16" cy="16" r="4" fill="#d4a020" opacity="0.3"/>
            </svg>
            <span className="footer__logo-text">
              Nelson<span className="footer__logo-accent">Reel</span>
            </span>
          </div>
          <p className="footer__tagline">
            Royal reel creation for creators who refuse to settle.
            Quick delivery, cinematic quality, every time.
          </p>
          <div className="footer__socials">
            {['Instagram', 'TikTok', 'YouTube', 'X'].map((s) => (
              <a key={s} href="#" className="footer__social" aria-label={s}>
                {s[0]}
              </a>
            ))}
          </div>
        </div>

        {/* Links */}
        {Object.entries(links).map(([group, items]) => (
          <div key={group} className="footer__col">
            <h4 className="footer__col-title">{group}</h4>
            <ul className="footer__col-links">
              {items.map((item) => (
                <li key={item}>
                  <a href="#" className="footer__col-link">{item}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <p className="footer__copy">
            © {new Date().getFullYear()} NelsonReel. All rights reserved.
          </p>
          <div className="footer__legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
