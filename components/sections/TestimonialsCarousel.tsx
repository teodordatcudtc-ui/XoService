'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Ion Popescu',
    role: 'Proprietar BMW Series 3',
    content:
      'Serviciu excelent! Echipa este foarte profesionistă și atentă la detalii. Mașina mea a fost reparată perfect și la timp.',
    rating: 5,
  },
  {
    name: 'Maria Ionescu',
    role: 'Proprietar Audi A4',
    content:
      'Recomand cu încredere! Am fost mulțumită de diagnosticul precis și de prețurile corecte. Personalul este foarte prietenos.',
    rating: 5,
  },
  {
    name: 'Alexandru Georgescu',
    role: 'Proprietar Mercedes C-Class',
    content:
      'Cel mai bun service din București! Am încredere deplină în echipa Xo Service. Servicii de calitate superioară.',
    rating: 5,
  },
  {
    name: 'Elena Radu',
    role: 'Proprietar VW Golf',
    content:
      'Foarte mulțumită de serviciile oferite. Totul a fost explicat clar și am primit un tratament excelent. Voi reveni cu siguranță!',
    rating: 5,
  },
]

export default function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    if (isAutoPlaying) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length)
      }, 5000)
    } else {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [isAutoPlaying])

  const goToPrevious = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const goToNext = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const goToSlide = (index: number) => {
    setIsAutoPlaying(false)
    setCurrentIndex(index)
  }

  return (
    <section className="section-padding bg-neutral relative overflow-hidden">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-accent mb-6">
            Ce Spun Clienții
          </h2>
          <p className="text-lg text-accent max-w-2xl mx-auto">
            Experiențele reale ale clienților noștri mulțumiți
          </p>
        </div>

        {/* Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div
            className="relative h-80 sm:h-96"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                <div className="bg-white rounded-2xl p-8 sm:p-12 shadow-xl h-full flex flex-col">
                  {/* Quote Icon */}
                  <div className="mb-6">
                    <Quote className="text-primary" size={48} />
                  </div>

                  {/* Rating */}
                  <div className="flex gap-1 mb-6">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="fill-primary text-primary"
                        size={20}
                      />
                    ))}
                  </div>

                  {/* Content */}
                  <p className="text-lg text-accent mb-8 flex-grow leading-relaxed">
                    "{testimonials[currentIndex].content}"
                  </p>

                  {/* Author */}
                  <div>
                    <div className="font-bold text-accent text-lg">
                      {testimonials[currentIndex].name}
                    </div>
                    <div className="text-neutral-dark text-sm">
                      {testimonials[currentIndex].role}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 sm:-translate-x-12 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center hover:bg-primary-dark transition-colors shadow-lg"
            aria-label="Testimonial anterior"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 sm:translate-x-12 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center hover:bg-primary-dark transition-colors shadow-lg"
            aria-label="Testimonial următor"
          >
            <ChevronRight size={24} />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? 'bg-primary w-8'
                    : 'bg-neutral-dark hover:bg-primary/50'
                }`}
                aria-label={`Mergi la testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
