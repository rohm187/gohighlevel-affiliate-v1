
import Header from '@/components/header'
import Footer from '@/components/footer'
import ContactHeroSection from '@/components/contact-hero-section'
import ContactFormSection from '@/components/contact-form-section'
import ContactInfoSection from '@/components/contact-info-section'

export const metadata = {
  title: 'Contact DAY-1 AI AUTOMATIONS - Get Support & Ask Questions',
  description: 'Get in touch with our team for questions about GoHighLevel AI automation, technical support, or partnership opportunities.',
}

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <ContactHeroSection />
      <ContactFormSection />
      <ContactInfoSection />
      <Footer />
    </main>
  )
}
