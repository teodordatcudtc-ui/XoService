import HeroSection from '@/components/sections/HeroSection'
import ServicesPreview from '@/components/sections/ServicesPreview'
import AboutPreview from '@/components/sections/AboutPreview'
import TestimonialsCarousel from '@/components/sections/TestimonialsCarousel'
import GalleryPreview from '@/components/sections/GalleryPreview'
import CTASection from '@/components/sections/CTASection'

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesPreview />
      <AboutPreview />
      <TestimonialsCarousel />
      <GalleryPreview />
      <CTASection />
    </>
  )
}
