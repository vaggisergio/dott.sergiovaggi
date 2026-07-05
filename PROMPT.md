# Prompt per Claude Code — Sito Web Dott. Sergio Vaggi

## Ruolo

Agisci come Senior Web Developer, UX/UI Designer ed esperto di marketing medico. Il tuo obiettivo è creare l'architettura, i testi persuasivi (copywriting) e l'intero codice di un sito web professionale per un medico chirurgo ortopedico di alto livello.

## Stack tecnico

- Sito statico moderno: **Next.js (App Router) + Tailwind CSS**, oppure HTML/CSS/JS puro se preferisci zero build step — scegli tu la soluzione più mantenibile, ma resta STATICO (no CMS, no database).
- Deploy previsto su Vercel o Netlify.
- Nessun sistema di calendario/prenotazione reale: solo **form di contatto/richiesta visita** che invia una email (es. tramite servizio tipo Formspree, Resend, o endpoint serverless) al recapito dello studio.
- Sito solo in lingua italiana.
- Completamente responsive (mobile-first: la maggior parte dei pazienti cercherà da smartphone).

## Contesto del cliente

**Dott. Sergio Vaggi** — Specialista in Ortopedia e Traumatologia (specializzazione con lode, Università di Genova).

**Aree di specializzazione:**
- Chirurgia protesica arto inferiore (anca, ginocchio, caviglia)
- Chirurgia del piede e caviglia, open e mininvasiva
- Medicina rigenerativa (infiltrazioni intra-articolari ed ecoguidate, cellule staminali mesenchimali)
- Valutazione biomeccanica globale dell'arto inferiore

**Elementi di autorevolezza da valorizzare nel copy:**
- Primo impianto in Liguria di protesi totale di caviglia con sistema personalizzato 3D
- Primo impianto di revisione protesica della tibiotarsica
- Attività scientifica: relazioni a congressi, pubblicazioni
- Collaborazione con l'équipe del Dott. Andrea Camera
- Percorsi di cura in convenzione con il Sistema Sanitario Nazionale, dalla chirurgia alla riabilitazione
- Frequenze in ospedali in Italia e all'estero

**Sedi (da inserire in una pagina "Dove Trovarmi" con indirizzo, mappa, telefono, note pratiche per ogni sede):**

| Sede | Indirizzo | Note | Telefono |
|---|---|---|---|
| Genova Voltri | Via Sant'Ambrogio 27/1 | Parcheggio gratuito del Comune di Voltri | 392 652 5986 |
| Genova Sampierdarena | Poliambulatorio Farmacia Croce d'Oro, Via Caveri 1/3 | — | 392 652 5986 |
| Genova Centro | K Medical Albaro | — | — |
| Finale Ligure | Nova Medica Finalese | — | — |

Nota: alcune sedi sono in regime di convenzione SSN (es. ICLAS Villa Serena, Ospedale Evangelico Internazionale, Policlinico di Monza – Città di Alessandria), altre in libera professione (Clinica Montallegro, Villa Serena) o in collaborazione con circuiti assicurativi. Specifica questa distinzione con chiarezza nella pagina dedicata, perché è un'informazione che il paziente cerca attivamente.

**Fonti già online da cui attingere tono e contenuti verificati:**
- kmedical.it/team/dott-sergio-vaggi
- miodottore.it/sergio-vaggi/chirurgo/genova

## Target e tono di voce

- **Target:** pazienti di ogni età, sportivi e persone anziane, alla ricerca di soluzioni definitive per dolori articolari e muscolari, in particolare all'arto inferiore.
- **Tono:** empatico, estremamente professionale, rassicurante, autorevole. Mai eccessivamente tecnico (il paziente medio non conosce la terminologia ortopedica) ma nemmeno superficiale: deve percepire competenza scientifica reale.

## Direttive di design

- Palette: blu medico, bianco, dettagli verde acqua.
- Animazioni fluide ma discrete (no effetti invasivi che rallentano la percezione di serietà).
- Font leggibile, gerarchia visiva chiara.
- CTA (call to action) verso il form di richiesta visita presenti in ogni sezione chiave, non solo nel footer.
- Accessibilità: conformità WCAG 2.1 AA come requisito minimo (contrasto colori, alt text immagini, navigazione da tastiera, dimensioni testo scalabili).

## Sitemap richiesta

1. **Home** — Hero con proposta di valore chiara, sezione autorevolezza (numeri/primati), aree di specializzazione in sintesi, sedi in sintesi, CTA prenotazione.
2. **Chi Sono** — Percorso formativo, esperienza, filosofia clinica, collaborazioni (équipe Dott. Camera).
3. **Patologie e Trattamenti Trattati** — Una sezione per ciascuna area (protesica anca/ginocchio/caviglia, piede e caviglia, medicina rigenerativa), scritta in linguaggio accessibile ma scientificamente solido, ottimizzata SEO per query tipo "specialista protesi caviglia Genova".
4. **Dove Trovarmi** — Le 4 sedi con indirizzo, mappa integrata, indicazioni pratiche (parcheggio, mezzi), regime (SSN/privato/assicurativo).
5. **Blog/Consigli** — Struttura pronta per articoli futuri (3 articoli di esempio su temi frequenti: es. "quando è il momento di operare un'artrosi di ginocchio", "cosa aspettarsi da una protesi di caviglia", "infiltrazioni vs cellule staminali: differenze").
6. **Contatti / Richiedi Visita** — Form (nome, telefono, email, sede preferita, breve descrizione del problema, consenso privacy GDPR), recapiti diretti, orari indicativi.

## Istruzioni per il lavoro in loop (Agentic Loop)

Procedi ciclicamente, una pagina/sezione alla volta, finché il sito non è completo:

1. **Analisi e architettura** — Prima di scrivere codice, definisci la struttura della pagina corrente e la logica di conversione per il paziente.
2. **Generazione contenuti** — Scrivi i testi completi, ottimizzati SEO (title tag, meta description, H1-H2 coerenti, parole chiave locali "Genova", "Voltri", "Sampierdarena", "Finale Ligure").
3. **Generazione codice** — Implementa la pagina nello stack scelto, con componenti riutilizzabili (header, footer, CTA, card sede, card patologia).
4. **Autoverifica** — Controlla: conformità WCAG, coerenza del tono (né troppo tecnico né troppo generico), correttezza dei dati (indirizzi, telefoni, nomi), responsive su mobile.
5. **Raffinamento** — Correggi autonomamente eventuali criticità trovate, poi passa alla pagina successiva.

## Output richiesto

- Codice reale nei file del progetto (non solo blocchi Markdown teorici), organizzato in una struttura di cartelle pulita e commentata.
- Al termine di ogni pagina completata, fornisci un breve riepilogo di cosa è stato fatto e chiedi conferma prima di procedere alla successiva.
- Al termine dell'intero sito, fornisci un checklist finale: pagine completate, SEO on-page verificato, accessibilità verificata, form testato, dati di contatto verificati per ogni sede.
