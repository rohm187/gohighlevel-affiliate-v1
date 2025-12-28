
"use client"

import { motion } from 'framer-motion'
import { TrendingUp, Users, Lightbulb, Rocket } from 'lucide-react'
import Image from 'next/image'

const StorySection = () => {
  const milestones = [
    {
      icon: Lightbulb,
      year: "2023",
      title: "The Vision",
      description: "Recognizing the need for AI automation in real estate, we set out to democratize access to enterprise-level marketing technology."
    },
    {
      icon: Rocket,
      year: "2024",
      title: "Launch & Growth", 
      description: "Launched our first GoHighLevel automation packages and quickly grew to serve over 500 real estate professionals."
    },
    {
      icon: TrendingUp,
      year: "2024",
      title: "Proven Results",
      description: "Our clients achieved an average of 300% increase in qualified leads and $127M+ in total sales generated."
    },
    {
      icon: Users,
      year: "Present",
      title: "Community Impact",
      description: "Now serving 2,500+ agents across North America with comprehensive AI automation solutions and ongoing support."
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Story Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              Our <span className="text-gradient">Story</span>
            </h2>
            
            <div className="prose prose-lg text-gray-600 max-w-none mb-8">
              <p className="text-xl leading-relaxed mb-6">
                DAY-1 AI AUTOMATIONS was born from a simple observation: real estate professionals were struggling to keep up with leads, follow-ups, and the demands of modern digital marketing.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                While enterprise companies had access to sophisticated automation platforms, individual agents and small teams were left behind, relying on outdated methods and losing opportunities to better-equipped competitors.
              </p>
              <p className="text-lg leading-relaxed">
                We changed that by making enterprise-level AI automation accessible to every real estate professional, regardless of their technical expertise or budget.
              </p>
            </div>

            <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
              <h3 className="text-xl font-bold text-blue-900 mb-3">Our Mission</h3>
              <p className="text-blue-700 leading-relaxed">
                To democratize AI-powered automation for real estate professionals, giving every agent the tools they need to compete and win in today's digital marketplace.
              </p>
            </div>
          </motion.div>

          {/* Right Side - Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-8 bottom-8 w-0.5 bg-gradient-to-b from-blue-600 to-teal-600"></div>
              
              <div className="space-y-12">
                {milestones?.map((milestone, index) => (
                  <motion.div
                    key={milestone.year}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-6 relative"
                  >
                    {/* Timeline Dot */}
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-teal-600 rounded-full flex items-center justify-center relative z-10 shadow-lg">
                      <milestone.icon className="w-8 h-8 text-white" />
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1 bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors duration-300">
                      <div className="text-2xl font-bold text-blue-600 mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{milestone.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{milestone.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default StorySection
