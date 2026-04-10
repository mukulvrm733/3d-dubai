import { useEffect, useRef } from 'react'
import { PROCESS_STEPS, CHECKLIST } from '../data'

export default function Process() {
  const stepsRef = useRef(null)

  useEffect(() => {
    const el = stepsRef.current
    if (!el) return
    const io = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) { el.classList.add('line-in'); io.disconnect() }
    }, { threshold: 0.15 })
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <section id="process" style={{background:'var(--ink2)'}}>
      <div className="sh center sr" style={{marginBottom:'5rem'}}>
        <div className="sh-eye">How It Works</div>
        <h2 className="sh-h">From <em>America</em> to Dubai<br />in 4 Steps</h2>
        <p className="sh-p">No flights required. Our end-to-end process is built for busy US investors who want results, not red tape.</p>
      </div>
      <div className="proc-grid">
        <div className="proc-steps" ref={stepsRef}>
          {PROCESS_STEPS.map((step, i) => (
            <div key={step.num} className="proc-step sr" data-delay={String(i + 1)}>
              <div className="ps-num">{step.num}</div>
              <div className="ps-txt">
                <div className="ps-t">{step.title}</div>
                <div className="ps-d">{step.desc}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="proc-card srr">
          <div className="pc-title">What We Handle For You</div>
          <div className="pc-sub">Everything. You literally just wire funds and receive monthly income.</div>
          <div className="pc-list">
            {CHECKLIST.map(item => (
              <div key={item.text} className="pc-item">
                <div className="pc-ico">{item.ico}</div> {item.text}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
