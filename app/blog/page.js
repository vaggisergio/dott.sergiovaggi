import CTASection from '@/components/CTASection'
import BlogCard from '@/components/BlogCard'
import { articoli } from '@/lib/blog'

export const metadata = {
  title: 'Blog e Consigli | Ortopedia spiegata in modo chiaro',
  description:
    "Approfondimenti su artrosi, protesi di ginocchio e caviglia, medicina rigenerativa: consigli pratici del Dott. Sergio Vaggi per orientarsi tra i dubbi più comuni sulla salute delle articolazioni.",
  alternates: { canonical: '/blog/' },
}

export default function BlogPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-medical-blue-50 via-white to-white">
        <div className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 lg:py-20 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wide text-aqua-accent-600">
            Blog e consigli
          </p>
          <h1 className="mt-3 font-serif text-4xl font-semibold leading-tight text-medical-blue-900 sm:text-5xl">
            Ortopedia spiegata in modo chiaro
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-neutral-700">
            Articoli pensati per rispondere ai dubbi più frequenti sulle patologie di anca,
            ginocchio, piede e caviglia, senza tecnicismi inutili ma con rigore scientifico.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {articoli.map((articolo) => (
            <BlogCard key={articolo.slug} articolo={articolo} />
          ))}
        </div>
      </section>

      <CTASection
        titolo="Hai un dubbio che non trovi qui?"
        testo="Ogni situazione è diversa: richiedi una visita per una valutazione personalizzata del tuo caso."
      />
    </>
  )
}
