import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import HowItWorks from './components/HowItWorks'
import Features from './components/Features'
import Portfolio from './components/Portfolio'
import Testimonials from './components/Testimonials'
import CTA from './components/CTA'
import Footer from './components/Footer'
import LoadingScreen from './components/LoadingScreen'
import { WhatsAppProvider } from './context/WhatsAppContext'
import WhatsAppModal from './components/WhatsAppModal'

export default function App() {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false)
  const [isExiting, setIsExiting] = useState(false)
  const [showLoadingScreen, setShowLoadingScreen] = useState(true)

  // 1. Wait for video to load (or failsafe timeout), then start exit animation
  useEffect(() => {
    if (isVideoLoaded) {
      setIsExiting(true)
      
      const timer = setTimeout(() => {
        setShowLoadingScreen(false)
        
        // Initialize AOS after loading screen is gone
        if (window.AOS) {
          window.AOS.init({
            duration: 700,
            easing: 'ease-out-cubic',
            once: true,
            offset: 80,
            delay: 0,
          })
        }
      }, 500) // matches CSS transition time
      
      return () => clearTimeout(timer)
    }
  }, [isVideoLoaded])

  // 2. Failsafe: if video takes longer than 4 seconds, just show the site anyway
  useEffect(() => {
    const failsafe = setTimeout(() => {
      if (!isVideoLoaded) {
        setIsVideoLoaded(true)
      }
    }, 4000)
    return () => clearTimeout(failsafe)
  }, [isVideoLoaded])

  return (
    <WhatsAppProvider>
      {showLoadingScreen && <LoadingScreen isExiting={isExiting} />}
      
      {/* Render content immediately behind loading screen so video can buffer */}
      <Navbar />
      <main>
        <Hero onVideoLoaded={() => setIsVideoLoaded(true)} />
        <Services />
        <HowItWorks />
        <Features />
        <Portfolio />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
      <WhatsAppModal />
    </WhatsAppProvider>
  )
}

