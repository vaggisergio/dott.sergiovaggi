# Sito Dott. Sergio Vaggi — Starter

## Cos'è questa cartella

Scaffold minimo Next.js + Tailwind, pronto per essere sviluppato da Claude Code.

## File chiave

- `PROMPT.md` — il prompt completo con contesto, sitemap, tono di voce, direttive design. **Incolla il contenuto di questo file (o fai riferimento ad esso con @PROMPT.md) come primo messaggio a Claude Code.**
- `lib/data.js` — dati centralizzati (sedi, contatti). Modifica qui, non nei singoli componenti.
- `app/page.js` — Home placeholder, da sviluppare.
- `app/layout.js` — layout globale + metadata SEO.

## Come iniziare con Claude Code

1. Apri Claude Desktop → scheda **Code**
2. Ambiente: **Local**
3. Cartella progetto: seleziona questa cartella
4. Primo messaggio suggerito:

   > Leggi @PROMPT.md e @lib/data.js. Segui le istruzioni del prompt partendo dalla Home page (app/page.js). Usa Plan Mode per mostrarmi l'architettura della sezione prima di scrivere il codice.

## Setup locale (se vuoi testare tu stesso da terminale)

```bash
npm install
npm run dev
```

Il sito sarà visibile su http://localhost:3000

## Prima di andare online

- [x] Regime (SSN/privato/assicurativo) per ogni sede verificato in `lib/data.js`
- [x] Numeri di telefono di tutte le sedi inseriti in `lib/data.js`
- [x] Foto professionali reali in Home e Chi Sono
- [x] Prenotazione online tramite widget MioDottore (`components/BookingWidget.jsx`) al posto del form
- [ ] Se si acquista un dominio proprio, aggiornare `siteUrl` in `app/layout.js`, `app/sitemap.js`, `app/robots.js` (attualmente punta a `dott-sergiovaggi.vercel.app`) e ricollegarlo su Vercel
- [ ] Popolare i 3 articoli originali del blog con contenuti definitivi, se si vuole personalizzarli ulteriormente
- [ ] Test responsive su mobile reale (non solo emulatore)

## Verifiche già effettuate in questo repository

- Build statico (`npm run build`) senza errori, 14 route generate (incluse `sitemap.xml`/`robots.txt`)
- Ogni pagina ha un solo `<h1>`, title tag e meta description univoci e ottimizzati SEO
- Contrasto colore dei bottoni CTA verificato e corretto (bianco su `aqua-accent-600`, rapporto ≈4.8:1, conforme WCAG AA)
- Skip-link, focus visibili, `aria-expanded`/`aria-controls` sul menu mobile, `prefers-reduced-motion` rispettata
- Nessuna immagine `<img>` nel sito (solo SVG decorativi con `aria-hidden` e un avatar testuale con `alt`/`aria-label` descrittivo)
