import './Services.css'

const services = [
  {
    id: 'service-social',
    icon: (
      <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
        <line x1="12" y1="18" x2="12.01" y2="18"></line>
      </svg>
    ),
    tag: 'Most Popular',
    title: 'Social Reels',
    desc: 'Get scroll-stopping short-form reels crafted for Instagram, TikTok, and YouTube Shorts — tailored to your brand voice.',
    features: ['Vertical 9:16 format', 'Caption & text overlays', 'Music sync & transitions'],
    cta: 'Get Social Reels',
  },
  {
    id: 'service-cinematic',
    icon: (
      <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"></rect>
        <line x1="7" y1="2" x2="7" y2="22"></line>
        <line x1="17" y1="2" x2="17" y2="22"></line>
        <line x1="2" y1="12" x2="22" y2="12"></line>
        <line x1="2" y1="7" x2="7" y2="7"></line>
        <line x1="2" y1="17" x2="7" y2="17"></line>
        <line x1="17" y1="17" x2="22" y2="17"></line>
        <line x1="17" y1="7" x2="22" y2="7"></line>
      </svg>
    ),
    tag: 'Premium',
    title: 'Cinematic Reels',
    desc: 'Tap into a premium cinematic experience. Full colour-grade, custom soundtrack, and premium motion graphics included.',
    features: ['4K / HDR export', 'Colour grading suite', 'Motion graphic overlays'],
    cta: 'Get Cinematic',
    featured: true,
  },
  {
    id: 'service-brand',
    icon: (
      <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 17l2-10 4 4 4-8 4 8 4-4 2 10z"></path>
        <path d="M2 21h20"></path>
      </svg>
    ),
    tag: 'Enterprise',
    title: 'Brand Reels',
    desc: 'Which package fits your brand story? We create authoritative, conversion-focused reels that your audience will trust.',
    features: ['Brand kit integration', 'Multi-platform export', 'Dedicated reel strategist'],
    cta: 'Get Brand Reels',
  },
]

export default function Services() {
  return (
    <section className="services section-pad" id="services">
      <div className="container">
        <div className="services__header" data-aos="fade-up">
          <span className="eyebrow">What We Craft</span>
          <h2 className="services__title display-font">
            Premium Reel Services<br />
            <span className="gold-text">Built For You</span>
          </h2>
          <p className="services__subtitle">
            See what each service delivers — from quick social clips to full
            cinematic productions. Every reel crafted to reign.
          </p>
        </div>

        <div className="services__grid">
          {services.map((s, i) => (
            <div
              key={s.id}
              id={s.id}
              className={`service-card ${s.featured ? 'service-card--featured' : ''}`}
              data-aos="zoom-in"
              data-aos-delay={i * 120}
            >
              {s.tag && (
                <div className={`service-card__tag ${s.featured ? 'service-card__tag--gold' : ''}`}>
                  {s.tag}
                </div>
              )}
              <div className="service-card__icon">{s.icon}</div>
              <h3 className="service-card__title">{s.title}</h3>
              <p className="service-card__desc">{s.desc}</p>
              <ul className="service-card__features">
                {s.features.map((f) => (
                  <li key={f} className="service-card__feature">
                    <span className="service-card__check">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href={`https://wa.me/910000000000?text=Hi%20ReelHub!%20I'm%20interested%20in%20your%20${s.title}%20service.`}
                target="_blank" rel="noopener noreferrer"
                className={`btn ${s.featured ? 'btn-gold' : 'btn-primary'} service-card__cta`}
              >
                {s.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

