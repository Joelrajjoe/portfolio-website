import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import SkillsSection from "@/components/skills-section"
import ProjectsSection from "@/components/projects-section"
import ExperienceSection from "@/components/experience-section"
import CertificationsSection from "@/components/certifications-section"
import AchievementsSection from "@/components/achievements-section"
import VolunteerSection from "@/components/volunteer-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"

export default function PortfolioPage() {
  return (
    <main className="relative min-h-screen bg-background overflow-hidden selection:bg-primary/30 selection:text-primary-foreground">
      {/* Background decoration */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-accent/5 rounded-full blur-[120px]" />
      </div>

      <Navbar />

      <div className="relative z-10 flex flex-col gap-24 md:gap-32 pb-20">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <CertificationsSection />
        <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12">
          <AchievementsSection />
          <VolunteerSection />
        </div>
        <ContactSection />
        <Footer />
      </div>
    </main>
  )
}
