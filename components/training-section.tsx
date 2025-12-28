
"use client"

import { motion } from 'framer-motion'
import { Play, Clock, Users, Award } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'

const TrainingSection = () => {
  const trainings = [
    {
      title: "GoHighLevel Complete Setup",
      description: "Master the complete setup process with our comprehensive step-by-step guide.",
      duration: "2.5 hours",
      level: "Beginner",
      students: "2,400+",
      thumbnail: "https://blog.coupler.io/wp-content/uploads/2025/03/GoHighLevel-customer-acquisition-dashboard-overview.png",
      topics: ["Account setup", "Template installation", "Basic configuration", "First campaign launch"]
    },
    {
      title: "AI Lead Qualification Mastery",
      description: "Learn how to set up intelligent lead scoring and qualification systems.",
      duration: "1.5 hours",
      level: "Intermediate", 
      students: "1,800+",
      thumbnail: "https://assets.fastexpert.com/wordpress/wp-content/uploads/2025/08/iStock-2156492745-1024x576.jpg",
      topics: ["Lead scoring setup", "Qualification criteria", "Automation triggers", "Response optimization"]
    },
    {
      title: "Advanced Automation Workflows",
      description: "Build complex automation sequences that nurture leads and close more deals.",
      duration: "3 hours",
      level: "Advanced",
      students: "1,200+",
      thumbnail: "https://cdn.abacus.ai/images/27f5785a-d561-4ed4-9b52-146db474dc00.png",
      topics: ["Multi-step sequences", "Conditional logic", "A/B testing", "Performance optimization"]
    }
  ]

  const features = [
    { icon: Play, title: "50+ Video Lessons", description: "Comprehensive video training library" },
    { icon: Clock, title: "Self-Paced Learning", description: "Learn at your own speed and schedule" },
    { icon: Users, title: "Community Support", description: "Connect with other successful agents" },
    { icon: Award, title: "Completion Certificates", description: "Earn certificates for completed courses" }
  ]

  return (
    <section id="training" className="py-20 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Master Real Estate <span className="text-gradient">Automation</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive training program takes you from beginner to automation expert with step-by-step video lessons and hands-on exercises.
            </p>
          </motion.div>
        </div>

        {/* Training Courses */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {trainings?.map((training, index) => (
            <motion.div
              key={training.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 group"
            >
              {/* Thumbnail */}
              <div className="aspect-video relative rounded-lg overflow-hidden mb-6 group-hover:scale-105 transition-transform duration-300">
                <Image
                  src={training.thumbnail}
                  alt={training.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center">
                    <Play className="w-6 h-6 text-blue-600 ml-1" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {training.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {training.description}
                  </p>
                </div>

                {/* Meta Info */}
                <div className="flex items-center gap-4 text-xs text-gray-500">
                  <span className="flex items-center">
                    <Clock className="w-3 h-3 mr-1" />
                    {training.duration}
                  </span>
                  <span className="flex items-center">
                    <Users className="w-3 h-3 mr-1" />
                    {training.students}
                  </span>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    training.level === 'Beginner' ? 'bg-green-100 text-green-700' :
                    training.level === 'Intermediate' ? 'bg-yellow-100 text-yellow-700' :
                    'bg-red-100 text-red-700'
                  }`}>
                    {training.level}
                  </span>
                </div>

                {/* Topics */}
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">What You'll Learn:</h4>
                  <ul className="space-y-1">
                    {training.topics?.map((topic, topicIndex) => (
                      <li key={topicIndex} className="flex items-center text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2 flex-shrink-0"></div>
                        {topic}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12"
        >
          {features?.map((feature, index) => (
            <div key={feature.title} className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center bg-gradient-to-r from-blue-600 to-teal-600 rounded-2xl p-8 text-white"
        >
          <h3 className="text-3xl font-bold mb-4">Start Your Training Today</h3>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Get instant access to all training materials when you sign up for your GoHighLevel account through our exclusive link.
          </p>
          <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-6">
            <Link href="/offer">
              Access All Training
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

export default TrainingSection
