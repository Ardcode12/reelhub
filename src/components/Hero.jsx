import { useState } from 'react'
import { useWhatsApp } from '../context/WhatsAppContext'
import './Hero.css'
import reelVideo from '../images/reel_home.mov'
import phoneFrame from '../images/mbframe.png'

export default function Hero() {
  const { openWhatsAppModal } = useWhatsApp()
  const [muted, setMuted] = useState(true)

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
            Shoots made on iPhone for individuals, families, corporate events &amp; promotions.
            Edits done effectively within hours and delivered to the client before the demanded time for the output.
          </p>

          <div className="hero__ctas" data-aos="fade-up" data-aos-delay="550">
            <button
              onClick={() => openWhatsAppModal("Hi ReelHub! I'm ready to get my reel started.")}
              className="btn btn-primary"
              id="hero-cta-primary"
            >
              <span>Get Your Reel</span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                <path d="M8 1l7 7-7 7M1 8h14" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round"/>
              </svg>
            </button>
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

        {/* Right Visual — Phone Mockup (desktop) */}
        <div className="hero__visual hero__visual--desktop" data-aos="fade-left" data-aos-delay="300">
          <PhoneMockup muted={muted} setMuted={setMuted} />
        </div>
      </div>

      {/* Phone Mockup — mobile (shown below content) */}
      <div className="hero__visual--mobile">
        <PhoneMockup muted={muted} setMuted={setMuted} />
      </div>

    </section>
  )
}

function PhoneMockup({ muted, setMuted }) {
  return (
    <div className="hero__phone" id="hero-reel">

      {/* Floating badges */}
      <div className="hero__badge hero__badge--1">
        <span className="hero__badge-icon">
          <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"></rect>
            <line x1="7" y1="2" x2="7" y2="22"></line>
            <line x1="17" y1="2" x2="17" y2="22"></line>
            <line x1="2" y1="12" x2="22" y2="12"></line>
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

      {/* Phone shell */}
      <div className="hero__phone-shell" style={{ width: '500px' }}>
        {/* Mute/Unmute button */}
        <button
          className={`hero__mute-btn ${muted ? 'hero__mute-btn--muted' : ''}`}
          onClick={() => setMuted(m => !m)}
          aria-label={muted ? 'Unmute video' : 'Mute video'}
          title={muted ? 'Tap to play with sound' : 'Tap to mute'}
        >
          {muted ? (
            /* Mic with X (muted) */
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="1" y1="1" x2="23" y2="23"></line>
              <path d="M9 9v3a3 3 0 0 0 5.12 2.12M15 9.34V4a3 3 0 0 0-5.94-.6"></path>
              <path d="M17 16.95A7 7 0 0 1 5 12v-2m14 0v2a7 7 0 0 1-.11 1.23"></path>
              <line x1="12" y1="19" x2="12" y2="23"></line>
              <line x1="8" y1="23" x2="16" y2="23"></line>
            </svg>
          ) : (
            /* Active mic */
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path>
              <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
              <line x1="12" y1="19" x2="12" y2="23"></line>
              <line x1="8" y1="23" x2="16" y2="23"></line>
            </svg>
          )}
        </button>

        {/* VIDEO — z-index 2, on top */}
        <video
          muted={muted}
          autoPlay
          loop
          playsInline
          className="hero__phone-video"
          style={{
            top:          '6%',
            left:         '21%',
            width:        '60%',
            height:       '89%',
            borderRadius: '34px',
          }}
        >
          <source src={reelVideo} type="video/mp4" />
        </video>

        {/* FRAME — z-index 1, below video */}
        <img
          src={phoneFrame}
          alt="Phone frame"
          className="hero__phone-frame"
        />
      </div>
    </div>
  )
}
