import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, ArrowRight, Camera } from 'lucide-react'

// Custom Luxury Gold Icons
const WeddingRingsIcon = () => (
  <svg className="w-6 h-6 text-[#E8B65B]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="8" cy="12" r="5" />
    <circle cx="16" cy="12" r="5" />
    <path d="M12 7l1.5-2h-3L12 7z" fill="currentColor" opacity="0.85" />
  </svg>
)

const IndianMandalaIcon = () => (
  <svg className="w-6 h-6 text-[#E8B65B]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
    <circle cx="12" cy="12" r="3" fill="currentColor" opacity="0.4" />
  </svg>
)

export default function ServicesSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [visibleCount, setVisibleCount] = useState(3)

  const services = [
    {
      id: 'destination-weddings',
      title: 'Destination Wedding Services',
      image: '/destination-wedding.jpg',
      icon: WeddingRingsIcon,
      subtitle: 'LUXURY COASTAL & PALACE VENUES',
      link: '#destination-weddings'
    },
    {
      id: 'indian-weddings',
      title: 'Indian Wedding Planners',
      image: '/indian-wedding.jpg',
      icon: IndianMandalaIcon,
      subtitle: 'AUTHENTIC GRANDEUR & RITUALS',
      link: '#indian-wedding-planners'
    },
    {
      id: 'photography-videography',
      title: 'Photography and Videography',
      image: '/photo-video.jpg',
      icon: () => <Camera className="w-6 h-6 text-[#E8B65B]" strokeWidth={1.6} />,
      subtitle: 'CINEMATIC DRONE & VISUAL STORYTELLING',
      link: '#photography-videography'
    },
    {
      id: 'corporate-galas',
      title: 'Corporate Galas & Summits',
      image: '/hero-bg.png',
      icon: IndianMandalaIcon,
      subtitle: 'HIGH-IMPACT EXECUTIVE PRODUCTION',
      link: '#corporate-galas'
    }
  ]

  // Track responsive screen size for carousel items visible
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth
      if (width < 768) {
        setVisibleCount(1)
      } else if (width < 1024) {
        setVisibleCount(2)
      } else {
        setVisibleCount(3)
      }
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const maxIndex = Math.max(0, services.length - visibleCount)

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : maxIndex))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < maxIndex ? prev + 1 : 0))
  }

  return (
    <section 
      id="services" 
      className="relative w-full bg-[#110324] text-white overflow-hidden pt-4 sm:pt-6 lg:pt-8 pb-4 sm:pb-6 select-none flex flex-col justify-between"
    >
      {/* Background Graphic Foundation */}
      <div 
        className="absolute inset-0 w-full h-full pointer-events-none opacity-40 lg:opacity-75"
        style={{
          backgroundImage: `url('/services-bg.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center bottom',
          backgroundRepeat: 'no-repeat'
        }}
      />

      {/* Atmospheric Plums and Midnight-Purple Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0e041d] via-[#120428]/85 to-[#0b0318] pointer-events-none" />

      {/* Subtle Ambient Golden & Purple Glows */}
      <div className="absolute top-1/3 -left-32 w-80 h-80 bg-[#d4af37]/15 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 -right-32 w-96 h-96 bg-[#9333ea]/15 rounded-full blur-[150px] pointer-events-none" />

      {/* Main Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-12 flex flex-col items-center">
        
        {/* ================= 2. Section Heading ================= */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          
          {/* Small Gold Uppercase Label */}
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-3 mb-3"
          >
            <div className="h-[1px] w-8 sm:w-12 bg-gradient-to-r from-transparent to-[#E8B65B]" />
            <span className="text-[11px] sm:text-[13px] uppercase tracking-[4px] font-semibold text-[#E8B65B]">
              WHAT WE DO
            </span>
            <div className="h-[1px] w-8 sm:w-12 bg-gradient-to-l from-transparent to-[#E8B65B]" />
          </motion.div>

          {/* Main Heading: Our Event Management Services */}
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal text-white tracking-tight leading-[1.15] mb-4"
          >
            Our Event Management <span className="italic text-[#E8B65B]">Services</span>
          </motion.h2>

          {/* Description */}
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-[#F2EDF4]/85 text-xs sm:text-sm md:text-[15.5px] leading-relaxed font-light max-w-2xl mx-auto mb-6"
          >
            Ishqat Events is a full-service event management company in Dubai. We manage every stage of your event: concept, design, vendors, execution and post-event support. Choose the service that fits your occasion.
          </motion.p>

          {/* Subtle Gold Ornamental Divider */}
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="flex items-center justify-center gap-2 mb-6"
          >
            <div className="h-[1px] w-16 sm:w-28 bg-gradient-to-r from-transparent to-[#E8B65B]/70" />
            <div className="w-2 h-2 rotate-45 border border-[#E8B65B] bg-[#E8B65B]/30" />
            <div className="h-[1px] w-16 sm:w-28 bg-gradient-to-l from-transparent to-[#E8B65B]/70" />
          </motion.div>

          {/* Subsection Heading */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex items-center justify-center gap-3"
          >
            <div className="h-[1px] w-6 sm:w-10 bg-[#E8B65B]/40" />
            <h3 className="font-serif-luxury text-base sm:text-lg md:text-xl font-normal text-white/90 tracking-wide">
              Social Event Management Services
            </h3>
            <div className="h-[1px] w-6 sm:w-10 bg-[#E8B65B]/40" />
          </motion.div>

        </div>

        {/* ================= 3 & 4. Service Cards & Carousel ================= */}
        <div className="w-full relative px-0 sm:px-6">
          
          {/* Card Carousel Viewport */}
          <div className="overflow-hidden w-full py-4">
            <motion.div 
              className="flex transition-transform duration-500 ease-out"
              animate={{
                x: `-${currentIndex * (100 / visibleCount)}%`
              }}
              transition={{ type: 'spring', damping: 25, stiffness: 180 }}
            >
              {services.map((service, index) => {
                const Icon = service.icon
                return (
                  <div
                    key={service.id}
                    className="shrink-0 px-2 sm:px-3 md:px-4 flex justify-center"
                    style={{ width: `${100 / visibleCount}%` }}
                  >
                    {/* Card Container: Custom Pointed Arch Shaped Top & Gold Glowing Border */}
                    <div className="group relative w-full max-w-[370px] h-[450px] sm:h-[480px] md:h-[510px] rounded-[36px] rounded-t-[140px] p-[1.5px] bg-gradient-to-b from-[#E8B65B] via-[#E8B65B]/60 to-[#996515]/30 shadow-[0_15px_40px_rgba(0,0,0,0.6)] hover:shadow-[0_20px_50px_rgba(232,182,91,0.4)] transition-all duration-500 hover:-translate-y-2 flex flex-col overflow-hidden">
                      
                      {/* Inner Card Body */}
                      <div className="relative w-full h-full rounded-[35px] rounded-t-[139px] overflow-hidden bg-[#16062a] flex flex-col justify-end">
                        
                        {/* Background Image Area (Heroic Height & Crisp Visibility) */}
                        <div className="absolute inset-0 w-full h-full overflow-hidden">
                          <img 
                            src={service.image} 
                            alt={service.title} 
                            className="w-full h-full object-cover object-top sm:object-center transition-transform duration-700 group-hover:scale-108"
                          />
                          {/* Elegant Arched Inner Glow Border */}
                          <div className="absolute inset-0 rounded-[35px] rounded-t-[139px] border border-[#E8B65B]/35 pointer-events-none" />
                          
                          {/* Dark Plum Gradient Overlay at Bottom for Highly Readable Text */}
                          <div className="absolute inset-0 bg-gradient-to-t from-[#0d031e] via-[#100324]/85 via-45% to-transparent" />
                          <div className="absolute inset-0 bg-[#0d021b]/15 group-hover:bg-transparent transition-colors duration-500" />
                        </div>

                        {/* Foreground Content Area */}
                        <div className="relative z-10 p-5 sm:p-7 flex flex-col items-center text-center">
                          
                          {/* Gold Icon */}
                          <div className="w-12 h-12 rounded-full border border-[#E8B65B]/70 bg-[#1e0736]/95 backdrop-blur-md flex items-center justify-center mb-3 shadow-[0_0_18px_rgba(232,182,91,0.4)] group-hover:scale-110 group-hover:border-[#FFE09A] transition-all duration-300">
                            <Icon />
                          </div>

                          {/* Service Title */}
                          <h4 className="font-serif-luxury text-lg sm:text-xl md:text-[22px] font-medium text-white group-hover:text-[#f3e5ab] transition-colors leading-snug mb-1.5 drop-shadow-md">
                            {service.title}
                          </h4>

                          <p className="text-[10px] sm:text-[11px] uppercase tracking-wider text-[#E8B65B] font-semibold mb-5 opacity-90">
                            {service.subtitle}
                          </p>

                          {/* CTA: More Details → */}
                          <a 
                            href={service.link}
                            className="inline-flex items-center gap-2 px-6 py-2 rounded-full text-xs uppercase tracking-widest font-semibold text-[#f3e5ab] border border-[#E8B65B]/80 bg-black/50 backdrop-blur-sm group-hover:bg-gradient-to-r group-hover:from-[#FFE09A] group-hover:to-[#C88A32] group-hover:text-[#120524] group-hover:border-transparent transition-all duration-300 shadow-md active:scale-95"
                          >
                            <span>More Details</span>
                            <ArrowRight size={13} className="transition-transform duration-300 group-hover:translate-x-1" />
                          </a>

                        </div>

                      </div>

                    </div>
                  </div>
                )
              })}
            </motion.div>
          </div>

          {/* Carousel Controls: Mobile & Desktop Arrows */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <button
              onClick={handlePrev}
              aria-label="Previous service"
              className="w-10 h-10 rounded-full border border-[#E8B65B]/50 bg-[#16062a]/90 backdrop-blur-md flex items-center justify-center text-[#E8B65B] hover:bg-[#E8B65B] hover:text-[#120524] transition-all duration-300 shadow-md active:scale-95"
            >
              <ChevronLeft size={20} />
            </button>

            {/* Pagination Indicators */}
            <div className="flex items-center gap-1.5 px-3">
              {Array.from({ length: maxIndex + 1 }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    currentIndex === i ? 'w-6 bg-[#E8B65B]' : 'w-2 bg-white/20 hover:bg-white/40'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              aria-label="Next service"
              className="w-10 h-10 rounded-full border border-[#E8B65B]/50 bg-[#16062a]/90 backdrop-blur-md flex items-center justify-center text-[#E8B65B] hover:bg-[#E8B65B] hover:text-[#120524] transition-all duration-300 shadow-md active:scale-95"
            >
              <ChevronRight size={20} />
            </button>
          </div>

        </div>

        {/* ================= 5. Bottom CTA ================= */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-6 sm:mt-8 text-center"
        >
          <a
            href="#all-services"
            className="group inline-flex items-center justify-center gap-3 px-8 sm:px-10 py-3.5 sm:py-4 rounded-full text-[#140624] font-semibold text-xs sm:text-sm uppercase tracking-widest transition-all duration-300 hover:shadow-[0_0_35px_rgba(232,182,91,0.6)] hover:-translate-y-0.5 active:translate-y-0"
            style={{
              background: 'linear-gradient(135deg, #FFE09A 0%, #C88A32 100%)'
            }}
          >
            <span>Explore All Services</span>
            <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </motion.div>

      </div>
    </section>
  )
}
