import { z } from 'zod';

export const zennArticleSchema = z.object({
  id: z.number(),
  title: z.string(),
  slug: z.string(),
  comments_count: z.number(),
  liked_count: z.number(),
  is_suspending_private: z.boolean(),
  published_at: z.string().datetime({ offset: true }),
  body_updated_at: z.string().datetime({ offset: true }),
  path: z.string(),
});

export type ZennArticle = z.infer<typeof zennArticleSchema>;

export const getZennArticlesSchema = z.object({
  articles: z.array(zennArticleSchema),
});
