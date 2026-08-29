import logo from '../images/IMG_5717.png'
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
            <img src={logo} alt="ReelHub Logo" className="footer__logo-img" />
          </div>
          <p className="footer__tagline">
            Premium reel creation for creators who refuse to settle.
            Quick delivery, cinematic quality, every time.
            <br/><br/>
            Contact us: <a href="mailto:reelhubcbe@gmail.com" style={{color: 'var(--clr-primary)'}}>reelhubcbe@gmail.com</a>
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
            © {new Date().getFullYear()} ReelHub. All rights reserved.
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
