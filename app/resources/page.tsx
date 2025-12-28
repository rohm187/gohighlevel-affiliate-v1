
import Header from '@/components/header'
import Footer from '@/components/footer'
import ResourcesHeroSection from '@/components/resources-hero-section'
import ResourcesGridSection from '@/components/resources-grid-section'
import TrainingSection from '@/components/training-section'
import CTASection from '@/components/cta-section'

export const metadata = {
  title: 'Real Estate AI Automation Resources - Training & Templates',
  description: 'Access our comprehensive library of real estate automation resources, training materials, and proven templates to grow your business with AI.',
}

export default function ResourcesPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <ResourcesHeroSection />
      <ResourcesGridSection />
      <TrainingSection />
      <CTASection 
        title="Ready to Access All Resources?"
        description="Get instant access to our complete library of automation templates, training videos, and exclusive resources when you join today."
        buttonText="Get Full Access Now"
        variant="primary"
      />
      <Footer />
    </main>
  )
}
