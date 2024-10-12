import { z } from 'astro:content';

export const zennArticleOgpResponseSchema = z.object({
  html: z.object({
    title: z.string(),
    description: z.string().nullable(),
  }),
  ogp: z.object({
    'og:title': z.tuple([z.string()]),
    'og:url': z.tuple([z.string().url()]),
    'og:image': z.tuple([z.string().url()]),
    'og:type': z.tuple([z.enum(['article', 'book', 'scrap'])]),
    'og:site_name': z.tuple([z.string()]),
  }),
});

export type ZennArticleOgpResponse = z.infer<
  typeof zennArticleOgpResponseSchema
>;

const datetimeSchema = z
  .string()
  .regex(
    /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}[+-]\d{2}:\d{2}$/,
    'Invalid datetime format',
  );

export const zennArticleResponseSchema = z.object({
  id: z.number(),
  post_type: z.literal('Article'),
  title: z.string(),
  slug: z.string(),
  comments_count: z.number(),
  liked_count: z.number(),
  body_letters_count: z.number(),
  article_type: z.enum(['tech', 'ideas']),
  emoji: z.string().emoji(),
  is_suspending_private: z.boolean(),
  published_at: datetimeSchema,
  body_updated_at: datetimeSchema,
  source_repo_updated_at: datetimeSchema,
  pinned: z.boolean(),
  path: z.string(),
  user: z.object({
    id: z.number(),
    username: z.string(),
    name: z.string(),
    avatar_small_url: z.string().url(),
  }),
  publication: z.null(),
});

export type ZennArticleResponse = z.infer<typeof zennArticleResponseSchema>;

export const zennArticleListResponseSchema = z.object({
  articles: zennArticleResponseSchema.array(),
  next_page: z.number().nullable(),
});

export type ZennArticleListResponse = z.infer<
  typeof zennArticleListResponseSchema
>;
