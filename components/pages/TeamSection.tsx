'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Users } from 'lucide-react'

export default function TeamSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-block w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
            <Users className="text-primary" size={32} />
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-accent mb-6">
            Echipa Noastră
          </h2>
          <p className="text-lg text-accent max-w-2xl mx-auto">
            O echipă de specialiști dedicați, cu experiență vastă în domeniul auto
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="max-w-4xl mx-auto bg-gradient-to-br from-neutral to-neutral-dark rounded-2xl p-8 lg:p-12 border border-neutral-dark/20"
        >
          <p className="text-lg text-accent leading-relaxed mb-6">
            Echipa Xo Service este formată din mecanici certificați și specialiști cu
            experiență de peste 15 ani în domeniul auto. Fiecare membru al echipei noastre
            este dedicat să ofere cel mai bun serviciu posibil.
          </p>
          <p className="text-lg text-accent leading-relaxed">
            Continuăm să ne perfecționăm prin training-uri constante și să rămânem la
            curent cu cele mai noi tehnologii și metode de lucru din industrie.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
