
"use client"

import { motion } from 'framer-motion'
import { CheckCircle, Download, Video, Users, FileText, Headphones, Zap, Target } from 'lucide-react'
import Image from 'next/image'

const OfferDetailsSection = () => {
  const inclusions = [
    {
      icon: Download,
      title: "Done-for-You GoHighLevel Snapshots",
      description: "Complete real estate automation workflows, landing pages, and funnels that you can import with one click.",
      value: "$997"
    },
    {
      icon: Video,
      title: "Step-by-Step Video Training",
      description: "Over 10 hours of detailed training videos showing you exactly how to set up and optimize your automation system.",
      value: "$497"
    },
    {
      icon: FileText,
      title: "Real Estate Templates Library",
      description: "200+ proven email templates, SMS sequences, and follow-up campaigns specifically for real estate professionals.",
      value: "$297"
    },
    {
      icon: Users,
      title: "Exclusive Community Access",
      description: "Join our private community of successful agents sharing strategies, tips, and support.",
      value: "$197"
    },
    {
      icon: Headphones,
      title: "30-Day Implementation Support",
      description: "Get direct access to our team for questions and troubleshooting during your first month.",
      value: "$497"
    },
    {
      icon: Target,
      title: "Lead Magnet Templates",
      description: "Proven lead magnets that attract high-quality prospects and build your email list automatically.",
      value: "$297"
    }
  ]

  const urgencyFeatures = [
    "Limited to first 100 new GoHighLevel sign-ups",
    "Bonuses expire in 48 hours",
    "One-time opportunity - won't be repeated",
    "Personal setup call included (first 50 only)"
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto">
        {/* What's Included */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Here's Everything You Get <span className="text-gradient">Absolutely FREE</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              When you sign up for GoHighLevel through our exclusive link, you'll receive this complete automation system worth over $2,997 at no additional cost.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {inclusions?.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-all duration-300 group border-2 border-transparent hover:border-blue-200"
            >
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-2xl font-bold text-green-600 mb-2">VALUE: {item.value}</div>
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center group-hover:text-blue-600 transition-colors">
                {item.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed text-center">
                {item.description}
              </p>

              <div className="mt-6 text-center">
                <div className="inline-flex items-center text-green-600 font-semibold">
                  <CheckCircle className="w-4 h-4 mr-2" />
                  Included FREE
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Total Value */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-blue-600 to-teal-600 rounded-2xl p-8 text-white text-center mb-16"
        >
          <h3 className="text-3xl font-bold mb-4">Total Value: $2,997</h3>
          <div className="text-6xl font-bold mb-4 text-yellow-400">Your Price: $0</div>
          <p className="text-xl text-blue-100">
            Just sign up for GoHighLevel through our exclusive link and get everything instantly!
          </p>
        </motion.div>

        {/* Urgency Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-red-50 border-2 border-red-200 rounded-2xl p-8"
        >
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-red-700 mb-4">⚠️ Important Limitations</h3>
            <p className="text-lg text-red-600">
              This exclusive offer is strictly limited and won't be available forever.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {urgencyFeatures?.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center bg-white rounded-lg p-4 border border-red-200"
              >
                <Zap className="w-6 h-6 text-red-600 mr-3 flex-shrink-0" />
                <span className="text-red-700 font-medium">{feature}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default OfferDetailsSection
