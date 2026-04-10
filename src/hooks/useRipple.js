export function useRipple() {
  return (e) => {
    const btn = e.currentTarget
    const r = document.createElement('span')
    r.className = 'ripple'
    const rect = btn.getBoundingClientRect()
    const size = Math.max(rect.width, rect.height)
    r.style.cssText = `width:${size}px;height:${size}px;left:${e.clientX - rect.left - size / 2}px;top:${e.clientY - rect.top - size / 2}px`
    btn.appendChild(r)
    setTimeout(() => r.remove(), 700)
  }
}
