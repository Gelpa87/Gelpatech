import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const articoli = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/articoli' }),
  schema: ({ image }) =>
    z.object({
      titolo: z.string(),
      riassunto: z.string(),
      data: z.coerce.date(),
      aggiornato: z.coerce.date().optional(),
      argomento: z.enum(['stampa-3d', 'domotica', 'ai', 'recensioni']),
      copertina: image().optional(),
      copertinaAlt: z.string().optional(),
      bozza: z.boolean().default(false),
    }),
});

export const collections = { articoli };
