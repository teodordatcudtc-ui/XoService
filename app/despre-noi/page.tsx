import type { Metadata } from 'next'
import AboutHero from '@/components/pages/AboutHero'
import MissionVision from '@/components/pages/MissionVision'
import TeamSection from '@/components/pages/TeamSection'
import ValuesSection from '@/components/pages/ValuesSection'

export const metadata: Metadata = {
  title: 'Despre Noi - Xo Service | Experiență și Profesionalism',
  description:
    'Descoperă povestea Xo Service - peste 15 ani de experiență în service auto profesional în București. Misiunea, viziunea și echipa noastră.',
  openGraph: {
    title: 'Despre Noi - Xo Service',
    description: 'Peste 15 ani de experiență în service auto profesional în București',
  },
}

export default function DespreNoi() {
  return (
    <>
      <AboutHero />
      <MissionVision />
      <ValuesSection />
      <TeamSection />
    </>
  )
}
