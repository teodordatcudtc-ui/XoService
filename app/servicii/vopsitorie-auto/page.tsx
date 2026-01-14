import type { Metadata } from 'next'
import ServiceDetail from '@/components/pages/ServiceDetail'

export const metadata: Metadata = {
  title: 'Vopsitorie Auto - Xo Service | Vopsire și Reparații Caroserie',
  description:
    'Servicii complete de vopsitorie auto în București. Vopsire completă sau parțială, reparații caroserie cu materiale premium.',
}

const serviceData = {
  title: 'Vopsitorie Auto',
  description:
    'Oferim servicii complete de vopsitorie auto cu materiale premium și tehnologie modernă. Fie că ai nevoie de vopsire completă sau reparații caroserie, garantăm rezultate profesionale.',
  features: [
    'Vopsire completă vehicul cu materiale premium',
    'Reparații caroserie (indenturi, zgârieturi)',
    'Vopsire parțială pentru zone afectate',
    'Pregătire și finisare profesională',
    'Color matching precis pentru culoarea originală',
    'Lacare și protecție UV',
    'Garanție pentru toate lucrările efectuate',
    'Consultanță pentru alegerea culorii',
  ],
  process: [
    {
      step: 1,
      title: 'Evaluare',
      description: 'Evaluăm starea caroseriei și stabilim planul de lucru',
    },
    {
      step: 2,
      title: 'Pregătire',
      description: 'Pregătim suprafața prin șlefuire și curățare profesională',
    },
    {
      step: 3,
      title: 'Vopsire',
      description: 'Aplicăm vopsea și lac cu tehnologie modernă',
    },
    {
      step: 4,
      title: 'Finisare',
      description: 'Finisare și verificare finală pentru calitate maximă',
    },
  ],
}

export default function VopsitorieAuto() {
  return <ServiceDetail {...serviceData} />
}
