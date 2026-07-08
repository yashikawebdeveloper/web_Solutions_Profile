'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const packages = [
  {
    name: 'Starter',
    price: '₹4,999',
    originalPrice: '₹8,999',
    description: 'Perfect for personal brands and small businesses getting started online.',
    features: [
      'Single Page Landing',
      'Mobile Responsive',
      'Contact Form',
      'Basic SEO Setup',
      '3 Revisions',
      '7-Day Delivery',
    ],
    gradient: 'from-blue-600 to-cyan-600',
    popular: false,
    cta: 'Get Started',
  },
  {
    name: 'Professional',
    price: '₹12,999',
    originalPrice: '₹22,999',
    description: 'Ideal for businesses that need a full website with multiple pages and features.',
    features: [
      '5-Page Website',
      'Custom Design',
      'Mobile Responsive',
      'Advanced SEO',
      'Contact Form + EmailJS',
      'Performance Optimized',
      '5 Revisions',
      '14-Day Delivery',
      '1 Month Support',
    ],
    gradient: 'from-purple-600 to-blue-600',
    popular: true,
    cta: 'Most Popular',
  },
]

export default function HireMe() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="hire" className="section-padding relative overflow-hidden">
      {/* Dramatic background */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-900 via-purple-950/20 to-dark-900 pointer-events-none" />
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-purple-600/5 rounded-full filter blur-[120px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero CTA Banner */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-3xl p-8 sm:p-12 mb-16 glass-strong border border-purple-500/20"
          style={{
            background: 'linear-gradient(135deg, rgba(139,92,246,0.1) 0%, rgba(59,130,246,0.05) 50%, rgba(139,92,246,0.1) 100%)',
          }}
        >
          {/* Decorative blobs inside banner */}
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-purple-600/20 rounded-full filter blur-[60px]" />
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-blue-600/15 rounded-full filter blur-[60px]" />

          <div className="relative z-10 text-center max-w-3xl mx-auto">
            <motion.div
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/20 border border-purple-500/30 text-purple-300 text-sm font-medium mb-6"
            >
              ✨ Let&apos;s Build Something Amazing Together
            </motion.div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display mb-6 leading-tight">
              <span className="text-white">Need a</span>{' '}
              <span className="gradient-text">Professional</span>
              <br />
              <span className="text-white">Website?</span>
            </h2>

            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              I can design and develop modern, responsive, fast, and SEO-friendly websites tailored
              to your business, startup, personal brand, or portfolio. Whether you need a landing
              page, business website, portfolio, or custom web application, I&apos;m here to help{' '}
              <span className="text-purple-400 font-medium">bring your ideas to life.</span>
            </p>

            {/* Feature highlights */}
            <div className="flex flex-wrap justify-center gap-3 mb-10">
              {['⚡ Fast Delivery', '📱 Fully Responsive', '🔍 SEO-Optimized', '💎 Premium Quality', '🛠️ Ongoing Support'].map((feat) => (
                <span
                  key={feat}
                  className="px-3 py-1.5 text-sm rounded-full glass border border-white/10 text-gray-300"
                >
                  {feat}
                </span>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 0 50px rgba(139,92,246,0.6)' }}
                whileTap={{ scale: 0.97 }}
                onClick={scrollToContact}
                className="px-8 py-4 rounded-2xl bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold text-lg btn-primary glow-purple flex items-center gap-2"
              >
                <span>🚀</span> Contact Me Now
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                onClick={scrollToContact}
                className="px-8 py-4 rounded-2xl glass border border-white/20 text-white font-semibold text-lg hover:border-purple-400/40 hover:bg-white/5 transition-all duration-300 flex items-center gap-2"
              >
                <span>💬</span> Let&apos;s Talk
              </motion.button>

              <motion.a
                href="mailto:yashika.webdev5@gmail.com?subject=Free Quote Request&body=Hi Yashika, I would like a free quote for my website project."
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="px-8 py-4 rounded-2xl glass border border-green-500/30 text-green-400 font-semibold text-lg hover:border-green-400/50 hover:bg-green-500/5 transition-all duration-300 flex items-center gap-2"
              >
                <span>🎁</span> Get Free Quote
              </motion.a>
            </div>
          </div>
        </motion.div>

        {/* Pricing Packages */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mb-12"
        >
          <h3 className="text-3xl sm:text-4xl font-bold font-display text-white mb-3">
            Simple, <span className="gradient-text">Transparent</span> Pricing
          </h3>
          <p className="text-gray-400">Choose a plan that fits your needs and budget</p>
        </motion.div>

        <div className="grid sm:grid-cols-3 gap-6">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
              whileHover={{ y: -8 }}
              className={`relative glass border rounded-3xl p-6 overflow-hidden card-hover transition-all duration-300 ${
                pkg.popular
                  ? 'border-purple-500/50 shadow-2xl shadow-purple-500/20'
                  : 'border-white/10'
              }`}
            >
              {pkg.popular && (
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-blue-500" />
              )}

              {pkg.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white text-xs font-bold">
                  MOST POPULAR
                </div>
              )}

              <div className="pt-2">
                <h4 className="text-lg font-bold text-white font-display mb-1">{pkg.name}</h4>
                <p className="text-gray-500 text-sm mb-4">{pkg.description}</p>

                <div className="flex items-baseline gap-2 mb-6">
                  <span
                    className={`text-4xl font-bold font-display bg-gradient-to-r ${pkg.gradient} bg-clip-text text-transparent`}
                  >
                    {pkg.price}
                  </span>
                  <span className="text-gray-600 line-through text-sm">{pkg.originalPrice}</span>
                </div>

                <ul className="space-y-2.5 mb-6">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-gray-400">
                      <svg className="w-4 h-4 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={scrollToContact}
                  className={`w-full py-3 rounded-xl font-semibold text-sm transition-all duration-300 ${
                    pkg.popular
                      ? `bg-gradient-to-r ${pkg.gradient} text-white glow-purple btn-primary`
                      : 'glass border border-white/10 text-white hover:border-purple-500/30 hover:bg-white/5'
                  }`}
                >
                  {pkg.cta}
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center text-gray-600 text-sm mt-8"
        >
          💡 Prices are flexible. Contact me for a custom quote tailored to your specific needs.
        </motion.p>
      </div>
    </section>
  )
}
