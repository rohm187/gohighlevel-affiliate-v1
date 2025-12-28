
"use client"

import { motion } from 'framer-motion'
import { CheckCircle, Mail, Calendar, Download, ArrowRight, Clock } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import Image from 'next/image'

const ThankYouSection = () => {
  const nextSteps = [
    {
      icon: Mail,
      title: "Check Your Email",
      description: "We've sent your GoHighLevel signup link and getting started guide to your inbox.",
      timing: "Within 2 minutes"
    },
    {
      icon: Download,
      title: "Access Your Resources",
      description: "Download your free templates, training videos, and automation workflows.",
      timing: "Immediately available"
    },
    {
      icon: Calendar,
      title: "Schedule Your Setup Call",
      description: "Book a free 30-minute call with our team to optimize your automation system.",
      timing: "Available now"
    }
  ]

  const bonusReminders = [
    "Done-for-You GoHighLevel Templates ($997 value)",
    "AI Lead Qualification System ($497 value)", 
    "Step-by-Step Video Training ($297 value)",
    "30-Day Implementation Support ($497 value)",
    "Exclusive Real Estate Workflows ($297 value)",
    "Private Community Access ($197 value)"
  ]

  const affiliateLink = process.env.NEXT_PUBLIC_GOHIGHLEVEL_AFFILIATE_LINK || "https://www.gohighlevel.com/?fp_ref=day-1-ai-automations87"

  return (
    <section className="min-h-screen flex items-center justify-center pt-16 pb-8">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          {/* Success Message */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, type: "spring", bounce: 0.3 }}
            className="text-center mb-12"
          >
            <div className="w-24 h-24 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl">
              <CheckCircle className="w-12 h-12 text-white" />
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              🎉 You're <span className="text-gradient">All Set!</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Thank you for joining DAY-1 AI AUTOMATIONS! Your complete GoHighLevel AI automation setup is being prepared and will be delivered within the next 24 hours.
            </p>

            {/* Primary CTA - GoHighLevel Signup */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8"
            >
              <Button asChild size="lg" className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold text-xl px-12 py-8 shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300">
                <a href={affiliateLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center">
                  🚀 Start Your GoHighLevel Account Now
                  <ArrowRight className="ml-3 w-6 h-6" />
                </a>
              </Button>
              <p className="text-sm text-gray-500 mt-3">
                ✨ Get your bonuses instantly after signup
              </p>
            </motion.div>
          </motion.div>

          {/* What Happens Next */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="bg-white rounded-2xl shadow-xl p-8 mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              What Happens <span className="text-gradient">Next?</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {nextSteps?.map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.2 }}
                  className="text-center group"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {step.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {step.description}
                  </p>

                  <div className="inline-flex items-center bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                    <Clock className="w-3 h-3 mr-2" />
                    {step.timing}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Bonus Reminder */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-white mb-12"
          >
            <h2 className="text-3xl font-bold mb-6 text-center">
              🎁 Your FREE Bonus Package ($2,287 Value)
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {bonusReminders?.map((bonus, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  className="flex items-center bg-white/10 rounded-lg p-3"
                >
                  <CheckCircle className="w-5 h-5 text-yellow-300 mr-3 flex-shrink-0" />
                  <span>{bonus}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="text-center bg-gray-50 rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              While You Wait...
            </h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Explore our resource library and learn more about how successful agents are using AI automation to transform their businesses.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700">
                <Link href="/resources">
                  Explore Resources
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              
              <Button asChild variant="outline" size="lg">
                <Link href="/about">
                  Learn About Our Team
                </Link>
              </Button>
            </div>
          </motion.div>

          {/* Contact Support */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="mt-12 text-center"
          >
            <p className="text-gray-600 mb-4">
              Have questions or need immediate assistance?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:support@gohighlevelwithai.com"
                className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold"
              >
                <Mail className="w-4 h-4 mr-2" />
                Email Support
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold"
              >
                Contact Us
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ThankYouSection
