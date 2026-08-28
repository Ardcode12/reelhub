import './Testimonials.css'

const testimonials = [
  {
    id: 'testi-1',
    name: 'Aria Kensington',
    handle: '@aria.creates',
    avatar: 'AK',
    role: 'Fashion Creator · 280K Followers',
    text: 'NelsonReel completely transformed my content game. The royal brown aesthetic they nailed was exactly what my brand needed. Delivered in 36 hours — absolutely flawless.',
    rating: 5,
  },
  {
    id: 'testi-2',
    name: 'Marcus Stone',
    handle: '@marcusstone',
    avatar: 'MS',
    role: 'Brand Director · StoneHouse Agency',
    text: 'We\'ve tried five different reel services. None come close to NelsonReel\'s quality. The cinematic grade on our brand campaign reels is unmatched. Pure royalty.',
    rating: 5,
    featured: true,
  },
  {
    id: 'testi-3',
    name: 'Priya Mehta',
    handle: '@priyamehta.co',
    avatar: 'PM',
    role: 'Lifestyle Creator · 95K Followers',
    text: 'How did I survive without NelsonReel? The 48-hour delivery is real, the revisions were smooth, and my engagement tripled on the first reel they delivered.',
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
