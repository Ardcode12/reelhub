import './Hero.css'

export default function Hero() {
  return (
    <section className="hero" id="hero">
      {/* Background decorations */}
      <div className="hero__glow hero__glow--1" />
      <div className="hero__glow hero__glow--2" />
      <div className="hero__grid" />

      <div className="container hero__inner">
        {/* Left Content */}
        <div className="hero__content">
          <div className="eyebrow" id="hero-eyebrow" data-aos="fade-up" data-aos-delay="100">
            ✦ Premium Reel Creation Service
          </div>

          <h1 className="hero__title display-font">
            <span className="hero__title-line" data-aos="fade-up" data-aos-delay="200">Craft Reels</span>
            <span className="hero__title-line hero__title-line--accent" data-aos="fade-up" data-aos-delay="300">
              That Reign
            </span>
            <span className="hero__title-line" data-aos="fade-up" data-aos-delay="400">Supreme</span>
          </h1>

          <p className="hero__subtitle" data-aos="fade-up" data-aos-delay="450">
            Get your cinematic reels delivered in quick steps — royal craft,
            unmatched quality. See what we create for creators who demand excellence.
          </p>

          <div className="hero__ctas" data-aos="fade-up" data-aos-delay="550">
            <a href="#pricing" className="btn btn-primary" id="hero-cta-primary">
              <span>Get Your Reel</span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                <path d="M8 1l7 7-7 7M1 8h14" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round"/>
              </svg>
            </a>
            <a href="#how-it-works" className="btn btn-outline" id="hero-cta-secondary">
              See How It Works
            </a>
          </div>

          {/* Trust badges */}
          <div className="hero__trust" data-aos="fade-up" data-aos-delay="650">
            <div className="hero__trust-item">
              <span className="hero__trust-num">500+</span>
              <span className="hero__trust-label">Reels Delivered</span>
            </div>
            <div className="hero__trust-divider" />
            <div className="hero__trust-item">
              <span className="hero__trust-num">48hr</span>
              <span className="hero__trust-label">Avg. Turnaround</span>
            </div>
            <div className="hero__trust-divider" />
            <div className="hero__trust-item">
              <span className="hero__trust-num">4.9★</span>
              <span className="hero__trust-label">Client Rating</span>
            </div>
          </div>
        </div>

        {/* Right Visual */}
        <div className="hero__visual" data-aos="fade-left" data-aos-delay="300">
          <div className="hero__reel-mockup" id="hero-reel">
            <div className="hero__reel-frame">
              <div className="hero__reel-screen">
                <div className="hero__reel-play">
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                    <circle cx="20" cy="20" r="19" stroke="#d4a020" strokeWidth="1.5"/>
                    <path d="M15 12 L30 20 L15 28 Z" fill="#99744e"/>
                  </svg>
                </div>
                <div className="hero__reel-bars">
                  {[40, 70, 55, 90, 65, 80, 45, 75].map((h, i) => (
                    <div
                      key={i}
                      className="hero__reel-bar"
                      style={{ height: `${h}%`, animationDelay: `${i * 0.15}s` }}
                    />
                  ))}
                </div>
                <p className="hero__reel-label">Your Reel, Crafted</p>
              </div>

              {/* Orbiting badge */}
              <div className="hero__badge hero__badge--1">
                <span className="hero__badge-icon">
                  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"></rect>
                    <line x1="7" y1="2" x2="7" y2="22"></line>
                    <line x1="17" y1="2" x2="17" y2="22"></line>
                    <line x1="2" y1="12" x2="22" y2="12"></line>
                    <line x1="2" y1="7" x2="7" y2="7"></line>
                    <line x1="2" y1="17" x2="7" y2="17"></line>
                    <line x1="17" y1="17" x2="22" y2="17"></line>
                    <line x1="17" y1="7" x2="22" y2="7"></line>
                  </svg>
                </span>
                <div>
                  <p className="hero__badge-title">Cinematic</p>
                  <p className="hero__badge-sub">4K Quality</p>
                </div>
              </div>
              <div className="hero__badge hero__badge--2">
                <span className="hero__badge-icon">
                  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
                  </svg>
                </span>
                <div>
                  <p className="hero__badge-title">Fast Delivery</p>
                  <p className="hero__badge-sub">48 Hours</p>
                </div>
              </div>
            </div>

            {/* Film strip decoration */}
            <div className="hero__filmstrip">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="hero__film-cell" />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hero__scroll">
        <div className="hero__scroll-mouse">
          <div className="hero__scroll-dot" />
        </div>
        <span>Scroll to Explore</span>
      </div>
    </section>
  )
}

