import type { Metadata } from 'next'
import ServiceDetail from '@/components/pages/ServiceDetail'

export const metadata: Metadata = {
  title: 'Revizie Tehnică - Xo Service | Pregătire ITP și Verificări Tehnice',
  description:
    'Servicii de revizie tehnică și pregătire ITP în București. Asigurăm că vehiculul îndeplinește toate standardele legale.',
}

const serviceData = {
  title: 'Revizie Tehnică',
  description:
    'Pregătim complet vehiculul tău pentru ITP și verificări tehnice periodice. Ne asigurăm că toate sistemele funcționează corect și că vehiculul îndeplinește standardele legale.',
  features: [
    'Pregătire completă pentru ITP',
    'Verificare emisii poluante',
    'Verificare sisteme de siguranță',
    'Verificare sistem de frânare',
    'Verificare sistem de direcție',
    'Verificare iluminat și semnalizare',
    'Verificare anvelope și suspensie',
    'Documentație completă pentru ITP',
  ],
  process: [
    {
      step: 1,
      title: 'Verificare pre-ITP',
      description: 'Efectuăm o verificare completă a tuturor sistemelor',
    },
    {
      step: 2,
      title: 'Identificare probleme',
      description: 'Identificăm orice problemă care ar putea cauza respingerea',
    },
    {
      step: 3,
      title: 'Reparații necesare',
      description: 'Efectuăm reparațiile necesare pentru a trece ITP-ul',
    },
    {
      step: 4,
      title: 'Documentare',
      description: 'Îți oferim toate documentele necesare pentru ITP',
    },
  ],
}

export default function RevizieTehnica() {
  return <ServiceDetail {...serviceData} />
}
