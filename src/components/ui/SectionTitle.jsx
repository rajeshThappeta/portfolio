import { motion } from 'framer-motion'

export default function SectionTitle({ label, title, subtitle }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="mb-12 text-center"
    >
      {label && (
        <span className="inline-block px-3 py-1 text-xs font-semibold tracking-widest uppercase rounded-full mb-3"
          style={{ background: 'rgba(99,102,241,0.15)', color: '#818cf8', border: '1px solid rgba(99,102,241,0.3)' }}>
          {label}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl font-bold" style={{ color: 'var(--text)' }}>
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-base max-w-2xl mx-auto" style={{ color: 'var(--muted)' }}>
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}
