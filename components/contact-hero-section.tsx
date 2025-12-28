
"use client"

import { motion } from 'framer-motion'
import { MessageSquare, Phone, Mail, Clock } from 'lucide-react'
import Image from 'next/image'

const ContactHeroSection = () => {
  const contactMethods = [
    {
      icon: MessageSquare,
      title: "Live Chat",
      description: "Get instant answers to your questions",
      availability: "24/7 Available"
    },
    {
      icon: Phone,
      title: "Phone Support",
      description: "Speak directly with our experts",
      availability: "Mon-Fri 9AM-6PM EST"
    },
    {
      icon: Mail,
      title: "Email Support",
      description: "Detailed responses within 4 hours",
      availability: "24/7 Monitored"
    },
    {
      icon: Clock,
      title: "Scheduled Call",
      description: "Book a personal consultation",
      availability: "Available by Appointment"
    }
  ]

  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden pt-16">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="https://withport.com/wp-content/uploads/2024/12/A-professional-female-call-center-agent-wearing-headphone.jpg"
          alt="Professional customer support representative"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/95 via-blue-800/85 to-teal-900/95"></div>
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
            We're Here to <span className="text-gradient bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">Help</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-xl md:text-2xl text-gray-200 mb-12 max-w-4xl mx-auto leading-relaxed"
          >
            Have questions about our AI automation system? Need technical support? Want to explore partnership opportunities? Our team is ready to assist you.
          </motion.p>

          {/* Contact Methods Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {contactMethods?.map((method, index) => (
              <motion.div
                key={method.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1, duration: 0.6 }}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <method.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold mb-2">{method.title}</h3>
                <p className="text-gray-300 text-sm mb-2 leading-relaxed">{method.description}</p>
                <div className="text-xs text-yellow-300 font-medium">{method.availability}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Response Time Promise */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="mt-12 bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 max-w-2xl mx-auto"
          >
            <h3 className="text-xl font-bold mb-3">Our Promise to You</h3>
            <p className="text-gray-200 leading-relaxed">
              We guarantee a response within 4 hours during business hours. For urgent technical issues, our priority support team is available 24/7.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default ContactHeroSection
