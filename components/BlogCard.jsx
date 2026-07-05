import Link from 'next/link'

function formattaData(iso) {
  return new Intl.DateTimeFormat('it-IT', { day: 'numeric', month: 'long', year: 'numeric' }).format(
    new Date(iso)
  )
}

export default function BlogCard({ articolo }) {
  return (
    <Link
      href={`/blog/${articolo.slug}/`}
      className="group flex h-full flex-col rounded-2xl border border-medical-blue-100 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-medical-blue-800"
    >
      <span className="inline-flex w-fit rounded-full bg-medical-blue-50 px-3 py-1 text-xs font-semibold text-medical-blue-700">
        {articolo.categoria}
      </span>
      <h2 className="mt-4 font-serif text-xl font-semibold text-medical-blue-900">
        {articolo.titolo}
      </h2>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-neutral-600">{articolo.estratto}</p>
      <div className="mt-4 flex items-center justify-between text-xs text-neutral-500">
        <time dateTime={articolo.dataPubblicazione}>{formattaData(articolo.dataPubblicazione)}</time>
        <span>{articolo.tempoLettura} di lettura</span>
      </div>
      <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-aqua-accent-600">
        Leggi l&apos;articolo
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          className="h-4 w-4 transition-transform group-hover:translate-x-1"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
        </svg>
      </span>
    </Link>
  )
}
