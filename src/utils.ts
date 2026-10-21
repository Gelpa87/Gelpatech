import { getCollection, type CollectionEntry } from 'astro:content';

/** Indirizzo interno con la base del sito (/gelpatech/ su GitHub Pages). */
export function url(percorso = ''): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const pulito = percorso.replace(/^\//, '');
  return `${base}/${pulito}${pulito && !pulito.endsWith('/') && !pulito.includes('.') ? '/' : ''}`;
}

/** Articoli pubblicati, dal più recente. Le bozze si vedono solo con `npm run dev`. */
export async function articoliPubblicati(): Promise<CollectionEntry<'articoli'>[]> {
  const tutti = await getCollection('articoli', ({ data }) => import.meta.env.DEV || !data.bozza);
  return tutti.sort((a, b) => b.data.data.getTime() - a.data.data.getTime());
}

const formatoData = new Intl.DateTimeFormat('it-IT', { day: 'numeric', month: 'long', year: 'numeric' });
export const dataLunga = (d: Date) => formatoData.format(d);

export function minutiLettura(testo = ''): number {
  const parole = testo.replace(/```[\s\S]*?```/g, '').split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(parole / 200));
}
