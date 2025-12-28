
"use client"

import { motion } from 'framer-motion'
import { BookOpen, Video, Download, Users } from 'lucide-react'
import Image from 'next/image'

const ResourcesHeroSection = () => {
  const stats = [
    { icon: BookOpen, number: "200+", label: "Templates" },
    { icon: Video, number: "50+", label: "Training Videos" },
    { icon: Download, number: "25+", label: "Done-for-You Funnels" },
    { icon: Users, number: "2,500+", label: "Active Users" }
  ]

  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden pt-16">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="https://muzeoffice.com/wp-content/uploads/2024/03/DALL%C2%B7E-2024-03-31-02.32.15-A-modern-office-space-filled-with-advanced-technology-and-artificial-intelligence-elements.-The-room-is-equipped-with-smart-screens-ergonomic-furnitu.webp"
          alt="Modern office with AI technology"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-blue-800/75 to-teal-900/90"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
          >
            Your Complete <span className="text-gradient bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">Resource Library</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-xl md:text-2xl text-gray-200 mb-12 max-w-4xl mx-auto leading-relaxed"
          >
            Access our comprehensive collection of training materials, templates, and automation resources designed specifically for real estate professionals.
          </motion.p>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
          >
            {stats?.map((stat, index) => (
              <div key={stat.label} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <div className="flex items-center justify-center mb-3">
                  <stat.icon className="w-8 h-8 text-yellow-400" />
                </div>
                <div className="text-3xl font-bold mb-1">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default ResourcesHeroSection
