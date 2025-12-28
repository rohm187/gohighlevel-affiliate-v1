
import Header from '@/components/header'
import Footer from '@/components/footer'
import ThankYouSection from '@/components/thank-you-section'

export const metadata = {
  title: 'Thank You - Your Free GoHighLevel Setup is Coming',
  description: 'Thank you for requesting your free GoHighLevel AI automation setup. Check your email for next steps and access to your exclusive resources.',
}

export default function ThankYouPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <ThankYouSection />
      <Footer />
    </main>
  )
}
