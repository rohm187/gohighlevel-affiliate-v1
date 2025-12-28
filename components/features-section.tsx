
"use client"

import { motion } from 'framer-motion'
import { Bot, Zap, Target, Clock, BarChart3, Users, MessageSquare, Calendar } from 'lucide-react'
import Image from 'next/image'

const FeaturesSection = () => {
  const features = [
    {
      icon: Bot,
      title: "AI-Powered Lead Qualification",
      description: "Automatically qualify leads 24/7 with intelligent chatbots and scoring systems that identify hot prospects instantly.",
      color: "text-blue-600"
    },
    {
      icon: Zap,
      title: "Automated Follow-Up Sequences",
      description: "Never miss a lead again with smart email and SMS sequences that nurture prospects through your sales funnel.",
      color: "text-orange-600"
    },
    {
      icon: Target,
      title: "Smart Lead Generation",
      description: "Advanced targeting and lead magnets that attract high-quality prospects actively looking for properties.",
      color: "text-green-600"
    },
    {
      icon: Calendar,
      title: "Automated Appointment Booking",
      description: "Let prospects book their own appointments while you focus on closing deals and building relationships.",
      color: "text-purple-600"
    },
    {
      icon: BarChart3,
      title: "Real-Time Analytics Dashboard",
      description: "Track your ROI, lead sources, and conversion rates with comprehensive reporting and insights.",
      color: "text-teal-600"
    },
    {
      icon: MessageSquare,
      title: "Multi-Channel Communication",
      description: "Manage all your leads from one place - emails, texts, calls, and social media messages unified.",
      color: "text-pink-600"
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Everything You Need to <span className="text-gradient">Dominate Real Estate</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive GoHighLevel setup includes all the tools and automation you need to scale your real estate business to 7-figures and beyond.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features?.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group border border-gray-100 hover:border-gray-200"
            >
              <div className={`w-14 h-14 rounded-lg bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className={`w-7 h-7 ${feature.color}`} />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Dashboard Preview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-blue-600 to-teal-600 p-6">
              <h3 className="text-2xl font-bold text-white mb-2">Your GoHighLevel Dashboard</h3>
              <p className="text-blue-100">Everything you need in one powerful platform</p>
            </div>
            <div className="aspect-video relative bg-gray-100">
              <Image
                src="https://cdn.abacus.ai/images/694415e9-3716-42af-b066-fc9badbcc2c1.png"
                alt="GoHighLevel CRM Dashboard Interface"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default FeaturesSection
