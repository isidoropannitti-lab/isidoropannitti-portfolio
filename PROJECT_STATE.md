# Project State - isidoropannitti-portfolio

Ultimo aggiornamento: 2026-02-17

## 1) Identita e stile (da preservare)
- Estetica minimal, bianco/nero, molto ariosa.
- Font globale: Work Sans Light 300 (italic usato solo per stato sezione attiva).
- Allineamento principale a sinistra.
- Contatti sempre visibili in alto a sinistra:
  - `isidoro pannitti architetto`
  - `isidoro.pannitti@gmail.com`
  - `@_isoradio` -> `https://www.instagram.com/_isoradio/`
- Navigazione in alto a destra: `architecture, photo, info`.
- Su viewport stretta: appare `+` fisso in alto a destra; clic apre/chiude la nav.
- Switch lingua `it/en` in basso a destra, grigio chiaro, si nasconde durante scroll e riappare.

## 2) Routing attuale
- IT:
  - `/` = architecture
  - `/photo`
  - `/info`
- EN:
  - `/en`
  - `/en/photo`
  - `/en/info`
- Progetti:
  - IT: `/projects/[slug]`
  - EN: `/en/projects/[slug]`

## 3) Home architecture (IT + EN)
- File:
  - `src/pages/index.astro`
  - `src/pages/en/index.astro`
- Le cover sono in scroll orizzontale nativo con snap.
- Regola attuale: tutte le cover in home hanno altezza uniforme (bordo inferiore allineato), larghezza adattiva, ritaglio consentito.
- In home:
  - `25.4`, `25.6`, `26.2` aprono scheda progetto.
  - `25.2`, `25.3`, `26.1` sono `on going` inline (no scheda).

## 4) Schede progetto
- File template:
  - `src/pages/projects/[slug].astro`
  - `src/pages/en/projects/[slug].astro`
- Griglia immagini: due colonne foto (sinistra/destra) + colonna centrale vuota.
- Navigazione verticale nella scheda progetto.
- Didascalie interne alle immagini della scheda: rimosse (resta cover caption + teaser).
- Testo teaser allineato a destra della cover.

## 5) Dove modificare i contenuti (regola pratica)
- Bio info:
  - IT: `public/content/info-bio-it.txt`
  - EN: `public/content/info-bio-en.txt`
- Teaser progetto (priorita di lettura):
  - IT: `public/images/projects/<slug>/teaser-it.txt`
  - EN: `public/images/projects/<slug>/teaser-en.txt`
  - Fallback: `teaser.txt` (poi `teaser.txt.rtf`)
- Immagini progetto:
  - `public/images/projects/<slug>/`
  - la cover in home punta di norma a `/public/images/architecture/*-cover.*`

## 6) Nomenclatura e sezioni
- Sezione si chiama `photo` (non `photographie`).
- Slug progetti attivi in content:
  - `25-4`
  - `25-6`
  - `26-2`
- Content collection:
  - `src/content/featuredProjects/*.md`

## 7) File chiave layout
- `src/layouts/SectionsLayout.astro`:
  - header fisso sinistra/destra
  - toggle mobile con `+`
  - switch lingua fisso con hide-on-scroll
  - favicon (`/favicon.svg?v=ip2`)

## 8) Workflow consigliato per nuove chat
1. Aprire nuova chat.
2. Incollare questo prompt breve:

   "Leggi `PROJECT_STATE.md` e lavoriamo solo su [file/feature].  
   Mantieni stile e regole correnti.  
   A fine modifica esegui build e poi aspetta mio ok per commit+push."

3. Specificare sempre:
   - file da toccare
   - risultato desiderato
   - se vuoi o no `commit + push`

## 9) Stato git da ricordare (ora)
- Sono presenti modifiche locali ai teaser del progetto `25-4`:
  - `public/images/projects/25-4/teaser-it.txt`
  - `public/images/projects/25-4/teaser-en.txt`
  - `public/images/projects/25-4/teaser.txt`
- Non sono ancora committate in questo passaggio.
