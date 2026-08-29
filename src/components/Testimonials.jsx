import './Testimonials.css'

const testimonials = [
  {
    id: 'testi-1',
    name: 'Nelson',
    handle: '@nelson.ig',
    avatar: 'N',
    role: 'Instagram Influencer',
    text: 'Honestly didn\'t expect this level of quality from a local team. The reel they made for my page got more saves in a day than anything I\'ve posted before. Fast delivery, no back and forth — just clean output.',
    rating: 5,
  },
  {
    id: 'testi-2',
    name: 'Jeno',
    handle: '@jeno_films',
    avatar: 'J',
    role: 'Short Film Actor',
    text: 'I needed a behind-the-scenes reel for my portfolio and they nailed the mood completely. The color grade felt cinematic, not just filtered. You can tell they actually understand visual storytelling.',
    rating: 5,
    featured: true,
  },
  {
    id: 'testi-3',
    name: 'David',
    handle: '@david_events',
    avatar: 'D',
    role: 'Event Organiser',
    text: 'We booked them for a corporate launch event and got the highlight reel the same evening. My client was shocked — they expected to wait days. Will definitely use ReelHub for all our future events.',
    rating: 5,
  },
]

export default function Testimonials() {
  return (
    <section className="testi section-pad" id="testimonials">
      <div className="container">
        <div className="testi__header" data-aos="fade-up">
          <span className="eyebrow">Testimonials</span>
          <h2 className="testi__title display-font">
            What Creators Say<br />
            <span className="gold-text">About Us</span>
          </h2>
        </div>

        <div className="testi__grid">
          {testimonials.map((t, i) => (
            <div
              key={t.id}
              id={t.id}
              className={`testi-card ${t.featured ? 'testi-card--featured' : ''}`}
              data-aos="fade-up"
              data-aos-delay={i * 120}
            >
              {/* Stars */}
              <div className="testi-card__stars">
                {[...Array(t.rating)].map((_, i) => (
                  <span key={i} className="testi-card__star">★</span>
                ))}
              </div>

              <p className="testi-card__text">"{t.text}"</p>

              <div className="testi-card__author">
                <div className="testi-card__avatar">{t.avatar}</div>
                <div>
                  <p className="testi-card__name">{t.name}</p>
                  <p className="testi-card__role">{t.role}</p>
                  <p className="testi-card__handle">{t.handle}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats bar */}
        <div className="testi__stats">
          {[
            { num: '500+', label: 'Reels Delivered' },
            { num: '98%', label: 'Client Satisfaction' },
            { num: '48hr', label: 'Avg Delivery' },
            { num: '4.9/5', label: 'Average Rating' },
          ].map((stat, si) => (
            <div key={stat.label} className="testi__stat" data-aos="fade-up" data-aos-delay={si * 100}>
              <span className="testi__stat-num display-font">{stat.num}</span>
              <span className="testi__stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
