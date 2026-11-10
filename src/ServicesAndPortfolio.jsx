import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Sparkles, 
  ArrowRight, 
  Calendar, 
  MapPin, 
  ChevronRight, 
  ShieldCheck, 
  Heart, 
  Briefcase, 
  Layers, 
  Award,
  Clock,
  Gem,
  Compass
} from 'lucide-react'

export default function ServicesAndPortfolio() {
  const [activeTab, setActiveTab] = useState('all')

  const services = [
    {
      id: 'weddings',
      category: 'social',
      title: 'Royal & Destination Weddings',
      tagline: 'Timeless Celebrations, Crafted with Soul',
      description: 'From majestic mandaps and grand ballroom setups to intimate beachfront vows across Dubai, Abu Dhabi, and Ras Al Khaimah. We orchestrate every ceremony—Haldi, Sangeet, Reception—with royal finesse.',
      features: ['Bespoke Scenography & Decor', 'Artist & Entertainment Booking', 'VIP Guest Hospitality', 'Full Day-of Live Coordination'],
      accent: 'from-[#e4b564] to-[#aa7c11]'
    },
    {
      id: 'corporate',
      category: 'corporate',
      title: 'Corporate Galas & Summits',
      tagline: 'High-Impact Experiences for Industry Leaders',
      description: 'Precision-engineered conferences, annual galas, global awards nights, and executive retreats. We combine high-end audiovisuals with immaculate protocol management.',
      features: ['State-of-the-Art AV & Stage Design', 'Keynote & Dignitary Logistics', 'Interactive Technology & Lighting', 'Branded Ambience & Gifting'],
      accent: 'from-[#dfbc6c] to-[#996515]'
    },
    {
      id: 'launches',
      category: 'corporate',
      title: 'Luxury Brand Launches',
      tagline: 'Captivating Reveals That Spark Headlines',
      description: 'Unveil automotive masterpieces, haute horlogerie, flagship venues, or luxury fashion collections with sensory stage reveals, projection mapping, and press coordination.',
      features: ['Dramatic Curtain Drop & Reveals', 'VIP & Media Guest Management', 'Custom Interactive Installations', 'Live Stream & Multi-camera Feeds'],
      accent: 'from-[#f3e5ab] to-[#c59b27]'
    },
    {
      id: 'private',
      category: 'social',
      title: 'Private Soirées & Anniversaries',
      tagline: 'Intimate Elegance in Iconic Venues',
      description: 'Milestone birthdays, rooftop parties overlooking the Burj Khalifa, and private desert galas curated with culinary theatre, acoustic musicians, and immersive themed decor.',
      features: ['Exclusive Venue Sourcing', 'Michelin-Caliber Catering Curation', 'Thematic Styling & Florals', 'Private Concierge Team'],
      accent: 'from-[#e8b65b] to-[#b8860b]'
    }
  ]

  const portfolio = [
    {
      title: 'The Royal Palm Jumeirah Wedding',
      client: 'Private Couple',
      location: 'One&Only The Palm, Dubai',
      guests: '450 Guests',
      image: '/hero-bg.png',
      type: 'Royal Wedding'
    },
    {
      title: 'Global Tech Innovation Summit 2026',
      client: 'Leading Venture Group',
      location: 'Madinat Jumeirah, Dubai',
      guests: '1,200 Delegates',
      image: '/hero-bg.png',
      type: 'Summit & Gala'
    },
    {
      title: 'Heritage Haldi & Sangeet Soirée',
      client: 'Private Celebration',
      location: 'Al Maha Desert Resort, UAE',
      guests: '300 Guests',
      image: '/about-bg.jpg',
      type: 'Cultural Celebration'
    }
  ]

  const filteredServices = activeTab === 'all' 
    ? services 
    : services.filter(s => s.category === activeTab)

  return (
    <div className="relative w-full bg-[#0b0318] text-white overflow-hidden pt-6 sm:pt-10 pb-20 select-none">
      
      {/* Decorative ambient glowing backdrops */}
      <div className="absolute top-1/4 -left-40 w-96 h-96 bg-[#d4af37]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-40 w-[450px] h-[450px] bg-[#611689]/20 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(212,175,55,0.06),_transparent_60%)] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-14">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-[#d4af37]/20">
          <div>
            <div className="flex items-center gap-3.5 mb-3">
              <span className="text-[12px] sm:text-[13px] uppercase tracking-[4px] font-semibold text-[#E8B65B]">
                OUR CAPABILITIES
              </span>
              <div className="h-[1.5px] w-12 bg-gradient-to-r from-[#E8B65B] to-transparent rounded-full" />
            </div>
            <h2 className="font-serif-luxury text-3xl sm:text-5xl lg:text-6xl font-normal text-white tracking-tight leading-tight">
              Bespoke Services, <br />
              <span className="italic text-[#E8B65B]">Flawlessly Executed</span>
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-2 mt-6 md:mt-0 p-1.5 rounded-full bg-white/[0.04] border border-[#d4af37]/30 backdrop-blur-md">
            {[
              { id: 'all', label: 'All Events' },
              { id: 'social', label: 'Social & Weddings' },
              { id: 'corporate', label: 'Corporate & Galas' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-5 py-2 rounded-full text-xs uppercase tracking-wider font-semibold transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-[#FFE09A] to-[#C88A32] text-[#120524] shadow-[0_0_15px_rgba(232,182,91,0.4)]'
                    : 'text-white/70 hover:text-white hover:bg-white/5'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Services 2x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-28">
          <AnimatePresence mode="popLayout">
            {filteredServices.map((service, idx) => (
              <motion.div
                key={service.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative rounded-3xl p-8 sm:p-10 border border-[#d4af37]/25 bg-gradient-to-b from-[#18072e]/80 via-[#130526]/60 to-[#0d021b]/90 backdrop-blur-xl hover:border-[#E8B65B]/60 transition-all duration-500 hover:shadow-[0_10px_40px_rgba(212,175,55,0.15)] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-[11px] uppercase tracking-[3px] font-bold text-[#E8B65B] px-3.5 py-1 rounded-full border border-[#E8B65B]/30 bg-[#E8B65B]/10">
                      0{idx + 1} // {service.category.toUpperCase()}
                    </span>
                    <div className="w-10 h-10 rounded-full border border-[#d4af37]/30 flex items-center justify-center text-[#E8B65B] group-hover:bg-[#E8B65B] group-hover:text-[#120524] transition-all duration-300">
                      <ArrowRight size={18} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 -rotate-45" />
                    </div>
                  </div>

                  <h3 className="font-serif-luxury text-2xl sm:text-3xl font-medium text-white group-hover:text-[#f3e5ab] transition-colors mb-2">
                    {service.title}
                  </h3>
                  <p className="text-xs uppercase tracking-widest text-[#E8B65B]/80 font-medium mb-4">
                    {service.tagline}
                  </p>
                  <p className="text-sm text-white/75 leading-relaxed font-light mb-8">
                    {service.description}
                  </p>
                </div>

                {/* Features List */}
                <div className="border-t border-white/10 pt-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {service.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-2.5 text-xs text-white/85">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#E8B65B]" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Featured Case Highlights / Portfolio Section */}
        <div className="mt-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <div className="flex items-center gap-3.5 mb-3">
                <span className="text-[12px] sm:text-[13px] uppercase tracking-[4px] font-semibold text-[#E8B65B]">
                  CURATED PORTFOLIO
                </span>
                <div className="h-[1.5px] w-12 bg-gradient-to-r from-[#E8B65B] to-transparent rounded-full" />
              </div>
              <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-normal text-white tracking-tight">
                Moments Etched in <span className="italic text-[#E8B65B]">Grandeur</span>
              </h2>
            </div>
            <a 
              href="#contact"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-[#f3e5ab] hover:text-white mt-4 md:mt-0 transition-colors group"
            >
              <span>Explore Full Portfolio</span>
              <ChevronRight size={16} className="transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          {/* Cards Showcase */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {portfolio.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="group relative rounded-3xl overflow-hidden border border-[#d4af37]/30 bg-[#16062a] flex flex-col hover:border-[#E8B65B] transition-all duration-500 shadow-xl"
              >
                <div className="relative h-64 sm:h-72 w-full overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#120524] via-[#120524]/40 to-transparent" />
                  
                  <span className="absolute top-4 left-4 text-[10px] uppercase tracking-[2px] font-bold text-[#140624] bg-gradient-to-r from-[#FFE09A] to-[#C88A32] px-3 py-1 rounded-full shadow-md">
                    {item.type}
                  </span>
                </div>

                <div className="p-6 flex flex-col justify-between flex-1">
                  <div>
                    <h4 className="font-serif-luxury text-xl font-medium text-white group-hover:text-[#f3e5ab] transition-colors mb-2">
                      {item.title}
                    </h4>
                    <p className="text-xs text-white/60 flex items-center gap-1.5 mb-4">
                      <MapPin size={13} className="text-[#E8B65B]" />
                      <span>{item.location}</span>
                    </p>
                  </div>

                  <div className="flex items-center justify-between border-t border-white/10 pt-4 text-xs text-white/70">
                    <span>{item.client}</span>
                    <span className="text-[#E8B65B] font-medium">{item.guests}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Trust Badges / Stats Bar */}
        <div className="mt-24 p-8 sm:p-12 rounded-3xl border border-[#d4af37]/30 bg-gradient-to-r from-[#18072e]/90 via-[#260c44]/80 to-[#120524]/90 backdrop-blur-xl shadow-2xl">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center divide-y lg:divide-y-0 lg:divide-x divide-[#d4af37]/20">
            <div className="pt-4 lg:pt-0">
              <div className="font-serif-luxury text-4xl sm:text-5xl font-bold text-[#E8B65B] mb-1">500+</div>
              <p className="text-xs uppercase tracking-widest text-white/80 font-medium">Bespoke Events Executed</p>
            </div>
            <div className="pt-4 lg:pt-0">
              <div className="font-serif-luxury text-4xl sm:text-5xl font-bold text-[#E8B65B] mb-1">100%</div>
              <p className="text-xs uppercase tracking-widest text-white/80 font-medium">On-Time Live Supervision</p>
            </div>
            <div className="pt-4 lg:pt-0">
              <div className="font-serif-luxury text-4xl sm:text-5xl font-bold text-[#E8B65B] mb-1">30+</div>
              <p className="text-xs uppercase tracking-widest text-white/80 font-medium">Luxury UAE Venues Partnered</p>
            </div>
            <div className="pt-4 lg:pt-0">
              <div className="font-serif-luxury text-4xl sm:text-5xl font-bold text-[#E8B65B] mb-1">1:1</div>
              <p className="text-xs uppercase tracking-widest text-white/80 font-medium">Dedicated Lead Producer</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

