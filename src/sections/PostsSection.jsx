import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import SectionWrapper from '../components/ui/SectionWrapper'
import SectionTitle from '../components/ui/SectionTitle'
import { posts } from '../data/posts'

const tagColors = {
  JavaScript: { bg: 'rgba(234,179,8,0.12)', color: '#fbbf24' },
  React: { bg: 'rgba(6,182,212,0.12)', color: '#22d3ee' },
  MongoDB: { bg: 'rgba(34,197,94,0.12)', color: '#4ade80' },
  AI: { bg: 'rgba(139,92,246,0.12)', color: '#c084fc' },
  Angular: { bg: 'rgba(220,38,38,0.12)', color: '#f87171' },
  Auth: { bg: 'rgba(99,102,241,0.12)', color: '#818cf8' },
  'Best Practices': { bg: 'rgba(251,146,60,0.12)', color: '#fb923c' },
}

export default function PostsSection() {
  return (
    <SectionWrapper id="posts">
      <SectionTitle
        label="Writing"
        title="Articles & Posts"
        subtitle="Technical deep-dives, AI tutorials, and backend concepts — shared on LinkedIn."
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {posts.map((p, i) => {
          const tagStyle = tagColors[p.tag] || { bg: 'rgba(99,102,241,0.12)', color: '#818cf8' }
          return (
            <motion.a
              key={p.id}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              whileHover={{ y: -4, boxShadow: '0 12px 32px rgba(0,0,0,0.3)' }}
              className="block p-5 rounded-2xl flex flex-col gap-3 group cursor-pointer"
              style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', textDecoration: 'none' }}>
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full"
                  style={{ background: tagStyle.bg, color: tagStyle.color }}>
                  {p.tag}
                </span>
                <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: 'var(--muted)' }} />
              </div>
              <h3 className="font-bold text-sm leading-snug" style={{ color: 'var(--text)' }}>{p.title}</h3>
              <p className="text-xs leading-relaxed flex-1" style={{ color: 'var(--muted)' }}>{p.description}</p>
              <span className="text-xs font-medium" style={{ color: '#818cf8' }}>Read on LinkedIn →</span>
            </motion.a>
          )
        })}
      </div>
    </SectionWrapper>
  )
}
