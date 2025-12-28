
"use client"

import { motion } from 'framer-motion'
import { FileText, Video, Download, BookOpen, Zap, Target, Users, Calendar } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'

const ResourcesGridSection = () => {
  const categories = [
    {
      icon: FileText,
      title: "Email Templates",
      description: "200+ proven email templates for every stage of your real estate sales funnel.",
      items: ["Lead nurturing sequences", "Follow-up campaigns", "Listing presentations", "Client onboarding"],
      image: "https://boldtrail.com/wp-content/uploads/2025/02/2025-BoldTrail-SEOPage-Article7-Hero.webp",
      color: "from-blue-600 to-blue-700"
    },
    {
      icon: Video,
      title: "Training Videos",
      description: "Step-by-step video tutorials covering every aspect of real estate automation.",
      items: ["GoHighLevel setup", "Automation workflows", "Lead qualification", "CRM optimization"],
      image: "https://i.ytimg.com/vi/3Y20seKOh7c/maxresdefault.jpg",
      color: "from-green-600 to-green-700"
    },
    {
      icon: Download,
      title: "Landing Pages",
      description: "High-converting landing pages and funnels designed for real estate leads.",
      items: ["Home buyer funnels", "Seller lead magnets", "Property listing pages", "Agent signup forms"],
      image: "https://www.slidekit.com/wp-content/uploads/2025/01/8-Step-Real-Estate-Sales-Funnel-PowerPoint-and-Google-Slides-Template.jpg",
      color: "from-purple-600 to-purple-700"
    },
    {
      icon: BookOpen,
      title: "Case Studies",
      description: "Real-world success stories and implementation strategies from top agents.",
      items: ["300% lead increase case", "Automation success stories", "ROI optimization", "Market-specific strategies"],
      image: "https://goldcoastschools.com/wp-content/uploads/2025/08/ai-prompts-for-real-estate-agents-FL.jpg",
      color: "from-orange-600 to-orange-700"
    },
    {
      icon: Zap,
      title: "Automation Workflows",
      description: "Done-for-you automation sequences that you can import with one click.",
      items: ["Lead scoring systems", "Appointment booking", "Follow-up sequences", "Client communication"],
      image: "https://cdn.abacus.ai/images/694415e9-3716-42af-b066-fc9badbcc2c1.png",
      color: "from-teal-600 to-teal-700"
    },
    {
      icon: Target,
      title: "Lead Magnets",
      description: "Proven lead magnets that attract high-quality prospects to your business.",
      items: ["Home buyer guides", "Market reports", "Investment calculators", "Neighborhood analysis"],
      image: "https://resources.buffini.com/wp-content/uploads/2022/12/Real_Estate_Agents_How_Forming_a_Team_Can_Improve_Your_Business_1280x720.jpg",
      color: "from-pink-600 to-pink-700"
    }
  ]

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
              Everything You Need to <span className="text-gradient">Succeed</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive resource library gives you access to all the tools, templates, and training you need to dominate your real estate market.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories?.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden"
            >
              {/* Image Header */}
              <div className="aspect-video relative overflow-hidden">
                <Image
                  src={category.image}
                  alt={category.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${category.color} opacity-80 group-hover:opacity-70 transition-opacity duration-300`}></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <category.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {category.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {category.description}
                </p>

                {/* Items List */}
                <ul className="space-y-2 mb-6">
                  {category.items?.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center text-sm text-gray-500">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3 flex-shrink-0"></div>
                      {item}
                    </li>
                  ))}
                </ul>

                <Button asChild variant="outline" className="w-full group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all duration-300">
                  <Link href="/offer">
                    Access Resources
                  </Link>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ResourcesGridSection
