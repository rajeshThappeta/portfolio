export default function Button({ children, variant = 'primary', href, onClick, className = '', target }) {
  const base = 'inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm transition-all duration-200 cursor-pointer'
  const variants = {
    primary: 'text-white hover:opacity-90 hover:scale-[1.02]',
    ghost: 'border hover:bg-white/5',
    green: 'bg-emerald-500 hover:bg-emerald-400 text-white hover:scale-[1.02]',
    outlined: 'border hover:bg-white/5',
  }
  const style = variant === 'primary'
    ? { background: 'linear-gradient(135deg, #6366f1, #8b5cf6)' }
    : variant === 'ghost' || variant === 'outlined'
    ? { borderColor: 'var(--border)', color: 'var(--text)' }
    : {}

  const cls = `${base} ${variants[variant]} ${className}`

  if (href) {
    return <a href={href} target={target} rel={target === '_blank' ? 'noopener noreferrer' : undefined} className={cls} style={style}>{children}</a>
  }
  return <button onClick={onClick} className={cls} style={style}>{children}</button>
}
