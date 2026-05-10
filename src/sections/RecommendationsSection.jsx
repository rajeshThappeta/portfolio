import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import SectionWrapper from '../components/ui/SectionWrapper'
import SectionTitle from '../components/ui/SectionTitle'
import { recommendations } from '../data/stats'

function Lightbox({ src, onClose }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: 'rgba(0,0,0,0.9)' }}
      onClick={onClose}>
      <motion.div initial={{ scale: 0.85 }} animate={{ scale: 1 }} exit={{ scale: 0.85 }}
        className="relative max-w-3xl w-full" onClick={e => e.stopPropagation()}>
        <img src={src} alt="Recommendation" className="w-full rounded-2xl" />
        <button onClick={onClose}
          className="absolute top-3 right-3 p-2 rounded-full text-white"
          style={{ background: 'rgba(0,0,0,0.6)' }}>
          <X size={18} />
        </button>
      </motion.div>
    </motion.div>
  )
}

export default function RecommendationsSection() {
  const [lightbox, setLightbox] = useState(null)
  const [start, setStart] = useState(0)
  const visible = 3
  const canPrev = start > 0
  const canNext = start + visible < recommendations.length

  return (
    <SectionWrapper id="recommendations">
      <SectionTitle
        label="What People Say"
        title="Recommendations"
        subtitle="Feedback from professionals trained at Cognizant, Wipro, and leading engineering colleges."
      />

      {/* Featured — first rec */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative mb-10 rounded-2xl overflow-hidden cursor-pointer max-w-2xl mx-auto"
        style={{ border: '1px solid rgba(99,102,241,0.4)', boxShadow: '0 0 30px rgba(99,102,241,0.1)' }}
        onClick={() => setLightbox(recommendations[0].src)}>
        <div className="absolute top-4 left-4 z-10 p-2 rounded-full" style={{ background: 'rgba(99,102,241,0.8)' }}>
          <Quote size={16} className="text-white" />
        </div>
        <img src={recommendations[0].src} alt="Featured Recommendation" className="w-full object-cover" loading="lazy" />
        <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center"
          style={{ background: 'rgba(99,102,241,0.1)' }}>
          <span className="text-white text-sm font-medium">Click to view full size</span>
        </div>
      </motion.div>

      {/* Carousel */}
      <div className="relative">
        <div className="flex gap-4 overflow-hidden">
          <AnimatePresence mode="popLayout">
            {recommendations.slice(start, start + visible).map((r, i) => (
              <motion.div
                key={r.id}
                layout
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className="flex-1 min-w-0 rounded-2xl overflow-hidden cursor-pointer group"
                style={{ border: '1px solid var(--border)' }}
                onClick={() => setLightbox(r.src)}>
                <div className="relative overflow-hidden">
                  <img src={r.src} alt={`Recommendation ${r.id}`} className="w-full object-cover transition-transform duration-300 group-hover:scale-105" loading="lazy" />
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center"
                    style={{ background: 'rgba(0,0,0,0.4)' }}>
                    <span className="text-white text-xs font-medium">View</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Nav Arrows */}
        <div className="flex justify-center gap-3 mt-6">
          <button onClick={() => setStart(s => Math.max(0, s - 1))} disabled={!canPrev}
            className="p-2 rounded-full transition-all disabled:opacity-30"
            style={{ border: '1px solid var(--border)', color: 'var(--text)' }}>
            <ChevronLeft size={18} />
          </button>
          <button onClick={() => setStart(s => Math.min(recommendations.length - visible, s + 1))} disabled={!canNext}
            className="p-2 rounded-full transition-all disabled:opacity-30"
            style={{ border: '1px solid var(--border)', color: 'var(--text)' }}>
            <ChevronRight size={18} />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {lightbox && <Lightbox src={lightbox} onClose={() => setLightbox(null)} />}
      </AnimatePresence>
    </SectionWrapper>
  )
}
