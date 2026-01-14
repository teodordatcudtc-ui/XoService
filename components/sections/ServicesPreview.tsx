'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Link from 'next/link'
import { Wrench, Settings, Gauge, Shield, ArrowRight } from 'lucide-react'

const services = [
  {
    icon: Gauge,
    title: 'Diagnostic Auto',
    description: 'Diagnostic complet cu echipamente moderne pentru identificarea precisă a problemelor.',
    href: '/servicii/diagnostic-auto',
    color: 'from-primary to-primary-dark',
  },
  {
    icon: Wrench,
    title: 'Reparații',
    description: 'Reparații profesionale pentru toate tipurile de defecțiuni mecanice și electronice.',
    href: '/servicii/reparatii',
    color: 'from-primary-dark to-primary',
  },
  {
    icon: Settings,
    title: 'Întreținere',
    description: 'Servicii de întreținere preventivă pentru menținerea performanței optime.',
    href: '/servicii/intretinere',
    color: 'from-primary to-primary-light',
  },
  {
    icon: Shield,
    title: 'Revizie Tehnică',
    description: 'Pregătire completă pentru ITP și verificări tehnice periodice.',
    href: '/servicii/revizie-tehnica',
    color: 'from-primary-dark to-primary',
  },
]

export default function ServicesPreview() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="section-padding bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-dark rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 lg:mb-24"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-accent mb-6">
            Serviciile Noastre
          </h2>
          <p className="text-lg text-accent max-w-2xl mx-auto">
            Oferim soluții complete pentru toate nevoile tale auto, cu tehnologie modernă și
            experiență dovedită.
          </p>
        </motion.div>

        {/* Services Grid - Asymmetric Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            const isLarge = index === 0 || index === 2

            return (
              <motion.div
                key={service.href}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                className={`group relative ${
                  isLarge ? 'md:col-span-1' : 'md:col-span-1'
                }`}
              >
                <Link href={service.href}>
                  <div className="relative h-full bg-gradient-to-br from-neutral to-neutral-dark rounded-2xl p-8 lg:p-10 overflow-hidden border border-neutral-dark/20 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl">
                    {/* Background Gradient */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                    />

                    {/* Content */}
                    <div className="relative z-10">
                      <div className="mb-6">
                        <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                          <Icon className="text-primary" size={32} />
                        </div>
                      </div>

                      <h3 className="text-2xl lg:text-3xl font-bold text-accent mb-4 group-hover:text-primary transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-accent mb-6 leading-relaxed">
                        {service.description}
                      </p>

                      <div className="flex items-center gap-2 text-primary font-semibold group-hover:gap-4 transition-all">
                        <span>Detalii</span>
                        <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                      </div>
                    </div>

                    {/* Hover Effect */}
                    <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                </Link>
              </motion.div>
            )
          })}
        </div>

        {/* View All Link */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-center mt-12"
        >
          <Link
            href="/servicii"
            className="inline-flex items-center gap-2 text-primary font-semibold text-lg hover:gap-4 transition-all"
          >
            <span>Vezi toate serviciile</span>
            <ArrowRight size={20} />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
