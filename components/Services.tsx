'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const services = [
  {
    icon: '🏢',
    title: 'Business Websites',
    description:
      'Professional, conversion-focused websites that represent your brand and drive business growth.',
    features: ['Custom Design', 'CMS Integration', 'Lead Generation', 'Analytics Setup'],
    gradient: 'from-purple-600/20 to-blue-600/20',
    border: 'border-purple-500/20',
    glow: 'hover:shadow-purple-500/10',
  },
  {
    icon: '💼',
    title: 'Portfolio Websites',
    description:
      'Stunning portfolio sites that showcase your work and skills in the most impressive way possible.',
    features: ['Elegant Design', 'Project Showcase', 'Case Studies', 'Contact Forms'],
    gradient: 'from-blue-600/20 to-cyan-600/20',
    border: 'border-blue-500/20',
    glow: 'hover:shadow-blue-500/10',
  },
  {
    icon: '🚀',
    title: 'Landing Pages',
    description:
      'High-converting landing pages designed to turn visitors into customers with compelling CTAs.',
    features: ['A/B Testing Ready', 'Fast Loading', 'CTA Optimization', 'Pixel Perfect'],
    gradient: 'from-indigo-600/20 to-purple-600/20',
    border: 'border-indigo-500/20',
    glow: 'hover:shadow-indigo-500/10',
  },
  {
    icon: '🛒',
    title: 'E-Commerce Websites',
    description:
      'Feature-rich online stores with secure payments, inventory management, and seamless UX.',
    features: ['Secure Payments', 'Product Management', 'Cart & Checkout', 'Mobile Optimized'],
    gradient: 'from-emerald-600/20 to-blue-600/20',
    border: 'border-emerald-500/20',
    glow: 'hover:shadow-emerald-500/10',
  },
  {
    icon: '📱',
    title: 'Responsive Design',
    description:
      'Pixel-perfect responsive designs that look stunning on every device and screen size.',
    features: ['Mobile-First', 'Cross-Browser', 'Touch Optimized', 'Retina Ready'],
    gradient: 'from-pink-600/20 to-purple-600/20',
    border: 'border-pink-500/20',
    glow: 'hover:shadow-pink-500/10',
  },
  {
    icon: '🔧',
    title: 'Website Maintenance',
    description:
      'Ongoing support and maintenance to keep your website secure, updated, and performing at its best.',
    features: ['Regular Updates', 'Security Audits', 'Performance Tuning', '24/7 Support'],
    gradient: 'from-orange-600/20 to-red-600/20',
    border: 'border-orange-500/20',
    glow: 'hover:shadow-orange-500/10',
  },
]

export default function Services() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="services" className="section-padding relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />
      <div className="absolute -top-40 right-1/4 w-80 h-80 bg-purple-600/10 rounded-full filter blur-[100px]" />
      <div className="absolute -bottom-40 left-1/4 w-80 h-80 bg-blue-600/10 rounded-full filter blur-[100px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-blue-500/10 text-blue-400 border border-blue-500/20 mb-4">
            My Services
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold font-display mb-4">
            What I <span className="gradient-text">Offer</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto rounded-full mb-6" />
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            From concept to launch, I deliver premium web solutions tailored to your unique needs
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.01 }}
              className={`relative group glass border ${service.border} rounded-2xl p-6 overflow-hidden card-hover cursor-default transition-all duration-300 hover:shadow-2xl ${service.glow}`}
            >
              {/* Gradient background on hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl`}
              />

              <div className="relative z-10">
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-white font-display mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  {service.description}
                </p>

                <ul className="space-y-1.5">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-gray-500">
                      <span className="w-1.5 h-1.5 bg-purple-400 rounded-full flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Decorative corner element */}
              <div className="absolute top-4 right-4 w-8 h-8 border border-white/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
