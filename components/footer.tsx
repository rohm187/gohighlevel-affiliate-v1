
import Link from 'next/link'
import { Zap, Mail, Phone } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-teal-600 rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold text-white">DAY-1 AI</span>
                <span className="text-xs text-gray-400 -mt-1">AUTOMATIONS</span>
              </div>
            </Link>
            <p className="text-gray-400 mb-4 max-w-md">
              Transform your real estate business with AI-powered automation through GoHighLevel. 
              Get the tools, training, and support you need to 10x your results.
            </p>
            <div className="flex items-center space-x-4 text-sm">
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>info@gohighlevelwithai.com</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link href="/bridge" className="hover:text-blue-400 transition-colors">Free Snapshot</Link></li>
              <li><Link href="/offer" className="hover:text-blue-400 transition-colors">Exclusive Offer</Link></li>
              <li><Link href="/resources" className="hover:text-blue-400 transition-colors">Resources</Link></li>
              <li><Link href="/about" className="hover:text-blue-400 transition-colors">About</Link></li>
              <li><Link href="/contact" className="hover:text-blue-400 transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Resources</h3>
            <ul className="space-y-3">
              <li><Link href="/resources" className="hover:text-blue-400 transition-colors">Training Center</Link></li>
              <li><Link href="/resources" className="hover:text-blue-400 transition-colors">Templates</Link></li>
              <li><Link href="/resources" className="hover:text-blue-400 transition-colors">Case Studies</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 DAY-1 AI AUTOMATIONS. All rights reserved.</p>
          <p className="text-sm mt-2">
            Transform your real estate business with AI-powered automation.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
