'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const budgetHighlights = [
  'Custom website planning based on your goals',
  'Clean design without unnecessary extras',
  'Fast delivery with mobile-friendly build',
  'Support and updates that fit your budget',
]

export default function HireMe() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="hire" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-dark-900 via-purple-950/20 to-dark-900 pointer-events-none" />
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-purple-600/5 rounded-full filter blur-[120px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-3xl p-8 sm:p-12 glass-strong border border-purple-500/20"
          style={{
            background: 'linear-gradient(135deg, rgba(139,92,246,0.1) 0%, rgba(59,130,246,0.05) 50%, rgba(139,92,246,0.1) 100%)',
          }}
        >
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-purple-600/20 rounded-full filter blur-[60px]" />
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-blue-600/15 rounded-full filter blur-[60px]" />

          <div className="relative z-10 grid lg:grid-cols-[1.2fr_0.8fr] gap-8 items-center">
            <div className="text-center lg:text-left">
              <motion.div
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/20 border border-purple-500/30 text-purple-300 text-sm font-medium mb-6"
              >
                ✨ Let&apos;s Build Something Amazing Together
              </motion.div>

              <h2 className="text-4xl sm:text-5xl lg:text-5xl font-bold font-display mb-6 leading-tight">
                <span className="text-white">I can make your website in</span>{' '}
                <span className="gradient-text">your budget</span>
              </h2>

              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                No fixed-price pressure. I tailor the design, page count, and features around what works best for your goals and your budget.
              </p>

              <div className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4">
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: '0 0 50px rgba(139,92,246,0.6)' }}
                  whileTap={{ scale: 0.97 }}
                  onClick={scrollToContact}
                  className="px-8 py-4 rounded-2xl bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold text-lg btn-primary glow-purple flex items-center gap-2"
                >
                  <span>🚀</span> Contact Me Now
                </motion.button>

              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="glass border border-white/10 rounded-3xl p-6"
            >
              <h3 className="text-xl font-semibold text-white mb-4">What I can create</h3>
              <ul className="space-y-3">
                {budgetHighlights.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-gray-300">
                    <span className="mt-1 h-2.5 w-2.5 rounded-full bg-gradient-to-r from-purple-500 to-blue-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
