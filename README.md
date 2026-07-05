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

- [ ] Verificare regime (SSN/privato/assicurativo) per ogni sede in `lib/data.js`
- [ ] Sostituire numeri di telefono mancanti (Genova Centro, Finale Ligure)
- [ ] Aggiungere foto professionali reali (cartella `public/images`)
- [ ] Collegare servizio invio email per il form contatti (es. Resend, Formspree)
- [ ] Test accessibilità (WCAG 2.1 AA)
- [ ] Test responsive su mobile reale
