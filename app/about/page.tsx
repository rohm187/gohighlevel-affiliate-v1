
import Header from '@/components/header'
import Footer from '@/components/footer'
import AboutHeroSection from '@/components/about-hero-section'
import StorySection from '@/components/story-section'
import MissionSection from '@/components/mission-section'
import TeamSection from '@/components/team-section'
import CTASection from '@/components/cta-section'

export const metadata = {
  title: 'About DAY-1 AI AUTOMATIONS - Real Estate AI Specialists',
  description: 'Learn about DAY-1 AI AUTOMATIONS and our mission to help real estate professionals succeed with AI-powered automation through GoHighLevel.',
}

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <AboutHeroSection />
      <StorySection />
      <MissionSection />
      <TeamSection />
      <CTASection 
        title="Ready to Partner With Us?"
        description="Join thousands of successful real estate professionals who trust DAY-1 AI AUTOMATIONS to transform their business with AI automation."
        buttonText="Start Your Journey"
        variant="secondary"
      />
      <Footer />
    </main>
  )
}
