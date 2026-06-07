import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { StatsSection } from "@/components/stats-section"
import { MissionSection } from "@/components/mission-section"
import { YouTubeSection } from "@/components/youtube-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <StatsSection />
      <MissionSection />
      <YouTubeSection />
      <TestimonialsSection />
      <Footer />
    </main>
  )
}
