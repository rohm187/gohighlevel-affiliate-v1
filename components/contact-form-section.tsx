
"use client"

import { motion } from 'framer-motion'
import LeadCaptureForm from '@/components/lead-capture-form'
import { Users, Clock, Shield, Award } from 'lucide-react'

const ContactFormSection = () => {
  const supportFeatures = [
    {
      icon: Users,
      title: "Dedicated Support Team",
      description: "Our experienced team knows GoHighLevel inside and out"
    },
    {
      icon: Clock,
      title: "Fast Response Times",
      description: "Average response time under 2 hours during business hours"
    },
    {
      icon: Shield,
      title: "Priority Support",
      description: "All our clients receive priority technical support"
    },
    {
      icon: Award,
      title: "Expert Guidance",
      description: "Get advice from real estate automation specialists"
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Side - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Get in <span className="text-gradient">Touch</span>
              </h2>
              <p className="text-lg text-gray-600">
                Fill out the form below and our team will get back to you within 4 hours. For immediate assistance, use our live chat or call us directly.
              </p>
            </div>

            <LeadCaptureForm 
              source="contact-page"
              title="Send Us a Message"
              description="Tell us how we can help you succeed with AI automation."
              buttonText="Send Message"
              interests="Contact Form Inquiry"
            />
          </motion.div>

          {/* Right Side - Support Features */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Choose Our <span className="text-gradient">Support</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                We don't just provide software – we provide a complete support ecosystem designed to ensure your success with AI automation.
              </p>
            </div>

            <div className="space-y-6">
              {supportFeatures?.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-4 bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-teal-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Emergency Contact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-red-50 border-2 border-red-200 rounded-xl p-6"
            >
              <h3 className="text-xl font-bold text-red-700 mb-3">🚨 Urgent Technical Issues?</h3>
              <p className="text-red-600 mb-4">
                If you're experiencing system downtime or critical issues affecting your business, contact our emergency support line immediately.
              </p>
              <div className="text-red-700 font-semibold">
                Emergency Support: support@gohighlevelwithai.com
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ContactFormSection
