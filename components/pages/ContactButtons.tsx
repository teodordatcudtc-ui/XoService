'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Phone, MessageCircle } from 'lucide-react'

export default function ContactButtons() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="section-padding bg-neutral">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold text-accent mb-6">
              Contactează-ne
            </h2>
            <p className="text-lg text-accent">
              Sună-ne direct sau trimite-ne un mesaj pe WhatsApp
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Phone Button */}
            <motion.a
              href="tel:0768802902"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="group relative bg-white rounded-2xl p-8 lg:p-12 shadow-xl hover:shadow-2xl transition-all hover:scale-105"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all">
                  <Phone className="text-primary group-hover:text-white transition-colors" size={40} />
                </div>
                <h3 className="text-2xl font-bold text-accent mb-4">Sună-ne</h3>
                <p className="text-lg text-accent mb-6">
                  Contactează-ne direct pentru programări sau întrebări
                </p>
                <div className="px-6 py-3 bg-primary text-white rounded-full font-semibold text-lg group-hover:bg-primary-dark transition-colors">
                  0768 802 902
                </div>
              </div>
            </motion.a>

            {/* WhatsApp Button */}
            <motion.a
              href="https://wa.me/40768802902"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="group relative bg-white rounded-2xl p-8 lg:p-12 shadow-xl hover:shadow-2xl transition-all hover:scale-105"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-green-500 group-hover:scale-110 transition-all">
                  <MessageCircle className="text-green-500 group-hover:text-white transition-colors" size={40} />
                </div>
                <h3 className="text-2xl font-bold text-accent mb-4">WhatsApp</h3>
                <p className="text-lg text-accent mb-6">
                  Trimite-ne un mesaj rapid pe WhatsApp
                </p>
                <div className="px-6 py-3 bg-green-500 text-white rounded-full font-semibold text-lg group-hover:bg-green-600 transition-colors">
                  Deschide WhatsApp
                </div>
              </div>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
