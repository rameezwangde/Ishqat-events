import React from 'react'
import { motion } from 'framer-motion'
import { Users, Palette, CalendarClock, CheckCircle2, ArrowRight } from 'lucide-react'

export default function AboutSection() {
  const features = [
    {
      icon: Users,
      title: 'One dedicated event manager per client'
    },
    {
      icon: Palette,
      title: 'Custom themes, never recycled designs'
    },
    {
      icon: CalendarClock,
      title: 'Strict timelines and live-day supervision'
    },
    {
      icon: CheckCircle2,
      title: 'Clear, itemised quotations'
    }
  ]

  return (
    <section 
      id="about" 
      className="relative w-full bg-[#0e041d] text-white overflow-hidden flex flex-col justify-center select-none pt-12 sm:pt-16 lg:pt-20 pb-4 sm:pb-6 lg:pb-8"
    >
      {/* Background Image Container with responsive mobile adjustment */}
      <div 
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{
          backgroundImage: `url('/about-bg.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'clamp(25%, 35%, 45%) center',
          backgroundRepeat: 'no-repeat'
        }}
      />

      {/* Responsive Vignettes: keeps Haldi couple vibrant while guaranteeing high-contrast legibility */}
      <div className="absolute inset-0 bg-[#0a0215]/85 md:hidden pointer-events-none" />
      <div className="hidden md:block absolute inset-0 bg-gradient-to-r from-transparent via-[#0d0319e6] to-[#0c0218f6] pointer-events-none md:left-[32%] lg:left-[42%]" />
      <div className="hidden md:block absolute inset-0 bg-gradient-to-t from-[#0a0215c0] via-transparent to-[#0a021588] pointer-events-none" />

      {/* Main Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-14 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
        
        {/* Left Column: Mobile Image Spotlight + Desktop Spacer */}
        <div className="w-full lg:w-[46%] flex flex-col items-center">
          {/* On mobile, showcase a standalone framed view of the Haldi Arch so nothing gets lost or cropped awkwardly */}
          <div className="lg:hidden w-full max-w-sm aspect-[4/3] rounded-3xl overflow-hidden border border-[#d4af37]/40 shadow-2xl relative mb-2">
            <img 
              src="/about-bg.jpg" 
              alt="Haldi Ceremony" 
              className="w-full h-full object-cover object-left"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0e041d] via-transparent to-transparent opacity-80" />
            <div className="absolute bottom-3 left-3 text-[10px] uppercase tracking-widest text-[#E8B65B] bg-black/60 px-3 py-1 rounded-full backdrop-blur-md border border-[#E8B65B]/30 font-medium">
              Haldi & Sangeet Moments
            </div>
          </div>
          {/* Desktop spacer to let background arch breathe */}
          <div className="hidden lg:block h-[480px] w-full pointer-events-none" />
        </div>

        {/* Right Column: All Text & Features */}
        <div className="w-full lg:w-[52%] flex flex-col justify-center">
          
          {/* Label: WHO WE ARE */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2.5 sm:gap-3.5 mb-2 sm:mb-3"
          >
            <span className="text-[11px] sm:text-[13px] uppercase tracking-[3px] sm:tracking-[4px] font-semibold text-[#E8B65B]">
              WHO WE ARE
            </span>
            <div className="h-[1.5px] w-10 sm:w-16 bg-gradient-to-r from-[#E8B65B] to-transparent rounded-full" />
          </motion.div>

          {/* Heading: Trusted Event Planners in UAE */}
          <motion.h2 
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-serif-luxury text-2xl sm:text-4xl md:text-[44px] lg:text-[46px] xl:text-[50px] font-normal leading-[1.18] sm:leading-[1.14] text-white tracking-tight"
          >
            Trusted Event Planners in{' '}
            <span className="italic font-normal text-[#E8B65B] drop-shadow-sm">
              UAE
            </span>
          </motion.h2>

          {/* Thin decorative gold divider */}
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ transformOrigin: 'left' }}
            className="h-[1px] w-full max-w-sm sm:max-w-md bg-gradient-to-r from-[#E8B65B]/80 via-[#E8B65B]/40 to-transparent my-4 sm:my-5"
          />

          {/* Subheading: Event Management in Dubai, Driven by Passion */}
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="font-sans-luxury text-base sm:text-lg md:text-[20px] font-medium text-white/95 leading-snug tracking-wide mb-3 sm:mb-4"
          >
            Event Management in Dubai, Driven by Passion
          </motion.h3>

          {/* Description */}
          <motion.div 
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="space-y-3 text-[#F2EDF4] text-xs sm:text-[14px] md:text-[15.5px] leading-[1.65] font-light max-w-xl"
          >
            <p>
              <span className="text-white font-normal">“Ishqat”</span> means passion, and that is the standard we bring to every event. We are a Dubai-based{' '}
              <span className="text-[#E8B65B] font-medium">event management company</span>{' '}
              that plans, designs and delivers social celebrations and corporate events across the UAE.
            </p>
            <p className="text-white/80">
              Every event starts with a conversation. We listen to your idea, understand your audience and build a plan that fits your budget, venue and timeline. Our team then manages everything, from the first concept to the final guest leaving the venue.
            </p>
          </motion.div>

          {/* What Sets Us Apart */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="mt-6 sm:mt-7 pt-2"
          >
            <h4 className="text-[12px] sm:text-[13px] uppercase tracking-wider font-bold text-[#E8B65B] mb-3 sm:mb-4">
              What sets us apart:
            </h4>

            {/* Features Responsive Grid: 2 columns on mobile, 4 on desktop */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 py-2 border-t border-b border-[#E8B65B]/20">
              {features.map((item, index) => {
                const IconComponent = item.icon
                return (
                  <div 
                    key={index}
                    className={`flex flex-col items-center text-center p-2 group transition-all duration-300 ${
                      index !== 0 && index !== 2 ? 'border-l border-[#E8B65B]/20 lg:border-l' : ''
                    } ${index === 2 ? 'lg:border-l lg:border-[#E8B65B]/20' : ''}`}
                  >
                    <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center mb-2 text-[#E8B65B] bg-[#220d3d]/50 group-hover:scale-110 group-hover:bg-[#E8B65B]/15 transition-all duration-300 shrink-0">
                      <IconComponent size={18} strokeWidth={1.5} />
                    </div>
                    <p className="text-[11px] sm:text-xs font-medium text-white/90 leading-tight">
                      {item.title}
                    </p>
                  </div>
                )
              })}
            </div>
          </motion.div>

          {/* Call-to-Action Button: Read More → */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.55 }}
            className="mt-6 sm:mt-8"
          >
            <a 
              href="#about-details"
              className="group inline-flex items-center justify-center gap-3 px-7 sm:px-8 py-3 sm:py-3.5 rounded-full text-[#140624] font-semibold text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 hover:shadow-[0_0_30px_rgba(232,182,91,0.6)] hover:-translate-y-0.5 active:translate-y-0 w-full sm:w-auto text-center"
              style={{
                background: 'linear-gradient(135deg, #FFE09A 0%, #C88A32 100%)'
              }}
            >
              <span>Read More</span>
              <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </motion.div>

        </div>

      </div>
    </section>
  )
}
