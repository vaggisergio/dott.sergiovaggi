import Link from 'next/link'

const icons = {
  anca: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9 3a3 3 0 0 1 3 3v2.5c2.5 0 4 2 4 4.5 0 2-1 3.5-1 5.5 0 1.5.5 2.5 1.5 3.5m-9-15A3 3 0 0 0 4.5 8v3c0 3 1.5 4 1.5 7 0 1.5-.5 2.5-1 3.5"
    />
  ),
  ginocchio: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 3v6.5l-3 3.5v3l-2 5m5-11.5 3 3.5v3l2 5M9 9.5h6"
    />
  ),
  caviglia: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9 3v9.5c0 2 1 3 1 5 0 1.3-.6 2-1.5 2.5H18c.6-2-.5-3-2-3.5-2-.7-3-2-3-4V3"
    />
  ),
  rigenerativa: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 3v4m0 10v4m9-9h-4M7 12H3m12.7-6.7-2.8 2.8M9.1 14.9l-2.8 2.8m11.4 0-2.8-2.8M9.1 9.1 6.3 6.3M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z"
    />
  ),
}

export default function PatologiaCard({ patologia, href }) {
  const link = href ?? `/patologie-e-trattamenti/#${patologia.id}`

  return (
    <Link
      href={link}
      className="group flex h-full flex-col rounded-2xl border border-medical-blue-100 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-medical-blue-800"
    >
      <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-aqua-accent-50 text-aqua-accent-600 group-hover:bg-aqua-accent-100">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.6}
          className="h-6 w-6"
          aria-hidden="true"
        >
          {icons[patologia.icona]}
        </svg>
      </span>
      <h3 className="mt-4 font-serif text-lg font-semibold text-medical-blue-900">
        {patologia.titoloBreve}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-neutral-600">{patologia.sintesi}</p>
      <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-aqua-accent-600">
        Scopri di più
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
