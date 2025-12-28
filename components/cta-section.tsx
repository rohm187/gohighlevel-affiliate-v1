
"use client"

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowRight, Zap, TrendingUp } from 'lucide-react'
import Link from 'next/link'

interface CTASectionProps {
  title?: string
  description?: string
  buttonText?: string
  buttonLink?: string
  variant?: 'primary' | 'secondary' | 'dark'
}

const CTASection = ({ 
  title = "Ready to Transform Your Real Estate Business?",
  description = "Get instant access to our exclusive GoHighLevel setup, done-for-you templates, and AI automation training - completely free when you sign up today.",
  buttonText = "Get Started Free Now",
  buttonLink = "/offer",
  variant = 'primary'
}: CTASectionProps) => {
  const bgClass = variant === 'dark' ? 'bg-gray-900' : variant === 'secondary' ? 'bg-gray-50' : 'gradient-bg'
  const textClass = variant === 'dark' || variant === 'primary' ? 'text-white' : 'text-gray-900'
  const buttonClass = variant === 'primary' || variant === 'dark' ? 'bg-white text-blue-600 hover:bg-gray-100' : 'bg-gradient-to-r from-blue-600 to-teal-600 text-white hover:from-blue-700 hover:to-teal-700'

  return (
    <section className={`py-16 ${bgClass} ${variant === 'primary' ? 'hero-pattern' : ''}`}>
      <div className="container mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex justify-center mb-6">
            <div className="flex items-center space-x-2 mb-4">
              <Zap className={`w-8 h-8 ${textClass === 'text-white' ? 'text-yellow-400' : 'text-blue-600'}`} />
              <TrendingUp className={`w-8 h-8 ${textClass === 'text-white' ? 'text-green-400' : 'text-teal-600'}`} />
            </div>
          </div>
          
          <h2 className={`text-3xl md:text-4xl font-bold ${textClass} mb-6`}>
            {title}
          </h2>
          
          <p className={`text-xl ${textClass === 'text-white' ? 'text-gray-200' : 'text-gray-600'} mb-8 max-w-3xl mx-auto`}>
            {description}
          </p>
          
          <Button asChild size="lg" className={`text-lg px-8 py-6 ${buttonClass} shadow-lg hover:shadow-xl transition-all duration-300`}>
            <Link href={buttonLink} className="inline-flex items-center">
              {buttonText}
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
          
          <div className={`flex items-center justify-center mt-6 space-x-6 text-sm ${textClass === 'text-white' ? 'text-gray-300' : 'text-gray-500'}`}>
            <div className="flex items-center">
              <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              No Credit Card Required
            </div>
            <div className="flex items-center">
              <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Instant Setup
            </div>
            <div className="flex items-center">
              <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              30-Day Money Back Guarantee
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default CTASection
