import { motion } from 'framer-motion'
import SectionWrapper from '../components/ui/SectionWrapper'
import SectionTitle from '../components/ui/SectionTitle'
import { skillCategories } from '../data/skills'

export default function SkillsSection() {
  return (
    <SectionWrapper id="skills">
      <SectionTitle
        label="Tech Stack"
        title="Skills & Technologies"
        subtitle="A full spectrum of technologies across teaching, building, and AI-powered development."
      />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {skillCategories.map((cat, ci) => (
          <motion.div
            key={cat.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: ci * 0.07 }}
            className="p-5 rounded-2xl"
            style={{ background: 'var(--bg-card)', border: '1px solid var(--border)' }}>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xl">{cat.icon}</span>
              <span className="font-bold text-sm" style={{ color: 'var(--text)' }}>{cat.label}</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {cat.skills.map((skill, si) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.25, delay: ci * 0.05 + si * 0.03 }}
                  whileHover={{ scale: 1.08, y: -2 }}
                  className="px-2.5 py-1 text-xs font-medium rounded-full cursor-default transition-colors"
                  style={{ background: 'rgba(99,102,241,0.1)', color: '#a5b4fc', border: '1px solid rgba(99,102,241,0.2)' }}>
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  )
}
