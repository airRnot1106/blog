import { z } from 'zod';

export const getZennArticleListByUsernameResponseSchema = z.object({
  articles: z.array(
    z.object({
      id: z.number(),
      post_type: z.literal('Article'),
      title: z.string(),
      slug: z.string(),
      comments_count: z.number(),
      liked_count: z.number(),
      bookmarked_count: z.number(),
      body_letters_count: z.number(),
      article_type: z.enum(['tech', 'idea']),
      emoji: z.string().emoji(),
      is_suspending_private: z.boolean(),
      published_at: z.union([z.string().pipe(z.coerce.date()), z.date()]),
      body_updated_at: z.union([z.string().pipe(z.coerce.date()), z.date()]),
      source_repo_updated_at: z.union([
        z.string().pipe(z.coerce.date()),
        z.date(),
        z.null(),
      ]),
      pinned: z.boolean(),
      path: z.string(),
      user: z.object({
        id: z.number(),
        username: z.string(),
        name: z.string(),
        avatar_small_url: z.string().url(),
      }),
      publication: z
        .object({
          id: z.number(),
          name: z.string(),
          display_name: z.string(),
          avatar_small_url: z.string().url(),
          avatar_url: z.string().url(),
          pro: z.boolean(),
          avatar_registered: z.boolean(),
        })
        .nullable(),
    }),
  ),
  next_page: z.number().nullable(),
});

export type GetZennArticleListByUsernameResponse = z.infer<
  typeof getZennArticleListByUsernameResponseSchema
>;

export const getZennArticleOgpByUrlResponseSchema = z.object({
  html: z.object({
    title: z.string(),
    description: z.string().nullable(),
  }),
  ogp: z.object({
    'og:url': z.tuple([z.string().url()]),
    'og:title': z.tuple([z.string()]),
    'og:image': z.tuple([z.string().url()]),
    'og:type': z.tuple([z.literal('article')]),
    'og:site_name': z.tuple([z.literal('Zenn')]),
  }),
});

export type GetZennArticleOgpByUrlResponse = z.infer<
  typeof getZennArticleOgpByUrlResponseSchema
>;

export const getZennArticleWithOgpListByUsernameResponseSchema = z.object({
  articles: z.array(
    getZennArticleListByUsernameResponseSchema.shape.articles.element.extend({
      html: getZennArticleOgpByUrlResponseSchema.shape.html,
      ogp: getZennArticleOgpByUrlResponseSchema.shape.ogp,
    }),
  ),
  next_page: getZennArticleListByUsernameResponseSchema.shape.next_page,
});

export type GetZennArticleWithOgpListByUsernameResponse = z.infer<
  typeof getZennArticleWithOgpListByUsernameResponseSchema
>;

export const zennArticleSchema = z.object({
  id: z.number(),
  title: z.string(),
  slug: z.string(),
  url: z.string().url(),
  imageUrl: z.string().url(),
  publishedAt: z.date(),
  updatedAt: z.date(),
});

export type ZennArticle = z.infer<typeof zennArticleSchema>;
