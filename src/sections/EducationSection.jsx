import { motion } from 'framer-motion'
import { GraduationCap, Award } from 'lucide-react'
import SectionWrapper from '../components/ui/SectionWrapper'
import SectionTitle from '../components/ui/SectionTitle'

export default function EducationSection() {
  return (
    <SectionWrapper id="education">
      <SectionTitle label="Academic" title="Education" />
      <div className="max-w-lg mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="p-6 rounded-2xl flex items-start gap-5"
          style={{ background: 'var(--bg-card)', border: '1px solid var(--border)' }}>
          <div className="p-3 rounded-xl shrink-0" style={{ background: 'rgba(99,102,241,0.15)' }}>
            <GraduationCap size={24} style={{ color: '#818cf8' }} />
          </div>
          <div>
            <h3 className="font-bold text-base mb-1" style={{ color: 'var(--text)' }}>
              Master of Technology (M.Tech.)
            </h3>
            <p className="text-sm mb-3" style={{ color: 'var(--muted)' }}>Computer Engineering</p>
            <div className="flex items-center gap-2">
              <Award size={14} style={{ color: '#fbbf24' }} />
              <span className="text-sm font-semibold" style={{ color: '#fbbf24' }}>Distinction</span>
            </div>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  )
}
