
"use client"

import { motion } from 'framer-motion'
import { Target, Heart, Zap, Shield } from 'lucide-react'
import Image from 'next/image'

const MissionSection = () => {
  const principles = [
    {
      icon: Target,
      title: "Results-First Approach",
      description: "Every feature, template, and strategy we develop is designed with one goal: delivering measurable results for your real estate business."
    },
    {
      icon: Heart,
      title: "Client Success Obsession",
      description: "Your success is our success. We measure our impact by the growth and achievements of the agents and teams we serve."
    },
    {
      icon: Zap,
      title: "Continuous Innovation",
      description: "The real estate landscape evolves rapidly. We stay ahead of trends to ensure our clients always have a competitive advantage."
    },
    {
      icon: Shield,
      title: "Trust & Transparency",
      description: "We build lasting relationships through honest communication, reliable support, and transparent business practices."
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-teal-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              What Drives <span className="text-gradient">Us</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our mission goes beyond just providing technology. We're committed to transforming how real estate professionals operate, compete, and succeed in the digital age.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Left Side - Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/3] relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.pexels.com/photos/30004360/pexels-photo-30004360/free-photo-of-professional-team-portrait-in-office-setting.jpeg"
                alt="Professional team collaborating in modern office"
                fill
                className="object-cover"
              />
            </div>
            
            {/* Floating Stats */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -right-4 bg-white rounded-xl p-4 shadow-xl border border-gray-200"
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">98%</div>
                <div className="text-xs text-gray-500">Client Satisfaction</div>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              className="absolute -bottom-4 -left-4 bg-white rounded-xl p-4 shadow-xl border border-gray-200"
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-teal-600">24/7</div>
                <div className="text-xs text-gray-500">Support Available</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side - Mission Statement */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h3>
              <div className="prose prose-lg text-gray-600 max-w-none">
                <p className="text-xl leading-relaxed mb-6">
                  To level the playing field in real estate by providing every agent and team with access to the same powerful AI automation tools that were once exclusive to large enterprises.
                </p>
                <p className="text-lg leading-relaxed mb-6">
                  We believe that success in real estate shouldn't depend on having a massive budget or technical team. Every professional deserves access to technology that can transform their business from day one.
                </p>
                <div className="bg-gradient-to-r from-blue-600 to-teal-600 rounded-lg p-6 text-white">
                  <p className="text-lg font-medium">
                    "We're not just providing software – we're empowering real estate professionals to reclaim their time, multiply their results, and build the businesses they've always dreamed of."
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Principles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {principles?.map((principle, index) => (
            <motion.div
              key={principle.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <principle.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                {principle.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {principle.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default MissionSection
