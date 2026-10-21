import type { CollectionEntry } from 'astro:content';
import { ordineArgomenti, type Argomento } from './data/argomenti';

export function contaPerArgomento(articoli: CollectionEntry<'articoli'>[]): Record<Argomento, number> {
  const conteggi = Object.fromEntries(ordineArgomenti.map((k) => [k, 0])) as Record<Argomento, number>;
  for (const a of articoli) conteggi[a.data.argomento]++;
  return conteggi;
}
