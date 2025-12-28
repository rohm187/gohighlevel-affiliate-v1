
"use client"

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowRight, Clock, Gift, Star, Zap } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import LeadCaptureForm from '@/components/lead-capture-form'

const OfferHeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 bg-gradient-to-br from-blue-900 via-blue-800 to-teal-900">
      {/* Background Pattern */}
      <div className="absolute inset-0 hero-pattern opacity-10"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Offer Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            {/* Urgency Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center bg-red-600 text-white rounded-full px-4 py-2 mb-6 animate-pulse"
            >
              <Clock className="w-4 h-4 mr-2" />
              <span className="text-sm font-bold">LIMITED TIME OFFER</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
            >
              Get Your Complete <span className="text-yellow-400">GoHighLevel AI Setup</span> Absolutely FREE
            </motion.h1>

            {/* Value Proposition */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-8 border border-white/20"
            >
              <div className="flex items-center mb-4">
                <Gift className="w-6 h-6 text-yellow-400 mr-2" />
                <span className="text-xl font-bold">Worth Over $2,997 - Yours FREE Today</span>
              </div>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <Star className="w-4 h-4 text-yellow-400 mr-3" />
                  Done-for-You GoHighLevel Templates & Snapshots
                </li>
                <li className="flex items-center">
                  <Star className="w-4 h-4 text-yellow-400 mr-3" />
                  AI Lead Qualification & Nurturing Systems
                </li>
                <li className="flex items-center">
                  <Star className="w-4 h-4 text-yellow-400 mr-3" />
                  Complete Training & Implementation Support
                </li>
                <li className="flex items-center">
                  <Star className="w-4 h-4 text-yellow-400 mr-3" />
                  Exclusive Real Estate Automation Workflows
                </li>
              </ul>
            </motion.div>

            {/* Social Proof */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="flex items-center space-x-6 mb-8"
            >
              <div className="flex items-center">
                <div className="flex -space-x-2">
                  <Image src="https://cdn.abacus.ai/images/f34026f7-c26c-48c4-b532-35d82f4caa05.png" alt="User" width={40} height={40} className="rounded-full border-2 border-white" />
                  <Image src="https://cdn.abacus.ai/images/8537e188-648a-4e01-9dee-f10c5855916d.png" alt="User" width={40} height={40} className="rounded-full border-2 border-white" />
                  <Image src="https://images.pexels.com/photos/30004360/pexels-photo-30004360/free-photo-of-professional-team-portrait-in-office-setting.jpeg" alt="User" width={40} height={40} className="rounded-full border-2 border-white object-cover" />
                </div>
                <div className="ml-3">
                  <div className="text-sm font-semibold">2,500+ Real Estate Pros</div>
                  <div className="text-xs text-gray-300">Already using this system</div>
                </div>
              </div>
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <Button asChild size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold text-lg px-8 py-6 shadow-xl">
                <Link href="#claim-offer" className="inline-flex items-center">
                  <Zap className="w-5 h-5 mr-2" />
                  Claim Your Free Setup Now
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Side - Lead Capture Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:pl-8"
            id="claim-offer"
          >
            <LeadCaptureForm 
              source="offer-page"
              title="Get Instant Access"
              description="Enter your details below and we'll send you immediate access to your free GoHighLevel setup and training materials."
              buttonText="Send Me My Free Setup"
              interests="GoHighLevel AI Automation Setup"
            />
          </motion.div>
        </div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute top-20 left-10 animate-float">
        <div className="w-4 h-4 bg-yellow-400 rounded-full opacity-60"></div>
      </div>
      <div className="absolute top-40 right-20 animate-float" style={{ animationDelay: '2s' }}>
        <div className="w-3 h-3 bg-blue-400 rounded-full opacity-60"></div>
      </div>
      <div className="absolute bottom-40 left-20 animate-float" style={{ animationDelay: '4s' }}>
        <div className="w-2 h-2 bg-teal-400 rounded-full opacity-40"></div>
      </div>
    </section>
  )
}

export default OfferHeroSection
