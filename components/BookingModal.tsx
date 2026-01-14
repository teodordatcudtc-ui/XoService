'use client'

import { useState } from 'react'
import { X, Calendar, Clock, User, Phone, Mail } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

interface BookingModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    date: '',
    time: '',
    service: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulare trimitere email
    const mailtoLink = `mailto:contact@xoservice.ro?subject=Programare - ${formData.name}&body=Nume: ${formData.name}%0ATelefon: ${formData.phone}%0AEmail: ${formData.email}%0AData: ${formData.date}%0AOra: ${formData.time}%0AServiciu: ${formData.service}%0AMesaj: ${formData.message}`
    window.location.href = mailtoLink
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      onClose()
      setFormData({
        name: '',
        phone: '',
        email: '',
        date: '',
        time: '',
        service: '',
        message: '',
      })
    }, 2000)
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="sticky top-0 bg-white border-b border-neutral-dark px-6 py-4 flex items-center justify-between">
                <h2 className="text-2xl font-bold text-accent">Programează o consultație</h2>
                <button
                  onClick={onClose}
                  className="text-accent hover:text-primary transition-colors"
                  aria-label="Închide"
                >
                  <X size={24} />
                </button>
              </div>

              {submitted ? (
                <div className="p-12 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Calendar className="text-primary" size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-accent mb-2">Mulțumim!</h3>
                  <p className="text-neutral-dark">
                    Programarea ta a fost trimisă. Te vom contacta în curând.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="p-6 space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="flex items-center gap-2 text-sm font-medium text-accent mb-2">
                        <User size={16} />
                        Nume complet *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-2.5 border border-neutral-dark rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                    <div>
                      <label className="flex items-center gap-2 text-sm font-medium text-accent mb-2">
                        <Phone size={16} />
                        Telefon *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-2.5 border border-neutral-dark rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="flex items-center gap-2 text-sm font-medium text-accent mb-2">
                      <Mail size={16} />
                      Email
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 border border-neutral-dark rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="flex items-center gap-2 text-sm font-medium text-accent mb-2">
                        <Calendar size={16} />
                        Data preferată *
                      </label>
                      <input
                        type="date"
                        required
                        min={new Date().toISOString().split('T')[0]}
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        className="w-full px-4 py-2.5 border border-neutral-dark rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                    <div>
                      <label className="flex items-center gap-2 text-sm font-medium text-accent mb-2">
                        <Clock size={16} />
                        Ora preferată *
                      </label>
                      <input
                        type="time"
                        required
                        value={formData.time}
                        onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                        className="w-full px-4 py-2.5 border border-neutral-dark rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-accent mb-2 block">
                      Serviciu solicitat
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-2.5 border border-neutral-dark rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      <option value="">Selectează un serviciu</option>
                      <option value="diagnostic">Diagnostic auto</option>
                      <option value="reparatii">Reparații</option>
                      <option value="intretinere">Întreținere</option>
                      <option value="revizie">Revizie tehnică</option>
                      <option value="alte">Alte servicii</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-accent mb-2 block">
                      Mesaj (opțional)
                    </label>
                    <textarea
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={4}
                      className="w-full px-4 py-2.5 border border-neutral-dark rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 bg-primary text-white rounded-lg font-semibold hover:bg-primary-dark transition-colors active:scale-98"
                  >
                    Trimite programarea
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
