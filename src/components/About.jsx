import { useEffect, useRef } from 'react'

export default function About() {
  const imgRef = useRef(null)
  const contentRef = useRef(null)

  useEffect(() => {
    const els = [imgRef.current, contentRef.current].filter(Boolean)
    els.forEach((el, i) => {
      el.style.opacity = '0'
      el.style.transform = i === 0 ? 'translateX(-28px)' : 'translateX(28px)'
      el.style.transition = `opacity .8s ease ${i * .15}s, transform .8s ease ${i * .15}s`
      const io = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = '1'
          el.style.transform = 'none'
          io.disconnect()
        }
      }, { threshold: 0.1 })
      io.observe(el)
    })
  }, [])

  return (
    <section id="about">
      <div className="about-wrap">
        <div className="about-img-col" ref={imgRef}>
          <div className="about-img-frame">
            <div
              className="about-img-bg"
              style={{ backgroundImage: "url('https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=900&q=85')" }}
            />
            <div className="about-img-overlay" />
            <div className="about-img-badge">
              <span className="about-badge-num">10+</span>
              <span className="about-badge-txt">Years of expertise</span>
            </div>
          </div>
        </div>

        <div className="about-content-col" ref={contentRef}>
          <div className="sh center">
            <div className="sh-eye">About Us</div>
            <h2 className="sh-h">Infinite <em>Imperial</em> Ventures</h2>
            <p className="sh-p" style={{ marginTop: '1rem' }}>A Clear Approach to Dubai Real Estate</p>
          </div>

          <p className="intro-desc" style={{ textAlign: 'center', margin: '0 0 2rem' }}>
            We offer a curated selection of apartments, villas, and townhouses across Dubai,
            suited for both end-users and investors. Whether you are exploring your first property
            or expanding your portfolio, we help you identify the right options based on your needs
            and priorities. Our role is to guide you through each step of the process, so you can
            move forward with clarity and confidence.
          </p>

          <div className="intro-quote-wrap" style={{ margin: 0, maxWidth: '100%', textAlign: 'center' }}>
            <p className="intro-quote-text">
              "Dubai's real estate market offers a wide range of opportunities, but navigating them is not always straightforward.
              At Infinite Imperial Ventures, our focus is to bring clarity to that process. We work closely with clients to help
              them understand their options, identify what truly fits their goals, and make decisions with confidence."
            </p>
            <div className="intro-founder" style={{ justifyContent: 'center' }}>
              <div className="intro-founder-av">AS</div>
              <div>
                <div className="intro-founder-name">Arjun Sharma</div>
                <div className="intro-founder-role">Founder &amp; CEO, Infinite Imperial Ventures</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
