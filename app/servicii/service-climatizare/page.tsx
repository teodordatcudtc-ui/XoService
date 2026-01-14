import type { Metadata } from 'next'
import ServiceDetail from '@/components/pages/ServiceDetail'

export const metadata: Metadata = {
  title: 'Service Climatizare - Xo Service | Încărcare și Reparații Climatizare Auto',
  description:
    'Service complet pentru climatizare auto în București. Încărcare freon, curățare, dezinfectare și reparații pentru confort optim.',
}

const serviceData = {
  title: 'Service Climatizare',
  description:
    'Oferim servicii complete pentru sistemul de climatizare auto. De la încărcare freon până la reparații complexe, asigurăm un confort optim în fiecare sezon.',
  features: [
    'Încărcare freon (R134a, R1234yf)',
    'Curățare și dezinfectare sistem',
    'Reparații compresor climatizare',
    'Reparații condensator și evaporator',
    'Verificare și diagnostic complet',
    'Înlocuire filtre habitaclu',
    'Testare performanță sistem',
    'Consultanță pentru întreținere preventivă',
  ],
  process: [
    {
      step: 1,
      title: 'Diagnostic',
      description: 'Verificăm sistemul de climatizare pentru a identifica problemele',
    },
    {
      step: 2,
      title: 'Curățare',
      description: 'Curățăm și dezinfectăm sistemul pentru performanță optimă',
    },
    {
      step: 3,
      title: 'Reparație',
      description: 'Efectuăm reparațiile necesare sau înlocuim componentele defecte',
    },
    {
      step: 4,
      title: 'Încărcare',
      description: 'Încărcăm freon și testăm performanța sistemului',
    },
  ],
}

export default function ServiceClimatizare() {
  return <ServiceDetail {...serviceData} />
}
