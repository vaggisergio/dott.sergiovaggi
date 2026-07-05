import Link from 'next/link'
import { notFound } from 'next/navigation'
import CTASection from '@/components/CTASection'
import { articoli, getArticoloBySlug } from '@/lib/blog'

export function generateStaticParams() {
  return articoli.map((articolo) => ({ slug: articolo.slug }))
}

export function generateMetadata({ params }) {
  const articolo = getArticoloBySlug(params.slug)
  if (!articolo) return {}

  return {
    title: articolo.titolo,
    description: articolo.estratto,
    alternates: { canonical: `/blog/${articolo.slug}/` },
  }
}

function formattaData(iso) {
  return new Intl.DateTimeFormat('it-IT', { day: 'numeric', month: 'long', year: 'numeric' }).format(
    new Date(iso)
  )
}

export default function ArticoloPage({ params }) {
  const articolo = getArticoloBySlug(params.slug)
  if (!articolo) notFound()

  return (
    <>
      <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <Link
          href="/blog/"
          className="text-sm font-semibold text-medical-blue-800 hover:text-medical-blue-900"
        >
          &larr; Torna al blog
        </Link>

        <span className="mt-6 inline-flex w-fit rounded-full bg-medical-blue-50 px-3 py-1 text-xs font-semibold text-medical-blue-700">
          {articolo.categoria}
        </span>
        <h1 className="mt-4 font-serif text-3xl font-semibold leading-tight text-medical-blue-900 sm:text-4xl">
          {articolo.titolo}
        </h1>
        <div className="mt-3 flex items-center gap-3 text-sm text-neutral-500">
          <time dateTime={articolo.dataPubblicazione}>{formattaData(articolo.dataPubblicazione)}</time>
          <span aria-hidden="true">&middot;</span>
          <span>{articolo.tempoLettura} di lettura</span>
        </div>

        <div className="prose-vaggi mt-8 space-y-5">
          {articolo.contenuto.map((blocco, index) =>
            blocco.tipo === 'titolo' ? (
              <h2 key={index} className="font-serif text-2xl font-semibold text-medical-blue-900">
                {blocco.testo}
              </h2>
            ) : (
              <p key={index} className="text-base leading-relaxed text-neutral-700">
                {blocco.testo}
              </p>
            )
          )}
        </div>

        <p className="mt-10 rounded-2xl bg-medical-blue-50 p-5 text-sm text-neutral-600">
          Questo articolo ha scopo informativo e non sostituisce una valutazione medica
          personalizzata. Per un parere sul tuo caso specifico,{' '}
          <Link href="/contatti/" className="font-semibold text-medical-blue-800 underline">
            richiedi una visita
          </Link>
          .
        </p>
      </article>

      <CTASection
        titolo="Vuoi approfondire il tuo caso specifico?"
        testo="Ogni percorso è diverso: prenota una visita per una valutazione su misura."
      />
    </>
  )
}
