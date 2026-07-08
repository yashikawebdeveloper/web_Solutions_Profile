import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Services from '@/components/Services'
import Skills from '@/components/Skills'
import HireMe from '@/components/HireMe'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Skills />
      <HireMe />
      <Contact />
      <Footer />
    </main>
  )
}
