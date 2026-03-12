import type { MetadataRoute } from 'next'
import { artistas } from '@/data/artistas'

const BASE_URL = 'https://btcfestival.com.br'

export default function sitemap(): MetadataRoute.Sitemap {
  const artistaPages = artistas.map((a) => ({
    url: `${BASE_URL}/artistas/${a.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    ...artistaPages,
  ]
}
