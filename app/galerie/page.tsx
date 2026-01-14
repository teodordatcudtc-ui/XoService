import type { Metadata } from 'next'
import GalleryHero from '@/components/pages/GalleryHero'
import GalleryGrid from '@/components/pages/GalleryGrid'

export const metadata: Metadata = {
  title: 'Galerie - Xo Service | Atelier și Servicii în Acțiune',
  description:
    'Descoperă atelierul nostru și serviciile noastre în acțiune. Galerie foto cu interioare, echipamente și lucrări efectuate.',
  openGraph: {
    title: 'Galerie - Xo Service',
    description: 'Atelier și servicii în acțiune',
  },
}

export default function Galerie() {
  return (
    <>
      <GalleryHero />
      <GalleryGrid />
    </>
  )
}
