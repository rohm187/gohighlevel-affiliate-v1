
"use client"

import { motion } from 'framer-motion'
import { Gift, Sparkles, Crown, Rocket } from 'lucide-react'
import Image from 'next/image'

const BonusesSection = () => {
  const bonuses = [
    {
      icon: Crown,
      title: "BONUS #1: VIP Setup Call",
      description: "Get a personal 1-on-1 setup call with our team to ensure your system is configured perfectly for maximum results.",
      value: "$497",
      highlight: "First 50 Only",
      image: "https://withport.com/wp-content/uploads/2024/12/A-professional-female-call-center-agent-wearing-headphone.jpg"
    },
    {
      icon: Rocket,
      title: "BONUS #2: Advanced Automation Scripts",
      description: "Get access to our most advanced automation scripts that top-performing agents use to automate their entire follow-up process.",
      value: "$297",
      highlight: "Exclusive",
      image: "https://cdn.abacus.ai/images/7fc0bff2-0bc5-4fd1-8271-15923e046e22.jpg"
    },
    {
      icon: Sparkles,
      title: "BONUS #3: 90-Day Action Plan",
      description: "Our proven 90-day implementation roadmap that shows you exactly what to do each day to maximize your results.",
      value: "$197",
      highlight: "New",
      image: "https://powerslides.com/wp-content/uploads/2019/02/Lead-Gen-Marketing-Funnel-2.jpg"
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center bg-purple-600 text-white rounded-full px-4 py-2 mb-6">
              <Gift className="w-4 h-4 mr-2" />
              <span className="text-sm font-bold">EXCLUSIVE BONUSES</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              But Wait, There's <span className="text-gradient bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">More!</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Act now and you'll also receive these exclusive bonuses that will accelerate your success even faster.
            </p>
          </motion.div>
        </div>

        <div className="space-y-12">
          {bonuses?.map((bonus, index) => (
            <motion.div
              key={bonus.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12`}
            >
              {/* Image Side */}
              <div className="flex-1 lg:max-w-lg">
                <div className="relative">
                  <div className="aspect-[4/3] relative rounded-2xl overflow-hidden shadow-2xl">
                    <Image
                      src={bonus.image}
                      alt={bonus.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  
                  {/* Highlight Badge */}
                  <div className="absolute -top-4 -right-4 bg-gradient-to-r from-red-500 to-pink-500 text-white px-4 py-2 rounded-full font-bold text-sm shadow-lg animate-pulse">
                    {bonus.highlight}
                  </div>
                </div>
              </div>

              {/* Content Side */}
              <div className="flex-1 lg:max-w-lg">
                <div className="bg-white rounded-2xl p-8 shadow-xl border-2 border-purple-100">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center mr-4">
                      <bonus.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-2xl font-bold text-purple-600">VALUE: {bonus.value}</div>
                  </div>
                  
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                    {bonus.title}
                  </h3>
                  
                  <p className="text-gray-600 text-lg leading-relaxed mb-6">
                    {bonus.description}
                  </p>

                  <div className="inline-flex items-center bg-green-100 text-green-700 px-4 py-2 rounded-full font-semibold">
                    <Gift className="w-4 h-4 mr-2" />
                    FREE with Your Setup
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Total Bonus Value */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-white text-center"
        >
          <h3 className="text-3xl font-bold mb-4">Total Bonus Value: $991</h3>
          <div className="text-5xl font-bold mb-4 text-yellow-300">Yours FREE Today!</div>
          <p className="text-xl text-purple-100">
            These bonuses are only available for a limited time. Don't miss out!
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default BonusesSection
