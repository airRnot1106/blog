import { z } from 'zod';
import { R2_MEDIA_BASE_URL } from '../../libs/media';

export const blogArticleSchema = z.object({
  audio: z
    .string()
    .nullable()
    .transform((value) =>
      value != null ? `${R2_MEDIA_BASE_URL}/${value}` : null,
    ),
  content: z.string(),
  createdAt: z.date(),
  description: z.string(),
  file: z.string(),
  slug: z.string(),
  thumbnail: z
    .string()
    .nullable()
    .transform((value) =>
      value === '' || value != null
        ? `/images/contents/${value}`
        : '/images/article/fallback.webp',
    ),
  title: z.string(),
  updatedAt: z.date(),
});

export type BlogArticle = z.infer<typeof blogArticleSchema>;
