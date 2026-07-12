import Image from 'next/image'
import CTASection from '@/components/CTASection'
import { dottore } from '@/lib/data'

export const metadata = {
  title: 'Chi Sono | Percorso, Formazione ed Esperienza',
  description:
    'Il percorso formativo e professionale del Dott. Sergio Vaggi: collaborazioni con il Dott. Andrea Camera per la chirurgia protesica e con il Dott. Belfiore per la chirurgia del piede, attività scientifica e filosofia clinica centrata sul paziente.',
  alternates: { canonical: '/chi-sono/' },
}

const tappe = [
  {
    titolo: 'Laurea in Medicina e Chirurgia con lode',
    descrizione:
      "Laurea magistrale in Medicina e Chirurgia conseguita con lode all'Università degli Studi di Genova, dopo essere risultato primo classificato in Liguria al test di ammissione a Medicina.",
  },
  {
    titolo: 'Specializzazione in Ortopedia e Traumatologia con lode',
    descrizione:
      "Specializzazione conseguita con lode (50/50) all'Università di Genova, dopo essere stato ammesso come primo classificato alla scuola di specialità.",
  },
  {
    titolo: 'Formazione presso i principali centri ortopedici liguri',
    descrizione:
      "Percorsi di formazione in rete presso l'Ospedale Evangelico Internazionale, l'Ospedale Galliera, il Policlinico San Martino e l'Istituto Giannina Gaslini di Genova, con un focus dedicato alla chirurgia del piede e della caviglia.",
  },
  {
    titolo: 'Primati chirurgici in Liguria',
    descrizione:
      'Primo impianto in Liguria di protesi totale e di revisione di caviglia con sistema personalizzato 3D.',
  },
  {
    titolo: 'Dirigente Medico e attività chirurgica',
    descrizione:
      'Dirigente Medico in Ortopedia e Traumatologia e oggi attività chirurgica in libera professione presso ICLAS Villa Serena, Policlinico di Monza – Città di Alessandria e Ospedale Evangelico Internazionale.',
  },
  {
    titolo: 'Attività scientifica continuativa',
    descrizione:
      'Relatore a congressi nazionali di ortopedia e autore di pubblicazioni scientifiche, per mantenere un aggiornamento costante sulle tecniche più efficaci.',
  },
]

// Attività scientifica reale: pubblicazioni, capitoli di libro, relazioni
// a congressi e società scientifiche, tratte dal curriculum del Dott. Vaggi.
const pubblicazioni = [
  {
    titolo:
      'Minimally invasive surgery in MDCO for acquired flatfoot deformity: a systematic review of the literature',
    autori: 'Vaggi S., Vitali F., Colò G., Zanirato A., Formica M.',
    rivista: 'Archives of Orthopaedic and Trauma Surgery',
    doi: 'https://doi.org/10.1007/s00402-023-05188-z',
  },
  {
    titolo:
      'GAP score potential in predicting post-operative spinal mechanical complications: a systematic review of the literature',
    autori: 'Quarto E., Zanirato A., Pellegrini M., Vaggi S., Vitali F., Bourret S., Le Huec J.C., Formica M.',
    rivista: 'European Spine Journal, 2022',
    doi: '',
  },
  {
    titolo:
      "Rigid iatrogenic hallux varus: a decade's worth experience with arthrodesis of the metatarsophalangeal joint",
    autori: 'Belfiore S., Vaggi S., Vitali F., Zanirato A., Quarto E., Formica M.',
    rivista: 'International Orthopaedics, 2024',
    doi: 'https://doi.org/10.1007/s00264-024-06321-2',
  },
  {
    titolo:
      'Pure ankle dislocation in a 23-year-old man without fractures: a case report and a review of the literature',
    autori: 'Lanari E., Ratto F., Vaggi S. et al.',
    rivista: 'Trauma Case Reports, 2024',
    doi: 'https://doi.org/10.1016/j.tcr.2026.101310',
  },
]

const capitoliLibro = [
  {
    libro: 'Traumatologia dello Sport: il Calcio (Zanon, Mazzola)',
    capitoli: ['Traumi distorsivi caviglia', 'Tendinopatia rotulea', 'Tendinopatia achillea'],
  },
  {
    libro: 'Piede e Caviglia nello Sport (Zanon, Mazzola, 2024)',
    capitoli: [
      'Biomeccanica',
      'Panoramica delle patologie',
      'Distorsioni di caviglia',
      "Tendinopatia dell'Achille",
      'Fratture da stress',
      'La scarpa sportiva',
    ],
  },
]

const relazioniCongressi = [
  {
    titolo:
      "Osteotomia di medializzazione del calcagno per la correzione del piede piatto acquisito dell'adulto — review di letteratura",
    congresso: 'Congresso nazionale SIOT, sezione Piede e Caviglia',
    dove: 'Roma, novembre 2022',
  },
  {
    titolo: 'Fratture instabili di metacarpo: sintesi con vite in compressione e fissatore esterno',
    congresso: 'Congresso nazionale SICM, sezione trauma',
    dove: 'Genova, ottobre 2023',
  },
  {
    titolo: 'La conversione da DCO a sintesi definitiva',
    congresso: 'Congresso regionale SIFE',
    dove: 'Genova, maggio 2024',
  },
  {
    titolo: 'Non successi a medio termine delle sintesi articolari — il piatto tibiale',
    congresso: 'Congresso interregionale SPLLOT',
    dove: 'Torino, settembre 2024',
  },
  {
    titolo: 'Artrodesi del I metatarsofalangeo per alluce varo iatrogeno rigido',
    congresso: 'Congresso nazionale SICP',
    dove: 'Novarello, settembre 2025',
  },
  {
    titolo: 'Fallimenti di sintesi articolari, quando sostituire e quando re-sintetizzare — caviglia e piede',
    congresso: 'Congresso regionale ALIOTO',
    dove: 'Genova, settembre 2025',
  },
  {
    titolo: 'I traumi di caviglia e piede: i meccanismi del trauma',
    congresso: 'Corso SPLLOT — Università di Genova',
    dove: 'Genova, maggio 2026',
  },
  {
    titolo: 'Progression of flatfoot into adulthood: diagnosis, treatment, and outcomes',
    congresso:
      'Congresso internazionale "The Child\'s Foot 2026" — Visiting Professorship in Pediatric Orthopedics, Istituto Giannina Gaslini',
    dove: 'Genova, giugno 2026',
  },
  {
    titolo: 'Cavus foot evolution in adulthood: diagnosis, treatment and outcomes',
    congresso:
      'Congresso internazionale "The Child\'s Foot 2026" — Visiting Professorship in Pediatric Orthopedics, Istituto Giannina Gaslini',
    dove: 'Genova, giugno 2026',
  },
]

const societaScientifiche = [
  'SICP — Società Italiana della Caviglia e del Piede',
  'EFAS — European Foot and Ankle Society',
]

const principiClinici = [
  {
    titolo: 'Ascolto prima della diagnosi',
    testo:
      'Ogni percorso comincia da una visita attenta: capire come il dolore limita la vita quotidiana e sportiva del paziente è la base per ogni decisione clinica successiva.',
  },
  {
    titolo: 'La chirurgia come ultima scelta, non la prima',
    testo:
      'Le soluzioni conservative — dalla riabilitazione mirata alla medicina rigenerativa — vengono sempre valutate per prime. Si propone un intervento chirurgico solo quando è realmente la scelta più efficace.',
  },
  {
    titolo: 'Percorso su misura',
    testo:
      'Età, livello di attività, aspettative funzionali e stato di salute generale orientano una pianificazione realmente personalizzata, mai standardizzata.',
  },
  {
    titolo: 'Continuità dalla diagnosi alla riabilitazione',
    testo:
      "Il paziente viene accompagnato lungo tutto il percorso di cura, dalla prima visita all'intervento, fino al recupero funzionale, anche nei percorsi convenzionati con il Servizio Sanitario Nazionale.",
  },
]

export default function ChiSonoPage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-gradient-to-b from-medical-blue-50 via-white to-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-12 lg:items-center lg:py-20 lg:px-8">
          <div className="lg:col-span-8">
            <p className="text-sm font-semibold uppercase tracking-wide text-aqua-accent-600">
              Chi sono
            </p>
            <h1 className="mt-3 font-serif text-4xl font-semibold leading-tight text-medical-blue-900 sm:text-5xl">
              {dottore.nome}
            </h1>
            <p className="mt-2 text-lg font-medium text-medical-blue-700">{dottore.titolo}</p>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-neutral-700">
              Mi occupo di ortopedia e traumatologia con un obiettivo preciso: restituire ai
              miei pazienti la possibilità di muoversi senza dolore, con soluzioni scelte
              insieme e mai imposte. Il mio percorso, dalla specializzazione con lode
              all&apos;Università di Genova, nasce dalla stessa idea di fondo: la competenza
              tecnica ha senso solo se messa al servizio della qualità di vita reale delle
              persone che curo.
            </p>
          </div>

          <div className="lg:col-span-4">
            <div className="mx-auto aspect-[3/4] w-full max-w-xs overflow-hidden rounded-3xl shadow-md lg:max-w-none">
              <Image
                src="/images/vaggi-kmedical.jpg"
                alt="Ritratto del Dott. Sergio Vaggi"
                width={800}
                height={1200}
                className="h-full w-full object-cover object-top"
              />
            </div>
          </div>
        </div>
      </section>

      {/* PERCORSO FORMATIVO */}
      <section className="mx-auto max-w-5xl px-4 py-20 sm:px-6 lg:px-8">
        <h2 className="font-serif text-3xl font-semibold text-medical-blue-900">
          Percorso formativo e professionale
        </h2>
        <p className="mt-4 max-w-3xl text-lg text-neutral-600">
          Un percorso costruito sul campo, tra formazione universitaria, chirurgia d&apos;avanguardia
          e aggiornamento scientifico costante.
        </p>

        <ol className="mt-10 space-y-8 border-l-2 border-medical-blue-100 pl-8">
          {tappe.map((tappa) => (
            <li key={tappa.titolo} className="relative">
              <span
                className="absolute -left-[2.35rem] top-1 flex h-4 w-4 items-center justify-center rounded-full bg-aqua-accent ring-4 ring-white"
                aria-hidden="true"
              />
              <h3 className="font-serif text-xl font-semibold text-medical-blue-900">
                {tappa.titolo}
              </h3>
              <p className="mt-2 text-base leading-relaxed text-neutral-600">
                {tappa.descrizione}
              </p>
            </li>
          ))}
        </ol>
      </section>

      {/* ATTIVITÀ SCIENTIFICA */}
      <section className="bg-medical-blue-50">
        <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-semibold text-medical-blue-900">
            Attività scientifica
          </h2>
          <p className="mt-4 max-w-3xl text-lg text-neutral-600">
            Pubblicazioni su riviste scientifiche, capitoli di libro e relazioni a congressi, a
            testimonianza di un aggiornamento continuo condiviso con la comunità ortopedica.
          </p>

          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            <div>
              <h3 className="font-serif text-lg font-semibold text-medical-blue-900">
                Pubblicazioni scientifiche
              </h3>
              <ul className="mt-4 space-y-4">
                {pubblicazioni.map((pub) => (
                  <li key={pub.titolo} className="rounded-2xl border border-medical-blue-100 bg-white p-4">
                    <p className="text-sm font-medium leading-relaxed text-medical-blue-900">
                      {pub.titolo}
                    </p>
                    <p className="mt-1 text-xs text-neutral-500">{pub.autori}</p>
                    <p className="mt-1 text-xs text-neutral-500">
                      {pub.doi ? (
                        <a
                          href={pub.doi}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-medium text-aqua-accent-600 hover:underline"
                        >
                          {pub.rivista}
                        </a>
                      ) : (
                        pub.rivista
                      )}
                    </p>
                  </li>
                ))}
              </ul>

              <h3 className="mt-8 font-serif text-lg font-semibold text-medical-blue-900">
                Capitoli di libro
              </h3>
              <ul className="mt-4 space-y-4">
                {capitoliLibro.map((libro) => (
                  <li key={libro.libro} className="rounded-2xl border border-medical-blue-100 bg-white p-4">
                    <p className="text-sm font-medium text-medical-blue-900">{libro.libro}</p>
                    <p className="mt-1 text-xs text-neutral-500">{libro.capitoli.join(' · ')}</p>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-serif text-lg font-semibold text-medical-blue-900">
                Relazioni a congressi
              </h3>
              <ul className="mt-4 space-y-4">
                {relazioniCongressi.map((rel) => (
                  <li key={rel.titolo} className="rounded-2xl border border-medical-blue-100 bg-white p-4">
                    <p className="text-sm font-medium leading-relaxed text-medical-blue-900">
                      {rel.titolo}
                    </p>
                    <p className="mt-1 text-xs text-neutral-500">
                      {rel.congresso} — {rel.dove}
                    </p>
                  </li>
                ))}
              </ul>

              <h3 className="mt-8 font-serif text-lg font-semibold text-medical-blue-900">
                Società scientifiche
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {societaScientifiche.map((societa) => (
                  <li
                    key={societa}
                    className="rounded-full bg-white px-4 py-2 text-sm font-medium text-medical-blue-800 shadow-sm"
                  >
                    {societa}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        titolo="Vuoi essere seguito da un percorso su misura?"
        testo="Raccontami il tuo problema in una visita: valutiamo insieme la soluzione più adatta a te."
      />

      {/* FILOSOFIA CLINICA */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-serif text-3xl font-semibold text-medical-blue-900">
            La mia filosofia clinica
          </h2>
          <p className="mt-4 text-lg text-neutral-600">
            Quattro principi che guidano ogni visita e ogni decisione terapeutica.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {principiClinici.map((principio) => (
            <div
              key={principio.titolo}
              className="rounded-2xl border border-medical-blue-100 bg-white p-6 shadow-sm"
            >
              <h3 className="font-serif text-lg font-semibold text-medical-blue-900">
                {principio.titolo}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-600">{principio.testo}</p>
            </div>
          ))}
        </div>
      </section>

      {/* COLLABORAZIONI D'ÉQUIPE */}
      <section className="bg-medical-blue-50">
        <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-semibold text-medical-blue-900">
            Un lavoro d&apos;équipe
          </h2>
          <div className="mt-10 grid gap-10 lg:grid-cols-5 lg:items-center">
            <div className="lg:col-span-3">
              <h3 className="font-serif text-xl font-semibold text-medical-blue-900">
                Chirurgia protesica: la collaborazione con il Dott. Andrea Camera
              </h3>
              <p className="mt-4 text-lg leading-relaxed text-neutral-700">
                La chirurgia protesica e la traumatologia complessa richiedono un confronto
                costante tra specialisti. Per questo motivo affianco la mia attività alla
                collaborazione con l&apos;équipe del Dott. Andrea Camera, un lavoro condiviso che
                permette di discutere i casi più complessi, confrontare le strategie chirurgiche
                e garantire ai pazienti un secondo punto di vista clinico qualificato prima di
                ogni intervento importante.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-neutral-700">
                Questo approccio di squadra si estende anche al percorso post-operatorio e
                riabilitativo, per accompagnare il paziente con continuità dalla sala operatoria
                al pieno recupero funzionale.
              </p>
            </div>
            <div className="lg:col-span-2">
              <div className="mx-auto aspect-[4/3] w-full max-w-sm overflow-hidden rounded-3xl shadow-md">
                <Image
                  src="/images/vaggi-miodottore.jpg"
                  alt="Dott. Sergio Vaggi durante un intervento chirurgico"
                  width={220}
                  height={220}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>

          <div className="mt-14 border-t border-medical-blue-100 pt-10">
            <h3 className="font-serif text-xl font-semibold text-medical-blue-900">
              Chirurgia del piede: la collaborazione con il Dott. Belfiore
            </h3>
            <p className="mt-4 max-w-3xl text-lg leading-relaxed text-neutral-700">
              Allo stesso modo, per la chirurgia del piede e della caviglia mi confronto con il
              Dott. Belfiore: un lavoro d&apos;équipe che, come nella collaborazione protesica con
              il Dott. Camera, permette di condividere le strategie chirurgiche più adatte a ogni
              caso, in particolare nelle situazioni più complesse o negli interventi di
              salvataggio dopo il fallimento di chirurgie precedenti.
            </p>
          </div>
        </div>
      </section>

      <CTASection
        titolo="Parliamo del tuo caso"
        testo="Richiedi una visita: valuteremo insieme la storia clinica e il percorso di cura più adatto alle tue esigenze."
      />
    </>
  )
}
