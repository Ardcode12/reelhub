import { useState } from 'react'
import { useWhatsApp } from '../context/WhatsAppContext'
import './Pricing.css'

const plans = [
  {
    id: 'plan-starter',
    name: 'Starter',
    price: { monthly: '3,999', yearly: '2,999' },
    desc: 'Perfect for creators just getting started with social reels.',
    features: [
      '3 Reels per month',
      'Up to 60 seconds each',
      'Basic colour grade',
      'Caption overlays',
      '3-day delivery',
      '1 revision round',
    ],
    cta: 'Get Starter',
    highlight: false,
  },
  {
    id: 'plan-premium',
    name: 'Premium',
    price: { monthly: '9,999', yearly: '7,999' },
    desc: 'Our most popular plan for serious creators who demand premium quality.',
    features: [
      '10 Reels per month',
      'Up to 3 minutes each',
      'Premium colour grade',
      'Custom text animations',
      '48-hour delivery',
      '3 revision rounds',
      'Music licensing included',
      'Priority support',
    ],
    cta: 'Get Premium',
    highlight: true,
    badge: 'Most Popular',
  },
  {
    id: 'plan-empire',
    name: 'Empire',
    price: { monthly: '24,999', yearly: '19,999' },
    desc: 'Full-service brand reel suite for agencies and enterprise clients.',
    features: [
      'Unlimited Reels',
      'Any length & format',
      'Cinematic full-grade',
      'Motion graphics suite',
      '24-hour rush delivery',
      'Unlimited revisions',
      'Dedicated editor',
      'Brand kit integration',
    ],
    cta: 'Get Empire',
    highlight: false,
  },
]

export default function Pricing() {
  const { openWhatsAppModal } = useWhatsApp()
  const [yearly, setYearly] = useState(false)

  return (
    <section className="pricing section-pad" id="pricing">
      <div className="container">
        <div className="pricing__header" data-aos="fade-up">
          <span className="eyebrow">Pricing</span>
          <h2 className="pricing__title display-font">
            Which Plan Fits<br />
            <span className="gold-text">Your Vision?</span>
          </h2>
          <p className="pricing__subtitle">
            Tap the right plan and get your reels rolling. No hidden fees,
            no surprise decrees — just clear, honest pricing.
          </p>

          {/* Toggle */}
          <div className="pricing__toggle" id="pricing-toggle">
            <span className={!yearly ? 'pricing__toggle-label--active' : ''}>Monthly</span>
            <button
              className={`pricing__toggle-btn ${yearly ? 'pricing__toggle-btn--on' : ''}`}
              onClick={() => setYearly(!yearly)}
              aria-label="Toggle yearly billing"
            >
              <span className="pricing__toggle-knob" />
            </button>
            <span className={yearly ? 'pricing__toggle-label--active' : ''}>
              Yearly <span className="pricing__save-badge">Save 20%</span>
            </span>
          </div>
        </div>

        <div className="pricing__grid">
          {plans.map((plan, i) => (
            <div
              key={plan.id}
              id={plan.id}
              className={`pricing-card ${plan.highlight ? 'pricing-card--featured' : ''}`}
              data-aos="fade-up"
              data-aos-delay={i * 120}
            >
              {plan.badge && (
                <div className="pricing-card__badge">{plan.badge}</div>
              )}
              <div className="pricing-card__top">
                <h3 className="pricing-card__name display-font">{plan.name}</h3>
                <p className="pricing-card__desc">{plan.desc}</p>
              </div>

              <div className="pricing-card__price">
                <span className="pricing-card__currency">₹</span>
                <span className="pricing-card__amount">
                  {yearly ? plan.price.yearly : plan.price.monthly}
                </span>
                <span className="pricing-card__period">/mo</span>
              </div>

              <ul className="pricing-card__features">
                {plan.features.map((f) => (
                  <li key={f} className="pricing-card__feature">
                    <span className="pricing-card__check">✓</span>
                    {f}
                  </li>
                ))}
              </ul>

              <button
                onClick={() => openWhatsAppModal(`Hi ReelHub! I'm interested in purchasing the ${plan.name} plan (${yearly ? 'Yearly' : 'Monthly'}).`)}
                className={`btn ${plan.highlight ? 'btn-gold' : 'btn-primary'} pricing-card__cta`}
                id={`${plan.id}-cta`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>

        <p className="pricing__note" data-aos="fade-up" data-aos-delay="200">
          All plans include a 7-day satisfaction guarantee. Not happy? We make it right.
        </p>
      </div>
    </section>
  )
}
