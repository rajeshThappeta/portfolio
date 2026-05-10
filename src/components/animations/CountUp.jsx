import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

export default function CountUp({ target, suffix = '', display }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (!inView) return
    if (display) { setCount(target); return }
    const step = Math.ceil(target / 60)
    let current = 0
    const timer = setInterval(() => {
      current = Math.min(current + step, target)
      setCount(current)
      if (current >= target) clearInterval(timer)
    }, 20)
    return () => clearInterval(timer)
  }, [inView, target, display])

  return (
    <span ref={ref}>
      {display || `${count.toLocaleString()}${suffix}`}
    </span>
  )
}
