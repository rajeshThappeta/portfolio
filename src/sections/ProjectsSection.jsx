import { motion } from "framer-motion";
import { ExternalLink, Sparkles, CheckCircle } from "lucide-react";
import GithubIcon from "../components/ui/GithubIcon";
import SectionWrapper from "../components/ui/SectionWrapper";
import SectionTitle from "../components/ui/SectionTitle";
import Badge from "../components/ui/Badge";
import { projects } from "../data/projects";

export default function ProjectsSection() {
  return (
    <SectionWrapper id="projects">
      <SectionTitle
        label="Projects"
        title="Featured Applications"
        subtitle="Production-grade apps built with modern full stack architecture and AI integration."
      />

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((p, i) => (
          <motion.div
            key={p.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="rounded-2xl overflow-hidden flex flex-col"
            style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}
          >
            {/* Header */}
            <div className="p-6 pb-4">
              <div className="flex items-start justify-between gap-3 mb-3">
                <div>
                  <h3 className="text-xl font-bold mb-1" style={{ color: "var(--text)" }}>
                    {p.title}
                  </h3>
                  <p className="text-sm" style={{ color: "var(--muted)" }}>
                    {p.tagline}
                  </p>
                </div>
                <div className="flex gap-2 shrink-0">
                  <a
                    href={p.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg hover:bg-white/10 transition-colors"
                    style={{ color: "var(--muted)" }}
                  >
                    <ExternalLink size={16} />
                  </a>
                  <a
                    href={p.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg hover:bg-white/10 transition-colors"
                    style={{ color: "var(--muted)" }}
                  >
                    <GithubIcon size={16} />
                  </a>
                </div>
              </div>

              {/* Tech Badges */}
              <div className="flex flex-wrap gap-1.5 mb-4">
                {p.stack.map((s) => (
                  <Badge key={s}>{s}</Badge>
                ))}
              </div>
            </div>

            {/* AI Features */}
            <div className="px-6 pb-4">
              <p
                className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider mb-2"
                style={{ color: "#818cf8" }}
              >
                <Sparkles size={12} /> AI Features
              </p>
              <ul className="space-y-1">
                {p.aiFeatures.map((f, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs" style={{ color: "var(--muted)" }}>
                    <span className="mt-0.5 shrink-0 text-indigo-400">•</span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            {/* Core Features */}
            <div className="px-6 pb-4">
              <p className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: "var(--muted)" }}>
                Core Features
              </p>
              <ul className="space-y-1">
                {p.coreFeatures.map((f, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs" style={{ color: "var(--muted)" }}>
                    <CheckCircle size={11} className="mt-0.5 shrink-0 text-emerald-400" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            {/* Impact + CTA */}
            <div className="mt-auto px-6 pb-5 pt-3 border-t" style={{ borderColor: "var(--border)" }}>
              <p className="text-xs italic mb-3" style={{ color: "var(--muted)" }}>
                {p.impact}
              </p>
              <a
                href={p.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-white transition-all hover:scale-105"
                style={{ background: "linear-gradient(135deg,#6366f1,#8b5cf6)" }}
              >
                <ExternalLink size={12} /> Live Demo
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
