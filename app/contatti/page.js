import ContactForm from '@/components/ContactForm'
import { dottore, sedi } from '@/lib/data'

export const metadata = {
  title: 'Contatti e Richiesta Visita | Prenota una Visita Ortopedica',
  description:
    'Richiedi una visita ortopedica con il Dott. Sergio Vaggi a Genova o Finale Ligure: compila il form o contattaci telefonicamente. Ti ricontattiamo per confermare data, orario e sede.',
  alternates: { canonical: '/contatti/' },
}

const orari = [
  { giorni: 'Lunedì – Venerdì', orario: '9:00 – 18:30' },
  { giorni: 'Sabato', orario: 'Su appuntamento' },
]

export default function ContattiPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-medical-blue-50 via-white to-white">
        <div className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 lg:py-20 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wide text-aqua-accent-600">
            Contatti
          </p>
          <h1 className="mt-3 font-serif text-4xl font-semibold leading-tight text-medical-blue-900 sm:text-5xl">
            Richiedi la tua visita
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-neutral-700">
            Compila il form con qualche informazione sul tuo problema: ti ricontattiamo per
            proporti data, orario e sede più comoda per te, a Genova o a Finale Ligure.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <div className="rounded-3xl border border-medical-blue-100 bg-white p-6 shadow-md sm:p-8">
              <h2 className="font-serif text-xl font-semibold text-medical-blue-900">
                Form di richiesta visita
              </h2>
              <p className="mt-2 text-sm text-neutral-600">
                Non è un sistema di prenotazione automatica: la richiesta viene gestita
                personalmente e riceverai una conferma via telefono o email.
              </p>
              <div className="mt-6">
                <ContactForm />
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="space-y-6">
              <div className="rounded-2xl border border-medical-blue-100 bg-white p-6 shadow-sm">
                <h2 className="font-serif text-lg font-semibold text-medical-blue-900">
                  Recapiti diretti
                </h2>
                <ul className="mt-4 space-y-3 text-sm text-neutral-700">
                  <li>
                    <span className="font-semibold text-medical-blue-900">Telefono: </span>
                    <a href={`tel:${dottore.telefonoHref}`} className="text-medical-blue-800 hover:underline">
                      {dottore.telefono}
                    </a>
                  </li>
                  <li>
                    <span className="font-semibold text-medical-blue-900">Email: </span>
                    <a href={`mailto:${dottore.email}`} className="text-medical-blue-800 hover:underline">
                      {dottore.email}
                    </a>
                  </li>
                </ul>
              </div>

              <div className="rounded-2xl border border-medical-blue-100 bg-white p-6 shadow-sm">
                <h2 className="font-serif text-lg font-semibold text-medical-blue-900">
                  Orari indicativi di segreteria
                </h2>
                <ul className="mt-4 space-y-2 text-sm text-neutral-700">
                  {orari.map((o) => (
                    <li key={o.giorni} className="flex justify-between gap-4">
                      <span>{o.giorni}</span>
                      <span className="font-medium text-medical-blue-800">{o.orario}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-3 text-xs text-neutral-500">
                  Gli orari di visita variano in base alla sede: verranno confermati al momento
                  della richiesta.
                </p>
              </div>

              <div className="rounded-2xl border border-medical-blue-100 bg-white p-6 shadow-sm">
                <h2 className="font-serif text-lg font-semibold text-medical-blue-900">Sedi</h2>
                <ul className="mt-4 space-y-2 text-sm text-neutral-700">
                  {sedi.map((sede) => (
                    <li key={sede.id}>
                      <span className="font-semibold text-medical-blue-900">{sede.nome}</span>
                      <span className="block text-neutral-600">
                        {sede.indirizzo}, {sede.cap}
                      </span>
                    </li>
                  ))}
                </ul>
                <a
                  href="/dove-trovarmi/"
                  className="mt-4 inline-block text-sm font-semibold text-medical-blue-800 underline decoration-aqua-accent-400 decoration-2 underline-offset-4 hover:text-medical-blue-900"
                >
                  Vedi mappe e dettagli di ogni sede
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
