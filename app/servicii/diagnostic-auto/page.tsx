import type { Metadata } from 'next'
import ServiceDetail from '@/components/pages/ServiceDetail'

export const metadata: Metadata = {
  title: 'Diagnostic Auto - Xo Service | Diagnostic Complet cu Echipamente Moderne',
  description:
    'Servicii de diagnostic auto complet în București. Identificăm precis problemele cu echipamente moderne și oferim raport detaliat.',
}

const serviceData = {
  title: 'Diagnostic Auto',
  description:
    'Oferim servicii complete de diagnostic auto folosind echipamente moderne și tehnologie de ultimă generație. Identificăm precis orice problemă și oferim soluții clare.',
  features: [
    'Diagnostic electronic complet pentru toate sistemele',
    'Scanare și citire coduri de eroare OBD',
    'Verificare sisteme de siguranță (ABS, ESP, Airbag)',
    'Analiză performanță motor și emisii',
    'Verificare sistem de climatizare',
    'Testare baterie și alternator',
    'Raport detaliat cu recomandări clare',
    'Consultanță gratuită pentru următorii pași',
  ],
  process: [
    {
      step: 1,
      title: 'Conectare echipament',
      description: 'Conectăm echipamentul de diagnostic la vehiculul tău',
    },
    {
      step: 2,
      title: 'Scanare completă',
      description: 'Efectuăm o scanare completă a tuturor sistemelor',
    },
    {
      step: 3,
      title: 'Analiză rezultate',
      description: 'Analizăm rezultatele și identificăm problemele',
    },
    {
      step: 4,
      title: 'Raport detaliat',
      description: 'Îți prezentăm un raport complet cu recomandări',
    },
  ],
}

export default function DiagnosticAuto() {
  return <ServiceDetail {...serviceData} />
}
