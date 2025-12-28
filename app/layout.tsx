
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"
import GoogleAnalytics from '@/components/google-analytics'

const inter = Inter({ subsets: ['latin'] })

export const dynamic = "force-dynamic"

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXTAUTH_URL || 'https://gohighlevelwithai.com'),
  title: {
    default: 'DAY-1 AI AUTOMATIONS - GoHighLevel AI Solutions for Real Estate',
    template: '%s | DAY-1 AI AUTOMATIONS'
  },
  description: 'Transform your real estate business with AI-powered automation through GoHighLevel. Get done-for-you templates, training, and exclusive resources to 10x your lead generation and sales.',
  keywords: ['GoHighLevel', 'real estate automation', 'AI CRM', 'lead generation', 'real estate marketing', 'sales automation'],
  authors: [{ name: 'DAY-1 AI AUTOMATIONS' }],
  creator: 'DAY-1 AI AUTOMATIONS',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    siteName: 'DAY-1 AI AUTOMATIONS',
    title: 'DAY-1 AI AUTOMATIONS - GoHighLevel AI Solutions for Real Estate',
    description: 'Transform your real estate business with AI-powered automation through GoHighLevel. Get done-for-you templates, training, and exclusive resources.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'DAY-1 AI AUTOMATIONS - GoHighLevel AI Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DAY-1 AI AUTOMATIONS - GoHighLevel AI Solutions for Real Estate',
    description: 'Transform your real estate business with AI-powered automation through GoHighLevel.',
    images: ['/og-image.png'],
  },
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        <GoogleAnalytics />
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
