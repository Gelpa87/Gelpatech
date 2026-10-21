---
titolo: 'Domotica: cos''è, come funziona e a cosa serve'
riassunto: Un'introduzione per chi parte da zero. Cosa vuol dire avere una casa «smart», quali pezzi servono e come li metto insieme io con Home Assistant.
data: 2026-10-21
argomento: domotica
bozza: true
---

Domotica vuol dire, semplicemente, una casa in cui luci, prese, tapparelle, riscaldamento ed elettrodomestici si
possono comandare da lontano e, soprattutto, far lavorare da soli. Non è più roba da ville di lusso: oggi si parte
con una lampadina o una presa da pochi euro e si aggiunge un pezzo alla volta.

In questo articolo spiego le basi. Negli articoli successivi racconterò nel dettaglio come è fatta la domotica di
casa mia.

## Cosa si può fare

Le cose che una casa domotica sa fare si dividono più o meno in tre gruppi:

- **Comandare a distanza**: accendere una luce dal telefono, controllare se hai chiuso il garage quando sei già in
  ufficio, alzare le tapparelle dal divano.
- **Sapere cosa succede**: sensori che misurano temperatura e umidità, che si accorgono di una finestra aperta, di
  una perdita d'acqua o di qualcuno che entra in una stanza, e ti avvisano.
- **Automatizzare**: è la parte più interessante. Si stabiliscono delle regole, e la casa le segue da sola: «quando
  entro in corridoio di notte, accendi la luce al minimo», «quando la lavatrice ha finito, mandami un avviso», «quando
  esco e non c'è nessuno, spegni tutto».

## I pezzi che servono

Una casa domotica è fatta di tre tipi di pezzi.

**I dispositivi.** Sono le cose che fanno qualcosa o misurano qualcosa: lampadine, prese, interruttori, sensori,
termostati, elettrodomestici collegati.

**Il modo in cui comunicano.** I dispositivi devono parlare tra loro e con il resto della casa, e non lo fanno
tutti nello stesso modo. I più comuni sono:

- **Wi-Fi**: usa la rete di casa, non servono altri apparecchi. Comodo per pochi dispositivi, ma con tanti la rete
  si affolla, e di solito ognuno funziona tramite il server del suo produttore su internet.
- **Zigbee**: una rete a parte, pensata apposta per la domotica. I dispositivi consumano pochissimo (molti sensori
  vanno a batteria per mesi o anni) e quelli collegati alla corrente fanno da ripetitori per gli altri. Serve una
  piccola chiavetta o un «hub» che faccia da centrale.
- **Matter**: uno standard più recente, nato dall'accordo tra i grandi marchi (Apple, Google, Amazon e altri)
  proprio per far funzionare insieme dispositivi di marche diverse. Sulla carta, un dispositivo Matter funziona con
  qualsiasi sistema compatibile.

**Il cervello.** È il programma che mette insieme tutti i dispositivi, li mostra in un'unica app e fa girare le
automazioni. Può essere l'app di un produttore, un assistente vocale come Alexa o Google Home, oppure un sistema
dedicato come Home Assistant.

## Perché io uso Home Assistant

A casa mia il cervello è [Home Assistant](https://www.home-assistant.io), un programma gratuito e open source che
gira su un piccolo computer sempre acceso dentro casa. Collega tra loro dispositivi Zigbee e Matter, gli
elettrodomestici e anche gli orologi Awtrix che uso per mostrare avvisi e informazioni.

I motivi per cui lo consiglio, in generale, sono tre:

- **Mette d'accordo tutte le marche.** Invece di avere un'app per le lampadine, una per le prese e una per la
  lavatrice, tutto finisce in un unico posto.
- **Funziona anche senza internet.** Gran parte delle automazioni gira dentro casa, quindi non dipende dal server
  di qualcun altro e risponde più in fretta.
- **I dati restano a casa.** Quello che succede tra le tue mura non deve per forza passare dal cloud di un'azienda.

In cambio chiede un po' più di impegno all'inizio rispetto all'app di un produttore: va installato, configurato e
ogni tanto aggiornato.

<details class="tecnico">
<summary>Come si installa Home Assistant</summary>

Il modo più semplice è comprare un Home Assistant Green, il piccolo computer venduto dallo stesso progetto con il
programma già installato. In alternativa si può installare Home Assistant OS su un Raspberry Pi, su un mini PC o in
una macchina virtuale. Per i dispositivi Zigbee serve in più una chiavetta Zigbee da collegare al computer; per
Matter, a seconda dei dispositivi, può servire una chiavetta Thread. La guida ufficiale passo per passo è su
[home-assistant.io](https://www.home-assistant.io/installation/).

</details>

## Da dove cominciare

Il consiglio che vale per tutti è partire in piccolo: una presa o una lampadina smart e un sensore, e una prima
automazione semplice. Si impara molto di più facendo funzionare bene una cosa sola che comprando dieci dispositivi
tutti insieme. E prima di comprare, conviene controllare che il dispositivo sia compatibile con il sistema che si
vuole usare: per Home Assistant, Zigbee e Matter sono di solito le scelte più sicure.
