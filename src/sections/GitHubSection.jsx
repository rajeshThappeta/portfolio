import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import GithubIcon from "../components/ui/GithubIcon";
import SectionWrapper from "../components/ui/SectionWrapper";
import SectionTitle from "../components/ui/SectionTitle";
import { useState } from "react";

const username = "rajeshThappeta";

export default function GitHubSection() {
  const [statsError, setStatsError] = useState(false);
  const [langsError, setLangsError] = useState(false);

  return (
    <SectionWrapper id="github">
      <SectionTitle
        label="Open Source"
        title="GitHub Activity"
        subtitle="Consistent contributions across MERN, Java, and AI-powered full stack projects."
      />

      <div className="grid md:grid-cols-2 gap-6">
        {/* Stats card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl overflow-hidden"
          style={{ border: "1px solid var(--border)", background: "var(--bg-card)" }}
        >
          {!statsError ? (
            <img
              src={`https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=tokyonight&hide_border=true&bg_color=00000000&title_color=818cf8&text_color=94a3b8&icon_color=6366f1`}
              alt="GitHub Stats"
              className="w-full"
              loading="lazy"
              onError={() => setStatsError(true)}
            />
          ) : (
            <div className="p-6 text-center">
              <GithubIcon size={48} className="mx-auto mb-4 opacity-50" />
              <h3 className="font-bold mb-2" style={{ color: "var(--text)" }}>
                GitHub Stats
              </h3>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <div className="text-2xl font-bold" style={{ color: "#818cf8" }}>
                    50+
                  </div>
                  <div style={{ color: "var(--muted)" }}>Repositories</div>
                </div>
                <div>
                  <div className="text-2xl font-bold" style={{ color: "#818cf8" }}>
                    2.5k+
                  </div>
                  <div style={{ color: "var(--muted)" }}>Commits</div>
                </div>
                <div>
                  <div className="text-2xl font-bold" style={{ color: "#818cf8" }}>
                    100+
                  </div>
                  <div style={{ color: "var(--muted)" }}>Stars</div>
                </div>
                <div>
                  <div className="text-2xl font-bold" style={{ color: "#818cf8" }}>
                    15+
                  </div>
                  <div style={{ color: "var(--muted)" }}>Years</div>
                </div>
              </div>
            </div>
          )}
        </motion.div>

        {/* Top Languages */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="rounded-2xl overflow-hidden"
          style={{ border: "1px solid var(--border)", background: "var(--bg-card)" }}
        >
          {!langsError ? (
            <img
              src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&theme=tokyonight&hide_border=true&bg_color=00000000&title_color=818cf8&text_color=94a3b8`}
              alt="Top Languages"
              className="w-full"
              loading="lazy"
              onError={() => setLangsError(true)}
            />
          ) : (
            <div className="p-6">
              <h3 className="font-bold mb-4 text-center" style={{ color: "var(--text)" }}>
                Top Languages
              </h3>
              <div className="space-y-3">
                {[
                  { lang: "JavaScript", percent: 35, color: "#f7df1e" },
                  { lang: "Java", percent: 25, color: "#ed8b00" },
                  { lang: "Python", percent: 15, color: "#3776ab" },
                  { lang: "TypeScript", percent: 12, color: "#3178c6" },
                  { lang: "HTML", percent: 8, color: "#e34f26" },
                  { lang: "CSS", percent: 5, color: "#1572b6" },
                ].map(({ lang, percent, color }) => (
                  <div key={lang} className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: color }}></div>
                    <span className="flex-1 text-sm" style={{ color: "var(--text)" }}>
                      {lang}
                    </span>
                    <span className="text-sm font-mono" style={{ color: "var(--muted)" }}>
                      {percent}%
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </motion.div>
      </div>

      {/* Currently Building */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mt-6 p-5 rounded-2xl flex items-center justify-between gap-4 flex-wrap"
        style={{ background: "rgba(99,102,241,0.08)", border: "1px solid rgba(99,102,241,0.25)" }}
      >
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest mb-1" style={{ color: "#818cf8" }}>
            Currently Building
          </p>
          <p className="font-bold" style={{ color: "var(--text)" }}>
            AI-Powered Full Stack Learning Platform
          </p>
          <p className="text-sm mt-1" style={{ color: "var(--muted)" }}>
            Production-grade curriculum delivery with LLM-assisted code reviews and student progress tracking.
          </p>
        </div>
        <a
          href={`https://github.com/${username}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold text-white shrink-0 transition-all hover:scale-105"
          style={{ background: "#161b22", border: "1px solid #30363d" }}
        >
          <GithubIcon size={15} /> View GitHub
        </a>
      </motion.div>
    </SectionWrapper>
  );
}
