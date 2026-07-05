import CTASection from '@/components/CTASection'
import SedeCard from '@/components/SedeCard'
import { sedi, struttureChirurgiche } from '@/lib/data'

export const metadata = {
  title: 'Dove Trovarmi | Sedi a Genova (Voltri, Sampierdarena) e Finale Ligure',
  description:
    'Le sedi di visita del Dott. Sergio Vaggi: Genova Voltri, Genova Sampierdarena, Genova Centro (K Medical Albaro) e Finale Ligure (Nova Medica Finalese). Indirizzi, mappe, parcheggio e regime di accesso.',
  alternates: { canonical: '/dove-trovarmi/' },
}

export default function DoveTrovarmiPage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-gradient-to-b from-medical-blue-50 via-white to-white">
        <div className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 lg:py-20 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wide text-aqua-accent-600">
            Dove trovarmi
          </p>
          <h1 className="mt-3 font-serif text-4xl font-semibold leading-tight text-medical-blue-900 sm:text-5xl">
            Visite a Genova e Finale Ligure
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-neutral-700">
            Ricevo a Genova Voltri, Genova Sampierdarena, Genova Centro e a Finale Ligure.
            Ogni sede è pensata per essere raggiungibile facilmente, con indicazioni pratiche
            su parcheggio e mezzi pubblici.
          </p>
        </div>
      </section>

      {/* SEDI DI VISITA */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="font-serif text-3xl font-semibold text-medical-blue-900">
          Sedi di ricevimento ambulatoriale
        </h2>
        <p className="mt-3 max-w-3xl text-base text-neutral-600">
          Le visite in queste sedi si svolgono in regime di libera professione (o convenzione
          assicurativa dove indicato). Per la chirurgia, anche in convenzione con il Servizio
          Sanitario Nazionale, vedi le strutture ospedaliere più sotto.
        </p>

        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          {sedi.map((sede) => (
            <div key={sede.id} className="flex flex-col gap-4">
              <SedeCard sede={sede} variante="completa" />
              <div className="overflow-hidden rounded-2xl border border-medical-blue-100 shadow-sm">
                <iframe
                  title={`Mappa della sede di ${sede.nome}`}
                  src={`https://www.google.com/maps?q=${encodeURIComponent(sede.mapsQuery)}&output=embed`}
                  className="h-64 w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      <CTASection
        titolo="Qual è la sede più comoda per te?"
        testo="Indicaci la sede preferita nel form di richiesta visita: ti ricontattiamo per confermare data e orario."
      />

      {/* STRUTTURE CHIRURGICHE */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="font-serif text-3xl font-semibold text-medical-blue-900">
          Strutture per la chirurgia e il ricovero
        </h2>
        <p className="mt-3 max-w-3xl text-base text-neutral-600">
          Gli interventi chirurgici vengono eseguiti presso strutture selezionate, alcune in
          convenzione con il Servizio Sanitario Nazionale, altre in libera professione o tramite
          circuiti assicurativi convenzionati. Il regime applicabile viene sempre chiarito
          durante la visita, in base al tipo di intervento e alla situazione del paziente.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {struttureChirurgiche.map((struttura) => (
            <div
              key={struttura.nome}
              className="flex flex-col rounded-2xl border border-medical-blue-100 bg-white p-6 shadow-sm"
            >
              <h3 className="font-serif text-lg font-semibold text-medical-blue-900">
                {struttura.nome}
              </h3>
              <p className="mt-1 text-sm text-neutral-600">{struttura.citta}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {struttura.regimi.map((regime) => (
                  <span
                    key={regime}
                    className="rounded-full bg-aqua-accent-50 px-3 py-1 text-xs font-semibold text-aqua-accent-600"
                  >
                    {regime}
                  </span>
                ))}
              </div>
              <p className="mt-3 text-sm leading-relaxed text-neutral-600">{struttura.note}</p>
            </div>
          ))}
        </div>

        <p className="mt-6 text-sm text-neutral-500">
          Il regime di accesso (SSN, libera professione o convenzione assicurativa) può variare
          nel tempo: in caso di dubbio, richiedi conferma in fase di prenotazione della visita.
        </p>
      </section>

      <CTASection
        titolo="Prenota la tua visita"
        testo="Scegli la sede più vicina a te e richiedi un appuntamento: ti risponderemo al più presto per confermare data e orario."
      />
    </>
  )
}
