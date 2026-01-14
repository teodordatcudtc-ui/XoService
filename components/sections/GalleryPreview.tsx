'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

// Placeholder images - înlocuiește cu imagini reale
const galleryItems = [
  { id: 1 },
  { id: 2 },
  { id: 3 },
  { id: 4 },
  { id: 5 },
  { id: 6 },
]

export default function GalleryPreview() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="section-padding bg-white relative overflow-hidden">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-accent mb-6">
            Galerie
          </h2>
          <p className="text-lg text-accent max-w-2xl mx-auto">
            Descoperă atelierul nostru și serviciile noastre în acțiune
          </p>
        </motion.div>

        {/* Symmetric Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6 mb-12">
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group relative aspect-square overflow-hidden rounded-xl"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary-dark/20 group-hover:from-primary/30 group-hover:to-primary-dark/30 transition-all duration-500" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <span className="text-white font-bold text-xl">+</span>
                </div>
              </div>
              {/* Placeholder - înlocuiește cu Image component */}
              <div className="absolute inset-0 bg-gradient-to-br from-neutral to-neutral-dark" />
            </motion.div>
          ))}
        </div>

        {/* View All Link */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-center"
        >
          <Link
            href="/galerie"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-full font-semibold text-lg hover:bg-primary-dark transition-all hover:scale-105"
          >
            <span>Vezi toată galeria</span>
            <ArrowRight size={20} />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
