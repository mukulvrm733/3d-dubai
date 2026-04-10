import { useEffect } from 'react'
import { STATS } from '../data'

export default function Stats() {
  useEffect(() => {
    const els = document.querySelectorAll('.stat-n[data-cnt]')
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (!e.isIntersecting) return
        const el = e.target
        const target = +el.dataset.cnt
        const pfx = el.dataset.pfx || ''
        const sfx = el.dataset.sfx || ''
        let cur = 0
        const inc = target / 60
        const t = setInterval(() => {
          cur = Math.min(cur + inc, target)
          el.textContent = pfx + Math.floor(cur).toLocaleString() + sfx
          if (cur >= target) clearInterval(t)
        }, 25)
        io.unobserve(el)
      })
    }, { threshold: 0.5 })
    els.forEach(el => io.observe(el))
    return () => io.disconnect()
  }, [])

  return (
    <div id="stats">
      {STATS.map((s, i) => (
        <div key={s.label} className="stat-block sr" data-delay={i > 0 ? String(i) : undefined}>
          <div className="stat-n" data-cnt={s.count} data-pfx={s.prefix || ''} data-sfx={s.suffix}>
            {(s.prefix || '') + s.count.toLocaleString() + s.suffix}
          </div>
          <div className="stat-l">{s.label}</div>
        </div>
      ))}
    </div>
  )
}
