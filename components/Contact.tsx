'use client'

import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import emailjs from '@emailjs/browser'
import toast from 'react-hot-toast'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

const EMAILJS_SERVICE_ID = 'service_2jg5wfp'
const EMAILJS_TEMPLATE_ID = 'template_gdfb696'
const EMAILJS_PUBLIC_KEY = 'Ryxic2gXiVQ876a8u'

const schema = yup.object({
  name: yup.string().required('Name is required'),
  email: yup.string().email('Invalid email address').required('Email is required'),
  phone: yup.string().matches(/^\d{10}$/, 'Phone number must be exactly 10 digits').required('Phone is required'),
  subject: yup.string().required('Subject is required'),
  message: yup.string().required('Message is required'),
}).required()

interface FormData {
  name: string
  email: string
  phone: string
  subject: string
  message: string
}

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null)
  const formRef = useRef<HTMLFormElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  })
  const [loading, setLoading] = useState(false)

  const onSubmit = async (data: FormData) => {
    setLoading(true)

    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current!,
        EMAILJS_PUBLIC_KEY
      )

      toast.success('🎉 Message sent! I\'ll get back to you soon.', { duration: 5000 })
      reset()
    } catch {
      toast.error('❌ Failed to send message. Please try again or email me directly.')
    } finally {
      setLoading(false)
    }
  }

  const contactInfo = [
    {
      icon: '📧',
      label: 'Email',
      value: 'yashika.webdev5@gmail.com',
      href: 'mailto:yashika.webdev5@gmail.com',
      color: 'purple',
    },
    {
      icon: '📱',
      label: 'Phone',
      value: '+91 9201079371',
      href: 'tel:+919201079371',
      color: 'blue',
    },
    {
      icon: '🌍',
      label: 'Location',
      value: 'India',
      color: 'green',
    },
    {
      icon: '⏰',
      label: 'Response Time',
      value: 'Within 24 hours',
      color: 'orange',
    },
  ]

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />
      <div className="absolute -top-40 right-1/4 w-80 h-80 bg-purple-600/10 rounded-full filter blur-[100px]" />
      <div className="absolute -bottom-40 left-1/4 w-80 h-80 bg-blue-600/10 rounded-full filter blur-[100px]" />

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
            Get In Touch
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold font-display mb-4">
            Let&apos;s <span className="gradient-text">Connect</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto rounded-full mb-6" />
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Have a project in mind? Let&apos;s talk about it. I&apos;m here to help you build something amazing.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Left: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 space-y-6"
          >
            <div>
              <h3 className="text-2xl font-bold text-white font-display mb-2">
                Contact Information
              </h3>
              <p className="text-gray-500 text-sm">
                Feel free to reach out through any of the channels below.
              </p>
            </div>

            {/* Contact cards */}
            <div className="space-y-3">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.label}
                  href={info.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  whileHover={{ x: 5, scale: 1.02 }}
                  className="flex items-center gap-4 p-4 glass border border-white/10 rounded-2xl hover:border-purple-500/30 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 flex items-center justify-center text-2xl glass rounded-xl border border-white/5 group-hover:border-purple-500/20 transition-colors">
                    {info.icon}
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 mb-0.5">{info.label}</div>
                    <div className="text-sm font-medium text-white">{info.value}</div>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Quick action buttons */}
            <div className="flex flex-col gap-3">
              <motion.a
                href="mailto:yashika.webdev5@gmail.com"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold btn-primary glow-purple"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Email Me
              </motion.a>
              <motion.a
                href="tel:+919201079371"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl glass border border-white/10 text-white font-semibold hover:border-green-500/40 hover:bg-green-500/5 transition-all duration-300"
              >
                <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call Me
              </motion.a>
            </div>

            {/* Social links */}
            <div className="flex gap-3 pt-2">
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
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 glass border border-white/10 rounded-xl flex items-center justify-center text-gray-400 hover:text-white hover:border-purple-500/30 transition-all duration-300"
                >
                  {social.icon === 'github' && (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                  )}
                  {social.icon === 'instagram' && (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                    </svg>
                  )}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-3"
          >
            <form
              ref={formRef}
              onSubmit={handleSubmit(onSubmit)}
              className="glass border border-white/10 rounded-3xl p-6 sm:p-8 space-y-5"
            >
              <h3 className="text-xl font-bold text-white font-display">Send me a message</h3>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="contact-name" className="text-sm text-gray-400 font-medium">
                    Your Name *
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    {...register('name')}
                    className={`w-full px-4 py-3 rounded-xl input-glass text-sm ${errors.name ? 'border-red-500 focus:border-red-500' : ''}`}
                  />
                  {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
                </div>
                <div className="space-y-2">
                  <label htmlFor="contact-email" className="text-sm text-gray-400 font-medium">
                    Email Address *
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    {...register('email')}
                    className={`w-full px-4 py-3 rounded-xl input-glass text-sm ${errors.email ? 'border-red-500 focus:border-red-500' : ''}`}
                  />
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="contact-phone" className="text-sm text-gray-400 font-medium">
                    Phone No. *
                  </label>
                  <input
                    id="contact-phone"
                    type="tel"
                    {...register('phone')}
                    className={`w-full px-4 py-3 rounded-xl input-glass text-sm ${errors.phone ? 'border-red-500 focus:border-red-500' : ''}`}
                  />
                  {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
                </div>
                <div className="space-y-2">
                  <label htmlFor="contact-subject" className="text-sm text-gray-400 font-medium">
                    Subject *
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    {...register('subject')}
                    className={`w-full px-4 py-3 rounded-xl input-glass text-sm ${errors.subject ? 'border-red-500 focus:border-red-500' : ''}`}
                  />
                  {errors.subject && <p className="text-red-500 text-xs mt-1">{errors.subject.message}</p>}
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="contact-message" className="text-sm text-gray-400 font-medium">
                  Message *
                </label>
                <textarea
                  id="contact-message"
                  {...register('message')}
                  rows={5}
                  className={`w-full px-4 py-3 rounded-xl input-glass text-sm resize-none ${errors.message ? 'border-red-500 focus:border-red-500' : ''}`}
                />
                {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>}
              </div>

              <motion.button
                type="submit"
                disabled={loading}
                whileHover={!loading ? { scale: 1.02 } : {}}
                whileTap={!loading ? { scale: 0.98 } : {}}
                className={`w-full py-4 rounded-2xl font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-3 btn-primary ${loading
                  ? 'bg-gray-700 cursor-not-allowed text-gray-400'
                  : 'bg-gradient-to-r from-purple-600 to-blue-600 text-white glow-purple hover:shadow-lg hover:shadow-purple-500/25'
                  }`}
              >
                {loading ? (
                  <>
                    <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
