/**
 * Card sede, usata in Home (variante "sintesi") e in Dove Trovarmi
 * (variante "completa", con parcheggio/mezzi/attività e mappa).
 */
export default function SedeCard({ sede, variante = 'sintesi' }) {
  const mapsHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(sede.mapsQuery)}`

  return (
    <div id={sede.id} className="flex h-full flex-col rounded-2xl border border-medical-blue-100 bg-white p-6 shadow-sm">
      <div className="flex items-start justify-between gap-3">
        <h3 className="font-serif text-lg font-semibold text-medical-blue-900">{sede.nome}</h3>
        <span className="rounded-full bg-medical-blue-50 px-3 py-1 text-xs font-semibold text-medical-blue-700">
          {sede.citta}
        </span>
      </div>
      <p className="mt-1 text-sm font-medium text-neutral-700">{sede.struttura}</p>
      <p className="mt-1 text-sm text-neutral-600">
        {sede.indirizzo}, {sede.cap}
      </p>

      <div className="mt-3">
        <span className="rounded-full bg-aqua-accent-50 px-3 py-1 text-xs font-semibold text-aqua-accent-600">
          {sede.regime}
        </span>
      </div>

      {variante === 'completa' && (
        <div className="mt-4 space-y-2 text-sm text-neutral-600">
          {sede.parcheggio && (
            <p>
              <span className="font-semibold text-neutral-700">Parcheggio: </span>
              {sede.parcheggio}
            </p>
          )}
          {sede.mezzi && (
            <p>
              <span className="font-semibold text-neutral-700">Mezzi pubblici: </span>
              {sede.mezzi}
            </p>
          )}
          {sede.attivita?.length > 0 && (
            <div>
              <span className="font-semibold text-neutral-700">Attività: </span>
              <ul className="mt-1 list-inside list-disc space-y-0.5">
                {sede.attivita.map((a) => (
                  <li key={a}>{a}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}

      <div className="mt-5 flex flex-1 flex-col justify-end gap-2">
        {sede.telefono && sede.telefonoHref && (
          <a
            href={`tel:${sede.telefonoHref}`}
            className="inline-flex items-center justify-center rounded-full border-2 border-medical-blue-800 px-4 py-2 text-sm font-semibold text-medical-blue-800 transition-colors hover:bg-medical-blue-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-medical-blue-800"
          >
            Chiama {sede.telefono}
          </a>
        )}
        {!sede.telefono && (
          <p className="text-center text-xs text-neutral-500">
            Telefono non disponibile: usa il form di richiesta visita.
          </p>
        )}
        <a
          href={mapsHref}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-1 rounded-full bg-medical-blue-50 px-4 py-2 text-sm font-semibold text-medical-blue-800 transition-colors hover:bg-medical-blue-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-medical-blue-800"
        >
          Vedi la mappa
          <span className="sr-only"> di {sede.nome} (si apre in una nuova scheda)</span>
        </a>
        {sede.sitoWeb && (
          <a
            href={sede.sitoWeb}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-1 rounded-full border border-medical-blue-200 px-4 py-2 text-sm font-semibold text-medical-blue-800 transition-colors hover:bg-medical-blue-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-medical-blue-800"
          >
            Visita il sito
            <span className="sr-only"> di {sede.struttura} (si apre in una nuova scheda)</span>
          </a>
        )}
      </div>
    </div>
  )
}
