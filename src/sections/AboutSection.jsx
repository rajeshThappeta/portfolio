import { motion } from "framer-motion";
import SectionWrapper from "../components/ui/SectionWrapper";
import SectionTitle from "../components/ui/SectionTitle";
import Badge from "../components/ui/Badge";

const focusAreas = [
  "RAG (Retrieval-Augmented Generation)",
  "LLM integrations",
  "Vector databases",
  "Semantic search systems",
  "AI-powered assistants",
  "Production-grade backend workflows",
];

const expertise = [
  {
    title: "RAG & AI-Powered Application Development",
    items: [
      "Retrieval-Augmented Generation systems",
      "Semantic search implementation",
      "Vector database integrations",
      "AI-powered assistants & workflows",
      "Intelligent document processing",
      "LLM-powered web applications",
    ],
  },
  {
    title: "Backend & API Engineering",
    items: [
      "Java & Spring Boot",
      "Node.js & Express.js",
      "RESTful API architecture",
      "Authentication & Authorization",
      "Database modeling",
      "Scalable backend design",
    ],
  },
  {
    title: "Modern Frontend Engineering",
    items: ["React.js", "Next.js", "Component architecture", "State management", "Modern UI engineering"],
  },
  {
    title: "Technical Mentorship & Curriculum Design",
    items: [
      "Backend-first learning systems",
      "Industry-oriented curriculum design",
      "Real-world project mentoring",
      "Corporate training programs",
      "Developer skill transformation",
    ],
  },
];

export default function AboutSection() {
  return (
    <SectionWrapper id="about">
      <SectionTitle
        label="About"
        title="AI-Powered Full Stack Engineering Mentor"
        subtitle="I help developers move beyond traditional CRUD apps and build intelligent, production-grade AI-enabled web systems."
      />

      <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-10 items-start">
        <div className="space-y-6">
          <p className="text-sm md:text-base leading-7" style={{ color: "var(--muted)" }}>
            I am an AI-powered Full Stack Engineering Mentor and Software Development Instructor with 15+ years of
            experience building developers, designing industry-ready learning systems, and integrating Generative AI
            into modern web applications.
          </p>
          <p className="text-sm md:text-base leading-7" style={{ color: "var(--muted)" }}>
            My career began as a Java backend developer working on enterprise application development using Java, Spring
            Boot, and RESTful services. Over the years, I transitioned into a specialized educator focused on helping
            students, fresh graduates, and working professionals become highly capable full stack engineers through
            real-world engineering practices and project-driven learning.
          </p>

          <div
            className="rounded-3xl border p-6"
            style={{ borderColor: "var(--border)", background: "rgba(255,255,255,0.03)" }}
          >
            <h3 className="text-base font-semibold mb-4" style={{ color: "var(--text)" }}>
              What I help developers build
            </h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {focusAreas.map((item) => (
                <div key={item} className="flex items-start gap-3 text-sm" style={{ color: "var(--muted)" }}>
                  <span className="mt-1 text-emerald-400">•</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-4">
            {expertise.map((block) => (
              <motion.div
                key={block.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45 }}
                className="rounded-3xl border p-6"
                style={{ borderColor: "var(--border)", background: "rgba(255,255,255,0.03)" }}
              >
                <h4 className="text-base font-semibold mb-3" style={{ color: "var(--text)" }}>
                  {block.title}
                </h4>
                <ul className="space-y-2 text-sm" style={{ color: "var(--muted)" }}>
                  {block.items.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-1 text-indigo-300">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div
            className="rounded-3xl border p-6"
            style={{ borderColor: "var(--border)", background: "rgba(255,255,255,0.03)" }}
          >
            <h3 className="text-base font-semibold mb-4" style={{ color: "var(--text)" }}>
              Professional Impact
            </h3>
            <ul className="space-y-3 text-sm" style={{ color: "var(--muted)" }}>
              <li>15+ years of technical mentoring and software training experience</li>
              <li>Trained and mentored hundreds of aspiring developers and professionals</li>
              <li>Delivered corporate training programs for leading organizations</li>
              <li>Helped students transition from beginners to industry-ready engineers</li>
              <li>Designed practical full stack and AI-powered development curriculums</li>
            </ul>
          </div>

          <div
            className="rounded-3xl border p-6"
            style={{ borderColor: "var(--border)", background: "rgba(255,255,255,0.03)" }}
          >
            <h3 className="text-base font-semibold mb-4" style={{ color: "var(--text)" }}>
              Current Focus (2026)
            </h3>
            <div className="flex flex-wrap gap-2">
              {[
                "RAG-Based Full Stack Applications",
                "AI-Powered Web Platforms",
                "Vector Databases & Semantic Search",
                "GenAI Integration",
                "Backend Architecture & Scalable APIs",
                "Modern React & Server-Driven Architectures",
              ].map((item) => (
                <Badge key={item}>{item}</Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
