import { useEffect, useRef } from 'react'
import './animatedBackground.css'

const AnimatedBackground = () => {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if(!el) return
    if(window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    let raf
    const orbs = Array.from(el.querySelectorAll('.orb'))
    const base = Date.now()
    const animate = () => {
      const t = (Date.now() - base) / 1000
      orbs.forEach((node, i) => {
        const speed = 0.08 + i * 0.03
        const x = Math.sin(t * speed + i) * 10
        const y = Math.cos(t * speed + i) * 8
        node.style.transform = `translate3d(${x}px, ${y}px, 0)`
      })
      raf = requestAnimationFrame(animate)
    }
    raf = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(raf)
  }, [])

  return (
    <div className="ab-container" aria-hidden ref={ref}>
      <div className="gradient-layer" />
      <span className="orb orb-a" />
      <span className="orb orb-b" />
      <span className="orb orb-c" />
    </div>
  )
}

export default AnimatedBackground
