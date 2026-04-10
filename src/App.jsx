import { useEffect } from 'react'
import Preloader    from './components/Preloader'
import Cursor       from './components/Cursor'
import ScrollProgress from './components/ScrollProgress'
import SectionNav   from './components/SectionNav'
import Navbar       from './components/Navbar'
import Hero         from './components/Hero'
import Ticker       from './components/Ticker'
import WhyDubai     from './components/WhyDubai'
import Stats        from './components/Stats'
import Properties   from './components/Properties'
import Areas        from './components/Areas'
import VirtualTour  from './components/VirtualTour'
import Process      from './components/Process'
import Testimonials from './components/Testimonials'
import Contact      from './components/Contact'
import Footer       from './components/Footer'
import FloatingCTA  from './components/FloatingCTA'

export default function App() {
  // Global scroll reveal
  useEffect(() => {
    const items = document.querySelectorAll('.sr,.srl,.srr')
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('up') })
    }, { threshold: 0.1 })
    items.forEach(el => io.observe(el))
    return () => io.disconnect()
  }, [])

  return (
    <>
      <Preloader />
      <Cursor />
      <ScrollProgress />
      <SectionNav />
      <Navbar />
      <Hero />
      <Ticker />
      <WhyDubai />
      <Stats />
      <Properties />
      <Areas />
      <VirtualTour />
      <Process />
      <Testimonials />
      <Contact />
      <Footer />
      <FloatingCTA />
    </>
  )
}
