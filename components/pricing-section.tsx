
"use client"

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowRight, CheckCircle, X, Crown, Zap } from 'lucide-react'
import Link from 'next/link'

const PricingSection = () => {
  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Simple, <span className="text-gradient bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">Transparent Pricing</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              No hidden fees, no surprises. Just one simple GoHighLevel subscription and you get everything.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* DIY Option */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gray-800 rounded-2xl p-8 border border-gray-700"
          >
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-300 mb-4">DIY Approach</h3>
              <p className="text-gray-400">Building everything yourself</p>
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex items-center text-red-400">
                <X className="w-5 h-5 mr-3 flex-shrink-0" />
                <span>Months of trial and error</span>
              </div>
              <div className="flex items-center text-red-400">
                <X className="w-5 h-5 mr-3 flex-shrink-0" />
                <span>$5,000+ in consultant fees</span>
              </div>
              <div className="flex items-center text-red-400">
                <X className="w-5 h-5 mr-3 flex-shrink-0" />
                <span>Lost opportunities while learning</span>
              </div>
              <div className="flex items-center text-red-400">
                <X className="w-5 h-5 mr-3 flex-shrink-0" />
                <span>No proven templates</span>
              </div>
              <div className="flex items-center text-red-400">
                <X className="w-5 h-5 mr-3 flex-shrink-0" />
                <span>No ongoing support</span>
              </div>
            </div>

            <div className="text-center mb-8">
              <div className="text-4xl font-bold text-red-400 mb-2">$8,000+</div>
              <div className="text-gray-400">Total Cost & Time Investment</div>
            </div>

            <Button disabled className="w-full bg-gray-700 text-gray-400 cursor-not-allowed">
              Not Recommended
            </Button>
          </motion.div>

          {/* Our Solution */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-blue-600 to-teal-600 rounded-2xl p-8 border-2 border-yellow-400 relative"
          >
            {/* Best Value Badge */}
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-black px-6 py-2 rounded-full font-bold text-sm">
              <Crown className="w-4 h-4 inline mr-1" />
              BEST VALUE
            </div>

            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-white mb-4">Our Complete Solution</h3>
              <p className="text-blue-100">Done-for-you system + ongoing support</p>
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex items-center text-white">
                <CheckCircle className="w-5 h-5 mr-3 flex-shrink-0 text-yellow-400" />
                <span>Complete system ready in 24 hours</span>
              </div>
              <div className="flex items-center text-white">
                <CheckCircle className="w-5 h-5 mr-3 flex-shrink-0 text-yellow-400" />
                <span>$2,997 worth of templates & training</span>
              </div>
              <div className="flex items-center text-white">
                <CheckCircle className="w-5 h-5 mr-3 flex-shrink-0 text-yellow-400" />
                <span>Start generating leads immediately</span>
              </div>
              <div className="flex items-center text-white">
                <CheckCircle className="w-5 h-5 mr-3 flex-shrink-0 text-yellow-400" />
                <span>Proven templates that convert</span>
              </div>
              <div className="flex items-center text-white">
                <CheckCircle className="w-5 h-5 mr-3 flex-shrink-0 text-yellow-400" />
                <span>30-day implementation support</span>
              </div>
              <div className="flex items-center text-white">
                <CheckCircle className="w-5 h-5 mr-3 flex-shrink-0 text-yellow-400" />
                <span>Exclusive bonuses worth $991</span>
              </div>
            </div>

            <div className="text-center mb-8">
              <div className="text-lg text-blue-200 line-through mb-2">Regular Price: $3,988</div>
              <div className="text-4xl font-bold text-yellow-400 mb-2">FREE</div>
              <div className="text-blue-100">Just your GoHighLevel subscription*</div>
            </div>

            <Button asChild className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-bold text-lg py-6">
              <Link href="#claim-offer" className="inline-flex items-center justify-center">
                <Zap className="w-5 h-5 mr-2" />
                Get Your Free Setup Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>

            <p className="text-center text-xs text-blue-200 mt-4">
              * GoHighLevel subscription starts at $97/month. Cancel anytime.
            </p>
          </motion.div>
        </div>

        {/* Money Back Guarantee */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center bg-green-900/30 rounded-2xl p-8 border border-green-700"
        >
          <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-2xl font-bold text-white mb-4">30-Day Money-Back Guarantee</h3>
          <p className="text-green-200 max-w-2xl mx-auto">
            We're so confident in our system that if you don't see results within 30 days, we'll refund your entire GoHighLevel subscription. No questions asked.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default PricingSection
