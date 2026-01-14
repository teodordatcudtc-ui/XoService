'use client'

import { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { X, ZoomIn } from 'lucide-react'

// Placeholder gallery items - înlocuiește cu imagini reale
const galleryItems = Array.from({ length: 12 }, (_, i) => ({
  id: i + 1,
  title: `Imagine ${i + 1}`,
  aspect: 'aspect-square',
}))

export default function GalleryGrid() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="section-padding bg-white">
      <div className="container-custom">
        {/* Symmetric Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: index * 0.05, duration: 0.5 }}
              className={`group relative cursor-pointer overflow-hidden rounded-xl ${item.aspect}`}
              onClick={() => setSelectedImage(item.id)}
            >
              {/* Placeholder - înlocuiește cu Image component */}
              <div className="absolute inset-0 bg-gradient-to-br from-neutral via-neutral-dark to-accent/20 group-hover:scale-110 transition-transform duration-500" />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors flex items-center justify-center">
                <ZoomIn className="text-white opacity-0 group-hover:opacity-100 transition-opacity" size={32} />
              </div>

              {/* Label */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
                <p className="text-white text-sm font-medium">{item.title}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {selectedImage !== null && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedImage(null)}
                className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              >
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.9, opacity: 0 }}
                  className="relative max-w-6xl w-full max-h-[90vh]"
                  onClick={(e) => e.stopPropagation()}
                >
                  <button
                    onClick={() => setSelectedImage(null)}
                    className="absolute -top-12 right-0 text-white hover:text-primary transition-colors"
                    aria-label="Închide"
                  >
                    <X size={32} />
                  </button>
                  <div className="bg-neutral rounded-xl p-4">
                    <div className="aspect-video bg-gradient-to-br from-neutral-dark to-accent/20 rounded-lg" />
                    <p className="text-white mt-4 text-center text-lg">
                      {galleryItems.find((item) => item.id === selectedImage)?.title}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
