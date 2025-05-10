import { z } from 'zod';

export const blogArticleSchema = z.object({
  content: z.string(),
  createdAt: z.date(),
  description: z.string(),
  file: z.string(),
  slug: z.string(),
  thumbnail: z
    .string()
    .nullable()
    .transform((value) =>
      value === '' || value == null ? '/images/article/fallback.webp' : value,
    ),
  title: z.string(),
  updatedAt: z.date(),
});

export type BlogArticle = z.infer<typeof blogArticleSchema>;
