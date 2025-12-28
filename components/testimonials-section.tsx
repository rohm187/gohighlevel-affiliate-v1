
"use client"

import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'
import Image from 'next/image'

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Marcus Johnson",
      title: "Real Estate Broker",
      company: "Johnson Realty Group",
      image: "https://cdn.abacus.ai/images/f34026f7-c26c-48c4-b532-35d82f4caa05.png",
      rating: 5,
      text: "This AI automation system completely transformed my business. I went from manually following up with leads to having a 24/7 system that nurtures prospects automatically. My conversion rate increased by 300% in just 3 months!",
      result: "300% increase in conversions"
    },
    {
      name: "Sarah Chen",
      title: "Top Producing Agent",
      company: "Premium Properties",
      image: "https://cdn.abacus.ai/images/8537e188-648a-4e01-9dee-f10c5855916d.png",
      rating: 5,
      text: "I was skeptical at first, but the results speak for themselves. The automated lead qualification saves me 15+ hours per week, and I'm closing deals with higher-quality prospects. This is a game-changer for any serious agent.",
      result: "15+ hours saved weekly"
    },
    {
      name: "David Rodriguez",
      title: "Real Estate Team Leader",
      company: "Elite Homes Collective",
      image: "https://images.pexels.com/photos/30004360/pexels-photo-30004360/free-photo-of-professional-team-portrait-in-office-setting.jpeg",
      rating: 5,
      text: "Our team was struggling with lead management and follow-up. After implementing this system, we've seen a 250% increase in qualified appointments and our team productivity has skyrocketed. Best investment we've ever made.",
      result: "250% more qualified appointments"
    }
  ]

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
              What Our <span className="text-gradient bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">Clients Say</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what successful real estate professionals are saying about our AI automation system.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials?.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-800 rounded-xl p-8 relative hover:bg-gray-750 transition-all duration-300 group border border-gray-700 hover:border-gray-600"
            >
              <div className="absolute -top-4 left-8">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-teal-600 rounded-full flex items-center justify-center">
                  <Quote className="w-4 h-4 text-white" />
                </div>
              </div>

              {/* Star Rating */}
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)]?.map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-gray-300 mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </blockquote>

              {/* Result Highlight */}
              <div className="mb-6 p-3 bg-gradient-to-r from-blue-900/50 to-teal-900/50 rounded-lg border border-blue-700/30">
                <div className="text-sm text-blue-300 font-semibold">
                  📈 Result: {testimonial.result}
                </div>
              </div>

              {/* Author Info */}
              <div className="flex items-center">
                <div className="w-12 h-12 relative rounded-full overflow-hidden mr-4">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="font-bold text-white">{testimonial.name}</div>
                  <div className="text-sm text-gray-400">{testimonial.title}</div>
                  <div className="text-sm text-gray-500">{testimonial.company}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Social Proof Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="bg-gray-800 rounded-lg p-6">
              <div className="text-3xl font-bold text-blue-400 mb-2">2,500+</div>
              <div className="text-gray-400">Happy Agents</div>
            </div>
            <div className="bg-gray-800 rounded-lg p-6">
              <div className="text-3xl font-bold text-teal-400 mb-2">$127M+</div>
              <div className="text-gray-400">Sales Generated</div>
            </div>
            <div className="bg-gray-800 rounded-lg p-6">
              <div className="text-3xl font-bold text-orange-400 mb-2">98%</div>
              <div className="text-gray-400">Satisfaction Rate</div>
            </div>
            <div className="bg-gray-800 rounded-lg p-6">
              <div className="text-3xl font-bold text-purple-400 mb-2">24/7</div>
              <div className="text-gray-400">Support Available</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default TestimonialsSection
