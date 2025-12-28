
"use client"

import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock, MessageSquare } from 'lucide-react'

const ContactInfoSection = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "General Inquiries",
      details: ["info@gohighlevelwithai.com", "Response within 4 hours"],
      color: "text-blue-600"
    },
    {
      icon: MessageSquare,
      title: "Technical Support",
      details: ["support@gohighlevelwithai.com", "Priority response for clients"],
      color: "text-green-600"
    },
    {
      icon: Phone,
      title: "Partnership Opportunities",
      details: ["partnerships@gohighlevelwithai.com", "Let's explore collaboration"],
      color: "text-purple-600"
    },
    {
      icon: MapPin,
      title: "Business Address",
      details: ["Remote-First Company", "Serving clients across North America"],
      color: "text-orange-600"
    }
  ]

  const businessHours = [
    { day: "Monday - Friday", hours: "9:00 AM - 6:00 PM EST" },
    { day: "Saturday", hours: "10:00 AM - 2:00 PM EST" },
    { day: "Sunday", hours: "Emergency support only" },
    { day: "Holidays", hours: "Emergency support only" }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Contact <span className="text-gradient">Information</span>
              </h2>
              <p className="text-lg text-gray-600">
                We're here to support your success. Choose the best way to reach us based on your needs.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {contactInfo?.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="flex items-start space-x-4">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 ${info.color} bg-opacity-10`}>
                      <info.icon className={`w-6 h-6 ${info.color}`} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{info.title}</h3>
                      {info.details?.map((detail, detailIndex) => (
                        <p key={detailIndex} className={`${detailIndex === 0 ? 'font-semibold text-gray-900' : 'text-gray-600'} leading-relaxed`}>
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Business Hours */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-600 to-teal-600 rounded-2xl p-8 text-white"
            >
              <div className="flex items-center mb-6">
                <Clock className="w-8 h-8 text-yellow-300 mr-3" />
                <h3 className="text-2xl font-bold">Business Hours</h3>
              </div>

              <div className="space-y-4">
                {businessHours?.map((schedule, index) => (
                  <div key={index} className="flex justify-between items-center py-2 border-b border-white/20 last:border-b-0">
                    <span className="font-medium">{schedule.day}</span>
                    <span className="text-blue-100">{schedule.hours}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-4 bg-white/10 rounded-lg border border-white/20">
                <h4 className="font-bold mb-2">🚨 Emergency Support</h4>
                <p className="text-blue-100 text-sm">
                  For critical technical issues affecting your business operations, emergency support is available 24/7 via email.
                </p>
              </div>
            </motion.div>

            {/* FAQ Link */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="mt-8 bg-gray-50 rounded-xl p-6 text-center"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-3">Need Quick Answers?</h3>
              <p className="text-gray-600 mb-4">
                Check out our comprehensive FAQ section for instant answers to common questions.
              </p>
              <a
                href="/offer#faq"
                className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold"
              >
                View FAQ Section →
              </a>
            </motion.div>
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center bg-gray-900 rounded-2xl p-8 text-white"
        >
          <h3 className="text-3xl font-bold mb-4">Ready to Get Started?</h3>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Don't wait to transform your real estate business. Get your free GoHighLevel setup and start seeing results within 24 hours.
          </p>
          <a
            href="/offer"
            className="inline-flex items-center bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Get Your Free Setup Now →
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default ContactInfoSection
