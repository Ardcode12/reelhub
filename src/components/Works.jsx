import { useRef, useState, useEffect, useCallback } from 'react'
import { useWhatsApp } from '../context/WhatsAppContext'
import wrk1 from '../images/wrk1.mp4'
import wrk2 from '../images/wrk2.mp4'
import wrk3 from '../images/wrk3.mp4'
import wrk4 from '../images/wrk4.mp4'
import wrk5 from '../images/wrk5.mp4'
import wrk6 from '../images/wrk6.mp4'
import './Works.css'

const reels = [
  { id: 'rw1', label: 'WEDDING',     msg: "Hi ReelHub! I'm interested in a Wedding reel.",     src: wrk1 },
  { id: 'rw2', label: 'MOVIE PROMO', msg: "Hi ReelHub! I'm interested in a Movie Promo reel.", src: wrk2 },
  { id: 'rw3', label: 'CINEMATIC',   msg: "Hi ReelHub! I'm interested in a Cinematic reel.",   src: wrk3 },
  { id: 'rw4', label: 'CORPORATE',   msg: "Hi ReelHub! I'm interested in a Corporate reel.",   src: wrk4 },
  { id: 'rw5', label: 'BRAND',       msg: "Hi ReelHub! I'm interested in a Brand reel.",       src: wrk5 },
  { id: 'rw6', label: 'BIRTHDAY',    msg: "Hi ReelHub! I'm interested in a Birthday reel.",    src: wrk6 },
]

const AUTO_SCROLL_INTERVAL = 2800

/* ─── Full-Screen Lightbox ─────────────────────────────── */
function Lightbox({ reel, onClose, onBook }) {
  const videoRef = useRef(null)
  const [muted, setMuted] = useState(false)

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose])

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [])

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted
      setMuted(videoRef.current.muted)
    }
  }

  return (
    <div className="works-lb" onClick={onClose}>
      <div className="works-lb__card" onClick={e => e.stopPropagation()}>

        {/* Close */}
        <button className="works-lb__close" onClick={onClose} aria-label="Close">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </button>

        {/* CSS-only phone shell — no PNG frame */}
        <div className="works-lb__phone">
          {/* Notch */}
          <div className="works-lb__notch" />
          {/* Video fills the shell */}
          <video
            ref={videoRef}
            src={reel.src}
            autoPlay
            loop
            playsInline
            muted={false}
            className="works-lb__video"
          />
          {/* Mute button */}
          <button className="works-lb__mute" onClick={toggleMute} aria-label="Toggle mute">
            {muted ? (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="1" y1="1" x2="23" y2="23"/>
                <path d="M9 9v3a3 3 0 0 0 5.12 2.12M15 9.34V4a3 3 0 0 0-5.94-.6"/>
                <path d="M17 16.95A7 7 0 0 1 5 12v-2m14 0v2a7 7 0 0 1-.11 1.23"/>
                <line x1="12" y1="19" x2="12" y2="23"/><line x1="8" y1="23" x2="16" y2="23"/>
              </svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
                <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"/>
              </svg>
            )}
          </button>
        </div>

        {/* Label + CTA */}
        <div className="works-lb__meta">
          <span className="works-lb__cat eyebrow">{reel.label}</span>
          <h3 className="works-lb__heading display-font">Want a reel like this?</h3>
          <button
            className="btn btn-primary works-lb__cta"
            onClick={() => { onBook(reel.msg); onClose() }}
          >
            <span>Book This Style</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </button>
        </div>

      </div>
    </div>
  )
}

/* ─── Main Section ─────────────────────────────────────── */
export default function Works() {
  const { openWhatsAppModal } = useWhatsApp()
  const trackRef = useRef(null)
  const itemRefs = useRef([])
  const timerRef = useRef(null)

  const [activeIdx, setActiveIdx] = useState(0)
  const [lightbox,  setLightbox]  = useState(null)
  const [paused,    setPaused]    = useState(false)

  const scrollToIdx = useCallback((idx) => {
    const track = trackRef.current
    const item  = itemRefs.current[idx]
    if (!track || !item) return
    const itemCenter  = item.offsetLeft + item.offsetWidth / 2
    const trackCenter = track.clientWidth / 2
    track.scrollTo({ left: itemCenter - trackCenter, behavior: 'smooth' })
  }, [])

  useEffect(() => {
    if (paused || lightbox) return
    timerRef.current = setInterval(() => {
      setActiveIdx(prev => {
        const next = (prev + 1) % reels.length
        scrollToIdx(next)
        return next
      })
    }, AUTO_SCROLL_INTERVAL)
    return () => clearInterval(timerRef.current)
  }, [paused, lightbox, scrollToIdx])

  const goTo = (idx) => {
    setActiveIdx(idx)
    scrollToIdx(idx)
    clearInterval(timerRef.current)
    setPaused(false)
  }

  const arrowScroll = (dir) => {
    goTo((activeIdx + dir + reels.length) % reels.length)
  }

  return (
    <section
      className="works"
      id="works"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="works__glow works__glow--1" />
      <div className="works__glow works__glow--2" />

      <div className="container">

        {/* Header */}
        <div className="works__header" data-aos="fade-up">
          <span className="eyebrow">Our Work</span>
          <h2 className="works__title display-font">
            Shot on iPhone.<br />
            <span className="gold-text">Cut Live.</span>
          </h2>
          <p className="works__subtitle">
            Tap any reel to watch it full-screen with sound.
          </p>
        </div>

        {/* Track wrapper */}
        <div className="works__wrapper" data-aos="fade-up" data-aos-delay="150">

          <button className="works__arrow works__arrow--left" onClick={() => arrowScroll(-1)} aria-label="Previous">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l-6-6 6-6"/>
            </svg>
          </button>

          <div className="works__track" ref={trackRef}>
            {reels.map((reel, i) => (
              <div
                key={reel.id}
                ref={el => { itemRefs.current[i] = el }}
                className={'works__item' + (i === activeIdx ? ' works__item--active' : '')}
                onClick={() => setLightbox(reel)}
                style={{ animationDelay: (i * 80) + 'ms' }}
              >
                {/* CSS-only phone — no PNG image */}
                <div className="works__phone">
                  <div className="works__phone-notch" />
                  <video
                    src={reel.src}
                    className="works__phone-video"
                    autoPlay
                    muted
                    loop
                    playsInline
                  />
                  {/* Hover play hint */}
                  <div className="works__tap-hint">
                    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
                  </div>
                </div>
                <p className="works__label">{reel.label}</p>
              </div>
            ))}
          </div>

          <button className="works__arrow works__arrow--right" onClick={() => arrowScroll(1)} aria-label="Next">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 18l6-6-6-6"/>
            </svg>
          </button>
        </div>

        {/* Dot indicators */}
        <div className="works__dots" data-aos="fade-up">
          {reels.map((r, i) => (
            <button
              key={r.id}
              className={'works__dot' + (i === activeIdx ? ' works__dot--active' : '')}
              onClick={() => goTo(i)}
              aria-label={r.label}
            />
          ))}
        </div>

        <div className="works__fade works__fade--left" />
        <div className="works__fade works__fade--right" />

      </div>

      {/* CTA */}
      <div className="works__cta-row" data-aos="fade-up">
        <p className="works__cta-hint">✦ Every reel above started with a single message</p>
        <button
          className="btn btn-primary"
          id="works-book-btn"
          onClick={() => openWhatsAppModal("Hi ReelHub! I saw your work and I'm ready to book my own reel.")}
        >
          <span>Book Your Reel</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </button>
      </div>

      {lightbox && (
        <Lightbox
          reel={lightbox}
          onClose={() => setLightbox(null)}
          onBook={openWhatsAppModal}
        />
      )}
    </section>
  )
}
