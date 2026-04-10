import { useEffect, useRef } from 'react'

export default function Cursor() {
  const dotRef = useRef(null)
  const ringRef = useRef(null)

  useEffect(() => {
    const dot = dotRef.current
    const ring = ringRef.current
    if (!dot || !ring) return

    const move = (e) => {
      dot.style.left = e.clientX + 'px'
      dot.style.top  = e.clientY + 'px'
      ring.style.left = e.clientX + 'px'
      ring.style.top  = e.clientY + 'px'
    }
    document.addEventListener('mousemove', move)

    const SEL = 'a,button,.fc,.nh,.b,.tc,.proc-step,.ci-item,.tf,.fs,.fcta'
    const add = () => document.body.classList.add('hovering')
    const rem = () => document.body.classList.remove('hovering')

    // Use event delegation so dynamically rendered elements are covered
    document.addEventListener('mouseover', (e) => {
      if (e.target.closest(SEL)) add()
    })
    document.addEventListener('mouseout', (e) => {
      if (e.target.closest(SEL)) rem()
    })

    return () => document.removeEventListener('mousemove', move)
  }, [])

  return (
    <>
      <div id="cur"  ref={dotRef} />
      <div id="cur2" ref={ringRef} />
    </>
  )
}
