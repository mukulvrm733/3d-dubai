import { useState, useEffect } from 'react'

export default function Preloader() {
  const [gone, setGone] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setGone(true), 2400)
    return () => clearTimeout(t)
  }, [])

  return (
    <div id="pl" className={gone ? 'gone' : ''}>
      <img src="/img-1.webp" alt="Infinite Imperial Ventures" className="pl-logo-img" />
      <div className="pl-line" />
      <div className="pl-sub">Dubai Real Estate</div>
    </div>
  )
}
