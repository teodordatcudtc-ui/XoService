'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Award, Users, Clock } from 'lucide-react'

const stats = [
  { icon: Award, value: '15+', label: 'Ani experiență' },
  { icon: Users, value: '5000+', label: 'Clienți mulțumiți' },
  { icon: Clock, value: '24/7', label: 'Suport' },
]

export default function AboutPreview() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="section-padding bg-accent text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-primary-dark/20 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Despre{' '}
              <span className="text-primary-light">Xo Service</span>
            </h2>
            <p className="text-lg text-white/80 mb-6 leading-relaxed">
              Cu peste 15 ani de experiență în domeniul auto, Xo Service este sinonimul
              profesionalismului și al calității în București.
            </p>
            <p className="text-lg text-white/80 mb-8 leading-relaxed">
              Ne dedicăm fiecărui client cu atenție și precisie, oferind soluții complete
              pentru toate nevoile de întreținere și reparații auto.
            </p>
            <Link
              href="/despre-noi"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-full font-semibold hover:bg-primary-dark transition-all hover:scale-105"
            >
              <span>Află mai mult</span>
              <ArrowRight size={20} />
            </Link>
          </motion.div>

          {/* Right Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-6"
          >
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
                  className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                      <Icon className="text-primary-light" size={24} />
                    </div>
                    <div className="text-4xl font-bold text-primary-light">{stat.value}</div>
                  </div>
                  <p className="text-white/70 font-medium">{stat.label}</p>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
