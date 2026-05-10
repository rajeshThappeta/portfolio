import { Mail } from "lucide-react";
import GithubIcon from "../components/ui/GithubIcon";
import LinkedInIcon from "../components/ui/LinkedInIcon";

const quickLinks = ["About", "Experience", "Projects", "Training", "Posts", "Contact"];
const linkMap = {
  About: "#about",
  Experience: "#experience",
  Projects: "#projects",
  Training: "#training",
  Posts: "#posts",
  Contact: "#cta",
};

export default function Footer() {
  return (
    <footer className="border-t" style={{ borderColor: "var(--border)" }}>
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-12">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <span className="text-xl font-extrabold gradient-text">Rajesh T</span>
            <p className="text-sm mt-2 max-w-xs" style={{ color: "var(--muted)" }}>
              Senior Full Stack Development Instructor. Turning beginners into confident, job-ready engineers since
              2008.
            </p>
            <div className="flex gap-3 mt-4">
              <a
                href="https://github.com/rajeshThappeta"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg hover:bg-white/10 transition-colors"
                style={{ color: "var(--muted)" }}
              >
                <GithubIcon size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/rajesh-t"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg hover:bg-white/10 transition-colors"
                style={{ color: "var(--muted)" }}
              >
                <LinkedInIcon size={18} />
              </a>
              <a
                href="mailto:rajesh.t7982@gmail.com"
                className="p-2 rounded-lg hover:bg-white/10 transition-colors"
                style={{ color: "var(--muted)" }}
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <p className="text-sm font-bold mb-4" style={{ color: "var(--text)" }}>
              Quick Links
            </p>
            <ul className="space-y-2">
              {quickLinks.map((l) => (
                <li key={l}>
                  <a
                    href={linkMap[l]}
                    className="text-sm transition-colors hover:text-indigo-400"
                    style={{ color: "var(--muted)" }}
                  >
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-sm font-bold mb-4" style={{ color: "var(--text)" }}>
              Contact
            </p>
            <ul className="space-y-2 text-sm" style={{ color: "var(--muted)" }}>
              <li>
                <a
                  href="https://github.com/rajeshThappeta"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-indigo-400 transition-colors"
                >
                  github.com/rajeshThappeta
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/rajesh-t"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-indigo-400 transition-colors"
                >
                  linkedin.com/in/rajesh-t
                </a>
              </li>
              <li>
                <a href="mailto:rajesh.t7982@gmail.com" className="hover:text-indigo-400 transition-colors">
                  rajesh.t@masterscoding.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div
          className="border-t pt-6 text-center text-xs"
          style={{ borderColor: "var(--border)", color: "var(--muted)" }}
        >
          © 2026 Rajesh T. Senior Full Stack Development Instructor.
        </div>
      </div>
    </footer>
  );
}
