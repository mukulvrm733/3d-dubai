import { useEffect, useRef } from 'react'

export default function ScrollProgress() {
  const ref = useRef(null)

  useEffect(() => {
    const bar = ref.current
    if (!bar) return
    const onScroll = () => {
      const pct = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight) * 100
      bar.style.width = pct + '%'
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return <div id="scroll-progress" ref={ref} />
}
