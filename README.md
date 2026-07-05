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

- [ ] Verificare regime (SSN/privato/assicurativo) per ogni sede in `lib/data.js` (e per le strutture chirurgiche)
- [ ] Sostituire numeri di telefono mancanti (Genova Centro, Finale Ligure) in `lib/data.js`
- [ ] Aggiungere foto professionali reali (l'avatar in Chi Sono è un placeholder con le iniziali "SV")
- [ ] Creare un form su [Formspree](https://formspree.io) e impostare `NEXT_PUBLIC_FORMSPREE_ID` (vedi `components/ContactForm.jsx`)
- [ ] Verificare/aggiornare il dominio reale in `siteUrl` (`app/layout.js`, `app/sitemap.js`, `app/robots.js`)
- [ ] Far rivedere il testo di consenso GDPR nel form da un legale/DPO prima della pubblicazione
- [ ] Popolare i 3 articoli del blog con contenuti definitivi o aggiungerne di nuovi in `lib/blog.js`
- [ ] Test responsive su mobile reale (non solo emulatore)

## Verifiche già effettuate in questo repository

- Build statico (`npm run build`) senza errori, 14 route generate (incluse `sitemap.xml`/`robots.txt`)
- Ogni pagina ha un solo `<h1>`, title tag e meta description univoci e ottimizzati SEO
- Contrasto colore dei bottoni CTA verificato e corretto (bianco su `aqua-accent-600`, rapporto ≈4.8:1, conforme WCAG AA)
- Skip-link, focus visibili, `aria-expanded`/`aria-controls` sul menu mobile, `prefers-reduced-motion` rispettata
- Nessuna immagine `<img>` nel sito (solo SVG decorativi con `aria-hidden` e un avatar testuale con `alt`/`aria-label` descrittivo)
