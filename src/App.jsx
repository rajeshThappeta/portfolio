import { ThemeProvider } from "./context/ThemeContext";
import Header from "./sections/Header";
import HeroSection from "./sections/HeroSection";
import TrustedBySection from "./sections/TrustedBySection";
import AboutSection from "./sections/AboutSection";
import ExperienceSection from "./sections/ExperienceSection";
import ProjectsSection from "./sections/ProjectsSection";
import TrainingSection from "./sections/TrainingSection";
import CurriculumSection from "./sections/CurriculumSection";
import RecommendationsSection from "./sections/RecommendationsSection";
import SkillsSection from "./sections/SkillsSection";
import GitHubSection from "./sections/GitHubSection";
import PostsSection from "./sections/PostsSection";
import EducationSection from "./sections/EducationSection";
import CTASection from "./sections/CTASection";
import Footer from "./sections/Footer";
import FloatingWhatsApp from "./sections/FloatingWhatsApp";

export default function App() {
  return (
    <ThemeProvider>
      <div style={{ minHeight: "100vh", background: "var(--bg)" }}>
        <Header />
        <main>
          <HeroSection />
          <AboutSection />
          <TrustedBySection />
          <ExperienceSection />
          <ProjectsSection />
          <TrainingSection />
          <CurriculumSection />
          <RecommendationsSection />
          <SkillsSection />
          <GitHubSection />
          <PostsSection />
          <EducationSection />
          <CTASection />
        </main>
        <Footer />
        <FloatingWhatsApp />
      </div>
    </ThemeProvider>
  );
}
