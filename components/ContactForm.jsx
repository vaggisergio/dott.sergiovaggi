'use client'

import { useState } from 'react'
import { sedi } from '@/lib/data'

// ID del form Formspree (https://formspree.io). Sostituire con l'ID reale
// prima della pubblicazione: creare un form su Formspree, copiare l'ID
// e impostarlo come variabile d'ambiente NEXT_PUBLIC_FORMSPREE_ID in fase
// di build, oppure sostituire direttamente il valore di default qui sotto.
const FORMSPREE_ID = process.env.NEXT_PUBLIC_FORMSPREE_ID || 'ID_DA_CONFIGURARE'
const FORMSPREE_ENDPOINT = `https://formspree.io/f/${FORMSPREE_ID}`

const statoIniziale = 'idle'

export default function ContactForm() {
  const [stato, setStato] = useState(statoIniziale)
  const [erroreMessaggio, setErroreMessaggio] = useState('')

  async function handleSubmit(event) {
    event.preventDefault()
    setStato('invio')
    setErroreMessaggio('')

    const form = event.target
    const dati = new FormData(form)

    try {
      const risposta = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: dati,
        headers: { Accept: 'application/json' },
      })

      if (risposta.ok) {
        setStato('successo')
        form.reset()
      } else {
        setStato('errore')
        setErroreMessaggio(
          'Non è stato possibile inviare la richiesta. Riprova oppure chiamaci direttamente.'
        )
      }
    } catch {
      setStato('errore')
      setErroreMessaggio(
        'Errore di connessione. Riprova oppure contattaci telefonicamente.'
      )
    }
  }

  if (stato === 'successo') {
    return (
      <div
        role="status"
        className="rounded-2xl border border-aqua-accent-200 bg-aqua-accent-50 p-6 text-center"
      >
        <h2 className="font-serif text-xl font-semibold text-medical-blue-900">
          Richiesta inviata, grazie.
        </h2>
        <p className="mt-2 text-sm text-neutral-700">
          Ti ricontatteremo al più presto per confermare data, orario e sede della visita.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="nome" className="block text-sm font-semibold text-medical-blue-900">
            Nome e cognome <span aria-hidden="true">*</span>
          </label>
          <input
            id="nome"
            name="nome"
            type="text"
            required
            autoComplete="name"
            className="mt-2 w-full rounded-lg border border-medical-blue-200 px-4 py-3 text-base text-neutral-900 shadow-sm focus:border-medical-blue-500 focus:outline-none focus:ring-2 focus:ring-medical-blue-500"
          />
        </div>

        <div>
          <label htmlFor="telefono" className="block text-sm font-semibold text-medical-blue-900">
            Telefono <span aria-hidden="true">*</span>
          </label>
          <input
            id="telefono"
            name="telefono"
            type="tel"
            required
            autoComplete="tel"
            className="mt-2 w-full rounded-lg border border-medical-blue-200 px-4 py-3 text-base text-neutral-900 shadow-sm focus:border-medical-blue-500 focus:outline-none focus:ring-2 focus:ring-medical-blue-500"
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-semibold text-medical-blue-900">
          Email <span aria-hidden="true">*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className="mt-2 w-full rounded-lg border border-medical-blue-200 px-4 py-3 text-base text-neutral-900 shadow-sm focus:border-medical-blue-500 focus:outline-none focus:ring-2 focus:ring-medical-blue-500"
        />
      </div>

      <div>
        <label htmlFor="sede" className="block text-sm font-semibold text-medical-blue-900">
          Sede preferita
        </label>
        <select
          id="sede"
          name="sede_preferita"
          defaultValue=""
          className="mt-2 w-full rounded-lg border border-medical-blue-200 bg-white px-4 py-3 text-base text-neutral-900 shadow-sm focus:border-medical-blue-500 focus:outline-none focus:ring-2 focus:ring-medical-blue-500"
        >
          <option value="">Nessuna preferenza</option>
          {sedi.map((sede) => (
            <option key={sede.id} value={sede.nome}>
              {sede.nome}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="messaggio" className="block text-sm font-semibold text-medical-blue-900">
          Descrivi brevemente il tuo problema <span aria-hidden="true">*</span>
        </label>
        <textarea
          id="messaggio"
          name="messaggio"
          rows={5}
          required
          className="mt-2 w-full rounded-lg border border-medical-blue-200 px-4 py-3 text-base text-neutral-900 shadow-sm focus:border-medical-blue-500 focus:outline-none focus:ring-2 focus:ring-medical-blue-500"
          placeholder="Es. dolore al ginocchio destro da alcuni mesi, peggiora salendo le scale..."
        />
      </div>

      <div className="flex items-start gap-3">
        <input
          id="privacy"
          name="consenso_privacy"
          type="checkbox"
          required
          className="mt-1 h-5 w-5 flex-shrink-0 rounded border-medical-blue-300 text-medical-blue-700 focus:ring-2 focus:ring-medical-blue-500"
        />
        <label htmlFor="privacy" className="text-sm text-neutral-600">
          Acconsento al trattamento dei miei dati personali ai sensi del Regolamento (UE)
          2016/679 (GDPR), con la finalità esclusiva di essere ricontattato/a in merito alla
          mia richiesta di visita. I dati non saranno utilizzati per altre finalità né ceduti a
          terzi. <span aria-hidden="true">*</span>
        </label>
      </div>

      {stato === 'errore' && (
        <p role="alert" className="text-sm font-medium text-red-700">
          {erroreMessaggio}
        </p>
      )}

      <button
        type="submit"
        disabled={stato === 'invio'}
        className="inline-flex w-full items-center justify-center rounded-full bg-aqua-accent px-6 py-3.5 text-base font-semibold text-white shadow-sm transition-colors hover:bg-aqua-accent-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-aqua-accent-600 disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
      >
        {stato === 'invio' ? 'Invio in corso…' : 'Invia richiesta di visita'}
      </button>

      <p className="text-xs text-neutral-500">
        <span aria-hidden="true">*</span> Campi obbligatori.
      </p>
    </form>
  )
}
