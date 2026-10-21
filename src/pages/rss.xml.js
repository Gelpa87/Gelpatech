import rss from '@astrojs/rss';
import { articoliPubblicati, url } from '../utils';

export async function GET(context) {
  const articoli = await articoliPubblicati();
  return rss({
    title: 'GelpaTech',
    description: 'Stampa 3D, domotica e AI provate davvero a casa: anche quello che è andato storto.',
    site: new URL(url(), context.site),
    customData: '<language>it-it</language>',
    items: articoli.map((a) => ({
      title: a.data.titolo,
      description: a.data.riassunto,
      pubDate: a.data.data,
      link: url(`articoli/${a.id}`),
    })),
  });
}
