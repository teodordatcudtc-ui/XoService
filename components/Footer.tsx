import Link from 'next/link'
import { Phone, MapPin, Mail, Clock } from 'lucide-react'

const footerLinks = {
  navigare: [
    { href: '/', label: 'Acasă' },
    { href: '/despre-noi', label: 'Despre noi' },
    { href: '/servicii', label: 'Servicii' },
    { href: '/galerie', label: 'Galerie' },
    { href: '/contact', label: 'Contact' },
  ],
  legal: [
    { href: '/politica-confidentialitate', label: 'Politica de confidențialitate' },
    { href: '/termeni-si-conditii', label: 'Termeni și condiții' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-accent text-white">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          {/* About */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-4 text-primary-light">Xo Service</h3>
            <p className="text-neutral-dark mb-6 max-w-md">
              Service auto profesional în București. Oferim servicii complete de
              întreținere, reparații și diagnostic auto cu experiență și profesionalism.
            </p>
            <div className="space-y-3">
              <a
                href="tel:0768802902"
                className="flex items-center gap-3 text-neutral-dark hover:text-white transition-colors"
              >
                <Phone size={18} />
                <span>0768 802 902</span>
              </a>
              <div className="flex items-start gap-3 text-neutral-dark">
                <MapPin size={18} className="mt-1 flex-shrink-0" />
                <span>Strada Pucheni 73E, București</span>
              </div>
              <div className="flex items-center gap-3 text-neutral-dark">
                <Clock size={18} />
                <span>Luni - Vineri: 08:00 - 18:00</span>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Navigare</h4>
            <ul className="space-y-2">
              {footerLinks.navigare.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-neutral-dark hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-neutral-dark hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-accent-light mt-12 pt-8 text-center text-neutral-dark text-sm">
          <p>&copy; {new Date().getFullYear()} Xo Service. Toate drepturile rezervate.</p>
        </div>
      </div>
    </footer>
  )
}
