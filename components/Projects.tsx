'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const projects = [
  {
    title: 'E-Commerce Fashion Store',
    description:
      'A fully-featured online fashion store with product filtering, cart management, secure payments, and a modern responsive design.',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Stripe'],
    gradient: 'from-purple-600 to-blue-600',
    bgGradient: 'from-purple-600/10 to-blue-600/10',
    border: 'border-purple-500/20',
    emoji: '👗',
    github: 'https://github.com',
    demo: 'https://example.com',
    featured: true,
  },
  {
    title: 'SaaS Dashboard',
    description:
      'A comprehensive analytics dashboard for a SaaS product with real-time data visualization, user management, and reporting.',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Recharts'],
    gradient: 'from-blue-600 to-cyan-600',
    bgGradient: 'from-blue-600/10 to-cyan-600/10',
    border: 'border-blue-500/20',
    emoji: '📊',
    github: 'https://github.com',
    demo: 'https://example.com',
    featured: true,
  },
  {
    title: 'Restaurant Landing Page',
    description:
      'An elegant, animated restaurant website with online reservations, menu showcase, and a beautiful gallery section.',
    tech: ['Next.js', 'Framer Motion', 'Tailwind CSS'],
    gradient: 'from-orange-600 to-red-600',
    bgGradient: 'from-orange-600/10 to-red-600/10',
    border: 'border-orange-500/20',
    emoji: '🍽️',
    github: 'https://github.com',
    demo: 'https://example.com',
    featured: false,
  },
  {
    title: 'Personal Portfolio',
    description:
      'A sleek, dark-themed portfolio website with smooth animations, project showcases, and a fully functional contact form.',
    tech: ['Next.js', 'Framer Motion', 'EmailJS'],
    gradient: 'from-indigo-600 to-purple-600',
    bgGradient: 'from-indigo-600/10 to-purple-600/10',
    border: 'border-indigo-500/20',
    emoji: '💼',
    github: 'https://github.com',
    demo: 'https://example.com',
    featured: false,
  },
  {
    title: 'Real Estate Platform',
    description:
      'A modern real estate website with advanced property search, Google Maps integration, and mortgage calculator.',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Maps API'],
    gradient: 'from-emerald-600 to-teal-600',
    bgGradient: 'from-emerald-600/10 to-teal-600/10',
    border: 'border-emerald-500/20',
    emoji: '🏡',
    github: 'https://github.com',
    demo: 'https://example.com',
    featured: false,
  },
  {
    title: 'Fitness App Landing',
    description:
      'High-converting landing page for a fitness app with animated hero, pricing plans, testimonials, and app download CTAs.',
    tech: ['Next.js', 'Framer Motion', 'Tailwind CSS'],
    gradient: 'from-pink-600 to-rose-600',
    bgGradient: 'from-pink-600/10 to-rose-600/10',
    border: 'border-pink-500/20',
    emoji: '💪',
    github: 'https://github.com',
    demo: 'https://example.com',
    featured: false,
  },
]

export default function Projects() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="projects" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
      <div className="absolute -top-40 left-1/3 w-80 h-80 bg-blue-600/10 rounded-full filter blur-[100px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-blue-500/10 text-blue-400 border border-blue-500/20 mb-4">
            My Work
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold font-display mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto rounded-full mb-6" />
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A selection of projects I&apos;ve built for clients and personal endeavors
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className={`group relative glass border ${project.border} rounded-2xl overflow-hidden card-hover transition-all duration-500`}
            >
              {/* Project preview area */}
              <div
                className={`relative h-48 bg-gradient-to-br ${project.bgGradient} flex items-center justify-center overflow-hidden`}
              >
                {/* Animated gradient orb */}
                <div
                  className={`absolute w-32 h-32 bg-gradient-to-r ${project.gradient} rounded-full filter blur-[40px] opacity-40 group-hover:opacity-70 transition-opacity duration-500`}
                />

                {/* Project emoji */}
                <motion.div
                  whileHover={{ scale: 1.2, rotate: [0, -5, 5, 0] }}
                  transition={{ duration: 0.5 }}
                  className="relative z-10 text-7xl"
                >
                  {project.emoji}
                </motion.div>

                {/* Featured badge */}
                {project.featured && (
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-yellow-500/20 border border-yellow-500/40 text-yellow-400 text-xs font-medium">
                    ⭐ Featured
                  </div>
                )}

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-4 py-2 rounded-xl glass border border-white/20 text-white text-sm font-medium flex items-center gap-2 hover:bg-white/10 transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                    GitHub
                  </motion.a>
                  <motion.a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className={`px-4 py-2 rounded-xl bg-gradient-to-r ${project.gradient} text-white text-sm font-medium flex items-center gap-2`}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    Live Demo
                  </motion.a>
                </div>
              </div>

              {/* Project info */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-white font-display mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-xs rounded-full glass border border-white/10 text-gray-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <motion.a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl glass border border-white/10 text-white font-semibold hover:border-purple-500/30 hover:bg-white/5 transition-all duration-300"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
            </svg>
            View All Projects on GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
