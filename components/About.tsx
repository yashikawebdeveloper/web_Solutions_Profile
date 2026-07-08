'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const highlights = [
  { icon: '⚡', title: 'Fast & Optimized', desc: 'Websites built for performance and speed' },
  { icon: '📱', title: 'Fully Responsive', desc: 'Perfect on all devices and screen sizes' },
  { icon: '🔍', title: 'SEO-Friendly', desc: 'Optimized to rank higher in search engines' },
  { icon: '🎨', title: 'Modern Design', desc: 'Stunning, premium UI/UX that converts' },
]

export default function About() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  }

  return (
    <section id="about" className="section-padding relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-900 via-dark-800/50 to-dark-900 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-purple-500/10 text-purple-400 border border-purple-500/20 mb-4">
              About Me
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold font-display mb-4">
              <span className="gradient-text">Who I Am</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto rounded-full" />
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Text content */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-2xl sm:text-3xl font-bold text-white font-display">
                  I&apos;m{' '}
                  <span className="gradient-text">Yashika</span>, a Freelance
                  Web Developer
                </h3>

                <p className="text-gray-400 leading-relaxed text-lg">
                  I&apos;m a passionate freelance web developer dedicated to building{' '}
                  <span className="text-purple-400 font-medium">fast, responsive, modern,</span> and{' '}
                  <span className="text-blue-400 font-medium">SEO-friendly</span> websites for businesses,
                  startups, and personal brands.
                </p>

                <p className="text-gray-400 leading-relaxed">
                  With a deep love for clean code and stunning design, I transform your ideas into digital
                  experiences that not only look beautiful but also drive real results. Whether you need a
                  landing page, a full business website, or a custom web application, I&apos;ve got you covered.
                </p>

                <p className="text-gray-400 leading-relaxed">
                  My mission is simple: to help you stand out online with a website that reflects your brand,
                  engages your visitors, and converts them into loyal customers.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-gray-400">
                I focus on thoughtful strategy, clean interfaces, and results-driven design so your website feels polished and easy to use.
              </div>

              {/* CTA */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold btn-primary glow-purple inline-flex items-center gap-2"
              >
                Let&apos;s Work Together
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </motion.button>
            </motion.div>

            {/* Right: Highlights cards */}
            <motion.div variants={itemVariants} className="grid grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="glass border border-white/10 rounded-2xl p-6 card-hover cursor-default"
                >
                  <div className="text-4xl mb-3">{item.icon}</div>
                  <h4 className="font-semibold text-white mb-2 font-display">{item.title}</h4>
                  <p className="text-sm text-gray-500">{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
