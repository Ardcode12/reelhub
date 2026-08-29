import { useState } from 'react'
import { useWhatsApp } from '../context/WhatsAppContext'
import './Portfolio.css'

const tabs = ['ALL', 'FAMILY', 'WEDDING', 'CORPORATE', 'BIRTHDAY', 'REELS', 'EVENTS']

// Placeholder reel cards — using gradient placeholders until real video assets are added
const reels = [
  { id: 1, category: 'WEDDING',   title: 'A Beautiful Union',        tag: 'Wedding Highlight' },
  { id: 2, category: 'FAMILY',    title: 'The Johnson Birthday',     tag: 'Birthday Reel' },
  { id: 3, category: 'CORPORATE', title: 'Product Launch 2026',      tag: 'Corporate Event' },
  { id: 4, category: 'REELS',     title: 'Summer Vibes',             tag: 'Instagram Reel' },
  { id: 5, category: 'FAMILY',    title: 'Golden Anniversary',       tag: 'Anniversary' },
  { id: 6, category: 'EVENTS',    title: 'College Fest Highlights',  tag: 'Event Reel' },
  { id: 7, category: 'BIRTHDAY',  title: 'Sweet 16 Surprise',        tag: 'Birthday Reel' },
  { id: 8, category: 'WEDDING',   title: 'Engagement in the Hills',  tag: 'Engagement' },
  { id: 9, category: 'REELS',     title: 'Brand Story Reel',         tag: 'Brand Reel' },
]

const gradients = [
  'linear-gradient(135deg, #1a0a00 0%, #ff5a00 100%)',
  'linear-gradient(135deg, #0d0d0d 0%, #c0392b 100%)',
  'linear-gradient(135deg, #0a0a1a 0%, #ff5a00 100%)',
  'linear-gradient(135deg, #050505 0%, #8b3a00 100%)',
  'linear-gradient(135deg, #1a0505 0%, #ff5a00 100%)',
  'linear-gradient(135deg, #0d0500 0%, #cc4400 100%)',
  'linear-gradient(135deg, #0a0000 0%, #ff5a00 100%)',
  'linear-gradient(135deg, #050505 0%, #993300 100%)',
  'linear-gradient(135deg, #0d0d00 0%, #ff5a00 100%)',
]

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState('ALL')
  const { openWhatsAppModal } = useWhatsApp()

  const filtered = activeTab === 'ALL'
    ? reels
    : reels.filter(r => r.category === activeTab)

  return (
    <section className="portfolio section-pad" id="portfolio">
      <div className="container">

        <div className="portfolio__header" data-aos="fade-up">
          <span className="eyebrow">Our Work</span>
          <h2 className="portfolio__title display-font">
            Recent <span className="gold-text">Reels</span>
          </h2>
          <p className="portfolio__subtitle">
            A selection of moments we've captured and crafted. Click any card to start your own.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="portfolio__tabs" data-aos="fade-up" data-aos-delay="100">
          {tabs.map(tab => (
            <button
              key={tab}
              className={`portfolio__tab ${activeTab === tab ? 'portfolio__tab--active' : ''}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="portfolio__grid">
          {filtered.map((reel, i) => (
            <div
              key={reel.id}
              className="reel-card"
              data-aos="fade-up"
              data-aos-delay={i * 60}
              onClick={() => openWhatsAppModal(`Hi ReelHub! I loved your "${reel.title}" reel. I'd like something similar!`)}
            >
              <div
                className="reel-card__thumb"
                style={{ background: gradients[reel.id - 1] }}
              >
                <div className="reel-card__play">
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                    <circle cx="14" cy="14" r="13" stroke="#ff5a00" strokeWidth="1.5"/>
                    <path d="M11 9l10 5-10 5V9z" fill="#ff5a00"/>
                  </svg>
                </div>
                <div className="reel-card__overlay">
                  <span className="reel-card__tag">{reel.tag}</span>
                  <p className="reel-card__title">{reel.title}</p>
                  <span className="reel-card__cta">Book Similar →</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="portfolio__footer" data-aos="fade-up">
          <button
            onClick={() => openWhatsAppModal("Hi ReelHub! I want to book a session.")}
            className="btn btn-primary"
            id="portfolio-cta"
          >
            Book Your Session
          </button>
        </div>

      </div>
    </section>
  )
}
