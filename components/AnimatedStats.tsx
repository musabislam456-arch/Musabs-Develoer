"use client"
import { useInView } from 'react-intersection-observer'
import { useEffect, useState } from 'react'

function useCount(end: number, inView: boolean) {
  const [n, setN] = useState(0)
  useEffect(() => {
    if (!inView) return
    let start = 0
    const dur = 1200
    const step = Math.max(1, Math.floor(end / (dur / 16)))
    const id = setInterval(() => {
      start += step
      if (start >= end) {
        setN(end)
        clearInterval(id)
      } else setN(start)
    }, 16)
    return () => clearInterval(id)
  }, [end, inView])
  return n
}

export default function AnimatedStats() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 })
  const projects = useCount(48, inView)
  const ai = useCount(12, inView)
  const responsive = useCount(120, inView)
  const sat = useCount(98, inView)

  return (
    <section id="stats" className="py-12">
      <div ref={ref} className="container mx-auto px-6 grid grid-cols-2 sm:grid-cols-4 gap-6">
        <div className="glass p-4 rounded-lg text-center">
          <div className="text-2xl font-bold">{projects}+</div>
          <div className="text-sm text-slate-600">Projects Built</div>
        </div>
        <div className="glass p-4 rounded-lg text-center">
          <div className="text-2xl font-bold">{ai}+</div>
          <div className="text-sm text-slate-600">AI Solutions</div>
        </div>
        <div className="glass p-4 rounded-lg text-center">
          <div className="text-2xl font-bold">{responsive}+</div>
          <div className="text-sm text-slate-600">Responsive Designs</div>
        </div>
        <div className="glass p-4 rounded-lg text-center">
          <div className="text-2xl font-bold">{sat}%</div>
          <div className="text-sm text-slate-600">Client Satisfaction</div>
        </div>
      </div>
    </section>
  )
}
