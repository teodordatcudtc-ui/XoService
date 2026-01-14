'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import Link from 'next/link'
import { Gauge, Wrench, Settings, Shield, Paintbrush, Wind, ArrowRight } from 'lucide-react'

const services = [
  {
    icon: Gauge,
    title: 'Diagnostic Auto',
    description:
      'Diagnostic complet cu echipamente moderne pentru identificarea precisă a problemelor. Analizăm toate sistemele vehiculului pentru a identifica cauza exactă.',
    href: '/servicii/diagnostic-auto',
    features: [
      'Diagnostic electronic complet',
      'Scanare coduri de eroare',
      'Verificare sisteme de siguranță',
      'Raport detaliat cu recomandări',
    ],
  },
  {
    icon: Wrench,
    title: 'Reparații',
    description:
      'Reparații profesionale pentru toate tipurile de defecțiuni mecanice și electronice. Folosim doar piese originale sau echivalente de calitate.',
    href: '/servicii/reparatii',
    features: [
      'Reparații motor și transmisie',
      'Reparații sistem electric',
      'Reparații caroserie',
      'Reparații sistem de frânare',
    ],
  },
  {
    icon: Settings,
    title: 'Întreținere',
    description:
      'Servicii de întreținere preventivă pentru menținerea performanței optime a vehiculului. Programe personalizate în funcție de model și utilizare.',
    href: '/servicii/intretinere',
    features: [
      'Schimb ulei și filtre',
      'Verificare sistem de răcire',
      'Verificare sistem de frânare',
      'Verificare generală',
    ],
  },
  {
    icon: Shield,
    title: 'Revizie Tehnică',
    description:
      'Pregătire completă pentru ITP și verificări tehnice periodice. Asigurăm că vehiculul tău îndeplinește toate standardele legale.',
    href: '/servicii/revizie-tehnica',
    features: [
      'Pregătire ITP',
      'Verificare emisii',
      'Verificare siguranță',
      'Documentație completă',
    ],
  },
  {
    icon: Paintbrush,
    title: 'Vopsitorie Auto',
    description:
      'Servicii complete de vopsitorie auto cu materiale premium. Reparații caroserie, vopsire completă sau parțială cu garanție.',
    href: '/servicii/vopsitorie-auto',
    features: [
      'Vopsire completă vehicul',
      'Reparații caroserie',
      'Vopsire parțială',
      'Pregătire și finisare premium',
    ],
  },
  {
    icon: Wind,
    title: 'Service Climatizare',
    description:
      'Service complet pentru sistemul de climatizare auto. Încărcare freon, curățare, dezinfectare și reparații pentru un confort optim.',
    href: '/servicii/service-climatizare',
    features: [
      'Încărcare freon',
      'Curățare și dezinfectare',
      'Reparații sistem climatizare',
      'Verificare și diagnostic',
    ],
  },
]

export default function ServicesList() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section ref={ref} className="section-padding bg-white">
      <div className="container-custom">
        <div className="space-y-8 lg:space-y-12">
          {services.map((service, index) => {
            const Icon = service.icon
            const isHovered = hoveredIndex === index

            return (
              <motion.div
                key={service.href}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="group relative"
              >
                <Link href={service.href}>
                  <div
                    className={`relative overflow-hidden rounded-2xl border transition-all duration-500 ${
                      isHovered
                        ? 'border-primary shadow-2xl scale-[1.02]'
                        : 'border-neutral-dark/20'
                    }`}
                  >
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 p-8 lg:p-12">
                      {/* Left - Icon & Title */}
                      <div className="flex flex-col">
                        <div
                          className={`w-20 h-20 rounded-2xl flex items-center justify-center mb-6 transition-all duration-500 ${
                            isHovered
                              ? 'bg-primary scale-110'
                              : 'bg-primary/10'
                          }`}
                        >
                          <Icon
                            className={`transition-colors duration-500 ${
                              isHovered ? 'text-white' : 'text-primary'
                            }`}
                            size={40}
                          />
                        </div>
                        <h3 className="text-3xl lg:text-4xl font-bold text-accent mb-4 group-hover:text-primary transition-colors">
                          {service.title}
                        </h3>
                        <p className="text-lg text-accent leading-relaxed mb-6">
                          {service.description}
                        </p>
                      </div>

                      {/* Right - Features */}
                      <div className="flex flex-col justify-center">
                        <ul className="space-y-3 mb-6">
                          {service.features.map((feature, idx) => (
                            <motion.li
                              key={idx}
                              initial={{ opacity: 0, x: -20 }}
                              animate={
                                isHovered ? { opacity: 1, x: 0 } : { opacity: 1, x: 0 }
                              }
                              transition={{ delay: idx * 0.05 }}
                              className="flex items-start gap-3"
                            >
                              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                              <span className="text-accent">{feature}</span>
                            </motion.li>
                          ))}
                        </ul>
                        <div className="flex items-center gap-2 text-primary font-semibold group-hover:gap-4 transition-all">
                          <span>Detalii serviciu</span>
                          <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                        </div>
                      </div>
                    </div>

                    {/* Hover Overlay */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br from-primary/5 to-primary-dark/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
                    />
                  </div>
                </Link>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
