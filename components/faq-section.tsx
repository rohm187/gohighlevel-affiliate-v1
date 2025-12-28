
"use client"

import { motion } from 'framer-motion'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { useState } from 'react'

const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0)

  const faqs = [
    {
      question: "How quickly can I get my system up and running?",
      answer: "Most agents have their complete system running within 24 hours. We provide step-by-step video tutorials and done-for-you templates that make setup incredibly fast. Plus, our team is available to help if you need any assistance."
    },
    {
      question: "Do I need any technical skills to use this?",
      answer: "Not at all! Our system is designed for real estate professionals, not tech experts. Everything is point-and-click, and we provide detailed video training for every step. If you can send an email, you can use this system."
    },
    {
      question: "What makes this different from other real estate CRMs?",
      answer: "Unlike basic CRMs, our GoHighLevel setup includes AI-powered lead qualification, automated nurturing sequences, and proven templates specifically designed for real estate. Plus, you get our exclusive training and ongoing support."
    },
    {
      question: "Is there really no cost for the setup and bonuses?",
      answer: "Correct! When you sign up for GoHighLevel through our exclusive affiliate link, you get our entire $2,997 setup package plus $991 in bonuses completely free. You only pay for your GoHighLevel subscription, which starts at $97/month."
    },
    {
      question: "What if GoHighLevel isn't right for my business?",
      answer: "GoHighLevel offers a 30-day trial, and we back that up with our own guarantee. If you're not completely satisfied within 30 days, we'll help you get a full refund of your GoHighLevel subscription. No questions asked."
    },
    {
      question: "How much time will this save me each week?",
      answer: "Our clients typically save 15-20 hours per week on lead follow-up, nurturing, and administrative tasks. The AI automation handles the repetitive work so you can focus on what you do best - closing deals and building relationships."
    },
    {
      question: "Can I customize the templates for my market?",
      answer: "Absolutely! All templates are fully customizable. We provide the proven framework, and you can adapt the messaging, branding, and offers to match your specific market and style. We also include training on how to optimize for your area."
    },
    {
      question: "What kind of support do I get after setup?",
      answer: "You get 30 days of direct implementation support from our team, plus lifetime access to our exclusive community of successful agents. We also provide ongoing training updates and new templates as we develop them."
    }
  ]

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index)
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Frequently Asked <span className="text-gradient">Questions</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Got questions? We've got answers. Here are the most common questions we receive about our AI automation system.
            </p>
          </motion.div>
        </div>

        <div className="max-w-4xl mx-auto">
          {faqs?.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="mb-4"
            >
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors focus:outline-none focus:bg-gray-50"
                >
                  <span className="font-semibold text-gray-900 text-lg pr-4">
                    {faq.question}
                  </span>
                  {openFAQ === index ? (
                    <ChevronUp className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
                  )}
                </button>
                
                {openFAQ === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-8 pb-6"
                  >
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center bg-white rounded-2xl p-8 shadow-lg max-w-2xl mx-auto"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Still Have Questions?
          </h3>
          <p className="text-gray-600 mb-6">
            Our team is here to help. Get in touch and we'll answer any questions you have about our AI automation system.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:support@gohighlevelwithai.com"
              className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Email Support
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Contact Us
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default FAQSection
