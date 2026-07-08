'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const skills = [
  { name: 'HTML5', icon: '🌐', color: '#E34F26', level: 95 },
  { name: 'CSS3', icon: '🎨', color: '#1572B6', level: 90 },
  { name: 'JavaScript', icon: '⚡', color: '#F7DF1E', level: 88 },
  { name: 'TypeScript', icon: '🔷', color: '#3178C6', level: 82 },
  { name: 'React', icon: '⚛️', color: '#61DAFB', level: 90 },
  { name: 'Next.js', icon: '▲', color: '#FFFFFF', level: 88 },
  { name: 'Tailwind CSS', icon: '💨', color: '#06B6D4', level: 92 },
  { name: 'Framer Motion', icon: '🎭', color: '#FF0055', level: 80 },
  { name: 'Node.js', icon: '🟢', color: '#339933', level: 75 },
  { name: 'Git', icon: '🌿', color: '#F05032', level: 85 },
  { name: 'GitHub', icon: '🐙', color: '#FFFFFF', level: 88 },
  { name: 'EmailJS', icon: '📧', color: '#FF7F00', level: 85 },
]

const categories = [
  {
    name: 'Frontend',
    skills: ['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'Tailwind CSS', 'Framer Motion'],
  },
  { name: 'Backend & Tools', skills: ['Node.js', 'Git', 'GitHub', 'EmailJS'] },
]

export default function Skills() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="skills" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-dark-900/50 to-dark-800/30 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/5 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-purple-500/10 text-purple-400 border border-purple-500/20 mb-4">
            Tech Stack
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold font-display mb-4">
            Skills &amp; <span className="gradient-text">Technologies</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto rounded-full mb-6" />
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Tools and technologies I use to build exceptional web experiences
          </p>
        </motion.div>

        {/* Skill Icons Grid */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4 mb-16">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.5, y: 20 }}
              animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.07 }}
              whileHover={{ y: -8, scale: 1.1 }}
              className="group flex flex-col items-center gap-3 p-4 glass border border-white/5 rounded-2xl cursor-default skill-icon transition-all duration-300 hover:border-purple-500/30"
            >
              {/* Icon */}
              <div
                className="w-12 h-12 flex items-center justify-center text-3xl rounded-xl transition-all duration-300 group-hover:scale-110"
                style={{ filter: 'drop-shadow(0 0 8px rgba(139,92,246,0.3))' }}
              >
                {skill.icon}
              </div>

              {/* Name */}
              <span className="text-xs font-medium text-gray-400 group-hover:text-white transition-colors text-center">
                {skill.name}
              </span>

              {/* Progress bar */}
              <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={isInView ? { width: `${skill.level}%` } : {}}
                  transition={{ duration: 1, delay: 0.5 + index * 0.07, ease: 'easeOut' }}
                  className="h-full rounded-full bg-gradient-to-r from-purple-500 to-blue-500"
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Category breakdown */}
        <div className="grid sm:grid-cols-2 gap-6">
          {categories.map((category, idx) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, x: idx === 0 ? -30 : 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="glass border border-white/10 rounded-2xl p-6"
            >
              <h3 className="text-lg font-bold text-white font-display mb-4 gradient-text-blue">
                {category.name}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((s) => (
                  <span
                    key={s}
                    className="px-3 py-1.5 text-xs rounded-full glass border border-purple-500/20 text-purple-300 hover:border-purple-400/40 transition-colors"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
