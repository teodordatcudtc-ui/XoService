import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Xo Service - Service Auto Profesional',
    short_name: 'Xo Service',
    description: 'Service auto profesional în București',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#a21e32',
    icons: [
      {
        src: '/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}
