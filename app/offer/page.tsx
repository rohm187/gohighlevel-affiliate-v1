
import Header from '@/components/header'
import Footer from '@/components/footer'
import OfferHeroSection from '@/components/offer-hero-section'
import OfferDetailsSection from '@/components/offer-details-section'
import BonusesSection from '@/components/bonuses-section'
import PricingSection from '@/components/pricing-section'
import FAQSection from '@/components/faq-section'
import CTASection from '@/components/cta-section'

export const metadata = {
  title: 'Exclusive GoHighLevel Offer - Free AI Automation Setup',
  description: 'Get exclusive access to done-for-you GoHighLevel templates, AI automation workflows, and expert training. Limited time offer - claim yours today!',
}

export default function OfferPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <OfferHeroSection />
      <OfferDetailsSection />
      <BonusesSection />
      <PricingSection />
      <FAQSection />
      <CTASection 
        title="Don't Miss This Limited-Time Opportunity"
        description="This exclusive offer won't last forever. Get your complete AI automation system setup today and start seeing results within 24 hours."
        buttonText="Claim Your Free Setup Now"
        variant="dark"
      />
      <Footer />
    </main>
  )
}
