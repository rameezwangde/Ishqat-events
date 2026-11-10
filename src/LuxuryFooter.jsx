import React from 'react'
import { motion } from 'framer-motion'
import { 
  MapPin, 
  Phone, 
  Mail, 
  ArrowRight, 
  Send, 
  Sparkles, 
  Heart, 
  ChevronRight,
  Globe
} from 'lucide-react'

// Custom Luxury Social Icons (SVG)
const InstagramIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.13-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
)

const LinkedinIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
  </svg>
)

const FacebookIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
    <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/>
  </svg>
)

export default function LuxuryFooter() {
  const quickLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Destination Weddings', href: '#destination-weddings' },
    { name: 'Indian Wedding Planners', href: '#indian-wedding-planners' },
    { name: 'Corporate Events & Galas', href: '#corporate' },
    { name: 'Conferences & Summits', href: '#services' },
    { name: 'Photography & Cinematography', href: '#photography-videography' },
  ]

  const venuesAndLocations = [
    { name: 'Palm Jumeirah Palaces', href: '#' },
    { name: 'Armani Hotel Dubai (Burj Khalifa)', href: '#' },
    { name: 'Madinat Jumeirah & Al Qasr', href: '#' },
    { name: 'One&Only Royal Mirage & The Palm', href: '#' },
    { name: 'Emirates Palace, Abu Dhabi', href: '#' },
    { name: 'Al Maha Luxury Desert Resort', href: '#' },
  ]

  return (
    <footer className="relative w-full bg-[#070110] text-white overflow-hidden pt-20 pb-10 select-none border-t border-[#d4af37]/25">
      
      {/* Background Ambience & Golden Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-[#E8B65B] to-transparent shadow-[0_0_20px_#E8B65B]" />
      <div className="absolute -top-40 left-1/4 w-96 h-96 bg-[#d4af37]/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-[#701a75]/15 rounded-full blur-[160px] pointer-events-none" />

      {/* Main Footer Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-14">
        
        {/* ================= Newsletter / VIP Concierge Banner ================= */}
        <div className="rounded-3xl p-6 sm:p-10 mb-16 border border-[#d4af37]/35 bg-gradient-to-r from-[#17052c]/90 via-[#230942]/80 to-[#120424]/90 backdrop-blur-xl shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="max-w-xl text-center lg:text-left">
            <div className="inline-flex items-center gap-2 mb-2 text-[#E8B65B]">
              <Sparkles size={16} />
              <span className="text-xs uppercase tracking-[3px] font-semibold">EXCLUSIVE CONCIERGE</span>
            </div>
            <h3 className="font-serif-luxury text-2xl sm:text-3xl text-white font-normal leading-snug">
              Receive Curated Event Inspiration & <span className="italic text-[#E8B65B]">VIP Invitations</span>
            </h3>
            <p className="text-xs sm:text-sm text-white/70 font-light mt-1">
              Join Dubai's most discerning patrons for seasonal gala updates and luxury venue previews.
            </p>
          </div>

          <form onSubmit={(e) => e.preventDefault()} className="w-full lg:w-auto flex flex-col sm:flex-row items-center gap-3">
            <input 
              type="email" 
              placeholder="Enter your VIP email..."
              className="w-full sm:w-80 px-5 py-3.5 rounded-full bg-black/40 border border-[#d4af37]/40 text-white placeholder-white/40 text-xs sm:text-sm focus:outline-none focus:border-[#E8B65B] transition-colors"
            />
            <button 
              type="submit"
              className="w-full sm:w-auto px-7 py-3.5 rounded-full font-semibold text-xs sm:text-sm uppercase tracking-wider text-[#120524] transition-all duration-300 hover:shadow-[0_0_25px_rgba(232,182,91,0.6)] cursor-pointer shrink-0"
              style={{
                background: 'linear-gradient(135deg, #FFE09A 0%, #C88A32 100%)'
              }}
            >
              <span>Subscribe</span>
            </button>
          </form>
        </div>

        {/* ================= 4-Column Footer Navigation ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-white/10">
          
          {/* Column 1: Brand & Identity (5 cols on lg) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              {/* Official Brand Logo */}
              <a href="#" className="inline-flex items-center group mb-6">
                <img 
                  src="/ishqat-logo.png" 
                  alt="Ishqat Events Logo" 
                  className="h-14 sm:h-16 md:h-20 w-auto object-contain transition-all duration-300 group-hover:scale-105 drop-shadow-[0_0_15px_rgba(212,175,55,0.4)]"
                />
              </a>

              <p className="text-white/75 text-xs sm:text-[13.5px] leading-relaxed font-light max-w-sm mb-6">
                “Ishqat” represents an unyielding devotion to beauty, precision, and majesty. We craft bespoke destination weddings, royal celebrations, and executive corporate summits across the United Arab Emirates.
              </p>

              {/* Social Media Links */}
              <div className="flex items-center gap-3">
                {[
                  { icon: InstagramIcon, label: 'Instagram', href: 'https://instagram.com' },
                  { icon: LinkedinIcon, label: 'LinkedIn', href: 'https://linkedin.com' },
                  { icon: FacebookIcon, label: 'Facebook', href: 'https://facebook.com' }
                ].map((s, idx) => {
                  const Icon = s.icon
                  return (
                    <a
                      key={idx}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.label}
                      className="w-10 h-10 rounded-full border border-[#d4af37]/35 bg-[#17052c]/80 flex items-center justify-center text-white/80 hover:text-[#E8B65B] hover:border-[#E8B65B] hover:shadow-[0_0_15px_rgba(232,182,91,0.35)] transition-all duration-300"
                    >
                      <Icon />
                    </a>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Column 2: Event Capabilities (2.5 cols on lg) */}
          <div className="lg:col-span-3">
            <h4 className="font-serif-luxury text-lg font-medium text-white tracking-wider mb-5 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E8B65B]" />
              <span>Event Services</span>
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-[13px] text-white/70">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="hover:text-[#E8B65B] transition-colors flex items-center gap-1.5 group"
                  >
                    <ChevronRight size={13} className="text-[#E8B65B]/60 group-hover:translate-x-1 transition-transform" />
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: UAE Venues Partnered (2 cols on lg) */}
          <div className="lg:col-span-2">
            <h4 className="font-serif-luxury text-lg font-medium text-white tracking-wider mb-5 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E8B65B]" />
              <span>Iconic Venues</span>
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-[13px] text-white/70">
              {venuesAndLocations.map((v) => (
                <li key={v.name}>
                  <a 
                    href={v.href}
                    className="hover:text-[#E8B65B] transition-colors flex items-center gap-1.5 group"
                  >
                    <ChevronRight size={13} className="text-[#E8B65B]/60 group-hover:translate-x-1 transition-transform" />
                    <span>{v.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Dubai Concierge (2 cols on lg) */}
          <div className="lg:col-span-2">
            <h4 className="font-serif-luxury text-lg font-medium text-white tracking-wider mb-5 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E8B65B]" />
              <span>Direct Concierge</span>
            </h4>
            <div className="space-y-3.5 text-xs text-white/75">
              <div className="flex items-start gap-2.5">
                <MapPin size={15} className="text-[#E8B65B] shrink-0 mt-0.5" />
                <span>Downtown Dubai & DIFC, Dubai, UAE</span>
              </div>
              <div className="flex items-start gap-2.5">
                <Phone size={15} className="text-[#E8B65B] shrink-0 mt-0.5" />
                <span>+971 4 000 0000</span>
              </div>
              <div className="flex items-start gap-2.5">
                <Mail size={15} className="text-[#E8B65B] shrink-0 mt-0.5" />
                <span className="break-all">concierge@ishqatevents.com</span>
              </div>
              <div className="pt-2">
                <a 
                  href="#contact"
                  className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest text-[#E8B65B] font-semibold hover:underline"
                >
                  <span>Book Consultation</span>
                  <ArrowRight size={13} />
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* ================= Bottom Legal Bar ================= */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-white/50 gap-4 text-center sm:text-left">
          <p>© {new Date().getFullYear()} Ishqat Events LLC. Dubai, United Arab Emirates. All rights reserved.</p>
          <div className="flex items-center gap-5 sm:gap-8 flex-wrap justify-center">
            <a href="#" className="hover:text-[#E8B65B] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#E8B65B] transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-[#E8B65B] transition-colors">Licensing & Permits</a>
            <a href="#" className="hover:text-[#E8B65B] transition-colors">Sitemap</a>
          </div>
        </div>

      </div>
    </footer>
  )
}

