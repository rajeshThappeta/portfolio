export default function SectionWrapper({ id, children, className = '' }) {
  return (
    <section
      id={id}
      style={{ scrollMarginTop: '80px' }}
      className={`section-padding max-w-7xl mx-auto w-full ${className}`}
    >
      {children}
    </section>
  )
}
