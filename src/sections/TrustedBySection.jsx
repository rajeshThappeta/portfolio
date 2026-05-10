import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import { techStrip } from '../data/skills'
import { companies } from '../data/experience'

function Marquee({ items, speed = 35 }) {
  const doubled = [...items, ...items]
  return (
    <div className="overflow-hidden relative">
      <motion.div
        className="flex gap-8 w-max"
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: speed, repeat: Infinity, ease: 'linear' }}>
        {doubled.map((item, i) => (
          <span key={i} className="text-sm font-medium whitespace-nowrap px-4 py-1.5 rounded-full"
            style={{ background: 'rgba(255,255,255,0.05)', color: 'var(--muted)', border: '1px solid var(--border)' }}>
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  )
}

export default function TrustedBySection() {
  return (
    <section className="py-14 border-y" style={{ borderColor: 'var(--border)' }}>
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <p className="text-center text-xs font-semibold tracking-widest uppercase mb-6" style={{ color: 'var(--muted)' }}>
          Trained Developers At
        </p>
        <Marquee items={companies} speed={30} />

        <div className="my-8 border-t" style={{ borderColor: 'var(--border)' }} />

        <p className="text-center text-xs font-semibold tracking-widest uppercase mb-6" style={{ color: 'var(--muted)' }}>
          Technologies Taught
        </p>
        <Marquee items={techStrip} speed={25} />

        <div className="flex justify-center mt-8">
          <a href="https://www.linkedin.com/in/rajesh-t" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium transition-colors hover:text-indigo-400"
            style={{ color: 'var(--muted)' }}>
            View LinkedIn Profile <ExternalLink size={13} />
          </a>
        </div>
      </div>
    </section>
  )
}
