import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const announcements = defineCollection({
  loader: glob({ pattern: '**/*.md', base: 'src/content/announcements' }),
  schema: z.object({
    title: z.string(),
    date: z.date(),
    image: z.string().optional(),
  }),
});

const about = defineCollection({
  loader: glob({ pattern: '**/*.md', base: 'src/content/about' }),
  schema: z.object({
    title: z.string(),
  }),
});

const pastors = defineCollection({
  loader: glob({ pattern: '**/*.md', base: 'src/content/pastors' }),
  schema: z.object({
    name: z.string(),
    title: z.string(),
    photo: z.string().optional(),
    order: z.number().default(0),
  }),
});

export const collections = { announcements, about, pastors };
