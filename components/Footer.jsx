import Link from 'next/link'
import { navLinks, dottore, sedi } from '@/lib/data'

export default function Footer() {
  const anno = new Date().getFullYear()

  return (
    <footer className="mt-24 bg-medical-blue-900 text-medical-blue-100">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div>
          <p className="font-serif text-xl font-semibold text-white">{dottore.nome}</p>
          <p className="mt-1 text-sm text-medical-blue-200">{dottore.titolo}</p>
          <p className="mt-4 text-sm leading-relaxed text-medical-blue-200">
            Chirurgia protesica dell&apos;arto inferiore, chirurgia del piede e della caviglia
            e medicina rigenerativa, a Genova e Finale Ligure.
          </p>
        </div>

        <nav aria-label="Mappa del sito nel footer">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-aqua-accent-200">
            Pagine
          </h2>
          <ul className="mt-4 space-y-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-medical-blue-100 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-aqua-accent-200"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wide text-aqua-accent-200">
            Sedi di ricevimento
          </h2>
          <ul className="mt-4 space-y-2">
            {sedi.map((sede) => (
              <li key={sede.id} className="text-sm text-medical-blue-100">
                <Link
                  href="/dove-trovarmi/"
                  className="hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-aqua-accent-200"
                >
                  {sede.nome}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wide text-aqua-accent-200">
            Contatti
          </h2>
          <ul className="mt-4 space-y-2 text-sm text-medical-blue-100">
            <li>
              <a href={`tel:${dottore.telefonoHref}`} className="hover:text-white">
                {dottore.telefono}
              </a>
            </li>
            <li>
              <a href={`mailto:${dottore.email}`} className="hover:text-white">
                {dottore.email}
              </a>
            </li>
          </ul>
          <Link
            href="/contatti/"
            className="mt-5 inline-flex items-center justify-center rounded-full bg-aqua-accent px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-aqua-accent-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-aqua-accent-200"
          >
            Richiedi Visita
          </Link>
        </div>
      </div>

      <div className="border-t border-medical-blue-800">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-6 text-xs text-medical-blue-300 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p>
            © {anno} {dottore.nome} — Iscritto all&apos;Ordine dei Medici Chirurghi e degli
            Odontoiatri. Tutti i diritti riservati.
          </p>
          <p className="text-medical-blue-400">
            Le informazioni presenti sul sito non sostituiscono il parere medico.
          </p>
        </div>
      </div>
    </footer>
  )
}
