import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Quote, 
  Star, 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  CheckCircle, 
  ArrowUpRight,
  Globe
} from 'lucide-react'

export default function TestimonialsAndContact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: 'Wedding',
    date: '',
    guestCount: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const testimonials = [
    {
      name: 'Princess Al Qasimi Family',
      role: 'Private Royal Wedding',
      venue: 'Armani Hotel Dubai, Burj Khalifa',
      quote: 'Ishqat Events transformed our wedding reception into an ethereal wonderland. Their attention to Emirati traditions paired with ultra-contemporary luxury styling was simply world-class.',
      rating: 5,
      date: 'February 2026'
    },
    {
      name: 'Alexander & Maya Vance',
      role: 'Destination 3-Day Wedding',
      venue: 'One&Only Royal Mirage, Dubai',
      quote: 'From our Haldi & Sangeet to the Grand Reception, not a single detail was missed. Our overseas guests from the UK & India are still talking about the theatrical production!',
      rating: 5,
      date: 'December 2025'
    },
    {
      name: 'Tariq Mansoor',
      role: 'Regional Managing Director',
      venue: 'Madinat Jumeirah Conference Center',
      quote: 'Flawless execution for our annual 900-delegate executive summit. Strict timelines, pristine audiovisuals, and seamless VIP escorting. The gold standard in UAE events.',
      rating: 5,
      date: 'January 2026'
    }
  ]

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <div className="relative w-full bg-[#090214] text-white overflow-hidden py-16 sm:py-20 select-none">
      
      {/* ===================== TESTIMONIALS SECTION ===================== */}
      <section id="testimonials" className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-14 mb-24">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 mb-3">
            <div className="h-[1.5px] w-8 bg-[#E8B65B]" />
            <span className="text-xs uppercase tracking-[4px] font-semibold text-[#E8B65B]">
              WORDS OF APPRECIATION
            </span>
            <div className="h-[1.5px] w-8 bg-[#E8B65B]" />
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl font-normal text-white tracking-tight">
            Client Stories & <span className="italic text-[#E8B65B]">Accolades</span>
          </h2>
          <p className="text-white/70 text-xs sm:text-sm mt-3 font-light">
            Distinguished couples and executive enterprises trust Ishqat Events to create indelible memories.
          </p>
        </div>

        {/* Testimonials 3 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="relative rounded-3xl p-6 sm:p-8 border border-[#d4af37]/25 bg-gradient-to-b from-[#18072e]/70 via-[#120524]/60 to-[#0a0215]/80 backdrop-blur-xl flex flex-col justify-between hover:border-[#E8B65B]/60 transition-all duration-300 shadow-xl group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-[#E8B65B]">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} size={15} fill="#E8B65B" />
                    ))}
                  </div>
                  <Quote size={28} className="text-[#E8B65B]/30 group-hover:text-[#E8B65B]/70 transition-colors" />
                </div>

                <p className="text-xs sm:text-sm text-white/85 font-light leading-relaxed italic mb-6">
                  "{t.quote}"
                </p>
              </div>

              <div className="border-t border-white/10 pt-4">
                <h4 className="font-serif-luxury text-base sm:text-lg font-bold text-white group-hover:text-[#f3e5ab] transition-colors">
                  {t.name}
                </h4>
                <p className="text-xs text-[#E8B65B] font-medium tracking-wide">
                  {t.role}
                </p>
                <p className="text-[11px] text-white/60 flex items-center gap-1 mt-1">
                  <MapPin size={12} className="text-[#E8B65B]" />
                  <span>{t.venue}</span>
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ===================== CONTACT / INQUIRY SECTION ===================== */}
      <section id="contact" className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-14">
        <div className="rounded-3xl border border-[#d4af37]/35 bg-gradient-to-br from-[#190632]/95 via-[#130526]/90 to-[#0b0318]/95 backdrop-blur-2xl p-6 sm:p-10 lg:p-16 shadow-[0_15px_50px_rgba(0,0,0,0.6)]">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14">
            
            {/* Left 5 Cols: Contact Information */}
            <div className="lg:col-span-5 flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-2 mb-3">
                  <span className="text-xs uppercase tracking-[3px] font-semibold text-[#E8B65B]">
                    BEGIN YOUR JOURNEY
                  </span>
                  <div className="h-[1.5px] w-8 bg-[#E8B65B]" />
                </div>
                
                <h2 className="font-serif-luxury text-2xl sm:text-4xl lg:text-5xl font-normal text-white leading-tight mb-4">
                  Plan Your Next <br />
                  <span className="italic text-[#E8B65B]">Masterpiece</span>
                </h2>
                
                <p className="text-xs sm:text-sm text-white/75 font-light leading-relaxed mb-8">
                  Whether you are envisioning a royal destination wedding or an executive corporate summit in the UAE, our producers are at your service.
                </p>

                {/* Details List */}
                <div className="space-y-4 sm:space-y-5">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-[#d4af37]/40 flex items-center justify-center text-[#E8B65B] bg-[#2a1147]/60 shrink-0">
                      <MapPin size={17} />
                    </div>
                    <div>
                      <h5 className="text-[11px] uppercase tracking-widest text-white/50 font-medium">Headquarters</h5>
                      <p className="text-xs sm:text-sm text-white font-medium">Downtown Dubai & DIFC, UAE</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-[#d4af37]/40 flex items-center justify-center text-[#E8B65B] bg-[#2a1147]/60 shrink-0">
                      <Phone size={17} />
                    </div>
                    <div>
                      <h5 className="text-[11px] uppercase tracking-widest text-white/50 font-medium">Direct Inquiries</h5>
                      <p className="text-xs sm:text-sm text-white font-medium">+971 4 000 0000 / +971 50 000 0000</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-[#d4af37]/40 flex items-center justify-center text-[#E8B65B] bg-[#2a1147]/60 shrink-0">
                      <Mail size={17} />
                    </div>
                    <div>
                      <h5 className="text-[11px] uppercase tracking-widest text-white/50 font-medium">Email Concierge</h5>
                      <p className="text-xs sm:text-sm text-white font-medium">info@ishqatevents.com</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Follow Us */}
              <div className="pt-6 mt-6 border-t border-white/10 flex items-center gap-3">
                <span className="text-xs uppercase tracking-widest text-white/60">Global Presence:</span>
                <span className="text-xs text-[#E8B65B] font-medium">Dubai • Abu Dhabi • Doha • London</span>
              </div>

            </div>

            {/* Right 7 Cols: Interactive Luxury Booking Form */}
            <div className="lg:col-span-7">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-white/70 mb-1.5 font-medium">Your Name *</label>
                    <input 
                      type="text" 
                      required
                      placeholder="e.g. Fatima Al Zahra"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 text-xs sm:text-sm focus:outline-none focus:border-[#E8B65B] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-white/70 mb-1.5 font-medium">Email Address *</label>
                    <input 
                      type="email" 
                      required
                      placeholder="name@domain.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 text-xs sm:text-sm focus:outline-none focus:border-[#E8B65B] transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-white/70 mb-1.5 font-medium">Phone Number</label>
                    <input 
                      type="tel" 
                      placeholder="+971 50 123 4567"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 text-xs sm:text-sm focus:outline-none focus:border-[#E8B65B] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-white/70 mb-1.5 font-medium">Event Type</label>
                    <select 
                      value={formData.eventType}
                      onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#1a0833] border border-white/10 text-white text-xs sm:text-sm focus:outline-none focus:border-[#E8B65B] transition-colors"
                    >
                      <option value="Wedding">Destination Wedding</option>
                      <option value="Indian Wedding">Indian Wedding Planner</option>
                      <option value="Photo/Video">Photography & Videography</option>
                      <option value="Corporate Gala">Corporate Gala / Summit</option>
                      <option value="Brand Launch">Brand / Product Launch</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-white/70 mb-1.5 font-medium">Estimated Date</label>
                    <input 
                      type="date" 
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#1a0833] border border-white/10 text-white text-xs sm:text-sm focus:outline-none focus:border-[#E8B65B] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-white/70 mb-1.5 font-medium">Expected Guest Count</label>
                    <input 
                      type="text" 
                      placeholder="e.g. 200 - 500 Guests"
                      value={formData.guestCount}
                      onChange={(e) => setFormData({ ...formData, guestCount: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 text-xs sm:text-sm focus:outline-none focus:border-[#E8B65B] transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-white/70 mb-1.5 font-medium">Event Vision & Requirements</label>
                  <textarea 
                    rows="3"
                    placeholder="Tell us about your venue preferences, custom themes, timeline, or special requirements..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 text-xs sm:text-sm focus:outline-none focus:border-[#E8B65B] transition-colors resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full group inline-flex items-center justify-center gap-3 py-3.5 sm:py-4 rounded-full font-semibold text-xs sm:text-sm uppercase tracking-widest text-[#120524] transition-all duration-300 hover:shadow-[0_0_30px_rgba(232,182,91,0.6)] cursor-pointer"
                  style={{
                    background: 'linear-gradient(135deg, #FFE09A 0%, #C88A32 100%)'
                  }}
                >
                  <span>Request Bespoke Proposal</span>
                  <Send size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
                </button>

                {submitted && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-3.5 rounded-xl bg-emerald-950/70 border border-emerald-500/40 text-emerald-300 text-xs flex items-center gap-2 justify-center text-center"
                  >
                    <CheckCircle size={16} className="shrink-0" />
                    <span>Thank you! Your event inquiry has been routed to our Lead Producer. We will connect within 24 hours.</span>
                  </motion.div>
                )}
              </form>
            </div>

          </div>

        </div>
      </section>

    </div>
  )
}
