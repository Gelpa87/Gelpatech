---
titolo: 'PLA, PETG, ABS, ASA e TPU: quale filamento usare'
riassunto: Una guida per chi inizia ai filamenti più comuni, a cosa servono e come conservarli. Con quello che ho imparato usando PLA e PETG sulla mia P2S.
data: 2026-10-21
argomento: stampa-3d
---

Il filamento è il «filo» di plastica che la stampante scioglie e deposita strato dopo strato. Si compra in bobine,
di solito da un chilo, e non è tutto uguale: ogni materiale ha i suoi pregi, i suoi difetti e il suo livello di
difficoltà. Scegliere quello giusto conta quasi quanto la stampante.

In questa guida trovi i cinque filamenti più diffusi. Io finora ho usato solo PLA e PETG, con bobine Sunlu e Bambu
Lab, sulla mia [Bambu Lab P2S con AMS](../recensione-bambu-lab-p2s/): per quei due racconto anche come mi sono
trovato, per gli altri riporto le informazioni generali.

## PLA: quello da cui partire

Il PLA è il filamento più facile da stampare ed è quello con cui quasi tutti cominciano. Si stampa a temperature
basse, non fa odore, si deforma poco mentre si raffredda e costa poco. In cambio è un materiale rigido e un po'
fragile, e soprattutto teme il caldo: un oggetto in PLA lasciato in macchina d'estate o vicino a un termosifone può
ammorbidirsi e deformarsi.

È perfetto per oggetti decorativi, prototipi, modellismo e tutto quello che resta in casa e non deve sopportare
sforzi o calore.

## PETG: più resistente, poco più difficile

Il PETG è il passo successivo. È più robusto e un po' più elastico del PLA, quindi si spezza meno, regge meglio il
calore e l'umidità e va bene anche per pezzi che stanno all'esterno o che devono lavorare, come supporti e staffe.

È poco più difficile da stampare: tende a lasciare dei fili sottili tra una parte e l'altra della stampa e assorbe
l'umidità dell'aria più del PLA, quindi conviene tenerlo ben asciutto. Su alcuni piatti di stampa lisci aderisce
così tanto che si consiglia di passare prima un velo di colla stick, che qui serve a staccarlo, non ad attaccarlo.

## ABS e ASA: per il caldo e per l'esterno

L'ABS è la plastica di molti oggetti di uso comune: è resistente agli urti e al calore, ma è il più difficile dei
cinque. Mentre si raffredda tende a ritirarsi e a staccarsi dal piatto, per questo va stampato in una stampante
chiusa, e durante la stampa rilascia vapori e odore: la stanza va aerata.

L'ASA è un parente stretto dell'ABS, con lo stesso modo di stampare, ma resiste molto meglio al sole. È la scelta
tipica per i pezzi che restano all'aperto tutto l'anno.

## TPU: il filamento morbido

Il TPU è flessibile, simile alla gomma: si usa per guarnizioni, piedini antiscivolo, custodie per telefoni. Va
stampato piano, e per la sua morbidezza non passa bene nei sistemi che cambiano filamento in automatico. Secondo
Bambu Lab l'AMS 2 Pro non supporta il TPU generico, solo quello fatto apposta per l'AMS: il TPU normale va caricato
dal porta bobina esterno.

## Tenere i filamenti asciutti

Quasi tutti i filamenti assorbono l'umidità dell'aria, chi più chi meno. Un filamento umido stampa peggio: fa più
fili, scoppietta mentre esce dall'ugello e lascia superfici ruvide o con bollicine. Per evitarlo:

- conserva le bobine che non usi in sacchetti chiusi con le bustine di gel di silice;
- se un filamento comincia a stampare male, asciugalo in un essiccatore per filamenti, oppure nell'AMS se ce l'hai.

L'AMS 2 Pro, quello della mia P2S, può asciugare i filamenti da solo. Una cosa però l'ho scoperta usandolo: mentre
la stampante sta stampando, l'AMS non riesce ad asciugarli, a meno di dargli un'alimentazione a parte.

<details class="tecnico">
<summary>Bobine Bambu Lab e di altre marche nell'AMS</summary>

Le bobine Bambu Lab hanno un'etichetta elettronica (RFID): l'AMS la legge, imposta da solo materiale, colore e
profilo di stampa in Bambu Studio e stima quanto filamento resta sulla bobina. Le bobine di altre marche, come
Sunlu, funzionano lo stesso, ma tipo di filamento e colore vanno scelti a mano e il residuo non viene tenuto. Le bobine di cartone, che alcune marche usano, nell'AMS possono dare problemi: in quel
caso si può stampare un adattatore da mettere attorno alla bobina.

</details>

## Da dove cominciare

Se hai appena comprato la tua prima stampante, parti dal PLA: perdona quasi tutto e ti permette di imparare senza
sprecare troppo. Quando ti serve un pezzo più resistente, o che sta fuori casa, passa al PETG. ABS, ASA e TPU
lasciali per quando avrai un motivo preciso per usarli.

E se hai una Bambu Lab con l'AMS, il mio consiglio è di usare le bobine Bambu Lab. Non perché le altre non vadano:
le Sunlu, per esempio, le uso anch'io. Ma le Bambu Lab si integrano con tutto il resto: l'AMS legge l'etichetta della
bobina, riconosce da solo il filamento e tiene il conto di quanto ne è rimasto, così vedi prima di partire se basta
per la stampa.
