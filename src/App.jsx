import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import HowItWorks from './components/HowItWorks'
import Pricing from './components/Pricing'
import Testimonials from './components/Testimonials'
import CTA from './components/CTA'
import Footer from './components/Footer'
import LoadingScreen from './components/LoadingScreen'

export default function App() {
  const [loading, setLoading] = useState(true)
  const [isExiting, setIsExiting] = useState(false)

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsExiting(true)
      
      setTimeout(() => {
        setLoading(false)
        
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
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      {loading && <LoadingScreen isExiting={isExiting} />}
      {!loading && (
        <>
          <Navbar />
          <main>
            <Hero />
            <Services />
            <HowItWorks />
            <Pricing />
            <Testimonials />
            <CTA />
          </main>
          <Footer />
        </>
      )}
    </>
  )
}
