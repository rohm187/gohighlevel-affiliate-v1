
"use client"

import { motion } from 'framer-motion'
import { ArrowRight, Download, Settings, Rocket, CheckCircle } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

const HowItWorksSection = () => {
  const steps = [
    {
      icon: Download,
      number: "01",
      title: "Get Instant Access",
      description: "Sign up for GoHighLevel through our exclusive link and get immediate access to our premium automation templates.",
      action: "Takes 2 minutes"
    },
    {
      icon: Settings,
      number: "02", 
      title: "Customize Your Setup",
      description: "Use our done-for-you templates and follow our step-by-step training to set up your automated lead generation system.",
      action: "Setup in 24 hours"
    },
    {
      icon: Rocket,
      number: "03",
      title: "Launch & Scale",
      description: "Activate your AI automation and watch as qualified leads flow into your pipeline 24/7 while you focus on closing deals.",
      action: "Start seeing results"
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
              How It <span className="text-gradient">Works</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get your complete AI automation system up and running in just 3 simple steps. No technical skills required.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Left Side - Steps */}
          <div className="space-y-8">
            {steps?.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="flex items-start space-x-6 group"
              >
                <div className="flex-shrink-0">
                  <div className="relative">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-teal-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover:scale-110 transition-transform duration-300">
                      {step.number}
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md">
                      <step.icon className="w-4 h-4 text-blue-600" />
                    </div>
                  </div>
                </div>
                
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 mb-3 leading-relaxed">
                    {step.description}
                  </p>
                  <div className="inline-flex items-center text-sm font-medium text-green-600 bg-green-100 px-3 py-1 rounded-full">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    {step.action}
                  </div>
                </div>

                {index < steps.length - 1 && (
                  <div className="absolute left-8 mt-20 w-0.5 h-16 bg-gradient-to-b from-blue-600 to-teal-600 hidden lg:block"></div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Right Side - Workflow Diagram */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square relative rounded-2xl overflow-hidden shadow-2xl bg-white p-8">
              <Image
                src="https://cdn.abacus.ai/images/27f5785a-d561-4ed4-9b52-146db474dc00.png"
                alt="Real estate automation workflow diagram"
                fill
                className="object-contain p-4"
              />
            </div>
            
            {/* Floating elements */}
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-orange-400 to-pink-500 rounded-full opacity-80"
            />
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-4 -left-4 w-8 h-8 bg-gradient-to-br from-blue-400 to-teal-500 rounded-full opacity-80"
            />
          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center bg-white rounded-2xl p-8 shadow-xl max-w-4xl mx-auto"
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Get Started?
          </h3>
          <p className="text-gray-600 mb-8">
            Join thousands of successful real estate professionals who are already using our system to automate their lead generation and close more deals.
          </p>
          <Button asChild size="lg" className="bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-lg px-8 py-6">
            <Link href="/offer" className="inline-flex items-center">
              Get Your Free Setup Now
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

export default HowItWorksSection
