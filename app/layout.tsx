import type { Metadata } from 'next'
import './globals.css'
import { Toaster } from 'react-hot-toast'


export const metadata: Metadata = {
  title: 'Yashika Web Developer | Premium Web Development Services',
  description:
    'Yashika Web Developer – I build fast, responsive, modern, and SEO-friendly websites for businesses, startups, and personal brands. Specializing in Next.js, React, and Tailwind CSS.',
  keywords: [
    'web developer',
    'freelance web developer',
    'Next.js developer',
    'React developer',
    'Yashika Web Developer',
    'website design',
    'portfolio',
    'web development India',
  ],
  authors: [{ name: 'Yashika Web Developer' }],
  openGraph: {
    title: 'Yashika Web Developer | Premium Web Development Services',
    description: 'I build fast, responsive, modern, and SEO-friendly websites tailored to your business.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="font-sans bg-dark-900 text-white antialiased">

        {children}
        <Toaster
          position="top-right"
          toastOptions={{
            style: {
              background: 'rgba(13, 18, 40, 0.95)',
              color: '#fff',
              border: '1px solid rgba(139, 92, 246, 0.3)',
              backdropFilter: 'blur(10px)',
            },
          }}
        />
      </body>
    </html>
  )
}
