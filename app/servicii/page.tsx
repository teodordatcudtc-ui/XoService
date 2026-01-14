import type { Metadata } from 'next'
import ServicesHero from '@/components/pages/ServicesHero'
import ServicesList from '@/components/pages/ServicesList'

export const metadata: Metadata = {
  title: 'Servicii - Xo Service | Diagnostic, Reparații, Întreținere Auto',
  description:
    'Servicii complete auto: diagnostic, reparații, întreținere și revizie tehnică. Tehnologie modernă și experiență dovedită în București.',
  openGraph: {
    title: 'Servicii - Xo Service',
    description: 'Servicii complete auto cu tehnologie modernă',
  },
}

export default function Servicii() {
  return (
    <>
      <ServicesHero />
      <ServicesList />
    </>
  )
}
