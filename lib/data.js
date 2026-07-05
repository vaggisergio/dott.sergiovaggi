// Dati centralizzati del sito. Modificare qui per aggiornare
// automaticamente tutte le pagine/componenti che li usano.

export const dottore = {
  nome: 'Dott. Sergio Vaggi',
  titolo: 'Specialista in Ortopedia e Traumatologia',
  telefono: '392 652 5986',
  telefonoHref: '+393926525986',
  email: 'info@sergiovaggi.it',
}

export const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/chi-sono/', label: 'Chi Sono' },
  { href: '/patologie-e-trattamenti/', label: 'Patologie e Trattamenti' },
  { href: '/dove-trovarmi/', label: 'Dove Trovarmi' },
  { href: '/blog/', label: 'Blog e Consigli' },
  { href: '/contatti/', label: 'Contatti' },
]

// Le 4 sedi di visita ambulatoriale del Dott. Vaggi.
// NOTA: i telefoni di Genova Centro e Finale Ligure non sono ancora
// disponibili: i pazienti vengono indirizzati al numero principale
// o al form di contatto. Aggiornare non appena disponibili.
export const sedi = [
  {
    id: 'voltri',
    nome: 'Genova Voltri',
    citta: 'Genova',
    struttura: "Studio Medico Via Sant'Ambrogio",
    indirizzo: "Via Sant'Ambrogio 27/1",
    cap: '16158 Genova',
    telefono: '392 652 5986',
    telefonoHref: '+393926525986',
    mapsQuery: "Via Sant'Ambrogio 27/1, 16158 Genova Voltri",
    parcheggio: 'Parcheggio gratuito del Comune di Voltri nelle immediate vicinanze.',
    mezzi: '',
    regime: 'Libera professione',
    attivita: ['Prime visite ortopediche', 'Controlli post-operatori', 'Infiltrazioni ecoguidate'],
  },
  {
    id: 'sampierdarena',
    nome: 'Genova Sampierdarena',
    citta: 'Genova',
    struttura: "Poliambulatorio Farmacia Croce d'Oro",
    indirizzo: 'Via Caveri 1/3',
    cap: '16149 Genova',
    telefono: '392 652 5986',
    telefonoHref: '+393926525986',
    mapsQuery: 'Via Caveri 1/3, 16149 Genova Sampierdarena',
    parcheggio: '',
    mezzi: 'Ben collegata con la rete di bus urbana AMT e vicina alla stazione di Genova Sampierdarena.',
    regime: 'Libera professione',
    attivita: ['Prime visite ortopediche', 'Controlli post-operatori'],
  },
  {
    id: 'genova-centro',
    nome: 'Genova Centro',
    citta: 'Genova',
    struttura: 'K Medical Albaro',
    indirizzo: 'Albaro',
    cap: 'Genova',
    telefono: '',
    telefonoHref: '',
    mapsQuery: 'K Medical Albaro, Genova',
    parcheggio: '',
    mezzi: '',
    regime: 'Libera professione e convenzioni assicurative',
    attivita: ['Prime visite ortopediche', 'Valutazione biomeccanica', 'Percorsi assicurativi convenzionati'],
  },
  {
    id: 'finale-ligure',
    nome: 'Finale Ligure',
    citta: 'Finale Ligure',
    struttura: 'Nova Medica Finalese',
    indirizzo: 'Finale Ligure',
    cap: 'Savona',
    telefono: '',
    telefonoHref: '',
    mapsQuery: 'Nova Medica Finalese, Finale Ligure',
    parcheggio: '',
    mezzi: '',
    regime: 'Libera professione',
    attivita: ['Prime visite ortopediche', 'Controlli post-operatori', 'Visite sportive di secondo livello'],
  },
]

// Strutture ospedaliere dove il Dott. Vaggi opera chirurgicamente,
// distinte per regime come richiesto in PROMPT.md (informazione che
// il paziente cerca attivamente). Dati forniti dal cliente: da
// riconfermare periodicamente.
export const struttureChirurgiche = [
  {
    nome: 'ICLAS – Istituto Clinico Ligure di Alta Specialità (Villa Serena)',
    citta: 'Rapallo (GE)',
    regimi: ['Convenzione SSN', 'Libera professione'],
    note: 'Interventi chirurgici in convenzione con il Servizio Sanitario Nazionale e in regime di libera professione.',
  },
  {
    nome: 'Ospedale Evangelico Internazionale',
    citta: 'Genova',
    regimi: ['Convenzione SSN'],
    note: 'Percorso chirurgico e riabilitativo in convenzione SSN.',
  },
  {
    nome: 'Policlinico di Monza – Città di Alessandria',
    citta: 'Alessandria',
    regimi: ['Convenzione SSN'],
    note: 'Interventi di chirurgia protesica in convenzione SSN.',
  },
  {
    nome: 'Clinica Montallegro',
    citta: 'Genova',
    regimi: ['Libera professione', 'Convenzioni assicurative'],
    note: 'Chirurgia in libera professione, anche tramite circuiti assicurativi convenzionati.',
  },
]

// Aree di specializzazione cliniche: usate in Home e nella pagina
// "Patologie e Trattamenti".
export const patologie = [
  {
    id: 'protesi-anca',
    titolo: "Chirurgia Protesica dell'Anca",
    titoloBreve: "Protesi d'Anca",
    sintesi:
      'Sostituzione protesica dell\'articolazione coxo-femorale per artrosi avanzata, esiti traumatici o displasia, con tecniche mininvasive che riducono i tempi di recupero.',
    keywordLocali: 'protesi anca Genova',
    icona: 'anca',
    puntiChiave: [
      'Tecniche mininvasive con risparmio muscolare',
      'Pianificazione preoperatoria personalizzata',
      'Percorso riabilitativo dedicato, anche in convenzione SSN',
    ],
  },
  {
    id: 'protesi-ginocchio',
    titolo: 'Chirurgia Protesica del Ginocchio',
    titoloBreve: 'Protesi di Ginocchio',
    sintesi:
      "Trattamento chirurgico dell'artrosi di ginocchio con protesi totali o monocompartimentali, per restituire mobilità e ridurre il dolore quando le terapie conservative non sono più sufficienti.",
    keywordLocali: 'protesi ginocchio Genova',
    icona: 'ginocchio',
    puntiChiave: [
      'Protesi totali e monocompartimentali su misura del paziente',
      'Valutazione approfondita per capire il momento giusto per operare',
      'Recupero funzionale rapido con protocolli riabilitativi moderni',
    ],
  },
  {
    id: 'protesi-caviglia',
    titolo: 'Chirurgia Protesica della Caviglia',
    titoloBreve: 'Protesi di Caviglia',
    sintesi:
      "Il Dott. Vaggi ha eseguito il primo impianto in Liguria di protesi totale di caviglia con sistema personalizzato 3D e il primo intervento di revisione protesica della tibiotarsica in regione, un'alternativa affidabile all'artrodesi nell'artrosi avanzata di caviglia.",
    keywordLocali: 'specialista protesi caviglia Genova',
    icona: 'caviglia',
    puntiChiave: [
      'Primo impianto in Liguria di protesi totale di caviglia con sistema personalizzato 3D',
      'Primo impianto di revisione protesica della tibiotarsica in Liguria',
      "Alternativa all'artrodesi per preservare il movimento articolare",
    ],
  },
  {
    id: 'piede-caviglia',
    titolo: 'Chirurgia del Piede e della Caviglia',
    titoloBreve: 'Piede e Caviglia',
    sintesi:
      "Diagnosi e trattamento, chirurgico e conservativo, delle principali patologie del piede e della caviglia: alluce valgo, instabilità legamentose, tendinopatie, esiti di fratture e deformità, con tecniche open e mininvasive percutanee.",
    keywordLocali: 'chirurgia piede e caviglia Genova',
    icona: 'caviglia',
    puntiChiave: [
      'Tecniche mininvasive percutanee a ridotto impatto chirurgico',
      "Trattamento di alluce valgo, instabilità di caviglia, tendinopatie",
      'Gestione degli esiti traumatici e delle deformità complesse',
    ],
  },
  {
    id: 'medicina-rigenerativa',
    titolo: 'Medicina Rigenerativa e Infiltrazioni',
    titoloBreve: 'Medicina Rigenerativa',
    sintesi:
      "Infiltrazioni intra-articolari ecoguidate e trattamenti con cellule staminali mesenchimali per rallentare la degenerazione articolare, ridurre il dolore e posticipare, quando possibile, il ricorso alla chirurgia protesica.",
    keywordLocali: 'infiltrazioni ecoguidate Genova',
    icona: 'rigenerativa',
    puntiChiave: [
      "Infiltrazioni intra-articolari sempre guidate da ecografia per la massima precisione",
      'Cellule staminali mesenchimali per la medicina rigenerativa articolare',
      'Indicazione personalizzata dopo valutazione clinica e strumentale completa',
    ],
  },
]

export const valutazioneBiomeccanica = {
  titolo: "Valutazione Biomeccanica Globale dell'Arto Inferiore",
  descrizione:
    "Un'analisi clinica completa dell'allineamento e della funzione di anca, ginocchio, piede e caviglia, per comprendere l'origine reale del dolore e costruire un percorso di cura coerente, dalla postura sportiva alla programmazione chirurgica.",
}

// Elementi di autorevolezza usati in Home e in Chi Sono.
export const primati = [
  {
    titolo: 'Primo in Liguria',
    descrizione:
      'Primo impianto in Liguria di protesi totale di caviglia con sistema personalizzato 3D.',
  },
  {
    titolo: 'Chirurgia di revisione',
    descrizione:
      'Primo impianto di revisione protesica della tibiotarsica eseguito in Liguria.',
  },
  {
    titolo: 'Specializzazione con lode',
    descrizione:
      "Specializzazione in Ortopedia e Traumatologia conseguita con lode all'Università di Genova.",
  },
  {
    titolo: 'Attività scientifica',
    descrizione:
      'Relatore a congressi nazionali e internazionali e autore di pubblicazioni scientifiche di settore.',
  },
]
