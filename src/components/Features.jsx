import { useWhatsApp } from '../context/WhatsAppContext'
import './Features.css'

const features = [
  {
    id: 'feat-iphone',
    icon: (
      <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
        <line x1="12" y1="18" x2="12.01" y2="18"></line>
      </svg>
    ),
    title: 'iPhone Shooting',
    desc: 'High-quality iPhone videography with Cinematic mode, ProRes and 4K HDR for stunning detail in every frame.',
  },
  {
    id: 'feat-cinematic',
    icon: (
      <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 17l2-10 4 4 4-8 4 8 4-4 2 10z"></path>
        <path d="M2 21h20"></path>
      </svg>
    ),
    title: 'Cinematic Quality',
    desc: 'Movie-grade color grading, smooth motion, and depth that elevates every frame into a film.',
  },
  {
    id: 'feat-fast',
    icon: (
      <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <polyline points="12 6 12 12 16 14"></polyline>
      </svg>
    ),
    title: 'Fast Editing',
    desc: 'Same-day or within-hours editing whenever possible. You won\'t wait weeks to relive your moments.',
  },
  {
    id: 'feat-effects',
    icon: (
      <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
      </svg>
    ),
    title: 'Pro Effects',
    desc: 'Professional transitions, sound design, motion graphics and color grading baked into every cut.',
  },
  {
    id: 'feat-social',
    icon: (
      <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="18" cy="5" r="3"></circle>
        <circle cx="6" cy="12" r="3"></circle>
        <circle cx="18" cy="19" r="3"></circle>
        <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
        <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
      </svg>
    ),
    title: 'Social Ready',
    desc: 'Videos formatted for Instagram Reels, YouTube Shorts, TikTok and every platform that matters.',
  },
  {
    id: 'feat-moments',
    icon: (
      <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
      </svg>
    ),
    title: 'Every Moment Matters',
    desc: 'We treat your event like our own. Every smile, tear, and dance move — preserved with intention.',
  },
]

export default function Features() {
  const { openWhatsAppModal } = useWhatsApp()

  return (
    <section className="features section-pad" id="features">
      <div className="container">
        <div className="features__header" data-aos="fade-up">
          <span className="eyebrow">Why ReelHub</span>
          <h2 className="features__title display-font">
            Everything You Need,<br />
            <span className="gold-text">Nothing You Don't.</span>
          </h2>
          <p className="features__subtitle">
            We combine cutting-edge iPhone cinematography with fast, professional editing — so your memories look like movies.
          </p>
        </div>

        <div className="features__grid">
          {features.map((f, i) => (
            <div
              key={f.id}
              id={f.id}
              className="feature-card"
              data-aos="fade-up"
              data-aos-delay={i * 80}
            >
              <div className="feature-card__icon">{f.icon}</div>
              <h3 className="feature-card__title">{f.title}</h3>
              <p className="feature-card__desc">{f.desc}</p>
            </div>
          ))}
        </div>

        <div className="features__cta" data-aos="fade-up" data-aos-delay="200">
          <button
            onClick={() => openWhatsAppModal("Hi ReelHub! I'd like to know more about your services.")}
            className="btn btn-primary"
            id="features-cta"
          >
            Book Your Session
          </button>
        </div>
      </div>
    </section>
  )
}
