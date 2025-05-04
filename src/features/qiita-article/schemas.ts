import { z } from 'zod';

export const qiitaArticleSchema = z.object({
  comments_count: z.number(),
  created_at: z.string().datetime({ offset: true }),
  id: z.string(),
  likes_count: z.number(),
  private: z.boolean(),
  title: z.string(),
  updated_at: z.string().datetime({ offset: true }),
  url: z.string().url(),
});

export type QiitaArticle = z.infer<typeof qiitaArticleSchema>;

export const getQiitaArticlesSchema = z.array(qiitaArticleSchema);
