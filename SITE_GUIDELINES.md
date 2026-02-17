# Site Guidelines - isidoropannitti-portfolio

Documento operativo di riferimento per mantenere coerenza tecnica e strutturale del sito.

## 1) Principi grafici
- Linguaggio visivo minimal, bianco/nero, arioso.
- Font globale unico: Work Sans Light 300.
- Allineamento principale dei contenuti a sinistra.
- Stato sezione attiva in corsivo (italic), senza variazioni tipografiche aggiuntive non richieste.

## 2) Regole layout
- Layout base gestito da `src/layouts/SectionsLayout.astro`.
- Header fisso:
  - sinistra: nome + email + link Instagram;
  - destra: navigazione sezioni.
- Su viewport stretta:
  - il menu sezioni si compatta nel simbolo `+` in alto a destra;
  - clic su `+` mostra/nasconde le sezioni.
- Switch lingua `it/en` fisso in basso a destra, tono grigio chiaro.
- Il testo `isidoro pannitti architetto` resta usato come riferimento home.

## 3) Regole scroll orizzontale
- Nelle pagine indice di sezione (architecture/photo) usare scroll orizzontale nativo.
- Usare CSS `scroll-snap` (nessun controllo scroll via JavaScript).
- Compatibilità attesa:
  - mobile: swipe nativo;
  - desktop: trackpad/scrollbar/shift+wheel.
- Home architecture (IT + EN):
  - cover con altezza uniforme;
  - larghezza adattiva al formato immagine;
  - ritaglio consentito.

## 4) Regole routing IT/EN
- IT:
  - `/` (architecture)
  - `/photo`
  - `/info`
- EN:
  - `/en` (architecture)
  - `/en/photo`
  - `/en/info`
- Schede progetto:
  - IT: `/projects/[slug]`
  - EN: `/en/projects/[slug]`
- Lo switch lingua mantiene la sezione corrente.

## 5) Struttura progetti
- Collection: `src/content/featuredProjects/*.md`
- Template schede:
  - `src/pages/projects/[slug].astro`
  - `src/pages/en/projects/[slug].astro`
- Struttura dettaglio progetto:
  - cover + didascalia cover;
  - teaser testuale (allineato a destra della cover);
  - griglia immagini verticale a due colonne (sinistra/destra) con colonna centrale vuota.
- Didascalie delle immagini interne alla scheda: non visualizzate.
- Stato home attuale:
  - con scheda: `25.4`, `25.6`, `26.2`;
  - senza scheda, con stato inline: `25.2`, `25.3`, `26.1`.

## 6) Cosa non modificare senza richiesta esplicita
- Font globale, gerarchia tipografica e tono minimale.
- Posizionamento fisso di header e switch lingua.
- Comportamento menu mobile con `+`.
- Comportamento hide/show dello switch lingua durante scroll.
- Naming sezione `photo` (non `photographie`).
- Regole di routing IT/EN.
- Struttura delle URL progetto.

## 7) Posizione e nomenclatura cartelle/file
- Layout principale:
  - `src/layouts/SectionsLayout.astro`
- Pagine principali:
  - IT: `src/pages/index.astro`, `src/pages/photo.astro`, `src/pages/info.astro`
  - EN: `src/pages/en/index.astro`, `src/pages/en/photo.astro`, `src/pages/en/info.astro`
- Schede progetto:
  - IT: `src/pages/projects/[slug].astro`
  - EN: `src/pages/en/projects/[slug].astro`
- Dati progetto:
  - `src/content/featuredProjects/<slug>.md`
- Asset cover architecture:
  - `public/images/architecture/*-cover.*`
- Asset progetto:
  - `public/images/projects/<slug>/`
- Testi teaser (priorità):
  - IT: `public/images/projects/<slug>/teaser-it.txt`
  - EN: `public/images/projects/<slug>/teaser-en.txt`
  - fallback: `teaser.txt`, poi `teaser.txt.rtf`
- Bio info:
  - `public/content/info-bio-it.txt`
  - `public/content/info-bio-en.txt`

## 8) Workflow commit
1. Applicare modifiche solo ai file richiesti.
2. Verificare stato con `git status`.
3. Stage selettivo (`git add <file...>`), evitando file non pertinenti.
4. Commit con messaggio chiaro e specifico.
5. Push su `origin/main` solo dopo conferma richiesta o istruzione esplicita.
6. In chat operative lunghe, mantenere aggiornato `PROJECT_STATE.md` come snapshot.
