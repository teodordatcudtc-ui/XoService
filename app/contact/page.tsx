import type { Metadata } from 'next'
import ContactHero from '@/components/pages/ContactHero'
import ContactButtons from '@/components/pages/ContactButtons'
import ContactInfo from '@/components/pages/ContactInfo'
import ContactMap from '@/components/pages/ContactMap'

export const metadata: Metadata = {
  title: 'Contact - Xo Service | Programează o Consultație',
  description:
    'Contactează Xo Service în București. Strada Pucheni 73E. Telefon: 0768 802 902. Sună-ne sau trimite un mesaj pe WhatsApp.',
  openGraph: {
    title: 'Contact - Xo Service',
    description: 'Contactează-ne pentru servicii auto profesionale',
  },
}

export default function Contact() {
  return (
    <>
      <ContactHero />
      <ContactInfo />
      <ContactButtons />
      <ContactMap />
    </>
  )
}
