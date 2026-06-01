import { motion } from "framer-motion";
import { Download, MessageCircle, BookOpen } from "lucide-react";
import CountUp from "../components/animations/CountUp";
import { stats } from "../data/stats";

const badges = [
  { label: "AI-Powered Full Stack Trainer", pos: "top-4 -right-6" },
  { label: "Java Full Stack", pos: "top-1/3 -left-8" },
  { label: "AI-Powered Apps", pos: "bottom-8 -right-4" },
  { label: "15+ Years Mentoring", pos: "bottom-4 -left-6" },
];

export default function HeroSection() {
  return (
    <section id="hero" className="min-h-screen flex items-center relative overflow-hidden pt-16">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full opacity-20 blur-3xl"
          style={{ background: "radial-gradient(circle, #6366f1, transparent)" }}
        />
        <div
          className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full opacity-15 blur-3xl"
          style={{ background: "radial-gradient(circle, #8b5cf6, transparent)" }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 w-full py-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="flex justify-center relative order-2 lg:order-1"
          >
            <div className="relative w-72 h-72 md:w-80 md:h-80">
              {/* Glow ring */}
              <div
                className="absolute inset-0 rounded-full opacity-60 blur-xl"
                style={{ background: "linear-gradient(135deg, #6366f1, #8b5cf6)" }}
              />
              <div
                className="absolute inset-1 rounded-full p-1.5"
                style={{ background: "linear-gradient(135deg, #ffffff, #e5e7eb)" }}
              >
                <div className="relative w-full h-full rounded-full overflow-hidden bg-slate-950">
                  <img
                    src="/recommendations/profile-best.PNG"
                    alt="Rajesh T"
                    className="absolute inset-0 w-full h-full object-cover"
                    style={{ objectPosition: "50% 15%" }}
                  />
                </div>
              </div>

              {/* Floating Badges */}
              {badges.map((b, i) => (
                <motion.div
                  key={b.label}
                  initial={{ opacity: 0, scale: 0.7 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4 + i * 0.15, duration: 0.4 }}
                  className={`absolute ${b.pos} px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap shadow-lg`}
                  style={{
                    background: "rgba(99,102,241,0.9)",
                    color: "#fff",
                    backdropFilter: "blur(8px)",
                    border: "1px solid rgba(255,255,255,0.2)",
                  }}
                >
                  {b.label}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right — Content */}
          <div className="order-1 lg:order-2 text-center lg:text-left">
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-4"
              style={{ color: "var(--text)" }}
            >
              AI Integration Engineer · RAG & Agentic AI · <span className="gradient-text">Full Stack Educator</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl font-medium mb-3"
              style={{ color: "var(--muted)" }}
            >
              Helping developers build intelligent web systems with RAG, LLMs, vector search, and scalable backend
              architecture.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-sm md:text-base mb-8 max-w-lg mx-auto lg:mx-0"
              style={{ color: "var(--muted)" }}
            >
              Senior mentor with 15+ years of experience in enterprise backend development and AI-integrated full stack
              training. I help beginners and professionals become job-ready through real-world AI-powered projects.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-2 justify-center lg:justify-start mb-8"
            >
              {["RAG", "LLM Integration", "Vector Search", "AI Assistants", "Production APIs"].map((item) => (
                <span
                  key={item}
                  className="px-3 py-1 text-xs font-semibold rounded-full"
                  style={{
                    background: "rgba(255,255,255,0.06)",
                    color: "var(--muted)",
                    border: "1px solid var(--border)",
                  }}
                >
                  {item}
                </span>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-3 justify-center lg:justify-start mb-10"
            >
              <a
                href="https://wa.me/919949825640?text=Hi+Rajesh%2C+I+saw+your+portfolio+and+would+like+to+connect."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm text-white bg-emerald-500 hover:bg-emerald-400 transition-all hover:scale-105"
              >
                <MessageCircle size={15} /> WhatsApp Me
              </a>
              <a
                href="#training"
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm transition-all hover:scale-105 hover:bg-white/10"
                style={{ border: "1px solid var(--border)", color: "var(--text)" }}
              >
                <BookOpen size={15} /> View Training Programs
              </a>
            </motion.div>

            {/* Stats Row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap gap-6 justify-center lg:justify-start"
            >
              {stats.map((s, i) => (
                <div key={i} className="text-center lg:text-left">
                  <div className="text-3xl font-extrabold gradient-text">
                    <CountUp target={s.value} suffix={s.suffix} display={s.display} />
                  </div>
                  <div className="text-xs mt-0.5" style={{ color: "var(--muted)" }}>
                    {s.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
