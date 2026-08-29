import { useWhatsApp } from '../context/WhatsAppContext'
import './CTA.css'

export default function CTA() {
  const { openWhatsAppModal } = useWhatsApp()
  return (
    <section className="cta-section" id="cta">
      <div className="cta-section__glow" />
      <div className="container cta-section__inner">
        <div className="cta-section__crown" data-aos="zoom-in">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M2 17l2-10 4 4 4-8 4 8 4-4 2 10z"></path>
            <path d="M2 21h20"></path>
          </svg>
        </div>
        <span className="eyebrow" data-aos="fade-up" data-aos-delay="100">Ready to Rise?</span>
        <h2 className="cta-section__title display-font" data-aos="fade-up" data-aos-delay="200">
          Your Premium Reel<br />
          <span className="gold-text">Awaits You</span>
        </h2>
        <p className="cta-section__subtitle" data-aos="fade-up" data-aos-delay="300">
          Tap the button and get your first reel in 48 hours. See what premium reel
          creation feels like — your audience will feel the difference.
        </p>
        <div className="cta-section__actions" data-aos="fade-up" data-aos-delay="400">
          <button 
            onClick={() => openWhatsAppModal("Hi ReelHub! I'm ready to get my first reel.")} 
            className="btn btn-gold cta-section__primary" 
            id="cta-primary"
          >
            <span>Get Your First Reel</span>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M3.75 9h10.5M9 3.75L14.25 9 9 14.25" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <a href="#how-it-works" className="btn btn-outline" id="cta-secondary">
            See How It Works
          </a>
        </div>
        <p className="cta-section__guarantee" data-aos="fade-up" data-aos-delay="500">
          ✓ 7-day satisfaction guarantee &nbsp;·&nbsp; ✓ No contracts &nbsp;·&nbsp; ✓ Cancel anytime
        </p>
      </div>
    </section>
  )
}

