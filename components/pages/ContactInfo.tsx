'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Phone, MapPin, Clock, Mail } from 'lucide-react'

const contactInfo = [
  {
    icon: Phone,
    title: 'Telefon',
    content: '0768 802 902',
    link: 'tel:0768802902',
    color: 'from-primary to-primary-dark',
  },
  {
    icon: MapPin,
    title: 'Adresă',
    content: 'Strada Pucheni 73E, București',
    link: 'https://www.google.com/maps/dir/?api=1&destination=Strada+Pucheni+73E,+București',
    color: 'from-primary-dark to-primary',
  },
  {
    icon: Clock,
    title: 'Program',
    content: 'Luni - Vineri: 08:00 - 18:00',
    link: null,
    color: 'from-primary to-primary-light',
  },
  {
    icon: Mail,
    title: 'Email',
    content: 'contact@xoservice.ro',
    link: 'mailto:contact@xoservice.ro',
    color: 'from-primary-dark to-primary',
  },
]

export default function ContactInfo() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactInfo.map((info, index) => {
            const Icon = info.icon
            const Component = info.link ? 'a' : 'div'

            return (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <Component
                  href={info.link || undefined}
                  target={info.link?.startsWith('http') ? '_blank' : undefined}
                  rel={info.link?.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className={`block relative overflow-hidden rounded-2xl p-8 bg-gradient-to-br ${info.color} text-white hover:scale-105 transition-transform ${
                    info.link ? 'cursor-pointer' : ''
                  }`}
                >
                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-6">
                      <Icon size={32} />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{info.title}</h3>
                    <p className="text-white/90">{info.content}</p>
                  </div>
                  <div className="absolute inset-0 bg-white/5 opacity-0 hover:opacity-100 transition-opacity" />
                </Component>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
