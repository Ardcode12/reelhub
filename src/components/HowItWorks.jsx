import './HowItWorks.css'

const steps = [
  {
    id: 'step-brief',
    num: '01',
    icon: (
      <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
        <rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>
        <path d="M9 14h6"></path>
        <path d="M9 10h6"></path>
      </svg>
    ),
    title: 'Share Your Brief',
    desc: 'Tap the order form and tell us about your vision — brand, style, platform, and goals. The more detail, the better your reel.',
  },
  {
    id: 'step-craft',
    num: '02',
    icon: (
      <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="6" cy="6" r="3"></circle>
        <circle cx="6" cy="18" r="3"></circle>
        <line x1="20" y1="4" x2="8.12" y2="15.88"></line>
        <line x1="14.47" y1="14.48" x2="20" y2="20"></line>
        <line x1="8.12" y1="8.12" x2="12" y2="12"></line>
      </svg>
    ),
    title: 'We Craft Your Reel',
    desc: 'Our premium editors get to work — colour-grading, syncing, and refining every frame to match your brief with precision.',
  },
  {
    id: 'step-deliver',
    num: '03',
    icon: (
      <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 2L11 13"></path>
        <path d="M22 2l-7 20-4-9-9-4 20-7z"></path>
      </svg>
    ),
    title: 'Get It Delivered',
    desc: 'Get your finished reel in 48 hours or less. Download in any format and publish directly — ready to reign on every platform.',
  },
]

export default function HowItWorks() {
  return (
    <section className="hiw section-pad" id="how-it-works">
      <div className="container">
        <div className="hiw__header" data-aos="fade-up">
          <span className="eyebrow">How It Works</span>
          <h2 className="hiw__title display-font">
            Three Quick Steps.<br />
            <span className="gold-text">Infinite Impact.</span>
          </h2>
          <p className="hiw__subtitle">
            Which path to your perfect reel? All three steps are built for speed
            without sacrificing an ounce of premium quality.
          </p>
        </div>

        <div className="hiw__steps">
          {steps.map((step, i) => (
            <div
              key={step.id}
              id={step.id}
              className="hiw__step"
              data-aos="fade-up"
              data-aos-delay={i * 150}
            >
              <div className="hiw__step-number display-font">{step.num}</div>
              <div className="hiw__step-icon">{step.icon}</div>
              <h3 className="hiw__step-title">{step.title}</h3>
              <p className="hiw__step-desc">{step.desc}</p>
              {i < steps.length - 1 && (
                <div className="hiw__connector">
                  <div className="hiw__connector-line" />
                  <svg className="hiw__connector-arrow" width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M1 6h10M7 2l4 4-4 4" stroke="#ff5a00" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="hiw__cta" data-aos="fade-up" data-aos-delay="200">
          <a href="https://wa.me/910000000000?text=Hi%20ReelHub!%20I'm%20ready%20to%20start%20my%20reel." target="_blank" rel="noopener noreferrer" className="btn btn-primary" id="hiw-cta">
            Start Your Reel Now
          </a>
        </div>
      </div>
    </section>
  )
}

