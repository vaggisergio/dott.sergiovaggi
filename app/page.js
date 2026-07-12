import Link from 'next/link'
import Image from 'next/image'
import Button from '@/components/Button'
import CTASection from '@/components/CTASection'
import PatologiaCard from '@/components/PatologiaCard'
import SedeCard from '@/components/SedeCard'
import { patologie, sedi, primati } from '@/lib/data'
import { recensioni } from '@/lib/recensioni'

export const metadata = {
  title: 'Chirurgo Ortopedico a Genova | Protesi Anca, Ginocchio, Caviglia',
  description:
    'Dott. Sergio Vaggi, specialista in Ortopedia e Traumatologia a Genova e Finale Ligure: chirurgia protesica di anca, ginocchio e caviglia, chirurgia del piede e medicina rigenerativa. Richiedi una visita.',
  alternates: { canonical: '/' },
}

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-b from-medical-blue-50 via-white to-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-12 lg:items-center lg:py-24 lg:px-8">
          <div className="lg:col-span-7">
            <p className="text-sm font-semibold uppercase tracking-wide text-aqua-accent-600">
              Specialista in Ortopedia e Traumatologia · Genova e Finale Ligure
            </p>
            <h1 className="mt-3 font-serif text-4xl font-semibold leading-tight text-medical-blue-900 sm:text-5xl">
              Dott. Sergio Vaggi
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-neutral-700">
              Il Dott. Sergio Vaggi affianca i pazienti con dolori articolari e muscolari
              all&apos;arto inferiore in un percorso chiaro: dalla diagnosi accurata alle
              soluzioni conservative, fino alla chirurgia protesica più avanzata di anca,
              ginocchio e caviglia, quando è davvero necessaria.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button href="/contatti/" variant="primary">
                Richiedi una Visita
              </Button>
              <Button href="/patologie-e-trattamenti/" variant="outline">
                Scopri le aree di specializzazione
              </Button>
            </div>
            <p className="mt-6 text-sm text-neutral-500">
              Visite a Genova (Voltri, Sampierdarena, Centro) e a Finale Ligure, anche in
              convenzione con il Servizio Sanitario Nazionale.
            </p>
          </div>

          <div className="lg:col-span-5">
            <div className="overflow-hidden rounded-3xl shadow-md">
              <Image
                src="/images/vaggi-kmedical.jpg"
                alt="Dott. Sergio Vaggi, specialista in Ortopedia e Traumatologia"
                width={800}
                height={1200}
                priority
                className="h-auto w-full object-cover"
              />
            </div>
            <div className="mt-6 rounded-3xl border border-medical-blue-100 bg-white p-6 shadow-md sm:p-8">
              <h2 className="font-serif text-lg font-semibold text-medical-blue-900">
                Perché i pazienti si affidano al Dott. Vaggi
              </h2>
              <ul className="mt-5 space-y-4">
                {primati.map((primato) => (
                  <li key={primato.titolo} className="flex gap-3">
                    <span className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-aqua-accent-100 text-aqua-accent-600">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2.5}
                        className="h-3.5 w-3.5"
                        aria-hidden="true"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                      </svg>
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-medical-blue-900">{primato.titolo}</p>
                      <p className="text-sm text-neutral-600">{primato.descrizione}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* AUTOREVOLEZZA / NUMERI */}
      <section className="border-y border-medical-blue-100 bg-medical-blue-800" aria-label="Numeri e riconoscimenti">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 text-center sm:grid-cols-2 sm:px-6 lg:px-8">
          <div>
            <p className="font-serif text-4xl font-semibold text-white">4</p>
            <p className="mt-2 text-sm text-medical-blue-100">
              Sedi di ricevimento tra Genova e Finale Ligure, anche in convenzione SSN
            </p>
          </div>
          <div>
            <p className="font-serif text-4xl font-semibold text-white">2</p>
            <p className="mt-2 text-sm text-medical-blue-100">
              Collaborazioni specialistiche dedicate: chirurgia protesica con il Dott. Camera,
              chirurgia del piede con il Dott. Belfiore
            </p>
          </div>
        </div>
      </section>

      {/* AREE DI SPECIALIZZAZIONE */}
      <section id="specializzazioni" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-serif text-3xl font-semibold text-medical-blue-900">
            Aree di specializzazione
          </h2>
          <p className="mt-4 text-lg text-neutral-600">
            Un percorso di cura dedicato per ogni articolazione dell&apos;arto inferiore, dalla
            valutazione clinica iniziale fino, quando indicato, alla chirurgia protesica.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {patologie.map((patologia) => (
            <PatologiaCard key={patologia.id} patologia={patologia} />
          ))}
        </div>
      </section>

      <CTASection
        titolo="Un dolore articolare che non passa? Confrontiamoci."
        testo="Una valutazione accurata è il primo passo per capire quale sia davvero la soluzione più adatta a te, senza automatismi verso la chirurgia."
      />

      {/* SEDI IN SINTESI */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-serif text-3xl font-semibold text-medical-blue-900">Dove trovarmi</h2>
          <p className="mt-4 text-lg text-neutral-600">
            Visite ambulatoriali a Genova Voltri, Genova Sampierdarena, Genova Centro e Finale
            Ligure. Interventi chirurgici anche in convenzione con il Servizio Sanitario
            Nazionale.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {sedi.map((sede) => (
            <SedeCard key={sede.id} sede={sede} />
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            href="/dove-trovarmi/"
            className="text-base font-semibold text-medical-blue-800 underline decoration-aqua-accent-400 decoration-2 underline-offset-4 hover:text-medical-blue-900"
          >
            Vedi indirizzi, mappe e orari di ogni sede
          </Link>
        </div>
      </section>

      {/* RECENSIONI */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-serif text-3xl font-semibold text-medical-blue-900">
            Le parole dei pazienti
          </h2>
          <p className="mt-4 text-lg text-neutral-600">Una selezione delle recensioni ricevute.</p>
        </div>
        <div className="mt-12 columns-1 gap-6 sm:columns-2 lg:columns-3">
          {recensioni.map((recensione) => (
            <div
              key={recensione.nome}
              className="mb-6 break-inside-avoid overflow-hidden rounded-2xl border border-medical-blue-100 shadow-sm"
            >
              <Image
                src={recensione.file}
                alt={recensione.alt}
                width={recensione.width}
                height={recensione.height}
                className="h-auto w-full"
              />
            </div>
          ))}
        </div>
      </section>

      <CTASection
        titolo="Prenota la tua visita ortopedica"
        testo="Compila il form di richiesta visita: sarai ricontattato per confermare data, orario e sede più comoda per te."
      />
    </>
  )
}
