'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Award, Heart, Shield, Zap } from 'lucide-react'

const values = [
  {
    icon: Award,
    title: 'Calitate',
    description: 'Standarduri ridicate în fiecare serviciu oferit',
  },
  {
    icon: Heart,
    title: 'Pasiune',
    description: 'Iubim ceea ce facem și se vede în rezultate',
  },
  {
    icon: Shield,
    title: 'Încredere',
    description: 'Transparență și onestitate în fiecare interacțiune',
  },
  {
    icon: Zap,
    title: 'Eficiență',
    description: 'Rezultate rapide fără compromisuri la calitate',
  },
]

export default function ValuesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="section-padding bg-accent text-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Valorile Noastre
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Principiile care ne ghidează în fiecare zi
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {values.map((value, index) => {
            const Icon = value.icon
            return (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all"
              >
                <div className="w-16 h-16 bg-primary/20 rounded-xl flex items-center justify-center mb-6">
                  <Icon className="text-primary-light" size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-primary-light">
                  {value.title}
                </h3>
                <p className="text-white/70 leading-relaxed">{value.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
