import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle } from "lucide-react";
import SectionWrapper from "../components/ui/SectionWrapper";
import SectionTitle from "../components/ui/SectionTitle";
import { curriculum } from "../data/stats";

export default function CurriculumSection() {
  const [active, setActive] = useState(curriculum[0].id);
  const current = curriculum.find((c) => c.id === active);

  return (
    <SectionWrapper id="curriculum">
      <SectionTitle
        label="Syllabus"
        title="Curriculum & Syllabus"
        subtitle="Explore what you'll learn — from fundamentals to production-grade AI applications."
      />

      {/* Tab Switcher */}
      <div className="flex justify-center mb-8">
        <div
          className="inline-flex rounded-xl p-1"
          style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}
        >
          {curriculum.map((c) => (
            <button
              key={c.id}
              onClick={() => setActive(c.id)}
              className="px-5 py-2 rounded-lg text-sm font-semibold transition-all duration-200"
              style={
                active === c.id
                  ? { background: "linear-gradient(135deg,#6366f1,#8b5cf6)", color: "#fff" }
                  : { color: "var(--muted)" }
              }
            >
              {c.label}
            </button>
          ))}
        </div>
      </div>

      {/* PDF Viewer */}
      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="rounded-2xl overflow-hidden text-center py-12"
          style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}
        >
          <div className="mb-4">
            <div
              className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center"
              style={{ background: "linear-gradient(135deg,#6366f1,#8b5cf6)" }}
            >
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2" style={{ color: "var(--text)" }}>
              {current.label} Curriculum
            </h3>
            <p className="text-sm mb-6" style={{ color: "var(--muted)" }}>
              Click below to view the detailed syllabus in Google Drive
            </p>
            <a
              href={current.embedUrl.replace("/preview", "/view")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white transition-all hover:scale-105"
              style={{ background: "linear-gradient(135deg,#6366f1,#8b5cf6)" }}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
              View Syllabus
            </a>
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-5 px-2">
        <p className="text-xs italic" style={{ color: "var(--muted)" }}>
          * Read-only preview. Download available on enquiry.
        </p>
        <a
          href="https://wa.me/919866638669?text=Hi+Rajesh%2C+I%27d+like+the+full+syllabus+for+the+course."
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold text-white transition-all hover:scale-105"
          style={{ background: "linear-gradient(135deg,#6366f1,#8b5cf6)" }}
        >
          <MessageCircle size={14} /> Enquire for Full Syllabus
        </a>
      </div>
    </SectionWrapper>
  );
}
