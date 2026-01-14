import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/politica-confidentialitate', '/termeni-si-conditii'],
      },
    ],
    sitemap: 'https://xoservice.ro/sitemap.xml',
  }
}
