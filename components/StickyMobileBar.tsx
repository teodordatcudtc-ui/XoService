'use client'

import { Phone, Calendar, Navigation } from 'lucide-react'
import { useState } from 'react'
import BookingModal from './BookingModal'

export default function StickyMobileBar() {
  const [isBookingOpen, setIsBookingOpen] = useState(false)

  return (
    <>
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-neutral-dark shadow-2xl">
        <div className="grid grid-cols-3 divide-x divide-neutral-dark">
          <a
            href="tel:0768802902"
            className="flex flex-col items-center justify-center py-3 px-2 text-primary hover:bg-neutral transition-colors active:scale-95"
          >
            <Phone size={20} />
            <span className="text-xs font-medium mt-1">Sună</span>
          </a>
          <button
            onClick={() => setIsBookingOpen(true)}
            className="flex flex-col items-center justify-center py-3 px-2 text-primary hover:bg-neutral transition-colors active:scale-95"
          >
            <Calendar size={20} />
            <span className="text-xs font-medium mt-1">Programează</span>
          </button>
          <a
            href="https://www.google.com/maps/dir/?api=1&destination=Strada+Pucheni+73E,+București"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center py-3 px-2 text-primary hover:bg-neutral transition-colors active:scale-95"
          >
            <Navigation size={20} />
            <span className="text-xs font-medium mt-1">Direcții</span>
          </a>
        </div>
      </div>
      <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
    </>
  )
}
