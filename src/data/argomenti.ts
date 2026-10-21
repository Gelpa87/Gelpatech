export type Argomento = 'stampa-3d' | 'domotica' | 'ai' | 'recensioni';

export const argomenti: Record<Argomento, { nome: string; nastro: string; descrizione: string }> = {
  'stampa-3d': {
    nome: 'Stampa 3D',
    nastro: 'rosso',
    descrizione: 'La Bambu Lab P2S di casa: stampe, impostazioni, filamenti e quello che è andato storto.',
  },
  domotica: {
    nome: 'Domotica',
    nastro: 'blu',
    descrizione: 'Home Assistant, Zigbee e Matter, automazioni e dispositivi provati a casa.',
  },
  ai: {
    nome: 'AI',
    nastro: 'verde',
    descrizione: 'Come uso Claude per progettare, programmare e gestire la casa.',
  },
  recensioni: {
    nome: 'Recensioni',
    nastro: 'nero',
    descrizione: 'Prodotti provati davvero: pro, contro e se vale la spesa.',
  },
};

export const ordineArgomenti = Object.keys(argomenti) as Argomento[];
