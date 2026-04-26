import { useEffect } from 'react'

const SECTIONS = ['hero','about','projects','why','services','faq','contact']

export default function SectionNav() {
  useEffect(() => {
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        const dot = document.querySelector(`.sm-dot[data-section="${e.target.id}"]`)
        if (dot) dot.classList.toggle('active', e.isIntersecting)
      })
    }, { threshold: 0.35 })
    SECTIONS.forEach(id => { const el = document.getElementById(id); if (el) io.observe(el) })
    return () => io.disconnect()
  }, [])

  return (
    <div className="section-marker">
      {SECTIONS.map(id => (
        <div
          key={id}
          className="sm-dot"
          data-section={id}
          title={id.charAt(0).toUpperCase() + id.slice(1)}
          onClick={() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })}
        />
      ))}
    </div>
  )
}
