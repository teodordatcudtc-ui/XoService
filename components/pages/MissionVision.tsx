'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Target, Eye } from 'lucide-react'

export default function MissionVision() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-neutral to-neutral-dark rounded-2xl p-8 lg:p-12 border border-neutral-dark/20">
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <Target className="text-primary" size={32} />
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-accent mb-6">
                Misiunea Noastră
              </h2>
              <p className="text-lg text-accent leading-relaxed mb-4">
                Să oferim servicii auto de cea mai înaltă calitate, cu transparență,
                profesionalism și respect pentru fiecare client.
              </p>
              <p className="text-lg text-accent leading-relaxed">
                Ne angajăm să menținem standarde ridicate în fiecare intervenție, folosind
                tehnologie modernă și experiență dovedită.
              </p>
            </div>
          </motion.div>

          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-neutral to-neutral-dark rounded-2xl p-8 lg:p-12 border border-neutral-dark/20">
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <Eye className="text-primary" size={32} />
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-accent mb-6">
                Viziunea Noastră
              </h2>
              <p className="text-lg text-accent leading-relaxed mb-4">
                Să devenim referința în service auto din București, recunoscuți pentru
                excelență, inovație și satisfacția clienților.
              </p>
              <p className="text-lg text-accent leading-relaxed">
                Vrem să construim relații pe termen lung bazate pe încredere și rezultate
                consistente.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
