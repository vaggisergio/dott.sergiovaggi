import { articoli } from '@/lib/blog'

const siteUrl = 'https://www.sergiovaggi.it'

export default function sitemap() {
  const pagine = [
    '',
    'chi-sono/',
    'patologie-e-trattamenti/',
    'dove-trovarmi/',
    'blog/',
    'contatti/',
  ].map((path) => ({
    url: `${siteUrl}/${path}`,
    lastModified: new Date(),
  }))

  const articoliUrl = articoli.map((articolo) => ({
    url: `${siteUrl}/blog/${articolo.slug}/`,
    lastModified: articolo.dataPubblicazione,
  }))

  return [...pagine, ...articoliUrl]
}
