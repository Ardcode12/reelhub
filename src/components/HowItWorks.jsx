import { useWhatsApp } from '../context/WhatsAppContext'
import './HowItWorks.css'

export default function HowItWorks() {
  const { openWhatsAppModal } = useWhatsApp()

  const steps = [
    {
      num: '01',
      title: 'Consultation & Strategy',
      desc: 'We align on your brand voice, goals, and the specific message you want to deliver.',
    },
    {
      num: '02',
      title: 'Production & Filming',
      desc: 'High-end iPhone shoots designed for maximum native engagement on social platforms.',
    },
    {
      num: '03',
      title: 'Cinematic Editing',
      desc: 'Our team crafts your footage with premium color grading, pacing, and motion graphics.',
    },
    {
      num: '04',
      title: 'Review & Delivery',
      desc: 'You receive the final reel within 48 hours, ready to post and dominate the feed.',
    }
  ]

  return (
    <section className="hiw section-pad" id="how-it-works">
      <div className="container hiw__inner">
        
        <div className="hiw__header" data-aos="fade-up">
          <span className="eyebrow">The Process</span>
          <h2 className="hiw__title display-font">
            From Concept to <span className="gold-text">Creation</span>
          </h2>
          <p className="hiw__subtitle">
            We've streamlined our workflow so you get premium results without the usual production friction.
          </p>
        </div>

        <div className="hiw__steps">
          {steps.map((step, i) => (
            <div 
              key={step.num} 
              className="hiw__step"
              data-aos="fade-up"
              data-aos-delay={i * 100}
            >
              <div className="hiw__step-content">
                <div className="hiw__step-num">{step.num}</div>
                <h3 className="hiw__step-title">{step.title}</h3>
                <p className="hiw__step-desc">{step.desc}</p>
              </div>
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
          <button 
            onClick={() => openWhatsAppModal("Hi ReelHub! I'm ready to start my reel.")} 
            className="btn btn-primary" 
            id="hiw-cta"
          >
            Start Your Reel Now
          </button>
        </div>

      </div>
    </section>
  )
}
