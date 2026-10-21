---
name: GelpaTech
description: Blog di tecnologia provata a casa, errori compresi
colors:
  fondo: "#eef0ef"
  plastica: "#d6dad9"
  plastica-scura: "#c3c8c7"
  cassetto: "#e4e7e6"
  fessura: "#b9bfbe"
  inchiostro: "#17191a"
  inchiostro-2: "#485053"
  linea: "#c9cecd"
  nota: "#e3e7e6"
  nastro-rosso: "#b3122a"
  nastro-blu: "#1d4e9e"
  nastro-verde: "#1c6b3f"
  nastro-nero: "#1c1c1e"
  rilievo: "#f3f3f0"
typography:
  display:
    fontFamily: "Archivo Variable, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(2rem, 1.3rem + 2.6vw, 3.1rem)"
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Archivo Variable, Helvetica Neue, Arial, sans-serif"
    fontSize: "1.6rem"
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: "-0.02em"
  body:
    fontFamily: "Source Serif 4 Variable, Iowan Old Style, Georgia, serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.65
  label:
    fontFamily: "Barlow Condensed, Arial Narrow, sans-serif"
    fontSize: "0.95rem"
    fontWeight: 600
    lineHeight: 1
    letterSpacing: "0.14em"
rounded:
  nastro: "2px"
  codice: "6px"
  cassetto: "6px"
  cassettiera: "10px"
components:
  nastro:
    backgroundColor: "{colors.nastro-nero}"
    textColor: "{colors.rilievo}"
    typography: "{typography.label}"
    rounded: "{rounded.nastro}"
    padding: "0.38em 0.75em 0.34em 0.85em"
  nastro-stampa-3d:
    backgroundColor: "{colors.nastro-rosso}"
  nastro-domotica:
    backgroundColor: "{colors.nastro-blu}"
  nastro-ai:
    backgroundColor: "{colors.nastro-verde}"
  cassetto:
    backgroundColor: "{colors.cassetto}"
    textColor: "{colors.inchiostro-2}"
    rounded: "{rounded.cassetto}"
    padding: "1rem 0.75rem 1.6rem"
---

# Design System: GelpaTech

## Overview

**Creative North Star: "La cassettiera d'officina"**

Ogni cosa provata sta in un cassetto con la sua etichetta Dymo. La cornice (testata, cassettiera degli argomenti,
nastri, riquadri) appartiene al mondo dell'officina: plastica grigia, fessure incassate, lettere in rilievo su nastro
colorato. La colonna di lettura invece è calma: serif leggibile, buon contrasto, 68 caratteri di riga.

Rifiuta il blog tecnologico scuro con accento al neon e il diario color crema con titoli serif.

**Key Characteristics:**
- Nastri Dymo come unica decorazione, ognuno con un compito (marchio, argomento, tipo di riquadro).
- Un colore per argomento, sempre lo stesso.
- Tema chiaro e scuro dalla preferenza del sistema.

## Colors

Neutri della plastica della cassettiera più quattro colori di nastro, uno per argomento.

### Primary
- **Rosso nastro** (#b3122a): Stampa 3D, riquadro «Cosa è andato storto», selezione del testo.
- **Blu nastro** (#1d4e9e): Domotica, riquadro «Per chi ne sa di più», link e anello di fuoco (in scuro #8fb1ee).
- **Verde nastro** (#1c6b3f): AI.
- **Nero nastro** (#1c1c1e): Recensioni e marchio GelpaTech.

### Neutral
- **Fondo** (#eef0ef; scuro #141617): pagina.
- **Plastica** (#d6dad9; scuro #1f2324): testata, piè di pagina, corpo della cassettiera.
- **Cassetto** (#e4e7e6; scuro #2a2f31): frontali dei cassetti.
- **Fessura** (#b9bfbe; scuro #121415): incasso dell'etichetta e maniglia.
- **Inchiostro** (#17191a; scuro #e6e9e8) e **Inchiostro 2** (#485053; scuro #a4acae): testo e testo secondario.
- **Nota** (#e3e7e6; scuro #1d2122): fondo dei dettagli tecnici e del codice in linea.

### Named Rules
**La regola del nastro.** Un colore di nastro dice sempre l'argomento: non si usa per decorare.

## Typography

**Display Font:** Archivo Variable (con Helvetica Neue, Arial)
**Body Font:** Source Serif 4 Variable (con Georgia)
**Label Font:** Barlow Condensed 600, solo sui nastri

**Character:** grottesco solido per i titoli, serif da lettura per il testo, condensato maiuscolo come le lettere
punzonate del Dymo.

### Hierarchy
- **Display** (700, clamp(2rem → 3.1rem), 1.15): titolo della home e degli articoli.
- **Headline** (700, 1.6rem): h2 degli articoli.
- **Title** (700, 1.25–1.45rem): h3 e titoli nell'elenco articoli.
- **Body** (400, 1.125rem, 1.65): testo, al massimo 68ch.
- **Label** (600, 0.78–0.95rem, 0.14em, maiuscolo): solo nei nastri.

## Layout

Contenitore di 72rem con 1rem di margine per lato. La colonna di testo sta a sinistra, larga al massimo 68ch. La
cassettiera ha quattro cassetti affiancati e passa a due per riga sotto i 52rem. Più spazio sopra i titoli che sotto.

## Elevation & Depth

Profondità fisica della plastica: luce sopra e ombra sotto (`inset`), ombre morbide con spostamento verticale.

### Shadow Vocabulary
- **Nastro** (`inset 0 1px 0 rgb(255 255 255 / .14), inset 0 -1px 0 rgb(0 0 0 / .3), 0 1px 1.5px rgb(0 0 0 / .25)`).
- **Cassetto a riposo** (`0 1px 1px rgb(0 0 0 / .14)`), **sfilato** (`0 10px 18px -8px rgb(0 0 0 / .35)`).
- **Fessura** (`inset 0 1px 2px rgb(0 0 0 / .3)`).

## Shapes

Angoli quasi vivi sui nastri (2px), 6px su cassetti e riquadri, 10px sul corpo della cassettiera. Le maniglie sono
pillole incassate. Nessun bordo colorato laterale.

## Components

### Nastro (componente firma)
Lettere chiare in rilievo su nastro colorato, maiuscolo condensato, spaziatura 0.14em. Il marchio nella testata è
ruotato di -1°. Come link si schiarisce al passaggio.

### Cassetto
Frontale con fessura incassata che contiene il nastro, conteggio degli articoli, maniglia. Al passaggio e alla
pressione si sfila verso chi guarda (translateY 3px, scale 1.015, ease-out esponenziale 0.45s). L'argomento aperto ha un
contorno di 2px.

### Riquadri dell'articolo
- `<details class="tecnico">`: fondo Nota, nastro blu «Per chi ne sa di più», freccia che ruota.
- `<aside class="intoppo">`: fondo tinto di rosso al 9%, nastro rosso «Cosa è andato storto».
- `<div class="pro-contro">`: due colonne per le recensioni.

### Navigation
Archivo 600, sottolineatura di 2px sulla voce attiva.

## Do's and Don'ts

### Do:
- **Do** usare i nastri solo per marchio, argomenti e tipi di riquadro.
- **Do** tenere la colonna di testo calma: niente nastri o texture dentro i paragrafi.
- **Do** dare a ogni nuovo argomento un colore di nastro suo.

### Don't:
- **Don't** usare il carattere dei nastri per titoli o testo.
- **Don't** mettere etichette sopra i titoli.
- **Don't** aggiungere fondi a griglia, sfumature o effetto vetro.
