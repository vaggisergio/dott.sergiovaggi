import Link from 'next/link'
import CTASection from '@/components/CTASection'
import { patologie, valutazioneBiomeccanica } from '@/lib/data'

export const metadata = {
  title: 'Patologie e Trattamenti | Protesi Anca, Ginocchio, Caviglia, Piede',
  description:
    'Chirurgia protesica di anca, ginocchio e caviglia, chirurgia del piede e della caviglia, medicina rigenerativa e valutazione biomeccanica: le aree di trattamento del Dott. Sergio Vaggi a Genova.',
  alternates: { canonical: '/patologie-e-trattamenti/' },
}

// Contenuto esteso per ciascuna area, in linguaggio accessibile ma
// scientificamente solido. I dati anagrafici/di sintesi restano in
// lib/data.js (patologie), qui si aggiunge solo il copy di dettaglio.
const dettagli = {
  'protesi-anca': {
    corpo: [
      "L'anca è l'articolazione che sopporta il peso del corpo a ogni passo: quando la cartilagine si consuma per artrosi, esiti di fratture o displasia congenita, il dolore diventa spesso invalidante anche per attività semplici come camminare, salire le scale o allacciarsi le scarpe.",
      "Quando le terapie conservative (farmaci, fisioterapia, modifica delle attività) non bastano più a controllare il dolore, la protesi d'anca sostituisce le superfici articolari usurate con componenti artificiali biocompatibili, restituendo un movimento fluido e indolore.",
      'Le tecniche mininvasive con risparmio muscolare permettono, nella maggior parte dei casi, una ripresa del cammino già nei primi giorni dopo l\'intervento, riducendo il trauma chirurgico rispetto agli approcci tradizionali.',
    ],
    quando: [
      'Dolore all\'inguine o al gluteo che persiste a riposo e di notte',
      'Rigidità che limita in modo significativo il cammino e le attività quotidiane',
      "Fallimento delle terapie conservative dopo un percorso adeguato",
    ],
  },
  'protesi-ginocchio': {
    corpo: [
      "L'artrosi di ginocchio è una delle cause più frequenti di dolore cronico nell'adulto e nell'anziano: la cartilagine si assottiglia progressivamente, causando dolore, gonfiore e difficoltà nei movimenti di flessione ed estensione.",
      'Quando è colpito un solo comparto dell\'articolazione, una protesi monocompartimentale può risolvere il problema preservando l\'osso e i legamenti sani; nelle forme più diffuse è invece indicata una protesi totale di ginocchio.',
      'La decisione su quando operare non dipende solo dalle immagini radiografiche, ma dall\'impatto reale del dolore sulla qualità di vita: una valutazione clinica approfondita è indispensabile per capire il momento più adatto.',
    ],
    quando: [
      'Dolore che limita cammino, scale o attività sportive amatoriali',
      'Gonfiore ricorrente e sensazione di instabilità del ginocchio',
      'Scarsa risposta a infiltrazioni, fisioterapia e farmaci antinfiammatori',
    ],
  },
  'protesi-caviglia': {
    corpo: [
      "L'artrosi avanzata di caviglia è spesso conseguenza di traumi distorsivi o fratture pregresse. Per anni l'unica soluzione chirurgica affidabile è stata l'artrodesi (il blocco definitivo dell'articolazione), efficace sul dolore ma a costo della mobilità.",
      'La protesi totale di caviglia rappresenta oggi un\'alternativa che permette di eliminare il dolore conservando il movimento articolare. Il Dott. Vaggi ha eseguito il primo impianto in Liguria di protesi totale di caviglia con sistema personalizzato 3D, pianificato sull\'anatomia specifica del paziente.',
      "Quando una protesi già impiantata si usura o si mobilizza, può rendersi necessario un intervento di revisione: il Dott. Vaggi ha eseguito anche il primo impianto di revisione protesica della tibiotarsica in Liguria, un intervento tecnicamente complesso riservato a centri con esperienza specifica.",
    ],
    quando: [
      'Dolore cronico di caviglia dopo traumi o fratture pregresse',
      "Limitazione del movimento che compromette il cammino su terreni irregolari o le scale",
      'Necessità di una valutazione di revisione su una protesi di caviglia già impiantata',
    ],
  },
  'piede-caviglia': {
    corpo: [
      'Il piede e la caviglia sono strutture complesse, sottoposte a carichi elevati a ogni passo: alluce valgo, instabilità legamentose croniche, tendinopatie e deformità post-traumatiche sono tra i motivi di consulto più frequenti.',
      'Molte di queste condizioni possono essere trattate con tecniche mininvasive percutanee, che riducono le cicatrici, il dolore post-operatorio e i tempi di recupero rispetto alla chirurgia open tradizionale, pur restando indicate solo nei casi selezionati.',
      "L'instabilità cronica di caviglia, spesso esito di distorsioni ripetute e mai adeguatamente trattate, viene valutata con un esame clinico mirato per stabilire se sia sufficiente un percorso riabilitativo o se sia necessaria una stabilizzazione chirurgica dei legamenti.",
    ],
    quando: [
      "Alluce valgo doloroso che limita la scelta delle calzature e il cammino",
      'Distorsioni di caviglia ricorrenti con sensazione di cedimento',
      "Dolore persistente da tendinopatia non risolto con la sola fisioterapia",
    ],
  },
  'medicina-rigenerativa': {
    corpo: [
      "Non ogni dolore articolare richiede la chirurgia. Nelle fasi iniziali o intermedie dell'artrosi, le infiltrazioni intra-articolari possono ridurre l'infiammazione e il dolore, migliorando la funzione e la qualità di vita del paziente.",
      "Ogni infiltrazione viene eseguita sotto guida ecografica, per garantire la massima precisione nel raggiungere il punto esatto dell'articolazione o del tendine interessato, riducendo il rischio di un posizionamento impreciso.",
      "Le cellule staminali mesenchimali rappresentano un ulteriore strumento della medicina rigenerativa, con l'obiettivo di favorire i processi biologici di riparazione dei tessuti articolari e rallentare la progressione della degenerazione, quando l'indicazione clinica lo giustifica.",
    ],
    quando: [
      "Artrosi lieve o moderata con dolore che limita le attività quotidiane o sportive",
      "Desiderio di posticipare la chirurgia protesica mantenendo una buona qualità di vita",
      "Tendinopatie croniche che non rispondono alle terapie conservative standard",
    ],
  },
}

export default function PatologiePage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-gradient-to-b from-medical-blue-50 via-white to-white">
        <div className="mx-auto max-w-5xl px-4 py-16 text-center sm:px-6 lg:py-20 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wide text-aqua-accent-600">
            Patologie e trattamenti
          </p>
          <h1 className="mt-3 font-serif text-4xl font-semibold leading-tight text-medical-blue-900 sm:text-5xl">
            Cura dell&apos;arto inferiore, dalla diagnosi alla chirurgia protesica
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-neutral-700">
            Ogni area di trattamento nasce da una valutazione clinica accurata: qui trovi una
            spiegazione chiara di come vengono affrontate le principali patologie di anca,
            ginocchio, piede e caviglia a Genova e Finale Ligure.
          </p>
        </div>

        {/* Navigazione rapida alle sezioni */}
        <nav aria-label="Naviga tra le aree di trattamento" className="border-t border-medical-blue-100 bg-white">
          <ul className="mx-auto flex max-w-5xl flex-wrap justify-center gap-2 px-4 py-4 sm:px-6 lg:px-8">
            {patologie.map((patologia) => (
              <li key={patologia.id}>
                <a
                  href={`#${patologia.id}`}
                  className="inline-block rounded-full border border-medical-blue-100 px-4 py-2 text-sm font-medium text-medical-blue-800 transition-colors hover:bg-medical-blue-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-medical-blue-800"
                >
                  {patologia.titoloBreve}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#valutazione-biomeccanica"
                className="inline-block rounded-full border border-medical-blue-100 px-4 py-2 text-sm font-medium text-medical-blue-800 transition-colors hover:bg-medical-blue-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-medical-blue-800"
              >
                Valutazione biomeccanica
              </a>
            </li>
          </ul>
        </nav>
      </section>

      {/* SEZIONI PER AREA */}
      {patologie.map((patologia, index) => {
        const dettaglio = dettagli[patologia.id]
        return (
          <section
            key={patologia.id}
            id={patologia.id}
            className={`scroll-mt-20 ${index % 2 === 1 ? 'bg-medical-blue-50' : 'bg-white'}`}
          >
            <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
              <h2 className="font-serif text-3xl font-semibold text-medical-blue-900">
                {patologia.titolo}
              </h2>
              <p className="mt-2 text-sm font-medium uppercase tracking-wide text-aqua-accent-600">
                {patologia.keywordLocali}
              </p>

              <div className="mt-6 space-y-4 text-base leading-relaxed text-neutral-700">
                {dettaglio.corpo.map((paragrafo, i) => (
                  <p key={i}>{paragrafo}</p>
                ))}
              </div>

              <div className="mt-8 grid gap-6 sm:grid-cols-2">
                <div className="rounded-2xl border border-medical-blue-100 bg-white p-5">
                  <h3 className="font-serif text-base font-semibold text-medical-blue-900">
                    Punti chiave del trattamento
                  </h3>
                  <ul className="mt-3 space-y-2 text-sm text-neutral-600">
                    {patologia.puntiChiave.map((punto) => (
                      <li key={punto} className="flex gap-2">
                        <span className="mt-0.5 text-aqua-accent-600" aria-hidden="true">
                          &#10003;
                        </span>
                        <span>{punto}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-2xl border border-medical-blue-100 bg-white p-5">
                  <h3 className="font-serif text-base font-semibold text-medical-blue-900">
                    Quando è utile una valutazione
                  </h3>
                  <ul className="mt-3 space-y-2 text-sm text-neutral-600">
                    {dettaglio.quando.map((voce) => (
                      <li key={voce} className="flex gap-2">
                        <span className="mt-0.5 text-medical-blue-700" aria-hidden="true">
                          &#8226;
                        </span>
                        <span>{voce}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <Link
                href="/contatti/"
                className="mt-8 inline-flex items-center justify-center rounded-full bg-aqua-accent-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-aqua-accent-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-aqua-accent-700"
              >
                Richiedi una visita per {patologia.titoloBreve.toLowerCase()}
              </Link>
            </div>
          </section>
        )
      })}

      {/* VALUTAZIONE BIOMECCANICA */}
      <section id="valutazione-biomeccanica" className="scroll-mt-20 bg-medical-blue-800">
        <div className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-semibold text-white">
            {valutazioneBiomeccanica.titolo}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-medical-blue-100">
            {valutazioneBiomeccanica.descrizione}
          </p>
          <Link
            href="/contatti/"
            className="mt-8 inline-flex items-center justify-center rounded-full bg-aqua-accent-600 px-6 py-3.5 text-base font-semibold text-white shadow-sm transition-colors hover:bg-aqua-accent-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-aqua-accent-700"
          >
            Prenota una valutazione biomeccanica
          </Link>
        </div>
      </section>

      <CTASection
        titolo="Non sai quale sia il problema esatto?"
        testo="Nessun sito può sostituire una visita: raccontami i tuoi sintomi e individueremo insieme il percorso diagnostico più corretto."
      />
    </>
  )
}
