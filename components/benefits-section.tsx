
"use client"

import { motion } from 'framer-motion'
import { TrendingUp, Clock, DollarSign, Users, Shield, Zap } from 'lucide-react'
import Image from 'next/image'

const BenefitsSection = () => {
  const benefits = [
    {
      icon: TrendingUp,
      title: "300% More Qualified Leads",
      description: "Our AI qualification system identifies hot prospects automatically, so you spend time only with serious buyers and sellers.",
      stat: "300%",
      statLabel: "Lead Quality Increase"
    },
    {
      icon: Clock,
      title: "Save 15+ Hours Per Week",
      description: "Automate follow-ups, lead nurturing, and appointment booking while you focus on what matters most - closing deals.",
      stat: "15hrs",
      statLabel: "Time Saved Weekly"
    },
    {
      icon: DollarSign,
      title: "Increase Revenue by 250%",
      description: "Never lose a lead again with our 24/7 automated systems that work even while you sleep.",
      stat: "250%",
      statLabel: "Revenue Increase"
    },
    {
      icon: Shield,
      title: "Built-in Compliance Features",
      description: "Stay compliant with real estate regulations with automated record keeping and built-in CAN-SPAM compliance.",
      stat: "100%",
      statLabel: "Compliant"
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="mb-8">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                The Results Speak for <span className="text-gradient">Themselves</span>
              </h2>
              <p className="text-xl text-gray-600">
                Join thousands of top-performing real estate professionals who are already using our AI automation system to dominate their markets.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {benefits?.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-teal-600 rounded-lg flex items-center justify-center mr-4">
                      <benefit.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-gray-900">{benefit.stat}</div>
                      <div className="text-sm text-gray-500">{benefit.statLabel}</div>
                    </div>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Side - Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative">
              <div className="aspect-[4/3] relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://assets.fastexpert.com/wordpress/wp-content/uploads/2025/08/iStock-2156492745-1024x576.jpg"
                  alt="Real estate agent using AI automation tools"
                  fill
                  className="object-cover"
                />
              </div>
              
              {/* Floating Stats Cards */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 bg-white rounded-xl p-4 shadow-xl border border-gray-200"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <TrendingUp className="w-4 h-4 text-green-600" />
                  </div>
                  <div>
                    <div className="text-lg font-bold text-gray-900">+47%</div>
                    <div className="text-xs text-gray-500">This Month</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-4 -left-4 bg-white rounded-xl p-4 shadow-xl border border-gray-200"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <Users className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <div className="text-lg font-bold text-gray-900">2,847</div>
                    <div className="text-xs text-gray-500">Active Leads</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default BenefitsSection
