'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Calendar, Phone } from 'lucide-react'
import { useState } from 'react'
import BookingModal from '@/components/BookingModal'

interface ServiceDetailProps {
  title: string
  description: string
  features: string[]
  process: Array<{
    step: number
    title: string
    description: string
  }>
}

export default function ServiceDetail({
  title,
  description,
  features,
  process,
}: ServiceDetailProps) {
  const [isBookingOpen, setIsBookingOpen] = useState(false)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="section-padding bg-gradient-to-br from-primary via-primary-dark to-primary text-white pt-32">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">{title}</h1>
            <p className="text-xl text-white/90 max-w-3xl leading-relaxed mb-8">
              {description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => setIsBookingOpen(true)}
                className="px-8 py-4 bg-white text-primary rounded-full font-semibold text-lg hover:bg-neutral transition-all hover:scale-105 flex items-center justify-center gap-2"
              >
                <Calendar size={20} />
                <span>Programează acum</span>
              </button>
              <a
                href="tel:0768802902"
                className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white border border-white/20 rounded-full font-semibold text-lg hover:bg-white/20 transition-all hover:scale-105 flex items-center justify-center gap-2"
              >
                <Phone size={20} />
                <span>0768 802 902</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section ref={ref} className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-accent mb-6">
              Ce Includem
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="flex items-start gap-4 p-4 bg-neutral rounded-xl"
                >
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span className="text-accent text-lg">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Process */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-accent mb-12">
              Procesul Nostru
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {process.map((item, index) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
                  className="relative"
                >
                  <div className="bg-gradient-to-br from-neutral to-neutral-dark rounded-2xl p-6 border border-neutral-dark/20 h-full">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                      <span className="text-primary font-bold text-xl">{item.step}</span>
                    </div>
                    <h3 className="text-xl font-bold text-accent mb-2">{item.title}</h3>
                    <p className="text-accent leading-relaxed">{item.description}</p>
                  </div>
                  {index < process.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-primary" />
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
    </div>
  )
}
