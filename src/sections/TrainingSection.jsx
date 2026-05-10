import { motion } from 'framer-motion'
import { Clock, CheckCircle, MessageCircle } from 'lucide-react'
import SectionWrapper from '../components/ui/SectionWrapper'
import SectionTitle from '../components/ui/SectionTitle'
import Badge from '../components/ui/Badge'
import { programs } from '../data/training'

export default function TrainingSection() {
  return (
    <SectionWrapper id="training">
      <SectionTitle
        label="Learn With Me"
        title="Training Programs"
        subtitle="Industry-aligned bootcamps designed to take you from beginner to job-ready developer."
      />

      <div className="grid md:grid-cols-2 gap-6">
        {programs.map((p, i) => (
          <motion.div
            key={p.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: i * 0.1 }}
            className="relative rounded-2xl p-6 flex flex-col"
            style={{
              background: 'var(--bg-card)',
              border: p.highlight ? '1px solid rgba(99,102,241,0.5)' : '1px solid var(--border)',
              boxShadow: p.highlight ? '0 0 20px rgba(99,102,241,0.15)' : 'none',
            }}>

            {p.highlight && (
              <span className="absolute top-4 right-4 text-xs font-bold px-2 py-0.5 rounded-full"
                style={{ background: 'rgba(99,102,241,0.2)', color: '#818cf8', border: '1px solid rgba(99,102,241,0.4)' }}>
                Most Popular
              </span>
            )}

            <div className="text-3xl mb-3">{p.icon}</div>
            <h3 className="text-lg font-bold mb-1" style={{ color: 'var(--text)' }}>{p.title}</h3>
            <div className="flex items-center gap-1.5 text-xs mb-4" style={{ color: 'var(--muted)' }}>
              <Clock size={12} /> {p.duration}
            </div>

            <div className="flex flex-wrap gap-1.5 mb-4">
              {p.stack.map(s => <Badge key={s} variant="accent">{s}</Badge>)}
            </div>

            <ul className="space-y-2 mb-6 flex-1">
              {p.outcomes.map((o, j) => (
                <li key={j} className="flex items-start gap-2 text-xs" style={{ color: 'var(--muted)' }}>
                  <CheckCircle size={12} className="shrink-0 mt-0.5 text-emerald-400" />{o}
                </li>
              ))}
            </ul>

            <a href="https://wa.me/919866638669?text=Hi+Rajesh%2C+I%27m+interested+in+the+training+program."
              target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-semibold text-white transition-all hover:scale-[1.02]"
              style={{ background: 'linear-gradient(135deg,#6366f1,#8b5cf6)' }}>
              <MessageCircle size={14} /> Enquire Now
            </a>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  )
}
