export default function Badge({ children, variant = 'default' }) {
  const styles = {
    default: 'bg-white/5 text-slate-300 border border-white/10',
    accent: 'text-indigo-300 border border-indigo-500/30',
    green: 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20',
  }
  return (
    <span className={`inline-block px-2.5 py-0.5 text-xs font-medium rounded-full ${styles[variant]}`}
      style={variant === 'accent' ? { background: 'rgba(99,102,241,0.12)' } : {}}>
      {children}
    </span>
  )
}
