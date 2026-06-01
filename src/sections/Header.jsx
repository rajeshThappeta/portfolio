import { useState, useEffect } from "react";
import { Moon, Sun, Menu, X, MessageCircle, Download } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Training", href: "#training" },
  { label: "Recommendations", href: "#recommendations" },
  { label: "GitHub", href: "#github" },
  { label: "Posts", href: "#posts" },
  { label: "Contact", href: "#cta" },
];

export default function Header() {
  const { dark, toggle } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const headerStyle = scrolled
    ? {
        background: dark ? "rgba(10,10,15,0.85)" : "rgba(248,250,252,0.85)",
        backdropFilter: "blur(16px)",
        borderBottom: "1px solid var(--border)",
        boxShadow: "0 4px 24px rgba(0,0,0,0.3)",
      }
    : { background: "transparent" };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300" style={headerStyle}>
        <div className="max-w-7xl mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <a href="#hero" className="flex flex-col leading-none group">
            <span className="font-bold text-lg gradient-text">Rajesh T</span>
            <span className="text-[10px] tracking-widest uppercase" style={{ color: "var(--muted)" }}>
              AI Integration Engineer · RAG & Agentic AI · Full Stack Educator
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="text-sm font-medium transition-colors duration-200 hover:text-indigo-400"
                style={{ color: "var(--muted)" }}
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* Right CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={toggle}
              className="p-2 rounded-lg transition-colors hover:bg-white/10"
              style={{ color: "var(--muted)" }}
              aria-label="Toggle theme"
            >
              {dark ? <Sun size={16} /> : <Moon size={16} />}
            </button>
          </div>

          {/* Mobile hamburger */}
          <button className="lg:hidden p-2" style={{ color: "var(--text)" }} onClick={() => setMenuOpen((o) => !o)}>
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden" onClick={() => setMenuOpen(false)}>
          <div className="absolute inset-0" style={{ background: "rgba(0,0,0,0.6)" }} />
          <div
            className="absolute top-0 right-0 h-full w-72 p-6 flex flex-col gap-4"
            style={{ background: dark ? "#0f0f1a" : "#fff", borderLeft: "1px solid var(--border)" }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-4">
              <span className="font-bold gradient-text">Rajesh T</span>
              <button onClick={() => setMenuOpen(false)} style={{ color: "var(--muted)" }}>
                <X size={18} />
              </button>
            </div>
            {navLinks.map((l) => (
              <a
                key={l.label}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className="py-2 text-sm font-medium border-b transition-colors hover:text-indigo-400"
                style={{ borderColor: "var(--border)", color: "var(--text)" }}
              >
                {l.label}
              </a>
            ))}
            <div className="flex gap-3 mt-4">
              <button
                onClick={toggle}
                className="flex-1 px-3 py-2 rounded-lg hover:bg-white/10"
                style={{ color: "var(--muted)", border: "1px solid var(--border)" }}
              >
                {dark ? <Sun size={14} /> : <Moon size={14} />}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
