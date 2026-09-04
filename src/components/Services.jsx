import { useWhatsApp } from '../context/WhatsAppContext'
import './Services.css'

const services = [
  {
    id: 'service-family',
    icon: (
      <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
        <circle cx="9" cy="7" r="4"></circle>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
      </svg>
    ),
    tag: 'Most Loved',
    title: 'Family Functions',
    desc: 'Capture birthdays, weddings, engagements, anniversaries and family celebrations with warmth and cinematic quality.',
    features: ['Weddings', 'Engagements', 'Anniversaries'],
    cta: 'Book Now',
  },
  {
    id: 'service-corporate',
    icon: (
      <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
      </svg>
    ),
    tag: 'Professional',
    title: 'Corporate Events',
    desc: 'Professional video coverage for meetings, product launches, celebrations and corporate functions of any scale.',
    features: ['Meetings', 'Launches', 'Parties'],
    cta: 'Book Now',
  },
  {
    id: 'service-reels',
    icon: (
      <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
        <line x1="12" y1="18" x2="12.01" y2="18"></line>
      </svg>
    ),
    tag: 'Go Viral',
    title: 'Instagram Reels',
    desc: 'Short, stylish and engaging vertical videos ready for Instagram and social media. Edit, post, go viral.',
    features: ['9:16 Vertical', 'Trending'],
    cta: 'Get Reels',
    featured: true,
  },
  {
    id: 'service-highlights',
    icon: (
      <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="23 7 16 12 23 17 23 7"></polygon>
        <rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>
      </svg>
    ),
    tag: 'Premium',
    title: 'Event Highlights',
    desc: 'Create cinematic highlight videos that capture the best moments of your event in a fast-paced, emotional reel.',
    features: ['Cinematic', 'Story-driven'],
    cta: 'Book Now',
  },
  {
    id: 'service-sameday',
    icon: (
      <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <polyline points="12 6 12 12 16 14"></polyline>
      </svg>
    ),
    tag: '⚡ Express',
    title: 'Same-Day Editing',
    desc: 'Fast editing service to get your memorable video ready within hours whenever possible. Shot today, relived tonight.',
    features: ['⚡ Fast Turnaround'],
    cta: 'Book Now',
  },
  {
    id: 'service-custom',
    icon: (
      <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3"></circle>
        <path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14"></path>
      </svg>
    ),
    tag: 'Custom',
    title: 'Something Else?',
    desc: 'Tell us about your event and we\'ll craft a custom video package just for you.',
    features: ['Custom Package'],
    cta: 'Get Custom Quote',
  },
]

export default function Services() {
  const { openWhatsAppModal } = useWhatsApp()

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

            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

