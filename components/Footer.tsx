'use client'

import { motion } from 'framer-motion'

const quickLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contact', href: '#contact' },
]

const services = [
  'Business Websites',
  'Portfolio Sites',
  'Landing Pages',
  'E-Commerce',
  'Responsive Design',
  'Maintenance',
]

export default function Footer() {
  const scrollTo = (href: string) => {
    const id = href.replace('#', '')
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="relative overflow-hidden border-t border-white/5">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-800/50 to-dark-900 pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-1 bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <span className="text-2xl font-bold gradient-text font-display">Yashika</span>
              <br />
              <span className="text-sm text-gray-500">Web Developer</span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              Building premium, fast, and beautiful websites that help businesses grow online.
            </p>

            {/* Social links */}
            <div className="flex gap-3">
              {[
                { icon: 'github', href: 'https://github.com', label: 'GitHub' },
                { icon: 'instagram', href: 'https://instagram.com/ys_webdeveloper', label: 'Instagram' },
              ].map((social) => (
                <motion.a
                  key={social.icon}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  whileHover={{ scale: 1.15, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-9 h-9 glass border border-white/10 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:border-purple-500/30 transition-all duration-300"
                >
                  {social.icon === 'github' && (
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                  )}
                  {social.icon === 'instagram' && (
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                    </svg>
                  )}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-5">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="text-gray-500 text-sm hover:text-purple-400 transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 bg-purple-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-5">
              Services
            </h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <button
                    onClick={() => scrollTo('#services')}
                    className="text-gray-500 text-sm hover:text-blue-400 transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-5">
              Contact
            </h4>
            <div className="space-y-3">
              <a
                href="mailto:yashika.webdev5@gmail.com"
                className="flex items-start gap-2 text-gray-500 hover:text-purple-400 transition-colors text-sm group"
              >
                <span className="mt-0.5 flex-shrink-0">📧</span>
                <span className="break-all">yashika.webdev5@gmail.com</span>
              </a>
              <a
                href="tel:+919201079371"
                className="flex items-center gap-2 text-gray-500 hover:text-green-400 transition-colors text-sm"
              >
                <span>📱</span>
                <span>+91 9201079371</span>
              </a>
              <div className="flex items-center gap-2 text-gray-500 text-sm">
                <span>📍</span>
                <span>India</span>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => scrollTo('#contact')}
                className="mt-4 px-5 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 text-white text-sm font-semibold btn-primary glow-purple"
              >
                Contact Me →
              </motion.button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-sm text-center sm:text-left">
            © {new Date().getFullYear()} Yashika Web Developer. All rights reserved.
          </p>
          <p className="text-gray-600 text-sm flex items-center gap-1">
            Made with{' '}
            <motion.span
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="text-red-500"
            >
              ❤️
            </motion.span>{' '}
            by{' '}
            <span className="gradient-text font-semibold ml-1">Yashika Web Developer</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
