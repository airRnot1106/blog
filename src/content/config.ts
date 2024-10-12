import { defineCollection, z } from 'astro:content';

const article = defineCollection({
  schema: z.object({
    title: z.string(),
    subTitle: z.string().optional(),
    description: z.string().optional(),
    publishedAt: z.date(),
    updatedAt: z.date().nullable(),
  }),
});

export const collections = {
  post: article,
};
