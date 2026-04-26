import { useEffect, useState } from 'react'
import ScrollProgress from './components/ScrollProgress'
import SectionNav   from './components/SectionNav'
import Navbar       from './components/Navbar'
import Hero         from './components/Hero'
import Ticker       from './components/Ticker'
import About        from './components/About'
import Projects     from './components/Projects'
import WhyUs        from './components/WhyUs'
import Service      from './components/Service'
import FAQ          from './components/FAQ'
import Contact      from './components/Contact'
import Footer       from './components/Footer'
import FloatingCTA  from './components/FloatingCTA'
import LeadFormModal from './components/LeadFormModal'

export default function App() {
  const [leadOpen, setLeadOpen] = useState(false)

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
      <ScrollProgress />
      <SectionNav />
      <Navbar onOpenLeadForm={() => setLeadOpen(true)} />
      <Hero />
      <Ticker />
      <About />
      <Projects onOpenLeadForm={() => setLeadOpen(true)} />
      <WhyUs />
      <Service />
      <FAQ />
      <Contact />
      <Footer />
      <FloatingCTA />
      <LeadFormModal open={leadOpen} onClose={() => setLeadOpen(false)} />
    </>
  )
}
