import { Inter, Lora } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ variable: '--font-inter', subsets: ['latin'], display: 'swap' })
const lora = Lora({ variable: '--font-lora', subsets: ['latin'], display: 'swap' })

const siteUrl = 'https://www.sergiovaggi.it'

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Dott. Sergio Vaggi | Chirurgo Ortopedico a Genova',
    template: '%s | Dott. Sergio Vaggi',
  },
  description:
    'Dott. Sergio Vaggi, specialista in Ortopedia e Traumatologia a Genova e Finale Ligure. Chirurgia protesica di anca, ginocchio e caviglia, chirurgia del piede e medicina rigenerativa.',
  keywords: [
    'ortopedico Genova',
    'chirurgo ortopedico Genova',
    'protesi anca Genova',
    'protesi ginocchio Genova',
    'specialista protesi caviglia Genova',
    'chirurgia piede e caviglia Genova',
    'ortopedico Finale Ligure',
    'ortopedico Voltri',
    'ortopedico Sampierdarena',
  ],
  authors: [{ name: 'Dott. Sergio Vaggi' }],
  openGraph: {
    type: 'website',
    locale: 'it_IT',
    siteName: 'Dott. Sergio Vaggi – Ortopedia e Traumatologia',
    title: 'Dott. Sergio Vaggi | Chirurgo Ortopedico a Genova',
    description:
      'Specialista in Ortopedia e Traumatologia: chirurgia protesica di anca, ginocchio e caviglia, chirurgia del piede e medicina rigenerativa a Genova e Finale Ligure.',
    url: siteUrl,
  },
  robots: { index: true, follow: true },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Physician',
  name: 'Dott. Sergio Vaggi',
  medicalSpecialty: 'Orthopedic',
  description:
    "Specialista in Ortopedia e Traumatologia. Chirurgia protesica dell'arto inferiore, chirurgia del piede e della caviglia, medicina rigenerativa.",
  url: siteUrl,
  areaServed: ['Genova', 'Finale Ligure', 'Liguria'],
  address: [
    {
      '@type': 'PostalAddress',
      streetAddress: "Via Sant'Ambrogio 27/1",
      addressLocality: 'Genova',
      addressRegion: 'Liguria',
      postalCode: '16158',
      addressCountry: 'IT',
    },
  ],
}

export default function RootLayout({ children }) {
  return (
    <html lang="it" className={`${inter.variable} ${lora.variable} h-full antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-neutral-bg text-neutral-900 antialiased">
        <a href="#contenuto-principale" className="skip-link">
          Salta al contenuto principale
        </a>
        <Header />
        <main id="contenuto-principale" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
