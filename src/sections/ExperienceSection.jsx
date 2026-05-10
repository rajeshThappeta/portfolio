import { motion } from "framer-motion";
import { MapPin, Calendar } from "lucide-react";
import SectionWrapper from "../components/ui/SectionWrapper";
import SectionTitle from "../components/ui/SectionTitle";
import Badge from "../components/ui/Badge";
import { experiences } from "../data/experience";

function TimelineItem({ exp, index }) {
  const isLeft = index % 2 === 0;
  return (
    <div className={`flex gap-4 md:gap-8 items-start ${isLeft ? "md:flex-row" : "md:flex-row-reverse"}`}>
      {/* Content */}
      <motion.div
        initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.05 }}
        className="flex-1 p-5 rounded-2xl mb-2"
        style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}
      >
        <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
          <div className="flex items-center gap-3">
            {exp.logo && (
              <img
                src={exp.logo}
                alt={`${exp.company} logo`}
                className="w-12 h-12 rounded-2xl object-cover border border-white/10"
                loading="lazy"
              />
            )}
            <div>
              <h3 className="font-bold text-base" style={{ color: "var(--text)" }}>
                {exp.role}
              </h3>
              <p className="text-sm font-semibold" style={{ color: "#818cf8" }}>
                {exp.company}
              </p>
            </div>
          </div>
          <span
            className="text-xs px-2 py-0.5 rounded-full"
            style={{ background: "rgba(99,102,241,0.12)", color: "#818cf8", border: "1px solid rgba(99,102,241,0.25)" }}
          >
            {exp.type}
          </span>
        </div>
        <div className="flex flex-wrap gap-3 text-xs mb-3" style={{ color: "var(--muted)" }}>
          <span className="flex items-center gap-1">
            <Calendar size={11} />
            {exp.period}
          </span>
          <span className="flex items-center gap-1">
            <MapPin size={11} />
            {exp.location}
          </span>
        </div>
        <p className="text-xs mb-3" style={{ color: "var(--muted)" }}>
          {exp.highlight}
        </p>
        <div className="flex flex-wrap gap-1.5">
          {exp.stack.map((s) => (
            <Badge key={s}>{s}</Badge>
          ))}
        </div>
      </motion.div>

      {/* Center dot — visible on md+ */}
      <div className="hidden md:flex flex-col items-center pt-5">
        <div
          className="w-3 h-3 rounded-full border-2 shrink-0"
          style={{ background: "#6366f1", borderColor: "#818cf8", boxShadow: "0 0 8px #6366f1" }}
        />
        <div className="w-0.5 flex-1 mt-1" style={{ background: "var(--border)" }} />
      </div>

      {/* Spacer for alternating layout */}
      <div className="hidden md:block flex-1" />
    </div>
  );
}

export default function ExperienceSection() {
  return (
    <SectionWrapper id="experience">
      <SectionTitle
        label="Career Journey"
        title="Experience"
        subtitle="15+ years of training, mentoring, and building — from software engineer to full stack educator."
      />
      <div className="relative">
        {/* Center line on desktop */}
        <div
          className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2"
          style={{ background: "var(--border)" }}
        />
        <div className="flex flex-col gap-2">
          {experiences.map((exp, i) => (
            <TimelineItem key={exp.id} exp={exp} index={i} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
