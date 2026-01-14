import type { Metadata } from 'next'
import ServiceDetail from '@/components/pages/ServiceDetail'

export const metadata: Metadata = {
  title: 'Întreținere Auto - Xo Service | Servicii de Întreținere Preventivă',
  description:
    'Servicii de întreținere auto preventivă în București. Programe personalizate pentru menținerea performanței optime a vehiculului.',
}

const serviceData = {
  title: 'Întreținere Auto',
  description:
    'Întreținerea preventivă este esențială pentru menținerea performanței și siguranței vehiculului. Oferim programe personalizate adaptate nevoilor tale și modelului de autovehicul.',
  features: [
    'Schimb ulei și filtre (motor, habitaclu, combustibil)',
    'Verificare și completare lichide (răcire, frână, direcție)',
    'Verificare sistem de răcire și termostat',
    'Verificare sistem de frânare (plăcuțe, discuri, lichid)',
    'Verificare baterie și sistem de încărcare',
    'Verificare sistem de iluminat',
    'Verificare anvelope și presiune',
    'Verificare generală și raport de stare',
  ],
  process: [
    {
      step: 1,
      title: 'Evaluare',
      description: 'Evaluăm starea actuală a vehiculului',
    },
    {
      step: 2,
      title: 'Planificare',
      description: 'Creăm un plan de întreținere personalizat',
    },
    {
      step: 3,
      title: 'Execuție',
      description: 'Efectuăm toate intervențiile necesare',
    },
    {
      step: 4,
      title: 'Documentare',
      description: 'Îți oferim documentație completă și recomandări',
    },
  ],
}

export default function Intretinere() {
  return <ServiceDetail {...serviceData} />
}
