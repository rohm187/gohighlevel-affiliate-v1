
"use client"

import { motion } from 'framer-motion'
import { Linkedin, Mail, Award, Users } from 'lucide-react'
import Image from 'next/image'

const TeamSection = () => {
  const team = [
    {
      name: "Michael Chen",
      role: "Founder & CEO",
      image: "https://cdn.abacus.ai/images/f34026f7-c26c-48c4-b532-35d82f4caa05.png",
      bio: "Former real estate agent turned tech entrepreneur with 10+ years of experience in both industries.",
      expertise: "Real Estate Technology, Business Strategy"
    },
    {
      name: "Sarah Rodriguez",
      role: "Head of Customer Success",
      image: "https://cdn.abacus.ai/images/8537e188-648a-4e01-9dee-f10c5855916d.png",
      bio: "Customer experience expert dedicated to ensuring every client achieves their automation goals.",
      expertise: "Client Relations, Training & Support"
    },
    {
      name: "David Kim",
      role: "Lead Automation Specialist", 
      image: "https://zestyorangephoto.com/wp-content/uploads/2025/05/professional-headshots-for-real-estate-teams-a-diverse-team-celebrating-success-with-raised-hands-in-a-modern-office-setting.-3184419-scaled.jpg",
      bio: "GoHighLevel expert with extensive experience in creating high-converting automation workflows.",
      expertise: "Marketing Automation, CRM Optimization"
    }
  ]

  const stats = [
    { icon: Users, number: "15+", label: "Team Members" },
    { icon: Award, number: "5+", label: "Industry Awards" },
    { number: "2,500+", label: "Clients Served" },
    { number: "98%", label: "Satisfaction Rate" }
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
              Meet the <span className="text-gradient bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">Team</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our diverse team of real estate professionals, technologists, and customer success experts are dedicated to your success.
            </p>
          </motion.div>
        </div>

        {/* Team Members */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {team?.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-800 rounded-xl p-8 hover:bg-gray-750 transition-all duration-300 group text-center border border-gray-700"
            >
              <div className="relative mb-6 inline-block">
                <div className="w-32 h-32 relative rounded-full overflow-hidden mx-auto group-hover:scale-105 transition-transform duration-300">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-r from-blue-600 to-teal-600 rounded-full flex items-center justify-center">
                  <Award className="w-4 h-4 text-white" />
                </div>
              </div>

              <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
              <div className="text-blue-400 font-medium mb-4">{member.role}</div>
              
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                {member.bio}
              </p>

              <div className="text-xs text-gray-500 mb-6">
                <span className="font-medium text-teal-400">Expertise: </span>
                {member.expertise}
              </div>

              <div className="flex justify-center space-x-4">
                <button className="w-8 h-8 bg-gray-700 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors">
                  <Linkedin className="w-4 h-4" />
                </button>
                <button className="w-8 h-8 bg-gray-700 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors">
                  <Mail className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Team Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 bg-gray-800 rounded-2xl p-8"
        >
          {stats?.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="flex items-center justify-center mb-4">
                {stat.icon && <stat.icon className="w-8 h-8 text-blue-400" />}
              </div>
              <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Join Our Team CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center bg-gradient-to-r from-blue-600 to-teal-600 rounded-2xl p-8"
        >
          <h3 className="text-3xl font-bold text-white mb-4">Join Our Growing Team</h3>
          <p className="text-xl text-blue-100 mb-6">
            We're always looking for talented individuals who share our passion for helping real estate professionals succeed.
          </p>
          <a
            href="mailto:careers@gohighlevelwithai.com"
            className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            <Mail className="w-5 h-5 mr-2" />
            View Open Positions
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default TeamSection
