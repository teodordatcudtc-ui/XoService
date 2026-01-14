import type { Metadata } from 'next'
import ServiceDetail from '@/components/pages/ServiceDetail'

export const metadata: Metadata = {
  title: 'Reparații Auto - Xo Service | Reparații Profesionale Mecanice și Electronice',
  description:
    'Reparații auto profesionale în București. Reparăm toate tipurile de defecțiuni mecanice și electronice cu piese de calitate.',
}

const serviceData = {
  title: 'Reparații Auto',
  description:
    'Oferim servicii complete de reparații pentru toate tipurile de defecțiuni. Folosim doar piese originale sau echivalente de cea mai bună calitate și garantăm munca efectuată.',
  features: [
    'Reparații motor (distribuție, compresie, injectoare)',
    'Reparații transmisie (cutie viteze, ambreiaj)',
    'Reparații sistem electric și electronice',
    'Reparații caroserie și vopsitorie',
    'Reparații sistem de frânare',
    'Reparații sistem de direcție și suspensie',
    'Reparații sistem de climatizare',
    'Garantie pentru toate reparațiile efectuate',
  ],
  process: [
    {
      step: 1,
      title: 'Diagnostic',
      description: 'Identificăm precis problema prin diagnostic complet',
    },
    {
      step: 2,
      title: 'Devis gratuit',
      description: 'Îți oferim un devis detaliat cu costuri transparente',
    },
    {
      step: 3,
      title: 'Reparație',
      description: 'Efectuăm reparația cu piese de calitate și profesionalism',
    },
    {
      step: 4,
      title: 'Testare',
      description: 'Testăm vehiculul pentru a ne asigura că totul funcționează perfect',
    },
  ],
}

export default function Reparatii() {
  return <ServiceDetail {...serviceData} />
}
