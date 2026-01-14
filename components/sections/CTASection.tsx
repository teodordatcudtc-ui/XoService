'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Calendar, Phone, MapPin } from 'lucide-react'
import { useState } from 'react'
import BookingModal from '@/components/BookingModal'

export default function CTASection() {
  const [isBookingOpen, setIsBookingOpen] = useState(false)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section
      ref={ref}
      className="section-padding bg-gradient-to-br from-primary via-primary-dark to-primary relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Gata să începem?
          </h2>
          <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
            Programează o consultație sau contactează-ne direct pentru a discuta despre
            nevoile tale auto.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <button
              onClick={() => setIsBookingOpen(true)}
              className="group px-8 py-4 bg-white text-primary rounded-full font-semibold text-lg hover:bg-neutral transition-all hover:scale-105 active:scale-95 shadow-2xl flex items-center gap-2"
            >
              <Calendar size={20} />
              <span>Programează acum</span>
            </button>
            <a
              href="tel:0768802902"
              className="group px-8 py-4 bg-white/10 backdrop-blur-sm text-white border border-white/20 rounded-full font-semibold text-lg hover:bg-white/20 transition-all hover:scale-105 active:scale-95 flex items-center gap-2"
            >
              <Phone size={20} />
              <span>0768 802 902</span>
            </a>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-white/80">
            <div className="flex items-center gap-2">
              <MapPin size={20} />
              <span>Strada Pucheni 73E, București</span>
            </div>
            <div className="hidden sm:block w-1 h-1 bg-white/40 rounded-full" />
            <div className="flex items-center gap-2">
              <span>Luni - Vineri: 08:00 - 18:00</span>
            </div>
          </div>
        </motion.div>
      </div>

      <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
    </section>
  )
}
