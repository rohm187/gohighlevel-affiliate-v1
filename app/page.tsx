
import Header from '@/components/header'
import Footer from '@/components/footer'
import CTASection from '@/components/cta-section'
import HeroSection from '@/components/hero-section'
import FeaturesSection from '@/components/features-section'
import BenefitsSection from '@/components/benefits-section'
import TestimonialsSection from '@/components/testimonials-section'
import HowItWorksSection from '@/components/how-it-works-section'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <BenefitsSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </main>
  )
}
