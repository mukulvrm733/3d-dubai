import { useState, useEffect } from 'react'

export default function Preloader() {
  const [gone, setGone] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setGone(true), 2400)
    return () => clearTimeout(t)
  }, [])

  return (
    <div id="pl" className={gone ? 'gone' : ''}>
      <div className="pl-wordmark">AURUM</div>
      <div className="pl-line" />
      <div className="pl-sub">Dubai Premium Real Estate</div>
    </div>
  )
}
