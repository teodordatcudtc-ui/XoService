import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import StickyMobileBar from '@/components/StickyMobileBar'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Xo Service - Service Auto Profesional în București',
  description: 'Service auto profesional în București. Oferim servicii complete de întreținere, reparații și diagnostic auto cu experiență și profesionalism.',
  keywords: 'service auto, reparații auto, întreținere auto, București, diagnostic auto',
  authors: [{ name: 'Xo Service' }],
  creator: 'Xo Service',
  publisher: 'Xo Service',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://xoservice.ro'),
  alternates: {
    canonical: '/',
    languages: {
      'ro-RO': '/ro',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'ro_RO',
    url: 'https://xoservice.ro',
    title: 'Xo Service - Service Auto Profesional în București',
    description: 'Service auto profesional în București. Oferim servicii complete de întreținere, reparații și diagnostic auto.',
    siteName: 'Xo Service',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Xo Service - Service Auto Profesional',
    description: 'Service auto profesional în București',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ro" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'AutoRepair',
              name: 'Xo Service',
              description: 'Service auto profesional în București',
              url: 'https://xoservice.ro',
              telephone: '+40768802902',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'Strada Pucheni 73E',
                addressLocality: 'București',
                addressCountry: 'RO',
              },
              geo: {
                '@type': 'GeoCoordinates',
                latitude: 44.39251199999999,
                longitude: 26.022649174316406,
              },
              openingHoursSpecification: [
                {
                  '@type': 'OpeningHoursSpecification',
                  dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                  opens: '08:00',
                  closes: '18:00',
                },
              ],
              priceRange: '$$',
            }),
          }}
        />
      </head>
      <body>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <StickyMobileBar />
      </body>
    </html>
  )
}
