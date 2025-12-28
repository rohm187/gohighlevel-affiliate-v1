
"use client"

import { motion } from 'framer-motion'
import { Zap, Target, Users, Award } from 'lucide-react'
import Image from 'next/image'

const AboutHeroSection = () => {
  const values = [
    { icon: Target, title: "Results-Driven", description: "Every solution is designed to deliver measurable results for your business." },
    { icon: Users, title: "Client-Focused", description: "Your success is our priority. We're committed to your long-term growth." },
    { icon: Zap, title: "Innovation", description: "We stay ahead of technology trends to give you a competitive advantage." },
    { icon: Award, title: "Excellence", description: "We maintain the highest standards in everything we deliver." }
  ]

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="https://thumbs.dreamstime.com/z/digital-interface-elements-overlay-office-scene-depicting-modern-smart-technology-integration-ai-futuristic-space-high-309583001.jpg"
          alt="Futuristic office with AI technology integration"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/95 via-blue-800/85 to-teal-900/95"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
            >
              Transforming Real Estate with <span className="text-gradient bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">AI Automation</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed"
            >
              At DAY-1 AI AUTOMATIONS, we empower real estate professionals with cutting-edge AI technology and proven automation systems that drive results from day one.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <div className="text-3xl font-bold text-yellow-400 mb-2">2,500+</div>
                <div className="text-gray-300">Agents Served</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <div className="text-3xl font-bold text-green-400 mb-2">$127M+</div>
                <div className="text-gray-300">Sales Generated</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side - Values */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold text-white mb-8">Our Core Values</h2>
            {values?.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className="flex items-start space-x-4 bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:bg-white/15 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <value.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{value.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AboutHeroSection
