import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Play, 
  ArrowRight, 
  Menu, 
  X, 
  Sparkles
} from 'lucide-react'
import AboutSection from './AboutSection.jsx'
import ServicesSection from './ServicesSection.jsx'
import ServicesAndPortfolio from './ServicesAndPortfolio.jsx'
import TestimonialsAndContact from './TestimonialsAndContact.jsx'
import LuxuryFooter from './LuxuryFooter.jsx'

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [showVideoModal, setShowVideoModal] = useState(false)

  const navLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Social Events +', href: '#social' },
    { name: 'Corporate Events +', href: '#corporate' },
    { name: 'Photos', href: '#photos' },
    { name: 'Videos', href: '#videos' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Blogs', href: '#blogs' },
    { name: 'Contact Us', href: '#contact' },
  ]

  const serviceCategories = [
    {
      title: 'Weddings & Private Celebrations',
      icon: (
        <svg className="w-5 h-5 text-[#d4af37]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
          <path d="M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08v0c.82.82 2.13.85 3 .07l2.07-1.9"/>
        </svg>
      ),
      tag: 'Bespoke Moments'
    },
    {
      title: 'Corporate Events',
      icon: (
        <svg className="w-5 h-5 text-[#d4af37]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <rect width="16" height="20" x="4" y="2" rx="2" ry="2"/>
          <path d="M9 22v-4h6v4"/>
          <path d="M8 6h.01"/><path d="M16 6h.01"/><path d="M12 6h.01"/>
          <path d="M12 10h.01"/><path d="M12 14h.01"/>
          <path d="M16 10h.01"/><path d="M16 14h.01"/>
          <path d="M8 10h.01"/><path d="M8 14h.01"/>
        </svg>
      ),
      tag: 'Executive Galas'
    },
    {
      title: 'Conferences & Summits',
      icon: (
        <svg className="w-5 h-5 text-[#d4af37]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
          <circle cx="9" cy="7" r="4"/>
          <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
        </svg>
      ),
      tag: 'Global Scale'
    },
    {
      title: 'Brand Launches',
      icon: (
        <svg className="w-5 h-5 text-[#d4af37]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
        </svg>
      ),
      tag: 'Sensory Impact'
    }
  ]

  return (
    <div className="relative min-h-screen w-full bg-[#0d041a] text-white overflow-x-hidden font-sans-luxury selection:bg-[#d4af37] selection:text-black">
      
      {/* ===================== HERO SECTION ===================== */}
      <section className="relative w-full min-h-screen flex flex-col justify-between overflow-hidden">
        
        {/* Background Image Container */}
        <div 
          className="absolute inset-0 w-full h-full pointer-events-none"
          style={{
            backgroundImage: `url('/hero-bg.png')`,
            backgroundSize: 'cover',
            backgroundPosition: 'clamp(50%, 75%, 85%) center',
            backgroundRepeat: 'no-repeat'
          }}
        />

        {/* Ambient Darkened Gradient for Mobile & Desktop Readability */}
        {/* Mobile: Full darkening so couple image glows gently underneath while text remains ultra-sharp */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0215ee] via-[#0d031ad8] to-[#0a0215fa] md:hidden pointer-events-none" />
        {/* Desktop: Elegant horizontal vignette focusing on left 55% */}
        <div className="hidden md:block absolute inset-0 bg-gradient-to-r from-[#0d031ae6] via-[#0f042099] to-transparent pointer-events-none md:w-[65%]" />
        <div className="hidden md:block absolute inset-0 bg-gradient-to-b from-[#0a021590] via-transparent to-[#0a0215cc] pointer-events-none" />

        {/* 1. Header / Navigation */}
        <header className="relative z-30 w-full px-4 sm:px-6 md:px-10 lg:px-12 pt-4 sm:pt-6 pb-2">
          <nav className="mx-auto flex items-center justify-between backdrop-blur-md bg-black/30 border border-white/10 rounded-full py-2 px-4 sm:px-6 shadow-[0_4px_30px_rgba(0,0,0,0.4)]">
            
            {/* Left: Ishqat Events Official Brand Logo */}
            <a href="#" className="flex items-center group py-0.5">
              <img 
                src="/ishqat-logo.png" 
                alt="Ishqat Events Logo" 
                className="h-10 sm:h-12 md:h-14 w-auto object-contain transition-all duration-300 group-hover:scale-105 drop-shadow-[0_0_12px_rgba(212,175,55,0.4)]"
              />
            </a>

            {/* Center: Desktop Navigation Links */}
            <ul className="hidden xl:flex items-center gap-5 2xl:gap-8 text-[13px] font-medium tracking-wider text-white/90">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="relative py-1 text-white/85 hover:text-[#f3e5ab] transition-colors duration-200 group flex items-center gap-1"
                  >
                    <span>{link.name}</span>
                    <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-gradient-to-r from-[#d4af37] to-transparent transition-all duration-300 group-hover:w-full" />
                  </a>
                </li>
              ))}
            </ul>

            {/* Right: Plan Your Event Button & Mobile Hamburger */}
            <div className="flex items-center gap-2 sm:gap-3">
              <a 
                href="#contact"
                className="hidden sm:inline-flex items-center justify-center px-4 sm:px-5 py-2 text-xs uppercase tracking-widest font-semibold text-[#f3e5ab] border border-[#d4af37]/70 rounded-full hover:bg-gradient-to-r hover:from-[#c5a059] hover:to-[#aa7c11] hover:text-[#120524] transition-all duration-300 hover:shadow-[0_0_20px_rgba(212,175,55,0.45)] active:scale-95"
              >
                Plan Your Event
              </a>

              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="xl:hidden p-2 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 text-[#d4af37] transition-colors"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </nav>

          {/* Mobile Navigation Drawer */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="xl:hidden mt-3 backdrop-blur-xl bg-[#140624]/95 border border-[#d4af37]/30 rounded-2xl p-5 shadow-2xl flex flex-col gap-3"
              >
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-sm font-medium text-white/90 hover:text-[#d4af37] transition-colors py-1.5 border-b border-white/5"
                  >
                    {link.name}
                  </a>
                ))}
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="mt-2 text-center py-2.5 text-xs uppercase tracking-widest font-semibold text-[#120524] bg-gold-gradient rounded-full"
                >
                  Plan Your Event
                </a>
              </motion.div>
            )}
          </AnimatePresence>
        </header>

        {/* 2. Hero Content Section */}
        <main className="relative z-20 flex-1 flex items-center px-4 sm:px-8 md:px-12 lg:px-16 2xl:px-20 py-8 md:py-12">
          <div className="w-full max-w-xl lg:max-w-[45%]">
            
            {/* Small introductory text */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="flex items-center gap-2.5 sm:gap-3.5 mb-3 sm:mb-4 flex-wrap"
            >
              <span className="text-[10px] sm:text-[12px] uppercase tracking-[0.2em] sm:tracking-[0.28em] font-semibold text-gold-gradient">
                YOUR TRUSTED EVENT MANAGEMENT PARTNER
              </span>
              <div className="h-[1.5px] w-10 sm:w-16 bg-gradient-to-r from-[#d4af37] to-transparent rounded-full" />
            </motion.div>

            {/* Main heading */}
            <motion.h1 
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25 }}
              className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl lg:text-[62px] 2xl:text-[70px] font-medium leading-[1.12] sm:leading-[1.08] tracking-tight text-white drop-shadow-md mb-3 sm:mb-4"
            >
              <span>Event Experiences</span>
              <br />
              <span className="inline-flex items-baseline gap-2 sm:gap-3">
                <span className="font-serif-luxury font-normal text-white/95">in</span>
                <span className="font-script-luxury text-4xl sm:text-5xl md:text-6xl lg:text-[76px] text-gold-gradient font-normal pr-2">
                  Dubai
                </span>
              </span>
            </motion.h1>

            {/* Subheading */}
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="font-sans-luxury text-base sm:text-lg md:text-xl font-light text-white/95 leading-snug mb-3 sm:mb-4 tracking-wide"
            >
              Social Celebrations and Corporate Events, <br className="hidden sm:inline" />
              Planned End to End
            </motion.h2>

            {/* Description */}
            <motion.p 
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.55 }}
              className="text-white/80 text-[13px] sm:text-[15px] md:text-[16px] leading-relaxed max-w-lg font-light mb-6 sm:mb-8"
            >
              Ishqat Events is a Dubai-based event management company. We plan, design and execute weddings, private celebrations, conferences and brand launches across the UAE.
            </motion.p>

            {/* 3. Call-to-Action Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5 pt-1"
            >
              {/* Primary: Contact Our Team */}
              <a 
                href="#contact"
                className="group inline-flex items-center justify-center gap-3 px-6 sm:px-7 py-3 sm:py-3.5 rounded-full bg-gold-gradient text-[#120524] text-xs sm:text-sm font-semibold tracking-wider uppercase transition-all duration-300 hover:shadow-[0_0_30px_rgba(212,175,55,0.6)] hover:-translate-y-0.5 active:translate-y-0 text-center"
              >
                <span>Contact Our Team</span>
                <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
              </a>

              {/* Secondary: Watch Our Events */}
              <button 
                onClick={() => setShowVideoModal(true)}
                className="group inline-flex items-center justify-center sm:justify-start gap-3 text-white/90 hover:text-[#f3e5ab] transition-colors py-2 px-1 cursor-pointer"
              >
                <div className="w-10 h-10 rounded-full border border-[#d4af37]/80 flex items-center justify-center bg-black/20 backdrop-blur-sm shadow-[0_0_15px_rgba(212,175,55,0.25)] group-hover:scale-110 group-hover:border-[#f3e5ab] group-hover:bg-[#d4af37]/15 transition-all duration-300">
                  <Play size={14} className="text-[#f3e5ab] ml-0.5 fill-[#f3e5ab]/30 group-hover:fill-[#f3e5ab]" />
                </div>
                <span className="text-xs sm:text-sm font-medium tracking-wide">Watch Our Events</span>
              </button>
            </motion.div>

          </div>
        </main>

        {/* 4. Bottom Service Navigation */}
        <footer className="relative z-20 w-full pb-4 sm:pb-6 pt-2 px-3 sm:px-6 lg:px-14">
          <motion.div 
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.85 }}
            className="mx-auto max-w-7xl backdrop-blur-md bg-black/40 border border-white/10 rounded-2xl py-3 px-3 sm:px-6 shadow-2xl"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 md:gap-0 items-center">
              {serviceCategories.map((service, index) => (
                <div 
                  key={service.title}
                  className={`group flex items-center gap-3 px-2 sm:px-4 cursor-pointer py-1.5 transition-all duration-300 hover:bg-white/[0.04] rounded-xl ${
                    index !== 0 ? 'md:border-l md:border-[#d4af37]/20' : ''
                  }`}
                >
                  <div className="p-2 rounded-lg border border-[#d4af37]/40 bg-gradient-to-br from-[#2a1147]/60 to-[#120524]/60 text-[#d4af37] group-hover:border-[#f3e5ab] group-hover:shadow-[0_0_12px_rgba(212,175,55,0.35)] transition-all duration-300 shrink-0">
                    {service.icon}
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="text-[9px] sm:text-[10px] tracking-widest uppercase text-[#d4af37] font-medium opacity-80 group-hover:opacity-100 transition-opacity truncate">
                      {service.tag}
                    </span>
                    <span className="text-xs sm:text-[13px] font-medium text-white/90 group-hover:text-white transition-colors leading-tight line-clamp-1">
                      {service.title}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </footer>

      </section>

      {/* ===================== WHO WE ARE SECTION ===================== */}
      <AboutSection />

      {/* ===================== OUR EVENT MANAGEMENT SERVICES (ARCHED CAROUSEL) ===================== */}
      <ServicesSection />

      {/* ===================== SERVICES & PORTFOLIO SHOWCASE ===================== */}
      <ServicesAndPortfolio />

      {/* ===================== TESTIMONIALS & CONTACT SECTIONS ===================== */}
      <TestimonialsAndContact />

      {/* ===================== LUXURY GLOBAL FOOTER ===================== */}
      <LuxuryFooter />

      {/* Video Modal Preview */}
      <AnimatePresence>
        {showVideoModal && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowVideoModal(false)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-lg"
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-2xl aspect-video rounded-2xl overflow-hidden border border-[#d4af37]/40 bg-[#16062a] shadow-2xl flex flex-col items-center justify-center text-center p-6"
            >
              <button 
                onClick={() => setShowVideoModal(false)}
                className="absolute top-4 right-4 p-2 text-white/70 hover:text-white rounded-full bg-white/10 hover:bg-white/20 transition-all"
              >
                <X size={20} />
              </button>
              <div className="w-14 h-14 rounded-full border border-[#d4af37] flex items-center justify-center mb-3 bg-gold-gradient/10 shadow-[0_0_20px_rgba(212,175,55,0.3)]">
                <Play size={24} className="text-[#f3e5ab] ml-1 fill-[#f3e5ab]" />
              </div>
              <h3 className="font-serif-luxury text-xl sm:text-2xl font-bold text-gold-gradient mb-2">Ishqat Events Showreel</h3>
              <p className="text-white/70 text-xs sm:text-sm max-w-sm">Experience our royal weddings, luxury galas, and high-impact summits across Dubai and the UAE.</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
