import { motion } from "framer-motion";
import { MessageCircle, Mail } from "lucide-react";
import LinkedInIcon from "../components/ui/LinkedInIcon";

export default function CTASection() {
  return (
    <section id="cta" className="relative overflow-hidden py-20 px-4">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(135deg, rgba(99,102,241,0.15) 0%, rgba(139,92,246,0.1) 50%, rgba(6,182,212,0.08) 100%)",
        }}
      />
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(99,102,241,0.5), transparent)" }}
      />

      <div className="max-w-3xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4 leading-tight" style={{ color: "var(--text)" }}>
            Want to learn Full Stack Development
            <br />
            or build <span className="gradient-text">AI-powered applications?</span>
          </h2>
          <p className="text-base md:text-lg mb-10" style={{ color: "var(--muted)" }}>
            Whether you&apos;re a beginner, a working professional, or a company looking for training —
            <br className="hidden md:block" />
            let&apos;s build something great together.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="https://wa.me/919949825640?text=Hi+Rajesh%2C+I+saw+your+portfolio+and+would+like+to+connect."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white bg-emerald-500 hover:bg-emerald-400 transition-all hover:scale-105"
            >
              <MessageCircle size={17} /> WhatsApp Me
            </a>
            <a
              href="https://www.linkedin.com/in/rajesh-t"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white transition-all hover:scale-105"
              style={{ background: "#0077b5" }}
            >
              <LinkedInIcon size={17} /> LinkedIn
            </a>
            <a
              href="mailto:rajesh.t7982@gmail.com"
              className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all hover:scale-105 hover:bg-white/10"
              style={{ border: "1px solid var(--border)", color: "var(--text)" }}
              title="Primary: rajesh.t7982@gmail.com | Secondary: rajesh.t@masterscoding.com"
            >
              <Mail size={17} /> Send an Email
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
