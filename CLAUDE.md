# GelpaTech — blog di tecnologia di Alessio

Rispondi sempre in **italiano**. Il sito è pubblico: https://gelpa87.github.io/Gelpatech/

## Com'è fatto

- Astro 6, sito statico. Si pubblica da solo su GitHub Pages a ogni push su `main` (`.github/workflows/pubblica.yml`).
- Articoli: un file Markdown per articolo in `src/content/articoli/` (il nome del file è l'indirizzo). Campi:
  `titolo`, `riassunto`, `data`, `argomento` (`stampa-3d`, `domotica`, `ai`, `recensioni`), facoltativi `aggiornato`,
  `copertina` + `copertinaAlt` (immagine accanto al file), `bozza: true` (si vede solo con `npm run dev`).
- Riquadri da usare nel Markdown (righe vuote attorno al contenuto):
  - `<details class="tecnico"><summary>Titolo</summary>…</details>` — le parti tecniche, chi inizia le salta;
  - `<aside class="intoppo">…</aside>` — cosa è andato storto e come si è risolto;
  - `<div class="pro-contro">…</div>` — pro e contro nelle recensioni.
- Argomenti e colori dei nastri: `src/data/argomenti.ts`. Grafica: `DESIGN.md` e `src/styles/global.css`
  (skill `impeccable` in `.agents/skills/impeccable`, contesto in `PRODUCT.md`, direzione in
  `.impeccable/surfaces/`).
- Prova: `npm install`, `npm run build`, `npm run preview` (http://localhost:4321/Gelpatech/).

## Regole

- **Esperienza di Alessio e informazioni generali si tengono distinte.** Le guide possono parlare anche di cose che
  Alessio non ha provato (altri filamenti, dispositivi, tecniche), con informazioni verificate su fonti affidabili e
  scritte come tali («in genere», «secondo il produttore»), mai in prima persona. In prima persona va solo quello che
  Alessio ha fatto davvero: niente prove, numeri, stampe o prodotti inventati. Le recensioni restano solo di prodotti
  che ha usato.
- Gli articoli si scrivono con lui (idee, foto e appunti suoi) e li rilegge prima di pubblicarli: finché non l'ha
  fatto, `bozza: true`.
- **Il repo è pubblico**: mai dati della casa (codici, token, indirizzi, IP, nomi delle reti, posizione, il backup di
  Home Assistant). Le configurazioni di HA si mostrano ripulite.
- Prima di fare commit: `npm run build` senza errori.
