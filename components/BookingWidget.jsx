'use client'

import Script from 'next/script'

// Widget di prenotazione ufficiale MioDottore/DocPlanner. Dipende dal
// profilo MioDottore del Dott. Vaggi: se il profilo viene chiuso o
// rinominato, il widget smette di funzionare e va aggiornato o rimosso.
export default function BookingWidget() {
  return (
    <>
      <a
        id="zl-url"
        className="zl-url"
        href="https://www.miodottore.it/profilo/sergio-vaggi"
        rel="nofollow"
        data-zlw-doctor="sergio-vaggi"
        data-zlw-type="big_with_calendar"
        data-zlw-opinion="false"
        data-zlw-hide-branding="true"
        data-zlw-saas-only="true"
        data-zlw-a11y-title="Widget di prenotazione visite mediche"
      >
        Prenota una visita
      </a>
      <Script src="https://platform.docplanner.com/js/widget.js" strategy="lazyOnload" />
    </>
  )
}
